# Rendering Markdown
There are 3 important directory path that are important to render the markdown properly:

1. **Ideas Markdown Folder** located under `/contributions`
2. **Ideas Structure** located under `/public/static/filter/filter.json`
3. **Overview Section*** rendered from `README.md` of the repository.

### Adding New Ideas
By putting new markdown into `/contributions` folder, each markdown will be rendered under project section on the site. The name of the file will be use as the route name for that particular page.

### Changing Ideas Structure
The most of the structure of each project can be dynamically change, such as adding/removing labels, change description. The content in `filter.json` will be use as a dynamic options for filtering all the ideas.

Although most of the content in `filter.json` can be adjusted. we recommend to change only the value of primary key. Just try not to change the main key of the filter.

### Chaning The Content of Overview Section
The overview section of the site is rendered from `README.md` of the repository.
