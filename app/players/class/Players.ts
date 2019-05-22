module app.players.pClass {
    export class Players implements app.players.pInterface.IPlayers {
        teamID: number;
        playerId: number;
        name: string;
        position: string;
        number: number;
        age: number;
        height: number;
        weight: number;
    }
}
