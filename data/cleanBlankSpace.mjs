
import fs from "fs/promises";
import path from 'path';

// ███╗   ███╗ █████╗ ██╗███╗   ██╗
// ████╗ ████║██╔══██╗██║████╗  ██║
// ██╔████╔██║███████║██║██╔██╗ ██║
// ██║╚██╔╝██║██╔══██║██║██║╚██╗██║
// ██║ ╚═╝ ██║██║  ██║██║██║ ╚████║
// ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝

// Asynchronously replaces whitespace in file names with hyphens in a specified directory.
async function replaceWhitespaceWithHyphen(directoryPath) {
    try {
        // Read the directory to get the list of file names.
        const fileNames = await fs.readdir(directoryPath);

        // Iterate over each file name.
        for (const fileName of fileNames) {
            // Construct the full file path.
            const filePath = path.join(directoryPath, fileName);
            // Replace all whitespace in the file name with hyphens.
            let newFileName = fileName.replace(/\s+/g, '-');
            // Construct the new file path with the modified file name.
            const newFilePath = path.join(directoryPath, newFileName);

            // If the file name has been modified, rename the file.
            if (fileName !== newFileName) {
                await fs.rename(filePath, newFilePath);
                console.log(`Renamed "${fileName}" to "${newFileName}"`);
            }
        }
    } catch (error) {
        // Re-throw the error to be handled by the caller.
        throw error;
    }
}


const directoryPath = path.join(process.cwd(), 'public', 'static', 'markdown');
 
console.info(`
░█▀▀█ ░█─── ░█▀▀▀ ─█▀▀█ ░█▄─░█ ▀█▀ ░█▄─░█ ░█▀▀█ 　 ░█▀▀█ ░█─── ─█▀▀█ ░█▄─░█ ░█─▄▀ 　 ░█▀▀▀█ ░█▀▀█ ─█▀▀█ ░█▀▀█ ░█▀▀▀ 
░█─── ░█─── ░█▀▀▀ ░█▄▄█ ░█░█░█ ░█─ ░█░█░█ ░█─▄▄ 　 ░█▀▀▄ ░█─── ░█▄▄█ ░█░█░█ ░█▀▄─ 　 ─▀▀▀▄▄ ░█▄▄█ ░█▄▄█ ░█─── ░█▀▀▀ 
░█▄▄█ ░█▄▄█ ░█▄▄▄ ░█─░█ ░█──▀█ ▄█▄ ░█──▀█ ░█▄▄█ 　 ░█▄▄█ ░█▄▄█ ░█─░█ ░█──▀█ ░█─░█ 　 ░█▄▄▄█ ░█─── ░█─░█ ░█▄▄█ ░█▄▄▄
`);
await replaceWhitespaceWithHyphen(directoryPath);
console.info(`
░█▀▀▄ ░█▀▀▀█ ░█▄─░█ ░█▀▀▀ 
░█─░█ ░█──░█ ░█░█░█ ░█▀▀▀ 
░█▄▄▀ ░█▄▄▄█ ░█──▀█ ░█▄▄▄
`);
