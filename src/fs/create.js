import * as fs from 'node:fs';
import path from 'node:path';

const create = async () => {
    const filePath = path.join(path.dirname('create.js'), '/files/fresh.txt');
    if (fs.existsSync(filePath)) {
        throw new Error('FS operation failed');
    } else {
        fs.writeFile(filePath, 'I am fresh and young', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    }
};

await create();
