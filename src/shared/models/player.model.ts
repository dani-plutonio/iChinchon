import {Card} from "./card.model";

export class Player {
    name: string;
    cards: Card[];
    npc: boolean;
    id: number
    constructor(name: string, npc: boolean = true, id: number) {
        this.name = name;
        this.cards = [];
        this.npc = npc;
        this.id = id;
    }
}
