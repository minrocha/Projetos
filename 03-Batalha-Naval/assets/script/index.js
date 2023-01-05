const view = {
    displayMessage: function(msg) {
        const messageArea = document.querySelector('#messageArea')
        messageArea.innerText = msg

    },
    displayHit: function(location) {
        const cell = document.getElementById(location)
        cell.setAttribute('class', 'hit')
    },
    displayMiss: function(location) {
        const cell = document.getElementById(location)
        cell.setAttribute('class', 'miss')
    }
}

const ships = [
    {locations: ['10', '20', '30'], hits: ['', '', '']},
    {locations: ['32', '33', '34'], hits: ['', '', '']},
    {locations: ['63', '64', '65'], hits: ['', '', '']}
]

const model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3, 
    shipsSunk: 0,
    ships: [
        {locations: [0, 0, 0], hits: ['', '', '']},
        {locations: [0, 0, 0], hits: ['', '', '']},
        {locations: [0, 0, 0], hits: ['', '', '']}
    ],

    fire: function(guess) {
        for(let i=0; i<this.numShips; i++) {
            let ship = this.ships[i]
            let index = ship.locations.indexOf(guess)
            if(index >= 0) {
                ship.hits[index] = 'hit'
                view.displayHit(guess)
                view.displayMessage("HIT!")
                if(this.isShunk(ship)) {
                    view.displayMessage("Você afundou o meu navio!")
                    this.shipsSunk++
                }
                return false
            }
        }
        view.displayMiss(guess)
        view.displayMessage("You missed.")
        return false
    },
    isShunk: function(ship) {
        for(let i=0; i<this.shipLength; i++) {
            if(ship.hits[i] != 'hit') {
                return false
            }
        }
        return true
    },
    generateShipLocations: function() {
        let locations
        for(let i=0; i<this.numShips; i++) {
            do {
                locations = this.generateShip()
                console.log(locations)
            } while (this.collision(locations))
            this.ships[i].locations = locations
        }
    },
    generateShip: function() {
        let direction = Math.floor(Math.random() * 2)
        let row
        let col
        if(direction===1) {
            row = Math.floor(Math.random() * this.boardSize)
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength))
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength))
            col = Math.floor(Math.random() * this.boardSize) 
        }
        let newShipLocations = []
        for(let i=0; i<this.shipLength; i++) {
            if(direction===1) {
                newShipLocations.push(row + '' + (col + i))
            } else {
                newShipLocations.push((row + i) + '' + col)
            }
        }
        return newShipLocations
    },
    collision: function(locations) {
        for(let i=0; i<this.numShips; i++) {
            let ship = model.ships[i]
            for(let j=0; j<locations.length; j++) {
                if(ship.locations.indexOf(locations[j]) >=0) {
                    return true
                }
            }
        }
        return false
    }
}

const controller = {
    guesses: 0,
    processGuess: function(guess) {
        const location = parseGuess(guess)
        if(location) {
            this.guesses++
            const hit = model.fire(location)
            if(hit && model.shipsSunk === model.numShips) {
                view.displayMessage(`VocÊ afundou todos os navios de guerra, em ${this.guesses} disparos.`)
            }
        }
    }
}

window.onload = init

function parseGuess(guess) {
    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    if(guess===null || guess.length!==2) {
        alert('Ops, por favor insira uma letra e um número.')
    } else {
        firstChar = guess.charAt(0)
        const row = alfabeto.indexOf(firstChar)
        const column = guess.charAt(1)

        if(isNaN(row) || isNaN(column)) {
            alert('Ops, isso no tabuleiro.')
        } else if(row<0 || row>=model.boardSize || column<0 || column>=model.boardSize) {
            alert('Ops, isso está fora do tabuleiro.')
        } else {
            return row + column
        }
    }
    return null
}

function init() {
    const fireButton = document.querySelector('#fireButton')
    fireButton.onclick = handleFireButton
    const guessInput = document.querySelector('#guessInput')
    guessInput.onkeypress = handleKeyPress
    
    model.generateShipLocations()
}

function handleFireButton() {
    const guessInput = document.querySelector('#guessInput')
    const guess = guessInput.value
    controller.processGuess(guess)
    guessInput.value = ''
    guessInput.focus()
}

function handleKeyPress(e) {
    const fireButton = document.querySelector('#fireButton')
    if(e.keyCode===13) {
        fireButton.click()
        guessInput.value = ''
        guessInput.focus()
        return false
    }
}
