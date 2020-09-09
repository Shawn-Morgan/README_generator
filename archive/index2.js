const fs = require("fs");
const inquirer - require("inquirer");

//prompt user for info
//generate html

/*returns the html string with the given info
@paraam userName
@param userLoc
@param userLI
@param userGithub
*/

function generateHtml(userName, userLoc, userLI, userGithub) {
    return <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>user info page</title>
    </head>
    <body>
        <ul id="userInfo">
            <li class="userCard">
                <p>Name: ${userName}</p>
                <p>Location: ${userLoc}</p>
                <p>LinkedIn: ${userLI}</p>
                <p>Github: ${userGithub}</p>
            </li>
        </ul>
    </body>
    </html>

}
//have styles in html

//write 
function writeHtmlFile(){
    fs
}
    fs.writeFileSync