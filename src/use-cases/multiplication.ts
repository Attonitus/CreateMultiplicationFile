import { decorator } from './decorator';
import { createTable } from './createTable';
import { createFile } from './createFile';


export const multiplication = (base : number, limit: number, show: boolean) : void => {

    let fileContent : string = decorator(`Multiplication ${base}`);
    
    const table : string = createTable(base, limit);

    fileContent += table;

    if(show) console.log(fileContent);

    createFile('outputs', `table-${base}`, fileContent);
    console.log("File created!");
}