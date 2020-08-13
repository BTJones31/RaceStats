const competitors = {
    _teams: {
        Ineos: [],
        Movistar: [],
        },
    addRacerToTeam (teamName,firstName, lastName, age, weight) {
        const racer = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        weight: weight,
        }
        return this._teams[teamName].push(racer);
    },
    getRandomRacerFromTeams(teamName) {
        const racers = this._teams[teamName];
        const randRacerIndex = Math.floor(Math.random() * (racers.length));
        return racers[randRacerIndex];
    },
    generateRandomMatchup() {
        const player1 = this.getRandomRacerFromTeams('Ineos')
        const player2 = this.getRandomRacerFromTeams('Movistar')
        //return `Your matchup is ${player1.firstName} ${player1.lastName} vs ${player2.firstName} ${player2.lastName}` 
        if ((player1.age < player2.age) && (player1.weight < player2.weight)) {
            return `${player1.firstName} ${player1.lastName} (${player1.age},${player1.weight}) would beat ${player2.firstName} ${player2.lastName} (${player2.age},${player2.weight}) due to AGE and WEIGHT.`
            } 
        else if ((player1.age > player2.age) && (player1.weight > player2.weight)) {
            return `${player2.firstName} ${player2.lastName} (${player2.age},${player2.weight}) would beat ${player1.firstName} ${player1.lastName} (${player1.age},${player1.weight}) due to AGE and WEIGHT.`
            }
        else if ((player1.age < player2.age) && (player1.weight > player2.weight)){
            return `${player2.firstName} ${player2.lastName} (${player2.age},${player2.weight}) would beat ${player1.firstName} ${player1.lastName} (${player1.age},${player1.weight}) due to WEIGHT alone.`
        }
        else if ((player1.age > player2.age) && (player1.weight < player2.weight)){
            return `${player1.firstName} ${player1.lastName} (${player1.age},${player1.weight}) would beat ${player2.firstName} ${player2.lastName} (${player2.age},${player2.weight}) due to WEIGHT alone.`
        }
        else if ((player1.age < player2.age) && (player1.weight === player2.weight)){
            return `${player1.firstName} ${player1.lastName} (${player1.age},${player1.weight}) would beat ${player2.firstName} ${player2.lastName} (${player2.age},${player2.weight}) due to AGE alone.`
        }
        else if ((player1.age > player2.age) && (player1.weight === player2.weight)){
            return `${player2.firstName} ${player2.lastName} (${player2.age},${player2.weight}) would beat ${player1.firstName} ${player1.lastName} (${player1.age},${player1.weight}) due to AGE alone.`
        }
        else if ((player1.age === player2.age) && (player1.weight < player2.weight)){
            return `${player1.firstName} ${player1.lastName} (${player1.age},${player1.weight}) would beat ${player2.firstName} ${player2.lastName} (${player2.age},${player2.weight}) due to WEIGHT alone.`
        }
        else if ((player1.age === player2.age) && (player1.weight > player2.weight)){
            return `${player2.firstName} ${player2.lastName} (${player2.age},${player2.weight}) would beat ${player1.firstName} ${player1.lastName} (${player1.age},${player1.weight}) due to WEIGHT alone.`
        }
    },
};

competitors.addRacerToTeam('Ineos', 'Chris', 'Froome', 35, 146);
competitors.addRacerToTeam('Ineos', 'Geraint', 'Thomas', 34, 157);
competitors.addRacerToTeam('Ineos', 'Egan', 'Bernal', 23, 132);
competitors.addRacerToTeam('Ineos', 'Andrey', 'Amador', 33, 159);
competitors.addRacerToTeam('Ineos', 'Leonardo', 'Basso', 26, 139);
competitors.addRacerToTeam('Ineos', 'Rohan', 'Dennis', 30, 159);
competitors.addRacerToTeam('Ineos', 'Ben', 'Swift', 32, 152);

competitors.addRacerToTeam('Movistar', 'Alejandro', 'Valverde', 40, 134);
competitors.addRacerToTeam('Movistar', 'Enric', 'Mas', 25, 134);
competitors.addRacerToTeam('Movistar', 'Matteo', 'Jorgenson', 21, 143);
competitors.addRacerToTeam('Movistar', 'Héctor', 'Carretero', 25, 148);
competitors.addRacerToTeam('Movistar', 'Iñigo', 'Elosegui', 22, 152);
competitors.addRacerToTeam('Movistar', 'Johan', 'Jacobs', 23, 159);
competitors.addRacerToTeam('Movistar', 'Davide', 'Villella', 29, 146);

const matchUp = competitors.generateRandomMatchup();
const teamListIneos = competitors._teams.Ineos;
const teamListMovistar = competitors._teams.Movistar;

console.log(matchUp);


