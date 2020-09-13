import {IonButton} from "@ionic/react";
import React from 'react';
import {connect} from "react-redux";
import {mapDispatchApp, mapStateToPropsApp} from "../../shared/maps";
import {CardState} from "../../shared/models/card.state.model";
import {MapDispatchApp} from "../../shared/models/map.model";
import {playerNpcService} from "../../shared/services/player-npc.service";
import {playerService} from "../../shared/services/player.service";

type PlayerControlCloseProps = { cardState: CardState } & MapDispatchApp;

const PlayerControlCloseComponent = (props: PlayerControlCloseProps) => {

    function isEnable(): boolean {
        return props.cardState.discarded && props.cardState.stealed && props.cardState.turn > 3;
    }

    return (
        <IonButton disabled={!isEnable()} onClick={props.closeTurn} slot={'end'}>Cerrar</IonButton>
    );
};

export default connect(mapStateToPropsApp, mapDispatchApp)(PlayerControlCloseComponent);
