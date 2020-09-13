import {IonButton} from "@ionic/react";
import React from 'react';
import {connect} from "react-redux";
import {mapDispatchApp, mapStateToPropsApp} from "../../shared/maps";
import {CardState} from "../../shared/models/card.state.model";
import {MapDispatchApp} from "../../shared/models/map.model";
import {playerService} from "../../shared/services/player.service";

type PlayerControlTurnProps = { cardState: CardState } & MapDispatchApp;

const PlayerControlTurnComponent = (props: PlayerControlTurnProps) => {

    function isDisabled(): boolean {
        return !props.cardState.discarded || !props.cardState.stealed;
    }

    return (
        <IonButton disabled={isDisabled()} slot={'end'} onClick={props.nextTurn}>Pasar</IonButton>
    );
};

export default connect(mapStateToPropsApp, mapDispatchApp)(PlayerControlTurnComponent);
