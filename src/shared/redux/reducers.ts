import {
    CardActionTypes,
    CardState,
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
} from "../models/card.state.model";
import {playerService} from "../services/player.service";
import {cardService} from "../services/card.service";

const initialState: CardState = {
    mount: [],
    discards: [],
    players: [],
    activeCard: 0,
    activePlayer: 0,
    turn: 0,
    discarded: false,
    stealed: false
}

export function cardReducer(state = initialState, action: CardActionTypes) {
    switch (action.type) {
        case SET_MOUNT:
            return {
                ...state, mount: action.mount
            };
        case SET_DISCARD:
            return {
                ...state, discards: action.discards
            };
        case SET_PLAYERS:
            return {
                ...state, players: action.players
            };
        case SET_ACTIVE_CARD:
            return {
                ...state, activeCard: action.idCard
            };
        case SET_ACTIVE_PLAYER:
            return {
                ...state, activePlayer: action.idPlayer
            };
        case SET_TURN:
            return {
                ...state, turn: action.idTurn
            };
        case CLOSE_TURN:
            return {
                ...state, turn: -1
            };
        case SET_DISCARDED:
            return {
                ...state, discarded: action.discarded
            };
        case SET_STEALED:
            return {
                ...state, stealed: action.stealed
            };
        case SET_CARDS_PLAYER:
            const indexPlayer = state.players.findIndex(p => p.id === action.idPlayer);
            if (indexPlayer > -1) {
                state.players[indexPlayer].cards = action.cards;
            }
            return state;
        case SET_INITIAL_PLAY:
            return {
                ...state,
                mount: action.mount,
                discards: action.discards,
                players: action.players,
                turn: action.idTurn,
                activePlayer: action.idPlayerActive
            }
        case NEXT_TURN:
            let activePlayer = 0;
            if (playerService.getIndexPlayerById(state, state.activePlayer) === state.players.length - 1) {
                activePlayer = state.players[0].id;
            } else {
                activePlayer = state.players[playerService.getIndexPlayerById(state, state.activePlayer) + 1].id;
            }
            return {
                ...state,
                turn: state.turn + 1,
                activeCard: 0,
                stealed: false,
                discarded: false,
                activePlayer: activePlayer
            }
        case STEAL_MOUNT:
            let playerStealMount = playerService.getPlayerById(state, action.idPlayer);
            let indexStealMount = playerService.getIndexPlayerById(state, action.idPlayer);
            let cardStealedMount = state.mount.splice(0, 1);
            if (playerStealMount) {
                playerStealMount.cards = playerStealMount.cards.concat(cardStealedMount);
                state.players[indexStealMount] = playerStealMount;
            }

            return {
                ...state,
                mount: state.mount,
                activeCard: 0,
                stealed: true
            }
        case STEAL_DISCARDS:
            let playerStealDiscards = playerService.getPlayerById(state, action.idPlayer);
            let indexStealDiscards = playerService.getIndexPlayerById(state, action.idPlayer);
            let cardStealedDiscards = state.discards.splice(0, 1);
            if (playerStealDiscards) {
                playerStealDiscards.cards = playerStealDiscards.cards.concat(cardStealedDiscards);
                state.players[indexStealDiscards] = playerStealDiscards;
            }

            return {
                ...state,
                discards: state.discards,
                activeCard: 0,
                stealed: true
            }
        case DISCARD:
            let playerDiscard = playerService.getPlayerById(state, state.activePlayer);
            if (playerDiscard) {
                const indexCard = cardService.getIndexCardById(action.idCard, playerDiscard.cards);
                let cardDiscarded = playerDiscard.cards.splice(indexCard, 1);
                state.discards = cardDiscarded.concat(state.discards);
                const indexPlayerDiscarded = playerService.getIndexPlayerById(state, state.activePlayer);
                state.players[indexPlayerDiscarded].cards = playerDiscard.cards;
            }

            return {
                ...state,
                discards: state.discards,
                activeCard: 0,
                discarded: true
            }
        default:
            return state;
    }
}
