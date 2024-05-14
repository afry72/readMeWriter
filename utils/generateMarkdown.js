// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.siteName}
${data.description}
1. [Instillation](#Instillation)
2. [Usage](#Usage)
3. [License](#License)
4. [Contributers](#Contributing)
5. [Tests](#Tests)
6. [FAQ](#FAQ)



## Instillation
${data.install}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contri}
## Tests
${data.test}
## FAQ
${data.faq}
## Contact me
### EMail:${data.emailId} 
### GitHub:${data.gitHubId}
`;
}

module.exports = generateMarkdown;

