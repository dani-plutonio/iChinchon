import {Player} from "../models/player.model";
import {PLAYER} from "../constants/player.constant";
import {CardState} from "../models/card.state.model";

class PlayerService {
    players: Player[] = [];

    generatePlayers() {
        this.players = [];
        for (let i = 0; i < PLAYER.sizePlayers; i++) {
            this.players.push(new Player(PLAYER.defaultName + (i + 1), !(i === PLAYER.sizePlayers - 1), i + 1));
        }
    }

    getPlayerActive(cardState: CardState): Player | undefined {
        return cardState.players.find(p => p.id === cardState.activePlayer);
    }

    getPlayerById(cardState: CardState, idPlayer: number): Player | undefined {
        return cardState.players.find(p => p.id === idPlayer);
    }

    getIndexPlayerById(cardState: CardState, idPlayer: number): number {
        return cardState.players.findIndex(p => p.id === idPlayer);
    }
}

export const playerService = new PlayerService();
