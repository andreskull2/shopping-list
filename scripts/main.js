/* scripts/main.js

const form = document.querySelector('.form-novo-item');
const input = document.querySelector('#inputItem');
const lista = document.querySelector('.lista-itens');
const toast = document.querySelector('.toast-removido');
const btnFecharToast = document.querySelector('.btn-fechar-toast');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valor = input.value.trim();

    if (valor !== '') {
        criarItem(valor);
        input.value = '';
        input.focus();
    }
});

function criarItem(texto) {
    const id = `item-${Date.now()}`;

    const li = document.createElement('li');
    li.innerHTML = `
        <div class="item-container">
            <div class="checkbox-wrapper">
                <input type="checkbox" id="${id}">
                <label for="${id}"></label>
                <span class="item-label">${texto}</span>
            </div>
            <button class="btn-trash">
                <img src="assets/icons/trash.svg" alt="Remover item">
            </button>
        </div>            
    `;

    const botaoTrash = li.querySelector('.btn-trash');
    botaoTrash.addEventListener('click', () => {
        li.remove();
        mostrarToast();
    });

    lista.appendChild(li);
}

function mostrarToast() {
    toast.classList.add('mostrar');

    setTimeout(() => {
        toast.classList.remove('mostrar');
    }, 3000);
}

btnFecharToast.addEventListener('click', () => {
    toast.classList.remove('mostrar');
});*/

const form = document.querySelector('.form-novo-item');
const input = document.querySelector('#inputItem');
const lista = document.querySelector('.lista-itens');
const toast = document.querySelector('.toast-removido');
const btnFecharToast = document.querySelector('.btn-fechar-toast');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valor = input.value.trim();

    // Validação: deve conter ao menos uma letra (a-z ou A-Z)
    const temLetra = /[a-zA-Z]/.test(valor);

    if (valor === '') {
        alert('Por favor, digite um nome para o item.');
        input.focus();
        return;
    }

    if (!temLetra) {
        alert('O nome do item precisa conter pelo menos uma letra.');
        input.focus();
        return;
    }

    criarItem(valor);
    input.value = '';
    input.focus();
});

function criarItem(texto) {
    const id = `item-${Date.now()}`;

    const li = document.createElement('li');
    li.innerHTML = `
        <div class="item-container">
            <div class="checkbox-wrapper">
                <input type="checkbox" id="${id}">
                <label for="${id}"></label>
                <span class="item-label">${texto}</span>
            </div>
            <button class="btn-trash">
                <img src="assets/icons/trash.svg" alt="Remover item">
            </button>
        </div>            
    `;

    const botaoTrash = li.querySelector('.btn-trash');
    botaoTrash.addEventListener('click', () => {
        li.remove();
        mostrarToast();
    });

    lista.appendChild(li);
}

function mostrarToast() {
    toast.classList.add('mostrar');

    setTimeout(() => {
        toast.classList.remove('mostrar');
    }, 3000);
}

btnFecharToast.addEventListener('click', () => {
    toast.classList.remove('mostrar');
});


