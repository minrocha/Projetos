const meuEscopo = () => {
   const relogio = document.querySelector('.relogio')
   const iniciar = document.querySelector('.iniciar')
   const pausar = document.querySelector('.pausar')
   const zerar = document.querySelector('.zerar')
   
   let segundos = 0
   let timer
   let estadoTimer = false
   
   document.addEventListener('click', function(e) {
        const el = e.target

        if(el.classList.contains('iniciar')) {
            (estadoTimer) ?  true:iniciaRelogio()
        }

        if(el.classList.contains('pausar')) {
            if(estadoTimer) {
                relogio.classList.remove('tempo-vermelho')    
                relogio.classList.add('tempo-amarelo')
            }
            estadoTimer = false     
            clearInterval(timer)
        }

        if(el.classList.contains('zerar')) {
            relogio.classList.remove('tempo-amarelo')
            relogio.classList.add('tempo-vermelho')
            estadoTimer = false
            clearInterval(timer)
            segundos = 0
            relogio.innerHTML = '00:00:00'
        }
   })

   function crisHoraDosSegundos(segundos) {
        const data = new Date(segundos*1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }

    function iniciaRelogio() {
        relogio.classList.remove('tempo-amarelo')
        relogio.classList.remove('tempo-vermelho')
        estadoTimer = true
        timer = setInterval(function() {
            segundos++
            relogio.innerHTML = crisHoraDosSegundos(segundos)
        }, 1000)
    }
}

meuEscopo()