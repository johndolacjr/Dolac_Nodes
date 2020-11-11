// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ## Description: 
  ${data.description}

# Table of Contents: 
  *  [Installation](#installation)
  *  [Usage](#usage)
  *  [Contributing](#contributing)
  *  [Tests](#tests)
  *  [Questions](#questions)



  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.installation}

  ## Contributing:
  ${data.installation}

  ## Tests:
  ${data.installation}

  ## Questions:
  ${data.installation}





`;
}

module.exports = generateMarkdown;
