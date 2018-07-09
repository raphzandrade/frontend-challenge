const http = require('http');
const port = 4200 ;
const ip = 'localhost';
let fs = require('fs');
let path = require('path');

const server = http.createServer((req, res) => {

    var filePath = '.' + req.url;
    if (filePath == './') {
        filePath = './index.min.html';
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.svg': 'application/image/svg+xml'
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    const routes = [];
    routes['/'] = fs.readFileSync('./index.min.html', 'utf8')
    routes['/api/cabeleireiros'] = fs.readFileSync('./responses/cabeleireiros/fields.json', 'utf8');
    routes['/api'] = fs.readFileSync('./pages/api/api.html');
    routes['/404'] = '404! - Not Found';

    if (routes[req.url]){
        res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
        res.end(routes[req.url]);
    } else if (extname) {
        // tratamento para requisições de assets
        fs.readFile(filePath, function(error, content) {
            if (error) {
                res.writeHead(500);
                res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                res.end();
            }
            else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    } else {
        res.end(routes['/404']);
    }
    
}).listen(port, ip, function () {
    console.log(`Server running at http://${ip}:${port}`);
});
