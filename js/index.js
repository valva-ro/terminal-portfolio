// For the div
let terminalPrompt = document.getElementById("terminal-prompt");
// Initial state
const originalTerminalPrompt = terminalPrompt.innerHTML;

// For the input
let prompt = document.getElementById("prompt");

// Text before input
let user = document.getElementById("user");

// To storage commands used
let cmdHistory = [];
let lastCmdIndex = 0;

setTimeout(begin, 5000);

function begin() {

    addHandlersToPrompt();

    let header = document.getElementsByTagName("header")[0];

    let title = document.createElement("h1");
    title.className = "row ascii-art";
    title.innerHTML = titleText;
    header.appendChild(title);
    
    welcome.forEach(text => {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = text;
        header.appendChild(paragraph);
    });
}


// Handle the command the user wrote
function handleCommand(command) {

    addParagraph([command], "written");

    switch (command.toLowerCase()) {
        case "--help":
            addParagraph(help);
            break;
        
        case "about":
            addParagraph(about);
            break;

        case "projects":
            addParagraph(projects);
            break;

        case "social":
            addParagraph(social);
            break;

        case "social-github":
            addParagraph(github);
            break;

        case "social-linkedin":
            addParagraph(linkedin);
            break;

        case "contact":
            addParagraph(contact);
            break;

        case "credits":
            addParagraph(credits);
            break;

        case "download":
            addParagraph(TODO);
            break;

        case "clear":
            cleanPrompt();
            break;

        default:
            addParagraph(error);
            playSound(soundWrongCommand, 0.5);
            break;
    }
}

// Add paragraph inside div.terminal-prompt, before input.prompt
function addParagraph(array, className = "") {
    array.forEach(text => {
        let paragraph = document.createElement("p");
        paragraph.className = className;
        paragraph.innerHTML = text;
        terminalPrompt.insertBefore(paragraph, user);
        terminalPrompt.scrollTop = terminalPrompt.scrollHeight;
    });
}

function playSound(audio) {
    audio.volume = 0.5;
    audio.play();
}

function cleanPrompt() {
    terminalPrompt.innerHTML = originalTerminalPrompt;
    terminalPrompt = document.getElementById("terminal-prompt");
    prompt = document.getElementById("prompt");
    user = document.getElementById("user");
    prompt.focus();
    addHandlersToPrompt();
}

function addHandlersToPrompt() {
    prompt.addEventListener("keydown", e => {
        playSound(soundTyping1);
        console.log("key pressed lastCmdIndex ", lastCmdIndex);
        // Enter key
        switch (e.keyCode) {
            // Enter 
            case 13:
                cmdHistory.push(prompt.value);
                lastCmdIndex++;
                handleCommand(prompt.value);
                prompt.value = "";
                console.log("Enter key pressed");
                break;
            // Up arrow
            case 38:
                lastCmdIndex -= lastCmdIndex > 0 ? 1 : 0;
                prompt.value = lastCmdIndex < cmdHistory.length ? cmdHistory[lastCmdIndex] : "";
                console.log("Up arrow pressed lastCmdIndex ", lastCmdIndex);
                break;

            // Down arrow
            case 40:
                lastCmdIndex += lastCmdIndex < cmdHistory.length - 1 ? 1 : 0;
                prompt.value = lastCmdIndex === cmdHistory.length - 1 ? "" : cmdHistory[lastCmdIndex];
                console.log("Down arrow pressed lastCmdIndex ", lastCmdIndex);
                break;
        }
    });

    // When enter key is not pressed anymore
    prompt.addEventListener("keyup", e => playSound(soundTyping2));
}