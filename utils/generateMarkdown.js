function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "## ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache 2.0") {
    return "## ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "GPL 3.0") {
    return "## ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if (license === "BSD 3") {
    return "## ![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
  } else {
    return ``;
  }
}

function renderLicenseLink(license) {
  if (license === "MIT") {
    return `

  ## License  

  This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).`;
  } else if (license === "Apache 2.0") {
    return `

  ## License

  This project is licensed under the terms of the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).`;
  } else if (license === `GPL 3.0`) {
    return `

  ## License

  This project is licensed under the terms of the [GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0).`;
  } else if (license === "BSD 3") {
    return `

  ## License
    
  This project is licensed under the terms of the [BSD 3 License](https://opensource.org/licenses/BSD-3-Clause).`;
  } else {
    return ``;
  }
}

function renderLicenseSection(license) {
  if (license === "None") {
    return ``;
  } else {
    return `
  * [License](#license)`;
  }
}

function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.License);
  let licenseLink = renderLicenseLink(data.License);
  let licenseSection = renderLicenseSection(data.License);
  return `# ${data.Title}
  ${licenseBadge}

  ## Description

  ${data.Description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)${licenseSection}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies, run the following command: 
  \`\`\`
  ${data.Installation}
  \`\`\`
  
  ## Usage
  ${data.Usage}${licenseLink}

  ## Contributing
  ${data.Contributing}

  ## Tests
  Change your terminal path to the test folder and run the command:
  \`\`\`
  ${data.Tests}
  \`\`\`

  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.Email}. You can find more of my work at [${data.GitHub}](https://github.com/${data.GitHub}).
  `;
}

module.exports = generateMarkdown;
