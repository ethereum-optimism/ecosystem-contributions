import fs from "fs/promises";
import path from 'path';
import matter from 'gray-matter';


// Asynchronously fetches and processes markdown files in a specified directory,
// then writes the processed data to a JSON file.
export async function getResources() {
    // Define the directory path where markdown files are located.
    const directoryPath = path.join(process.cwd(), 'public', 'static', 'markdown');
    
    // Read the directory to get the list of file names.
    const fileNames = await fs.readdir(directoryPath);

    // Initialize an array to hold promises for processing markdown files.
    const postDataPromises = fileNames.filter(fileName => path.extname(fileName).toLowerCase() === ".md")
                                      .map(fileName => getMarkDownData(fileName));

    // Wait for all markdown files to be processed.
    const postData = await Promise.all(postDataPromises);

    // Convert the processed data to a JSON string with indentation for readability.
    const jsonData = JSON.stringify(postData, null, 2);

    // Define the output path for the JSON file.
    const outputPath = path.join(process.cwd(), './public/static/json/output.json');
    
    // Write the JSON data to the output file.
    await fs.writeFile(outputPath, jsonData);

    // Return the path of the output file.
    return outputPath;
}

// Promise<MarkDownData>
async function getMarkDownData(id) {
  
    const fullPath = path.join(process.cwd(), 'public', 'static', 'markdown', id); 
    const fileContents = await fs.readFile(fullPath, 'utf8'); 
  
    const matterResult = matter(fileContents);
  
    //@ts-ignore
    return {
      id: id.split(".md")[0], 
      ...matterResult.data,
    };
}

console.info(`
░█▀▀█ ░█▀▀▀ ░█▄─░█ ░█▀▀▀ ░█▀▀█ ─█▀▀█ ▀▀█▀▀ ▀█▀ ░█▄─░█ ░█▀▀█ 　 ░█▀▄▀█ ─█▀▀█ ░█▀▀█ ░█─▄▀ ░█▀▀▄ ░█▀▀▀█ ░█──░█ ░█▄─░█ 
░█─▄▄ ░█▀▀▀ ░█░█░█ ░█▀▀▀ ░█▄▄▀ ░█▄▄█ ─░█── ░█─ ░█░█░█ ░█─▄▄ 　 ░█░█░█ ░█▄▄█ ░█▄▄▀ ░█▀▄─ ░█─░█ ░█──░█ ░█░█░█ ░█░█░█ 
░█▄▄█ ░█▄▄▄ ░█──▀█ ░█▄▄▄ ░█─░█ ░█─░█ ─░█── ▄█▄ ░█──▀█ ░█▄▄█ 　 ░█──░█ ░█─░█ ░█─░█ ░█─░█ ░█▄▄▀ ░█▄▄▄█ ░█▄▀▄█ ░█──▀█
`);
await getResources();
console.info(`
░█▀▀▄ ░█▀▀▀█ ░█▄─░█ ░█▀▀▀ 
░█─░█ ░█──░█ ░█░█░█ ░█▀▀▀ 
░█▄▄▀ ░█▄▄▄█ ░█──▀█ ░█▄▄▄
`);
