// Creates a function to generate template for README
function ReadMeTemplate(data) {
  return `
  <style>
  <h1 align='center'>${data.projectTitle}</h1>
  
  ## Description 
    ${data.description}
  
  ## Table of Contents
    - [Description](#Desrcription)
    - [Installation](#Installation)
    - [Usage](#Usage)  
    - [Credits](#Credits)
    - [License](#License)
    - [Badges](#Badges)
    - [Features](#Features)
    - [Contributing](#Contributing)
    - [Tests](#Tests)

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}
  
  ## Credits
    ${data.credits}  

  ## License
    This application is covered by ${data.license} license.

  ## Badges

  ## Features
    ${data.features}

  ## Contributing

  ## Tests


`;
}

module.exports = ReadMeTemplate;
