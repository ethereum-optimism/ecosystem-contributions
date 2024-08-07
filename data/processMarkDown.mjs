import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

export async function getResources() {
  
  try {
    const directoryPath = path.join(process.cwd(), 'contributions')
    const fileNames = await fs.readdir(directoryPath)

    let postDataPromises = []

    for (let i = 0; i < fileNames.length; i++) {
      if (path.extname(fileNames[i]).toLowerCase() === '.md') {
        postDataPromises.push(getMarkDownData(fileNames[i]))
      }
    }

    const postData = await Promise.all(postDataPromises)

    const jsonData = JSON.stringify(postData, null, 2)


    const outputDir = path.join(process.cwd(), './public/static/json');
    const outputPath = path.join(outputDir, 'output.json');

    // Check if the json directory exists
    try {
      await fs.access(outputDir);
    } catch (error) {
      if (error.code === 'ENOENT') {
        // If dir not exist create folder json
        await fs.mkdir(outputDir, { recursive: true });
        console.info(`Created directory ${outputDir}`);
      } else {
        throw error;
      }
    }

    // Check if output.json exists
    try {
      await fs.access(outputPath);
    } catch (error) {
      if (error.code === 'ENOENT') {
        // if file not exist create a file
        await fs.writeFile(outputPath, '');
        console.info(`Created output.json`);
      } else {
        throw error;
      }
    }


    await fs.writeFile(outputPath, jsonData)
  } catch (error) {
    console.error(`An error occurred while processing markdown files: ${error.message}`);
  }

  // return outputPath;
}

// Promise<MarkDownData>
async function getMarkDownData(id) {
  try {
    const fullPath = path.join(process.cwd(), 'contributions', id)
    const fileContents = await fs.readFile(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    //@ts-ignore
    return {
      id: id.split('.md')[0],
      ...matterResult.data,
    }
  } catch (error) {
    console.error(`An error occurred while processing the file ${id}: ${error.message}`);
    throw error; 
  }
}

console.info(`Processing markdown files...`)
await getResources()
console.info(`Markdown Done ✅`)
