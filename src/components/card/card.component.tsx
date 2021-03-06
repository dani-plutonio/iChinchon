import {IonRippleEffect} from "@ionic/react";
import React from 'react';
import '../../theme/styles/cards.scss';
import {Card} from "../../shared/models/card.model";
import {TypeCard} from "../../shared/enums/type-card.enum";
import {CardState} from "../../shared/models/card.state.model";
import {MapDispatchApp} from "../../shared/models/map.model";
import {connect} from "react-redux";
import {mapDispatchApp, mapStateToPropsApp} from "../../shared/maps";

type CardProps = {
    card: Card,
    cover?: boolean,
    mount?: boolean,
    npc?: boolean,
    disabled?: boolean
} & { cardState: CardState } & MapDispatchApp;

const CardComponent = (props: CardProps) => {

    function getNumberCard(number: number, type: TypeCard): string {
        if (props.cover) {
            return '-';
        } else if (type === TypeCard.COMODIN) {
            return '*';
        } else if (number <= 10) {
            return String(number);
        } else if (number === 11) {
            return 'J';
        } else if (number === 12) {
            return 'Q'
        } else {
            return 'K'
        }
    }

    function getClassNameCard(): string {
        let className = 'ion-activatable ripple-parent btn-card ';
        className += props.card.type + ' ';
        if (props.cover) {
            className += 'cover ';
        }
        if (props.mount) {
            className += 'mount ';
        }
        if (props.npc) {
            className += 'npc ';
        }
        if (props.card.id === props.cardState.activeCard) {
            className += 'activated ';
        }
        if (props.disabled) {
            className += 'disabled ';
        }

        return className;
    }

    return (
        <div className={getClassNameCard()} onClick={(e) => props.setActiveCard(props.card.id)}>
            {getNumberCard(props.card.number, props.card.type)}
        </div>
    );
};

export default connect(mapStateToPropsApp, mapDispatchApp)(CardComponent);
