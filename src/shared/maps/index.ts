import {ApplicationState} from "../models/application.state.model";
import {
    closeTurn, discard, nextTurn,
    setActiveCard,
    setActivePlayer, setCardsPlayer,
    setDiscard,
    setDiscarded, setInitialPlay,
    setMount,
    setPlayers, setStealed,
    setTurn, stealDiscards, stealMount
} from "../redux/actions";
import {Card} from "../models/card.model";
import {Player} from "../models/player.model";

export function mapStateToPropsApp(state: ApplicationState) {
    return state;
}

export const mapDispatchApp = (dispatch: any) => ({
    setMount: (cards: Card[]) => dispatch(setMount(cards)),
    setPlayers: (players: Player[]) => dispatch(setPlayers(players)),
    setDiscard: (cards: Card[]) => dispatch(setDiscard(cards)),
    setActiveCard: (idCard: number) => dispatch(setActiveCard(idCard)),
    setActivePlayer: (idPlayer: number) => dispatch(setActivePlayer(idPlayer)),
    setTurn: (idTurn: number) => dispatch(setTurn(idTurn)),
    closeTurn: () => dispatch(closeTurn()),
    setDiscarded: (discarded: boolean) => dispatch(setDiscarded(discarded)),
    setStealed: (stealed: boolean) => dispatch(setStealed(stealed)),
    setCardsPlayer: (cards: Card[], idPlayer: number) => dispatch(setCardsPlayer(cards, idPlayer)),
    setInitialPlay: (mount: Card[], discards: Card[], players: Player[], idTurn: number, idPlayerActive: number) => dispatch(setInitialPlay(mount, discards, players, idTurn, idPlayerActive)),
    nextTurn: () => dispatch(nextTurn()),
    stealMount: (idPlayer: number) => dispatch(stealMount(idPlayer)),
    stealDiscards: (idPlayer: number) => dispatch(stealDiscards(idPlayer)),
    discard: (idCard: number) => dispatch(discard(idCard)),
})
