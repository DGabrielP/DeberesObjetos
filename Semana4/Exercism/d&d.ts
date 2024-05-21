//PD: Este lo hice yo solito y funcionó :)

export class DnDCharacter {
    public strength: number;
    public dexterity: number;
    public constitution: number;
    public intelligence: number;
    public wisdom: number;
    public charisma: number;
    public hitpoints: number;

    constructor() {
        const abilityScores = DnDCharacter.generateAbilityScores();
        this.strength = abilityScores[0];
        this.dexterity = abilityScores[1];
        this.constitution = abilityScores[2];
        this.intelligence = abilityScores[3];
        this.wisdom = abilityScores[4];
        this.charisma = abilityScores[5];
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }

    public static generateAbilityScores(): number[] {
        const abilityScores: number[] = [];
        for (let i = 0; i < 6; i++) {
            abilityScores.push(DnDCharacter.generateAbilityScore());
        }
        return abilityScores;
    }

    public static generateAbilityScore(): number {
        const fourDice: number[] = [];
        for (let j = 0; j < 4; j++) {
            const score = Math.ceil(Math.random() * 6);
            fourDice.push(score);
        }
        fourDice.sort((a, b) => a - b).splice(0, 1);
        return fourDice.reduce((acc, val) => acc + val, 0);
    }

    public static getModifierFor(score: number): number {
        return Math.floor((score - 10) / 2);
    }
}