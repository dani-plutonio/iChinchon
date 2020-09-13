import {
    CardActionTypes,
    CLOSE_TURN,
    DISCARD,
    NEXT_TURN,
    SET_ACTIVE_CARD,
    SET_ACTIVE_PLAYER,
    SET_CARDS_PLAYER,
    SET_DISCARD,
    SET_DISCARDED,
    SET_INITIAL_PLAY,
    SET_MOUNT,
    SET_PLAYERS,
    SET_STEALED,
    SET_TURN,
    STEAL_DISCARDS,
    STEAL_MOUNT
} from '../models/card.state.model'
import {Card} from "../models/card.model";
import {Player} from "../models/player.model";

export function setMount(cards: Card[]): CardActionTypes {
    return {
        type: SET_MOUNT,
        mount: cards
    }
}

export function setDiscard(cards: Card[]): CardActionTypes {
    return {
        type: SET_DISCARD,
        discards: cards
    }
}

export function setPlayers(players: Player[]): CardActionTypes {
    return {
        type: SET_PLAYERS,
        players: players
    }
}

export function setActiveCard(idCard: number): CardActionTypes {
    return {
        type: SET_ACTIVE_CARD,
        idCard: idCard
    }
}

export function setActivePlayer(idPlayer: number): CardActionTypes {
    return {
        type: SET_ACTIVE_PLAYER,
        idPlayer: idPlayer
    }
}

export function setTurn(idTurn: number): CardActionTypes {
    return {
        type: SET_TURN,
        idTurn: idTurn
    }
}

export function closeTurn(): CardActionTypes {
    return {
        type: CLOSE_TURN
    }
}

export function setDiscarded(discarded: boolean): CardActionTypes {
    return {
        type: SET_DISCARDED,
        discarded: discarded
    }
}

export function setCardsPlayer(cards: Card[], idPlayer: number): CardActionTypes {
    return {
        type: SET_CARDS_PLAYER,
        cards: cards,
        idPlayer: idPlayer
    }
}

export function setStealed(stealed: boolean): CardActionTypes {
    return {
        type: SET_STEALED,
        stealed: stealed
    }
}

export function setInitialPlay(mount: Card[], discards: Card[], players: Player[], idTurn: number, idPlayerActive: number): CardActionTypes {
    return {
        type: SET_INITIAL_PLAY,
        mount: mount,
        discards: discards,
        players: players,
        idTurn: idTurn,
        idPlayerActive: idPlayerActive
    }
}

export function nextTurn(): CardActionTypes {
    return {
        type: NEXT_TURN
    }
}

export function stealMount(idPlayer: number): CardActionTypes {
    return {
        type: STEAL_MOUNT,
        idPlayer: idPlayer
    }
}

export function stealDiscards(idPlayer: number): CardActionTypes {
    return {
        type: STEAL_DISCARDS,
        idPlayer: idPlayer
    }
}

export function discard(idCard: number): CardActionTypes {
    return {
        type: DISCARD,
        idCard: idCard
    }
}
