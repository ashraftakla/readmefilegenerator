// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Project description
  ${data.description}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation instructions
  ${data.installations}
  ## Usage scenarios
  ${data.usage}
  ## License
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License")
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  For more information:
  Visit: [https://github.io/${data.github}](https://github.io/${data.github})
  Email: ${data.email}
  `;
}

module.exports = { generateMarkdown };
