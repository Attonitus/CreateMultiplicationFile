export const createTable = (base: number, limit: number) :string => {
    let table = '';
    for(let x = 1; x <= limit; x++){
        table += `${base} x ${x} = ${ base * x}\n`;
    }
    return table;
}