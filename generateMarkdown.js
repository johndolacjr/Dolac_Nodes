// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # :arrows_clockwise: ${data.title}
  ## ${data.badge}  

  ![project image](https://raw.githubusercontent.com/johndolacjr/Dolac_Nodes/main/README_GEN_IMG.png)

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
  Contact: 
  Github: [https://github.com/${data.github}](https://github.com/${data.github})
  Email: [${data.email}](${data.email})
  
  ## License:
  ${data.license}


`;
}

module.exports = generateMarkdown;
