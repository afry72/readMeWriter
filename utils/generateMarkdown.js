
function renderLicenseBadge(data) {
  if (data.license == "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

  } else if (data.license == "GNU General Public License v3.0"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

  } else if (data.license == "MIT License"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

  } else if (data.license == "BSD 2-Clause"){
    return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";

  } else if (data.license == "BSD 3-Clause"){
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";

  } else if (data.license == "Boost Software License 1.0"){
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

  } else if (data.license == "Creative Commons Zero 1.0"){
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";

  } else if (data.license == "Eclipse Public License 2.0"){
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    
  } else if (data.license == "GNU Affero General Public License v3.0"){
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";

  } else if (data.license == "GNU General Public License v2.0"){
    return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";

  } else if (data.license == "GNU Lesser General Public License v2.1"){
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";

  } else if (data.license == "Mozilla Public License 2.0"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

  } else if (data.license == "The Unlicense"){
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";

  } else {
    return "";
  };
};


function renderLicenseLink(data) {
  if (data.license == "Apache License 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (data.license == "GNU General Public License v3.0"){
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (data.license == "MIT License"){
    return "https://opensource.org/licenses/MIT";
  } else if (data.license == "BSD 2-Clause"){
    return "https://opensource.org/licenses/BSD-2-Clause";
  } else if (data.license == "BSD 3-Clause"){
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else if (data.license == "Boost Software License 1.0"){
    return "https://www.boost.org/LICENSE_1_0.txt";
  } else if (data.license == "Creative Commons Zero 1.0"){
    return "http://creativecommons.org/publicdomain/zero/1.0/";
  } else if (data.license == "Eclipse Public License 2.0"){
    return "https://opensource.org/licenses/EPL-1.0";
  } else if (data.license == "GNU Affero General Public License v3.0"){
    return "https://www.gnu.org/licenses/agpl-3.0";
  } else if (data.license == "GNU General Public License v2.0"){
    return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
  } else if (data.license == "GNU Lesser General Public License v2.1"){
    return "https://www.gnu.org/licenses/lgpl-3.0";
  } else if (data.license == "Mozilla Public License 2.0"){
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (data.license == "The Unlicense"){
    return "http://unlicense.org/";
  } else {
    return "";
  };
}


function renderLicenseSection(license) {}


function generateMarkdown(data) {
  var licenseBadge = renderLicenseBadge(data);
  var licenseLink = renderLicenseLink(data);
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

${licenseBadge}

${licenseLink}

## Contributing
${data.contri}

## Tests
${data.test}

## FAQ
${data.faq}

# Contact me
### EMail:${data.emailId} 

### GitHub:${data.gitHubId}
https://github.com/${data.gitHubId}
`;
}

module.exports = generateMarkdown;

