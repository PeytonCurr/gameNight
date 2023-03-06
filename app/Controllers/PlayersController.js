import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";



export class PlayersController {

    constructor() {
        console.log(appState.players);
        appState.players.forEach(p => p.greeting())
        this.DrawPlayers()
    }

    // addPlayer() {
    //     try {
    //         window.event.preventDefault()
    //         const form = window.event.target
    //         console.log(FormData.name);
    //         form.reset()
    //     } catch (e) {
    //         console.error('[addPlayer]', error)
    //     }
    // }

    increaseScore(name) {
        playersService.increaseScore(name)
        this.DrawPlayers()
    }

    decreaseScore(name) {
        playersService.decreaseScore(name)
        this.DrawPlayers()
    }

    DrawPlayers() {
        let players = appState.players
        let template = ``

        players.forEach(player => template += player.PlayerTemplate)
        document.getElementById(`player`).innerHTML = template
    }
}