function start() {
    document.querySelector('#new-game').addEventListener('click', () => {
        const classNewGameBox = document.querySelector('.new-game-setup').className
        // Toggle hidden box to display it or hide it
        if(classNewGameBox === 'new-game-setup') {
            // To hide the box
            document.querySelector('.new-game-setup').className = 'hidden new-game-setup'
            document.querySelector('#button-continue').className = 'hidden'
            document.querySelector('#join-game').disabled = false
        } else {
            // To show the box
            document.querySelector('.new-game-setup').className = 'new-game-setup'
            document.querySelector('#button-continue').className = ''
            document.querySelector('#join-game').disabled = true
        }
    })
    document.querySelector('#join-game').addEventListener('click', () => {
        const classJoinGameBox = document.querySelector('.join-game-setup').className
        // Toggle hidden box to display it or hide it
        if(classJoinGameBox === 'join-game-setup') {
            document.querySelector('.new-game-setup').className = 'hidden new-game-setup'
            document.querySelector('.join-game-setup').className = 'hidden join-game-setup'
            document.querySelector('#button-continue').className = 'hidden'
            document.querySelector('#new-game').disabled = false
        } else {
            document.querySelector('.new-game-setup').className = 'new-game-setup'
            document.querySelector('.join-game-setup').className = 'join-game-setup'
            document.querySelector('#button-continue').className = ''
            document.querySelector('#new-game').disabled = true
        }
    })
}
start()