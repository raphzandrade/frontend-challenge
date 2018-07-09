
describe("Test", () => {
    it("should work", () => {
        expect(true).toBe(true);
    });
});

describe('InsertFields function', () => {

    beforeAll( () => {
        element = {
            label: 'Qual será o serviço?',
            type: 'big_text',
        }
        tab = document.createElement('div');
    });

    it("should insert the correct label", () => {
        insertField(element, tab);
        expect(tab.getElementsByTagName('label')[0].innerText).toBe('Qual será o serviço?');
    });

    it("should create the right kind of input", () => {
        insertField(element, tab);
        expect(tab.getElementsByTagName('input')[0].type).toBe('text');
    });
    
    it("should insert the right class in the input", () => {
        insertField(element, tab);
        expect(tab.getElementsByTagName('input')[0].classList).toMatch('bigText');
    })

    // todo: create more cases to fully describe this function
});

describe('ChangeTabs function', () => {

    beforeAll( () => {
        requestFields = document.createElement('div');
        requestFields.classList.add('active');
        requestFields.setAttribute('id', 'requestFields');

        userFields = document.createElement('div');
        userFields.setAttribute('id', 'userFields');
    });

    it('requestFields should lose active class', () => {
        changeTabs(requestFields, userFields);
        expect(requestFields.classList).toMatch('');
    });

    it('userFields should gain active class', () => {
        changeTabs(requestFields, userFields);
        expect(userFields.classList[0]).toMatch('active');
    });
});

describe('error function', () => {
    it('should write an error message', () => {
        error();
        
        errorMsg = document.getElementsByTagName('h1')[0];

        expect(errorMsg.innerText).toMatch('Houve um erro ao carregar a página. Por favor tente novamente mais tarde');
    });
});