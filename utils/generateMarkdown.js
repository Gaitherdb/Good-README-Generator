// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }
  if (license === 'Apache 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  }
  if (license === 'GPL 3.0') {
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  }
  if (license === 'BSD 3') {
    return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)'
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)'
  }
  if (license === 'Apache 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'GPL 3.0') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  }
  if (license === 'BSD 3') {
    return '(https://opensource.org/licenses/BSD-3-Clause)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return
  }
  else {
    return `# [License](#license)`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.License);
  let licenseLink = renderLicenseLink(data.License);
  let licenseSectopn = renderLicenseSection(data.License);
  return `# ${data.Title}
  ## ${licenseBadge}
  `;
}

module.exports = generateMarkdown;