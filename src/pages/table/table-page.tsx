import {IonPage, IonContent, useIonViewDidEnter} from "@ionic/react";
import React from 'react';
import {cardService} from "../../shared/services/card.service";
import {playerService} from "../../shared/services/player.service";
import PlayerComponent from "../../components/player/player.component";
import {connect} from "react-redux";
import {mapDispatchApp, mapStateToPropsApp} from "../../shared/maps";
import {MapDispatchApp} from "../../shared/models/map.model";
import {CardState} from "../../shared/models/card.state.model";
import PlayerNpcComponent from "../../components/player-npc/player-npc.component";
import MountComponent from "../../components/mount/mount.component";
import DiscardComponent from "../../components/discards/dicards.component";
import PlayerControlComponent from "../../components/player-control/player-control.component";
import '../../theme/styles/table.scss';

type TablePageProps = {
    cardState: CardState
} & MapDispatchApp;

const TablePage = (props: TablePageProps) => {

    useIonViewDidEnter(() => {
        cardService.generatePack();
        cardService.orderRandom();
        playerService.generatePlayers();
        cardService.dealPack(playerService.players);
        let mount = cardService.packRandom;
        let discards = mount.splice(0, 1);
        props.setInitialPlay(mount, discards, playerService.players, 1, 1);
    });

    return (
        <IonPage>
            <IonContent fullscreen className={'table-content'}>
                <div className={'table-row'}>
                    <div className={'player-npc-left'}>{props.cardState.players.length ? <PlayerNpcComponent player={props.cardState.players[0]} /> : ''}</div>
                    <div>
                        {props.cardState.mount.length && props.cardState.turn !== -1 ? <MountComponent mount={props.cardState.mount[0]} /> : ''}
                        {props.cardState.discards.length && props.cardState.turn !== -1 ? <DiscardComponent discard={props.cardState.discards[0]} /> : ''}
                    </div>
                    <div className={'player-npc-right'}>{props.cardState.players.length ? <PlayerNpcComponent player={props.cardState.players[1]} /> : ''}</div>
                </div>
                {props.cardState.players.length ? <PlayerComponent player={props.cardState.players[2]} /> : ''}
                <div className={'table-container'} />
            </IonContent>
            {props.cardState.turn !== -1 ? <PlayerControlComponent /> : ''}
        </IonPage>
    );
};

export default connect(mapStateToPropsApp, mapDispatchApp)(TablePage);

