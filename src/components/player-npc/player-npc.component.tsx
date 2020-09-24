import {IonBadge} from "@ionic/react";
import React, {useEffect} from 'react';
import {Player} from "../../shared/models/player.model";
import CardComponent from "../card/card.component";
import {connect} from "react-redux";
import {ApplicationState} from "../../shared/models/application.state.model";
import {CardState} from "../../shared/models/card.state.model";
import '../../theme/styles/players.scss';
import {mapDispatchApp} from "../../shared/maps";
import {MapDispatchApp} from "../../shared/models/map.model";
import {playerNpcService} from "../../shared/services/player-npc.service";
import {cardService} from "../../shared/services/card.service";

type PlayerNpcProps = {
    player: Player,
    cardState: CardState
} & MapDispatchApp;

const PlayerNpcComponent = (props: PlayerNpcProps) => {

    function discard() {
        let player = {...props.player};
        const cardDiscard = playerNpcService.getDiscard(player.cards);
        props.discard(cardDiscard.id);
    }

    useEffect(() => {
        // action here
        if (props.cardState.activePlayer === props.player.id) {
            setTimeout(() => {
                if (playerNpcService.checkCardDiscard(props.player.cards, props.cardState.discards[0])) {
                    props.stealDiscards(props.cardState.activePlayer);
                } else {
                    props.stealMount(props.cardState.activePlayer);
                }
                discard();
                if (playerNpcService.checkCloseTurn(props.player.cards, props.cardState.turn)) {
                    props.closeTurn();
                } else {
                    props.nextTurn();
                }
            }, 1000);
        }
    }, [props.cardState.activePlayer]);

    function getClassName(): string {
        let className = 'player-container ';
        if (props.cardState.activePlayer !== props.player.id) {
            className += 'player-disabled';
        }

        return className;
    }

    return (
        <div className={getClassName()}>
            <IonBadge color={props.cardState.activePlayer === props.player.id ? 'primary' : 'medium'}>
                {props.player.name}
            </IonBadge>
            <div>
                {props.player.cards.map((card, i) =>
                    <CardComponent key={i} card={card} npc={true} cover={props.cardState.turn !== -1}/>
                )}
            </div>
        </div>
    );
};

function mapStateToProps(state: ApplicationState) {
    return state;
}

export default connect(mapStateToProps, mapDispatchApp)(PlayerNpcComponent);
