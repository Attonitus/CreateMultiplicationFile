import { yarg } from "./config/plugins/yargs-plugin";
import { ServerApp } from "./presentation/ServerApp";




const main = async() => {
    const {b: base, l: limit, s: show}  = yarg;
    ServerApp.run({base, limit, show});
}


( async() => {
    await main();
})();

