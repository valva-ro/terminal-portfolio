const soundWrongCommand = new Audio('http://raw.githubusercontent.com/valva-ro/terminal-portfolio/main/sounds/wrongCommand.wav');
const soundTyping1 = new Audio('http://raw.githubusercontent.com/valva-ro/terminal-portfolio/main/sounds/type1.wav');
const soundTyping2 = new Audio('http://raw.githubusercontent.com/valva-ro/terminal-portfolio/main/sounds/type2.wav');
const currentdate = new Date();
const birthday = new Date(2000, 2, 12)
const years = Math.abs(new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970);
let terminalPrompt;
let prompt;
let originalTerminalPrompt;
let userInput;
let info = [];
let cmdHistory = [];
let lastCmdIndex = 0;

const about = [
    "Hello there!",
    "My name is <span class=\"distinct\">Valentina Varela</span> and I'm " + years + ".",
    "I'm currently studying <span class=\"distinct\">System Analysis</span> at University of Buenos Aires and taking " +
    "the <span class=\"distinct\">Certified Tech Developer</span> course dictated by Digital House"
];

const credits = [
    "Development by <a href=\"https://github.com/valva-ro/\" target =\"_blank\">Valentina Varela</a>",
    "Design inspired on <a href=\"https://www.behance.net/gallery/77398125/Terminal-Portfolio\" target =\"_blank\">Valentin Salaud's design</a>",
    "Tutorials I followed: <a href=\"https://hackernoon.com/how-to-make-a-terminal-like-portfolio-website-for-yourself-27d7a7030004\" target =\"_blank\">" +
    "Hackernoon's web</a> and <a href=\"http://abarcarodriguez.com/blog/terminal-js-jugando-con-javascript\" target =\"_blank\">Terminal.js por Abarca Rodriguez</a>"
];

fetch("./info.json")
    .then(result => {
        return result.json();
    })
    .then(data => {
        info = data[0];
        begin();
    })
    .catch(err => {
        console.log(err);
    })

function begin() {

    setTimeout(function () {
        hideSplash();
        showContent();
        handlePrompt();
        let header = document.querySelector("header");
        const title = `<h1 class="row ascii-art">${info.title}</h1>`;
        const dateText = `<span class=\"command\">[${getDate()}]</span>`;
    
        header.innerHTML += title;
        header.innerHTML += `<p>${dateText} Welcome to my portfolio.</p>`;
        header.innerHTML += `<p>To start enter the command <span class="command">help</span></p>`;
    }, 2000);

}

function getDate() {
    const currentdate = new Date();
    return currentdate.getDate() +
        "/" + (currentdate.getMonth() + 1) +
        "/" + currentdate.getFullYear() +
        " " + currentdate.getHours() +
        ":" + currentdate.getMinutes() +
        ":" + currentdate.getSeconds()
}

function handleCommand(command) {

    addParagraph(command, "written");

    switch (command.toLowerCase()) {
        case "help":
            addParagraph("The avaiable commands are:");
            info.commands.forEach(command => {
                addParagraph(`<span class="command">${command.cmd}</span>${command.info}`);
            })
            break;
        
        case "about":
            about.forEach(info => addParagraph(info));
            break;

        case "projects":
            info.projects.forEach(project => {
                const info = `
                        <a href="${project.link}" target ="_blank">${project.name}</a>
                        <p>${project.description}</p>
                    `;
                addParagraph(info);
            })
            break;

        case "social-linkedin":
            addParagraph(`<a href="${info.linkedin}" target ="_blank">${info.linkedin}</a>`);
            break;

        case "social":
            addParagraph(`<a href="${info.github}" target ="_blank">GitHub</a>`);
            addParagraph(`<a href="${info.linkedin}" target ="_blank">Linkedin</a>`);
            break;

        case "social -g":
            addParagraph(`<a href="${info.github}" target ="_blank">${info.github}</a>`);
            break;

        case "social -l":
            addParagraph(`<a href="${info.linkedin}" target ="_blank">${info.linkedin}</a>`);
            break;

        case "contact":
            addParagraph(`My email: <a href="mailto:${info.email}">${info.email}`);
            break;

        case "credits":
            credits.forEach(credit => addParagraph(credit));
            break;

        case "clear":
            cleanPrompt();
            break;

        default:
            addParagraph("Command not recognized. To list all commands type <span class=\"command\">help</span>");
            playSound(soundWrongCommand, 0.5);
            break;
    }
}

function addParagraph(content, className = "") {
    const paragraph = document.createElement("p");
    paragraph.className = className;
    paragraph.innerHTML = content;
    terminalPrompt.insertBefore(paragraph, userInput);
    terminalPrompt.scrollTop = terminalPrompt.scrollHeight;
}

function playSound(audio) {
    audio.volume = 0.5;
    audio.play();
}

function cleanPrompt() {
    terminalPrompt.innerHTML = originalTerminalPrompt;
    terminalPrompt = document.querySelector("#terminal-prompt");
    prompt = document.querySelector("#prompt");
    userInput = document.querySelector("#user");
    prompt.focus();
    handlePrompt();
}

function handlePrompt() {
    prompt.addEventListener("keydown", e => {
        playSound(soundTyping1);
        switch (e.key) {
            case "Enter":
                cmdHistory.push(prompt.value);
                lastCmdIndex++;
                handleCommand(prompt.value);
                prompt.value = "";
                break;

            case "ArrowUp":
                lastCmdIndex -= lastCmdIndex > 0 ? 1 : 0;
                prompt.value = lastCmdIndex < cmdHistory.length ? cmdHistory[lastCmdIndex] : "";
                break;

            case "ArrowDown":
                lastCmdIndex += lastCmdIndex <= cmdHistory.length ? 1 : 0;
                prompt.value = lastCmdIndex >= cmdHistory.length ? "" : cmdHistory[lastCmdIndex];
                break;
        }
    });
    prompt.addEventListener("keyup", e => playSound(soundTyping2));
}

function showContent() {
    document.querySelector("body").innerHTML += `
        <header class="column"></header>

        <main class="column">
            <div id="terminal-window">
                <section id="terminal-top" class="row">
                    <span class="red circle"></span>
                    <span class="yellow circle"></span>
                    <span class="green circle"></span>
                </section>

                <section id="terminal-body">
                    <div id="terminal-prompt">
                        <span id="user" class="written"></span>
                        <input id="prompt" type="text" value="" autofocus autocomplete="off"/>
                    </div>
                </section>
            </div>
        </main>
    `;
    terminalPrompt = document.querySelector("#terminal-prompt");
    prompt = terminalPrompt.querySelector("#prompt");
    originalTerminalPrompt = terminalPrompt.innerHTML;
    userInput = terminalPrompt.querySelector("#user");
}

function hideSplash() {
    document.querySelector("body").removeChild(document.querySelector("#splash"));
}