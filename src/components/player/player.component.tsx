import {IonBadge, IonReorderGroup} from "@ionic/react";
import React from 'react';
import '../../theme/styles/players.scss';
import {Player} from "../../shared/models/player.model";
import CardComponent from "../card/card.component";
import {ApplicationState} from "../../shared/models/application.state.model";
import {connect} from "react-redux";
import {CardState} from "../../shared/models/card.state.model";

type PlayerProps = {
    player: Player,
    cardState: CardState
}

const PlayerComponent = (props: PlayerProps) => {

    function getClassName(): string {
        let className = 'player-container my-player-container ';
        if (props.cardState.activePlayer !== props.player.id) {
            className += 'player-disabled';
        }

        return className;
    }

    return (
        <div className={getClassName()}>
            <IonBadge color={props.cardState.activePlayer === props.player.id ? 'primary' : 'light'}>
                {props.player.name}
            </IonBadge>
            <div onDrop={(e) => console.log('ondrop', e)}>
                {props.player.cards.map((card, i) =>
                    <CardComponent key={i} card={card} />
                )}
            </div>
        </div>

    );
};

function mapStateToProps(state: ApplicationState) {
    return state;
}

export default connect(mapStateToProps)(PlayerComponent);
