import {Card} from "./card.model";
import {Player} from "./player.model";

export interface MapDispatchApp {
    setMount: (cards: Card[]) => void;
    setDiscard:(cards: Card[]) => void;
    setPlayers:(players: Player[]) => void;
    setActiveCard:(idCard: number) => void;
    setActivePlayer:(idPlayer: number) => void;
    setTurn:(idTurn: number) => void;
    closeTurn:() => void;
    setDiscarded:(discarded: boolean) => void;
    setCardsPlayer: (cards: Card[], idPlayer: number) => void;
    setStealed: (stealed: boolean) => void;
    setInitialPlay: (mount: Card[], discards: Card[], players: Player[], idTurn: number, idPlayerActive: number) => void;
    nextTurn:() => void;
    stealMount:(idPlayer: number) => void;
    stealDiscards:(idPlayer: number) => void;
    discard:(idCard: number) => void;
}
