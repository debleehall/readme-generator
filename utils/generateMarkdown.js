// Description 
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions

function generateMarkdown(userResponses, userInfo) {

  // Table of Contents based on inputs
  let tableOfContents = '## Table of Contents';
    if (userResponses.installation !== '') { tableOfContents += `* [Installation](#installation)`};
    if (userResponses.usage !== '') { tableOfContents += `* [Usage](#usage)`};
    if (userResponses.contributing !== '') { tableOfContents += `* [Contributing](#contributing)`};
    if (userResponses.test !== '') { tableOfContents += `* [Test](#test)`};

  let draftMarkdown = `# ${userResponse.title}
  ![Badge for GitHub repo top language]https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)

  ## Description
  ${userResponses.description}

  `

  draftMarkdown += tableOfContents;

  draftMarkdown += ` * [Licence](#licence)`;

  // optional sections
  if (userResponses.installation !== '') {
  
    draftMarkdown +=
    `
    
    ## Installation
    
    *Steps required to install project and how to get the development environment running:*
    
    ${userResponses.installation}`
    };
    
  
    // Optional Usage section
    if (userResponses.usage !== '') { 
    draftMarkdown += `
    
    ## Usage 
    
    *Instructions and examples for use:*
    
    ${userResponses.usage}`
    };
    
    if (userResponses.contributing !== '') {
    draftMarkdown += `
    
    ## Contributing
    
    *If you would like to contribute it, you can follow these guidelines for how to do so.*
    
    ${userResponses.contributing}`
    };
    
    if (userResponses.tests !== '') {
    draftMarkdown += `
    
    ## Tests
    
    *Tests for application and how to run them:*
    
    ${userResponses.tests}`
    };

    // required lisence
    draftMarkdown += `
    ## Licence
    ${userResponses.licence}`;

    // questions
    let draftDev = 
    `
    ---
    
    ## Questions?
    
    For any questions, please contact me with the information below:
   
    GitHub: [@${userInfo.login}](${userInfo.url})`;
  
    if (userInfo.email !== null) {
    
    draftDev +=
    `
    Email: ${userInfo.email}
    `};
  
    // Add developer section to markdown
    draftMarkdown += draftDev;
  
    // Return markdown
    return draftMarkdown;
}

module.exports = generateMarkdown;
