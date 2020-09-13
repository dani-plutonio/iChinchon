import {TypeCard} from "../enums/type-card.enum";
import {ColorCard} from "../enums/color-card.enum";

export class Card {
    type: TypeCard;
    number: number;
    color: ColorCard;
    id: number;
    constructor(type: TypeCard, number: number, id: number) {
        this.type = type;
        this.number = number;
        this.id = id;
        switch (type) {
            case TypeCard.COPAS:
                this.color = ColorCard.COLOR_COPAS; break;
            case TypeCard.BASTOS:
                this.color = ColorCard.COLOR_BASTOS; break;
            case TypeCard.OROS:
                this.color = ColorCard.COLOR_OROS; break;
            case TypeCard.ESPADAS:
                this.color = ColorCard.COLOR_ESPADAS; break;
            default:
                this.color = ColorCard.COLOR_COMODIN; break;
        }
    }
}
