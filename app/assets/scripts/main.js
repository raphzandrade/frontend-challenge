'use strict'

function build() {

    var request = new XMLHttpRequest();
    
    request.open('GET', 'http://localhost:4200/api/cabeleireiros', true);
    
    request.onload = function () {
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            formBuilder(data);
        } else {
            error();
        }
    };
    
    request.send();
};


function formBuilder(data) {
    // create the divs for the tabs
    var body = document.getElementsByTagName('body')[0];
    var home = document.createElement('div');
    home.setAttribute('id', 'home');
    var container = document.createElement('div');
    container.classList.add('container');
    var form = document.createElement('form');
    form.setAttribute('id', 'form');
    
    container.appendChild(form);
    home.appendChild(container);
    body.appendChild(home);

    // create the tabs for both forms
    const requestFields = document.createElement('div');
    requestFields.setAttribute('id', 'requestFields');
    requestFields.classList.add('active');
    form.appendChild(requestFields);

    const userFields = document.createElement('div');
    userFields.setAttribute('id', 'userFields');
    form.appendChild(userFields);

    data._embedded.request_fields.forEach(element => {
        insertField(element, requestFields);
    });

    data._embedded.user_fields.forEach(element => {
        insertField(element, userFields);
    });

    
    const requestSubmitButton = document.createElement('button');
    requestSubmitButton.type = 'button';
    requestSubmitButton.addEventListener('click', () => {
        changeTabs(requestFields, userFields);
    });
    requestSubmitButton.textContent = 'Buscar Profissionais';
    requestFields.appendChild(requestSubmitButton);

    const userSubmitButton = document.createElement('button');
    userSubmitButton.type = 'submit';
    userSubmitButton.textContent = 'Solicitar serviço';
    userFields.appendChild(userSubmitButton);

};

function insertField(element, tab) {
    // logic to append fields to the form

    const inputWrapper = document.createElement('div');
    inputWrapper.setAttribute('class', 'ninjaInput');

    // creates the label of the field
    const label = document.createElement('label');
    label.innerText = element.label;
    inputWrapper.appendChild(label);
    
    // creates the proper input with the proper configuration
    var input;

    switch (element.type) {
        case 'enumerable':
            input = document.createElement('select');

            const mask = document.createElement('option');
            mask.text = element.mask;
            mask.value = "";
            input.add(mask);

            Object.keys(element.values).forEach(value => {
                const option = document.createElement('option');
                option.text = element.values[value];
                option.value = element.values[value];
                input.add(option);
            });
            break;

        case 'big_text': 
            input = document.createElement('input');
            input.type = 'text';
            input.classList.add('bigText');
            break;

        case 'small_text': 
            input = document.createElement('input');

            input.classList.add('smallText');
            break;

    
        case 'cep':
            input = document.createElement('input');

            // insert function to mask here
            break;

        case 'email':
            input = document.createElement('input');

            input.setAttribute('type', 'email');
            break;

        case 'phone':
            input = document.createElement('input');

            // insert function to mask here
            break;
    };

    if (element.name) { 
        input.name = element.name;
    }

    if (element.placeholder) {
        input.placeholder = element.placeholder;
    };

    if (element.required) {
        var errorMsg = document.createElement('span');
        errorMsg.classList.add('errorMsg');
        errorMsg.textContent = 'Este campo é requerido'
        inputWrapper.appendChild(errorMsg);

        input.required = true;

        input.addEventListener('blur', () => {
            showValidationErrorMsg(input, errorMsg);
        });
    };

    inputWrapper.appendChild(input);
    tab.appendChild(inputWrapper);
};

function changeTabs(activeTab, newTab) {
    activeTab.classList.remove('active'); 
    newTab.classList.add('active');
};

function error() {
    var form = document.createElement('form');

    var error = document.createElement('h1');
    error.textContent = 'Houve um erro ao carregar a página. Por favor tente novamente mais tarde';
    
    form.appendChild(error);
    
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(error)
};

function showValidationErrorMsg(input, errorMsg) {
    if (!input.checkValidity()) {
        errorMsg.classList.add('invalid');
        input.classList.add('invalid');
    } else {
        errorMsg.classList.remove('invalid');
        input.classList.remove('invalid');
    }
};