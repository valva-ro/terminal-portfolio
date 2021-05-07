const github = "<a href=\"https://github.com/valva-ro/\" target =\"_blank\">https://github.com/valva-ro/</a>";
const linkedin = "<a href=\"https://www.linkedin.com/in/vvarela-rodriguez/\" target =\"_blank\">https://www.linkedin.com/in/vvarela-rodriguez/";
const contact = ["My email: <a href=\"mailto:vavarela.rodriguez@gmail.com\">vavarela.rodriguez@gmail.com"];
const error = ["Command not recognized. To list all commands type <span class=\"command\">--help</span>"];
const TODO = ["Ooooops! Feature still in progress <span class=\"distinct\">:(</span>"];

let soundWrongCommand = new Audio('./../../sounds/wrongCommand.wav');
let soundTyping1 = new Audio('./../../sounds/type1.wav');
let soundTyping2 = new Audio('./../../sounds/type2.wav');

const currentdate = new Date();
const birthday = new Date(2000, 2, 12)
let years = Math.abs(new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970);

const dateText = "<span class=\"command\">[" + currentdate.getDate() +
             "/" + (currentdate.getMonth() + 1) +
             "/" + currentdate.getFullYear() +
             " " + currentdate.getHours() +
             ":" + currentdate.getMinutes() +
             ":" + currentdate.getSeconds() +
             "]</span>";

const titleText = "###############################################################################################\n" +
    "#  __      __     _               _    _                __      __                _           #\n" +
    "#  \\ \\    / /    | |             | |  (_)               \\ \\    / /               | |          #\n" +
    "#   \\ \\  / /__ _ | |  ___  _ __  | |_  _  _ __    __ _   \\ \\  / /__ _  _ __  ___ | |  __ _    #\n" +
    "#    \\ \\/ // _` || | / _ \\| '_ \\ | __|| || '_ \\  / _` |   \\ \\/ // _` || '__|/ _ \\| | / _` |   #\n" +
    "#     \\  /| (_| || ||  __/| | | || |_ | || | | || (_| |    \\  /| (_| || |  |  __/| || (_| |   #\n" +
    "#      \\/  \\__,_||_| \\___||_| |_| \\__||_||_| |_| \\__,_|     \\/  \\__,_||_|   \\___||_| \\__,_|   #\n" +
    "#                                                                                             #\n" +
    "###############################################################################################";

const welcome = [dateText + " Welcome to my porfolio.",
                "To start enter the command <span class=\"command\">--help</span>"];

const help = [
    "The avaiable commands are:",
    "<span class=\"command\">about</span> -----> Learn more about me",
    "<span class=\"command\">projects</span> --> Show my projects",
    "<span class=\"command\">social</span> ----> Displays social networks",
    "<span class=\"command\">contact</span> ---> Displays my email",
    "<span class=\"command\">credits</span> ---> Show the credits",
    "<span class=\"command\">download</span> --> Download TerminalPortfolio",
    "<span class=\"command\">clear</span> -----> Clears prompt"
];

const about = [
    "Hello there!",
    "My name is <span class=\"distinct\">Valentina Varela</span> and I'm " + years + ".",
    "I'm currently studying <span class=\"distinct\">System Analysis</span> at University of Buenos Aires and taking " +
    "the <span class=\"distinct\">Certified Tech Developer</span> course dictated by Digital House"
];

const social = [
    "github ----> " + github,
    "linkedin --> " + linkedin
];

const credits = [
    "Development by <a href=\"https://github.com/valva-ro/\" target =\"_blank\">Valentina Varela</a>",
    "Design inspired on <a href=\"https://www.behance.net/gallery/77398125/Terminal-Portfolio\" target =\"_blank\">Valentin Salaud's design</a>",
    "Tutorials I followed: <a href=\"https://hackernoon.com/how-to-make-a-terminal-like-portfolio-website-for-yourself-27d7a7030004\" target =\"_blank\">" +
    "Hackernoon's web</a> and <a href=\"http://abarcarodriguez.com/blog/terminal-js-jugando-con-javascript\" target =\"_blank\">Terminal.js por Abarca Rodriguez</a>"
];

const projects = [
    "Web -------> <a href=\"https://valva-ro.github.io/CTD-FrontEnd-I/html/card-super-heroes/\" target =\"_blank\">SuperCard Heroes Store</a>",
    "Desktop ---> <a href=\"https://github.com/valva-ro/Algo3-TP2-AlgoBlocks\" target =\"_blank\">AlgoBlocks</a>"
];
