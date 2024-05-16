export class DnDCharacter {
    public static generateAbilityScore(): number[] {
      const abilityScores: number[] = [];
      for (let i = 0; i < 6; i++) {
      const fourDice: number[] = [];
      for (let i = 0; i < 5; i++) {
        const score = Math.ceil(Math.random() * 6);
        fourDice.push(score);
      }  
        fourDice.sort((a, b) => a - b).splice(0, 1);
        const ability = fourDice.reduce((acumulador, elemento) => acumulador + elemento, 0);
        abilityScores.push(ability); 
       }
        return abilityScores; 
        
    }
}

const abilityScores = DnDCharacter.generateAbilityScore();

interface CharacterAbilities {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

const caracterAbilitys: CharacterAbilities = {
    strength: abilityScores[0],
    dexterity: abilityScores[1],
    constitution: abilityScores[2],
    intelligence: abilityScores[3],
    wisdom: abilityScores[4],
    charisma: abilityScores[5]
};

for (const habilidad in caracterAbilitys) {
    console.log(`Su ${habilidad} es de: ${caracterAbilitys[habilidad]}`);
}




