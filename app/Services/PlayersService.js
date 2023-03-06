import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"



class PlayersService {

    increaseScore(name) {
        let player = appState.players.find(p => p.name == name)
        if (player.score < appState.maxScore)
            player.score++
    }

    decreaseScore(name) {
        let player = appState.players.find(p => p.name == name)
        if (player.score > appState.minScore)
            player.score--
    }
}

export const playersService = new PlayersService()