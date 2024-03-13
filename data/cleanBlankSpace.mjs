
import fs from "fs/promises";
import path from 'path';

// ███╗   ███╗ █████╗ ██╗███╗   ██╗
// ████╗ ████║██╔══██╗██║████╗  ██║
// ██╔████╔██║███████║██║██╔██╗ ██║
// ██║╚██╔╝██║██╔══██║██║██║╚██╗██║
// ██║ ╚═╝ ██║██║  ██║██║██║ ╚████║
// ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝

const fs = require('fs');
const path = require('path');

/**
 * Replaces all whitespace characters in filenames within a specified directory with hyphens.
 * @param {string} directoryPath - The path to the directory containing the files to be renamed.
 */
async function replaceWhitespaceWithHyphen(directoryPath) {
    try {
        // Read all filenames in the specified directory
        const fileNames = await fs.promises.readdir(directoryPath);

        // Iterate over each filename
        for (const fileName of fileNames) {
            // Construct the full path to the file
            const filePath = path.join(directoryPath, fileName);
            // Replace all whitespace characters with hyphens
            let newFileName = fileName.replace(/\s+/g, '-');
            // Construct the new path with the modified filename
            const newFilePath = path.join(directoryPath, newFileName);

            // If the filename has been modified (i.e., it contained whitespace)
            if (fileName !== newFileName) {
                // Rename the file
                await fs.promises.rename(filePath, newFilePath);
                // Log the renaming operation
                console.log(`Renamed "${fileName}" to "${newFileName}"`);
            }
        }
    } catch (error) {
        // Re-throw any errors encountered during the operation
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
