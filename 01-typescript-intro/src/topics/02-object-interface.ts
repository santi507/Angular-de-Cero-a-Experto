interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 10,
    skills: ['Bash', 'Counter']
}

console.table(strider);