import {IonFooter, IonToolbar, IonButton} from "@ionic/react";
import React from 'react';
import {Player} from "../../shared/models/player.model";
import PlayerControlTurnComponent from "../player-control-turn/player-control-turn.component";
import PlayerControlCloseComponent from "../player-control-close/player-control-close.component";
import PlayerControlDiscardComponent from "../player-control-discard/player-control-discard.component";
import PlayerControlStealComponent from "../player-control-steal/player-control-steal.component";



const PlayerControlComponent = () => {
    return (
        <IonFooter>
            <IonToolbar>
                <PlayerControlStealComponent />
                <PlayerControlDiscardComponent />
                <PlayerControlTurnComponent />
                <PlayerControlCloseComponent />
            </IonToolbar>
        </IonFooter>
    );
};

export default PlayerControlComponent;
