// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title} 

  ![project image](./imgurl.png)

  ## Table of Contents: 
  *  [Description](#description)
  *  [Installation](#installation)
  *  [Usage](#usage)
  *  [Contributing](#contributing)
  *  [Tests](#tests)
  *  [Questions](#questions)
  *  [License](#license)

  ## Description: 
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage Info:
  ${data.usage}

  ## Contributors:
  ${data.contributing}

  ## Tests:
  ${data.tests}

  ## Questions:
  ${data.questions}

  ## License:
  ${data.license}
  ${data.license}

`;
}

module.exports = generateMarkdown;
