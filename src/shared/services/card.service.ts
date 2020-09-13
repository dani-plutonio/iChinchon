import {Card} from "../models/card.model";
import {TypeCard} from "../enums/type-card.enum";
import {CARD} from "../constants/card.constant";
import {Player} from "../models/player.model";
import {PLAYER} from "../constants/player.constant";
import {CardState} from "../models/card.state.model";

class CardService {
    pack: Card[] = [];
    packRandom: Card[] = [];

    generatePack() {
        this.addCardType(TypeCard.OROS, CARD.sizePack, 13);
        this.addCardType(TypeCard.BASTOS, CARD.sizePack, 2 * 13);
        this.addCardType(TypeCard.COPAS, CARD.sizePack, 3 * 13);
        this.addCardType(TypeCard.ESPADAS, CARD.sizePack, 4 * 13);
        this.addCardType(TypeCard.COMODIN, CARD.sizeComodinPack, 5 * 13);
    }

    addCardType(typeCard: TypeCard, sizePack: number, sum: number) {
        for (let i = 1; i < sizePack + 1; i++) {
            this.pack.push(new Card(typeCard, i, i + sum));
        }
    }

    orderRandom() {
        let packTemp = [...this.pack];
        for (let i = 0; i < this.pack.length; i++) {
            let index = Math.floor(Math.random() * (packTemp.length - 1) + 1);
            if (packTemp.length === 1) {
                index = 0;
            }
            this.packRandom.push(packTemp[index]);
            packTemp.splice(index, 1);
        }
    }

    dealPack(players: Player[]) {
        for (let i = 0; i < PLAYER.sizeCardsPlayers; i++) {
            for (let y = 0; y < players.length; y++) {
                players[y].cards.push(this.packRandom[0]);
                this.packRandom.splice(0, 1);
            }
        }
    }

    isCardMount(cardState: CardState): boolean {
        return cardState.mount.find(c => c.id === cardState.activeCard) ? true : false;
    }

    isCardDiscards(cardState: CardState): boolean {
        return cardState.discards.find(c => c.id === cardState.activeCard) ? true : false;
    }

    getIndexCardById(id: number, listCard: Card[]): number {
        return listCard.findIndex(c => c.id === id);
    }
}

export const cardService = new CardService();
