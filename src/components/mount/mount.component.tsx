import {IonBadge} from "@ionic/react";
import React from 'react';
import CardComponent from "../card/card.component";
import {Card} from "../../shared/models/card.model";

type MountProps = {
    mount: Card
}

const MountComponent = (props: MountProps) => {
    return (
        <div>
            <IonBadge color="danger">
                Montón
            </IonBadge>
            <CardComponent card={props.mount} cover={true}/>
        </div>

    );
};

export default MountComponent;
