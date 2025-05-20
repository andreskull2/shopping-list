const form = document.querySelector('.form-novo-item');
const input = document.querySelector('#inputItem');
const lista = document.querySelector('.lista-itens');
const toast = document.querySelector('.toast-removido');
const btnFecharToast = document.querySelector('.btn-fechar-toast');

// Carrega os itens do localStorage quando a página abre
window.addEventListener('DOMContentLoaded', carregarLista);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valor = input.value.trim();

    // Validação simples para evitar só números ou símbolos
    if (!validarTexto(valor)) {
        alert('Por favor, insira um nome válido para o item.');
        return;
    }

    criarItem(valor, false);
    input.value = '';
    input.focus();

    salvarLista();
});

function validarTexto(texto) {
    // Verifica se tem ao menos uma letra (ignora espaços)
    return /[a-zA-ZÀ-ú]/.test(texto);
}

function criarItem(texto, concluido) {
    const id = `item-${Date.now()}`;

    const li = document.createElement('li');
    li.innerHTML = `
        <div class="item-container">
            <div class="checkbox-wrapper">
                <input type="checkbox" id="${id}" ${concluido ? 'checked' : ''}>
                <label for="${id}"></label>
                <span class="item-label">${texto}</span>
            </div>
            <button class="btn-trash">
                <img src="assets/icons/trash.svg" alt="Remover item">
            </button>
        </div>            
    `;

    // Atualiza visual do item riscado quando o checkbox muda
    const checkbox = li.querySelector('input[type=checkbox]');
    checkbox.addEventListener('change', () => {
        salvarLista();
    });

    const botaoTrash = li.querySelector('.btn-trash');
    botaoTrash.addEventListener('click', () => {
        li.remove();
        mostrarToast();
        salvarLista();
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

function salvarLista() {
    const itens = [];
    lista.querySelectorAll('li').forEach(li => {
        const texto = li.querySelector('.item-label').textContent;
        const concluido = li.querySelector('input[type=checkbox]').checked;
        itens.push({ texto, concluido });
    });

    localStorage.setItem('listaCompras', JSON.stringify(itens));
}

function carregarLista() {
    const itensSalvos = localStorage.getItem('listaCompras');
    if (itensSalvos) {
        const itens = JSON.parse(itensSalvos);
        itens.forEach(item => {
            criarItem(item.texto, item.concluido);
        });
    }
}


