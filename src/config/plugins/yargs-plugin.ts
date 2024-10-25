import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'


export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplication base table'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplication limit table'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .check( (argv, options) => {
        if(argv.b < 1) throw `Error: base must be greater than 0`;
        if(argv.l < 1) throw `Error: limit must be greater than 0`;
        return true;
    })
.parseSync();