meuEscopo()

function meuEscopo() {
    const inputTarefa = document.querySelector('.input-tarefa')
    const btnTarefa = document.querySelector('.btn-tarefa')
    const tarefas = document.querySelector('.tarefas')

    btnTarefa.addEventListener('click', function() {
        if(!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
        limpaInput()
    })

    inputTarefa.addEventListener('keypress', function(e) {
        if(e.keyCode === 13) {
            if(!inputTarefa.value) return
            criaTarefa(inputTarefa.value)
            limpaInput()
        }
    })

    document.addEventListener('click', function(e) {
        const el = e.target
        console.log(el)
        if(el.classList.contains('apagar')) {
            el.parentElement.remove()
            salvarTarefas()
        }
    })

    function limpaInput() {
        inputTarefa.value = ''
        inputTarefa.focus()
    }

    function criaLi() {
        const li = document.createElement('li')
        return li
    }

    function insereTextoLi(li, textoInput) {
        li.innerText = textoInput
    }

    function adicionarTarefa(li) {
        tarefas.appendChild(li)
    }

    function criaBotaoApagar(li) {
        li.innerText += ' '
        const botaoApagar = document.createElement('button')
        botaoApagar.innerText = 'Apagar'
        botaoApagar.setAttribute('class', 'apagar')
        li.appendChild(botaoApagar)
    }

    function criaTarefa(textoInput) {
        const li = criaLi()
        insereTextoLi(li, textoInput)
        adicionarTarefa(li)
        criaBotaoApagar(li)
        salvarTarefas()
    }

    function salvarTarefas() {
        const liTarefas = tarefas.querySelectorAll('li')
        const listaDeTarefas = []
        for(let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText
            tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
            listaDeTarefas.push(tarefaTexto)
        }

        const tarefasJSON = JSON.stringify(listaDeTarefas)
        localStorage.setItem('tarefas', tarefasJSON)
    }

    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas')
        const listaDeTarefas = JSON.parse(tarefas)

        for(let tarefas of listaDeTarefas) {
            criaTarefa(tarefas)
        }
    }
    adicionaTarefasSalvas()
}