import {IonButton} from "@ionic/react";
import React from 'react';
import {connect} from "react-redux";
import {mapDispatchApp, mapStateToPropsApp} from "../../shared/maps";
import {CardState} from "../../shared/models/card.state.model";
import {MapDispatchApp} from "../../shared/models/map.model";
import {cardService} from "../../shared/services/card.service";

type PlayerControlStealProps = { cardState: CardState } & MapDispatchApp;

const PlayerControlStealComponent = (props: PlayerControlStealProps) => {

    function isDisabled(): boolean {
        return props.cardState.stealed || (!cardService.isCardMount(props.cardState) && !cardService.isCardDiscards(props.cardState))
            || (props.cardState.discarded && cardService.isCardDiscards(props.cardState))
    }

    function steal() {
        if (cardService.isCardMount(props.cardState)) {
            props.stealMount(props.cardState.activePlayer);
        } else {
            props.stealDiscards(props.cardState.activePlayer);
        }
    }

    return (
        <IonButton disabled={isDisabled()} slot={'start'} onClick={() => steal()}>Robar</IonButton>
    );
};

export default connect(mapStateToPropsApp, mapDispatchApp)(PlayerControlStealComponent);
