
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '## ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }
  else if (license === 'Apache 2.0') {
    return '## ![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  }
  else if (license === 'GPL 3.0') {
    return '## ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  }
  else if (license === 'BSD 3') {
    return '## ![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  }
  else {
    return ``
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)'
  }
  else if (license === 'Apache 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license === 'GPL 3.0') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  }
  else if (license === 'BSD 3') {
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  }
  else {
    return ``
  }
}

function renderLicenseSection(license) {
  if (license === 'None') {
    return ``
  }
  else {
    return `
  * [License](#license)`
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
  `;
}

module.exports = generateMarkdown;