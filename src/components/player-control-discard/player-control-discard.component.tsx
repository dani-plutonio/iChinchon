import {IonButton} from "@ionic/react";
import React from 'react';
import {connect} from "react-redux";
import {mapDispatchApp, mapStateToPropsApp} from "../../shared/maps";
import {CardState} from "../../shared/models/card.state.model";
import {MapDispatchApp} from "../../shared/models/map.model";
import {cardService} from "../../shared/services/card.service";
import {playerService} from "../../shared/services/player.service";

type PlayerControlDiscardProps = { cardState: CardState } & MapDispatchApp;

const PlayerControlDiscardComponent = (props: PlayerControlDiscardProps) => {

    function isDisabled(): boolean {
        return props.cardState.discarded || cardService.isCardMount(props.cardState) || cardService.isCardDiscards(props.cardState) || !props.cardState.activeCard;
    }

    function discard() {
        props.discard(props.cardState.activeCard);

    }

    return (
        <IonButton disabled={isDisabled()} slot={'start'} onClick={discard} >Descartar</IonButton>
    );
};

export default connect(mapStateToPropsApp, mapDispatchApp)(PlayerControlDiscardComponent);
