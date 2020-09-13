import {Card} from "../models/card.model";
import * as _ from "lodash";
import {TypeCard} from "../enums/type-card.enum";

class PlayerNpcService {

    cards: Card[] = [];

    getDiscard(cards: Card[]) {
        this.cards = [...cards];
        this.setNested();
        this.cards = _.orderBy(this.cards, ['number'],['desc']);
        if (this.cards.length) {
            return this.cards[0];
        } else {
            return _.orderBy(cards, ['number'],['desc'])[0]
        }
    }

    private setNested() {
        _.remove(this.cards, (card) => {
            return card.type === TypeCard.COMODIN;
        });
        let numberCardsEquals = _.groupBy(this.cards, 'number');
        Object.keys(numberCardsEquals).forEach(p => {
            if (numberCardsEquals[p].length > 1) {
               _.remove(this.cards, (card) => {
                    return numberCardsEquals[p].find(c => c.id === card.id);
               });
            }
        });
    }

    checkCloseTurn(cards: Card[], turn: number): boolean {
        let cardsTemp = [...cards];
        let numberComodin = cardsTemp.filter(c => c.type === TypeCard.COMODIN).length;
        _.remove(cardsTemp, (card) => {
            return card.type === TypeCard.COMODIN;
        });
        let numberNested = 0;
        let numberOnly = 0;
        let numberCardsEquals = _.groupBy(cardsTemp, 'number');
        Object.keys(numberCardsEquals).forEach(p => {
            if (numberCardsEquals[p].length === 3 && numberComodin === 2) {
                numberNested = 6;
            } else if (numberCardsEquals[p].length === 3) {
                numberNested += 3;
            } else if (numberCardsEquals[p].length == 2 && numberComodin > 0) {
                numberNested += 3;
                numberComodin--;
            } else if (numberCardsEquals[p].length == 1 && numberCardsEquals[p][0].number > numberOnly) {
                numberOnly = numberCardsEquals[p][0].number;
            }
        });

        return (numberNested >= 6 && numberOnly <= 5 && turn > 3);
    }

    checkCardDiscard(cards: Card[], cardDiscard: Card) {
        let cardsTemp = [...cards];
        let numberComodin = cardsTemp.filter(c => c.type === TypeCard.COMODIN).length;
        _.remove(cardsTemp, (card) => {
            return card.type === TypeCard.COMODIN;
        });
        let need = false;

        if (cardDiscard.type === TypeCard.COMODIN) {
            return true;
        }

        let numberCardsEquals = _.groupBy(cardsTemp, 'number');
        Object.keys(numberCardsEquals).forEach(p => {
            if (numberCardsEquals[p].length >= 2 && cardDiscard.number === numberCardsEquals[p][0].number) {
                need = true;
            } else if (numberCardsEquals[p].length >= 1 && cardDiscard.number === numberCardsEquals[p][0].number && numberComodin) {
                numberComodin--;
                need = true;
            }
        });
        console.log('necesita la del monton', need);
        console.log('cartas', cards);
        console.log('carta del descarte', cardDiscard);
        return need;
    }
}

export const playerNpcService = new PlayerNpcService();
