import {IonBadge} from "@ionic/react";
import React from 'react';
import CardComponent from "../card/card.component";
import {Card} from "../../shared/models/card.model";

type DiscardsProps = {
    discard: Card
}

const DiscardComponent = (props: DiscardsProps) => {
    return (
        <div>
            <IonBadge color="danger">
                Descartes
            </IonBadge>
            <CardComponent card={props.discard}/>
        </div>

    );
};

export default DiscardComponent;
