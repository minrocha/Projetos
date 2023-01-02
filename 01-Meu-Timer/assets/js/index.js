const meuEscopo = () => {
    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')

    let segundos = 0
    let minutos = 0
    let horas = 0

    let tempo;

    let estadoTempo = false

    // exibeHora()

    iniciar.addEventListener('click', function(event) {
        (estadoTempo) ?  true:iniciaTempo()
    })

    pausar.addEventListener('click', function(event) {
        (estadoTempo) ?  pausaTempo():true
    })

    zerar.addEventListener('click', function(event) {
        zeraTempo()
    })

    const iniciaTempo = () => {
        estadoTempo = true
        tempo = setInterval(function() {
            segundos++
            relogio.classList.remove('tempo-amarelo')
            relogio.classList.remove('tempo-vermelho')
            relogio.innerHTML = `${zeroAEsquerda(horas)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundos)}`
            if(segundos==60) incrementaMinutos()
        }, 1000)
    }

    const incrementaMinutos = () => {
        minutos++
        segundos = 0
        console.log(minutos)
        if(minutos==60) incrementaHoras()
    }

    const incrementaHoras = () => {
        horas++
        minutos = 0
        segundos = 0
        if(horas==24) {
            horas = 0
        }
    }

    const pausaTempo = () => {
        estadoTempo = false
        setTimeout(function() {
            clearInterval(tempo)
            relogio.classList.remove('tempo-vermelho')
            relogio.classList.add('tempo-amarelo')
        },0)
    }

    const zeraTempo = () => {
        estadoTempo = false
        segundos = 0
        minutos = 0
        horas = 0
        setTimeout(function() {
            clearInterval(tempo)
            relogio.classList.remove('tempo-amarelo')
            relogio.classList.add('tempo-vermelho')
            relogio.innerHTML = `${zeroAEsquerda(horas)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundos)}`
        },0)
    }

    function zeroAEsquerda (num) {
        return num >= 10 ? num : `0${num}`
    }

    function formataHora() {
        return `${zeroAEsquerda(horas)}`
    }
}

meuEscopo()