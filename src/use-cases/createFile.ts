import fs from 'node:fs'

export const createFile = (dirpath: string, fileName : string, fileContent: string) => {
    const dir = fs.mkdirSync(dirpath, { recursive: true })
    fs.writeFileSync(`${dir}/${fileName}.txt`, `${fileContent}\n`);
}