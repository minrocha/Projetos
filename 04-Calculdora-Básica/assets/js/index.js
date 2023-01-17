function criaCalculadora() {
    return {
        display: document.querySelector('.display'),


        get inicia() {
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        clearDisplay() {
            this.display.value = ''
        },

        delDisplay() {
            this.display.value = this.display.value.slice(0, -1)
        },
        
        realizaConta() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if(!conta) {
                    alert('Conta Inválida')
                    return
                }

                this.display.value = String(conta)
            } catch(e) {
                alert('Conta Inválida')
                return
            }
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')) {
                    this.delDisplay()
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            }.bind(this))
        }
    }
}

const calculadora = criaCalculadora()

calculadora.inicia
console.log(calculadora.display)