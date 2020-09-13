import {Card} from "./card.model";
import {Player} from "./player.model";


export const SET_MOUNT = 'SET_MOUNT';
export const SET_DISCARD = 'SET_DISCARD';
export const SET_PLAYERS = 'SET_PLAYERS';
export const SET_ACTIVE_CARD = 'SET_ACTIVE_CARD';
export const SET_ACTIVE_PLAYER = 'SET_ACTIVE_PLAYER';
export const SET_TURN = 'SET_TURN';
export const CLOSE_TURN = 'CLOSE_TURN';
export const SET_DISCARDED = 'SET_DISCARDED';
export const SET_STEALED = 'SET_STEALED';
export const SET_CARDS_PLAYER = 'SET_CARDS_PLAYER';
export const SET_INITIAL_PLAY = 'SET_INITIAL_PLAY';
export const NEXT_TURN = 'NEXT_TURN';
export const STEAL_MOUNT = 'STEAL_MOUNT';
export const STEAL_DISCARDS = 'STEAL_DISCARDS';
export const DISCARD = 'DISCARD';


interface SetMountAction {
    type: typeof SET_MOUNT
    mount: Card[]
}

interface SetDiscardAction {
    type: typeof SET_DISCARD
    discards: Card[]
}

interface SetPlayerAction {
    type: typeof SET_PLAYERS
    players: Player[]
}

interface SetActiveCardAction {
    type: typeof SET_ACTIVE_CARD
    idCard: number
}

interface SetActivePlayerAction {
    type: typeof SET_ACTIVE_PLAYER
    idPlayer: number
}

interface SetTurnAction {
    type: typeof SET_TURN
    idTurn: number
}

interface CloseTurnAction {
    type: typeof CLOSE_TURN
}

interface SetDiscardedAction {
    type: typeof SET_DISCARDED
    discarded: boolean
}

interface SetStealedAction {
    type: typeof SET_STEALED
    stealed: boolean
}

interface SetCardsPlayerAction {
    type: typeof SET_CARDS_PLAYER
    cards: Card[]
    idPlayer: number
}

interface SetInitialPlayAction {
    type: typeof SET_INITIAL_PLAY
    mount: Card[]
    discards: Card[]
    players: Player[]
    idTurn: number
    idPlayerActive: number
}

interface NextTurnAction {
    type: typeof NEXT_TURN
}

interface StealMountAction {
    type: typeof STEAL_MOUNT
    idPlayer: number
}

interface StealDiscardsAction {
    type: typeof STEAL_DISCARDS
    idPlayer: number
}

interface DiscardAction {
    type: typeof DISCARD
    idCard: number
}

export interface CardState {
    mount: Card[]
    discards: Card[]
    players: Player[]
    activeCard: number
    activePlayer: number
    turn: number
    discarded: boolean
    stealed: boolean
}

export type CardActionTypes =
    SetMountAction |
    SetDiscardAction |
    SetPlayerAction |
    SetActiveCardAction |
    SetActivePlayerAction |
    SetTurnAction |
    CloseTurnAction |
    SetDiscardedAction |
    SetCardsPlayerAction |
    SetStealedAction |
    SetInitialPlayAction |
    NextTurnAction |
    StealMountAction |
    StealDiscardsAction |
    DiscardAction;

