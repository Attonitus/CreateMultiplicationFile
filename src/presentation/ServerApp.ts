import { multiplication } from "../use-cases/multiplication";

interface RunOptions{
    base: number,
    limit: number,
    show: boolean
}


export class ServerApp{


    static run(options : RunOptions){
        const {base, limit, show} = options;
        console.log("Server running!!");
        multiplication(base, limit, show);
    }
}