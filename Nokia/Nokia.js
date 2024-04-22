const prompt = require("prompt-sync")();

function displayMenu(){
    console.log("NOKIA CONNECTING PEOPLE")
    console.log("1. Phonebook\n" +
        "2. Messages\n" +
        "3. Chat\n" +
        "4. Call Register\n" +
        "5. Tones\n" +
        "6. Settings\n" +
        "7. Call Divert\n" +
        "8. Games\n" +
        "9. Calculator\n" +
        "10. Reminders\n" +
        "11. Clock\n" +
        "12. Profiles\n" +
        "13. Sim Services\n")
}

function phoneBookMenu() {
    console.log("PHONEBOOK MENU")
    console.log("1. Search\n" +
        "2. Service Nos\n" +
        "3. Add name\n" +
        "4. Erase\n" +
        "5. Edit\n" +
        "6. Assign tone\n" +
        "7. Send b'card\n" +
        "8. Options\n" +
        "9. Speed dials\n" +
        "10. Voice tags\n")
}

function phonebookOptionMenu() {
    console.log("Phonebook Options")
    console.log("1. Type of View\n" +
        "2. Memory Status\n")
}

function messageMenu() {
    console.log("MESSAGE MENU")
    console.log("1. Write messages\n" +
        "2. Inbox\n" +
        "3. Outbox\n" +
        "4. Picture messages\n" +
        "5. Templates\n" +
        "6. Smileys\n" +
        "7. Message settings\n" +
        "8. Info service\n" +
        "9. Voice mailbox number\n" +
        "10: Service command editor\n")
}

function messageSettingsMenu() {
    console.log("Message Settings")
    console.log("1. Set\n" +
        "2. Common\n")
}

function messageSettingsSetMenu() {
    console.log("Message Settings >> Set")
    console.log("1. Message centre number\n" +
        "2. Messages sent as\n" +
        "3. Message validity")
}

function messageSettingsCommonMenu() {
    console.log("Message Settings >> Common")
    console.log("1. Delivery reports\n" +
        "2. Reply via same centre\n" +
        "3. Character support\n")
}

function callRegisterMenu() {
    console.log("CALL REGISTER")
    console.log("1. Missed calls\n" +
        "2. Received calls\n" +
        "3. Dialed numbers\n" +
        "4. Erase recent call lists\n" +
        "5. Show call duration\n" +
        "6. Show call costs\n" +
        "7. Call cost settings\n" +
        "8. Prepaid credit\n")
}

function callDurationMenu() {
    console.log("Call Register >> Show Call Duration")
    console.log("1. Last call duration\n" +
        "2. All calls' duration\n" +
        "3. Received calls' duration\n" +
        "4. Dialed calls' duration\n" +
        "5. Clear timers\n")
}

function callCostMenu() {
    console.log("Call Register >> Show Call Costs")
    console.log("1. Last call cost\n" +
        "2. All calls' cost\n" +
        "3. Clear counters\n")
}

function callCostSettingsMenu() {
    console.log("Call Register >> Call Cost Settings")
    console.log("1. Call cosot limit\n" +
        "2. Show costs in\n")
}

function tonesMenu() {
    console.log("TONES MENU")
    console.log("1. Ringing tone\n" +
        "2. Ringing volume\n" +
        "3. Incoming call alert\n" +
        "4. Composer\n" +
        "5. Message alert tone\n" +
        "6. Keypad tone\n" +
        "7. Warning and game tones\n" +
        "8. Vibrating alert\n" +
        "9. Screen saver\n")
}

function settingsMenu() {
    console.log("SETTINGS MENU")
    console.log("1. Call settings\n" +
        "2. Phone settings\n" +
        "3. Security settings\n" +
        "4. Restore factory settings\n")
}

function callSettings() {
    console.log("Settings >> Call Settings")
    console.log("1. Automatic redial\n" +
        "2. Speed dialing\n" +
        "3. Call waiting options\n" +
        "4. Pwn number sending\n" +
        "5. Phone line in use\n" +
        "6. Automatic answer\n")
}

function phoneSettings() {
    console.log("Settings >> Phone Settings")
    console.log("1 Language\n" +
        "2. Cell info display\n" +
        "3. Welcome note\n" +
        "4. Network selection\n" +
        "5. Lights\n" +
        "6. Confirm SIM service actions")
}

function securitySettings() {
    console.log("Settings >> Security Settings")
    console.log("1. PIN code request\n" +
        "2. Call barring service\n" +
        "3. Fixed dialing\n" +
        "4. Closed user group\n" +
        "5. Phone security\n" +
        "6. Change access codes")
}

function clockMenu() {
    console.log("CLOCK MENU")
    console.log("1. Alarm clock\n" +
        "2. Clock settings\n" +
        "3. Date settings\n" +
        "4. Stopwatch\n" +
        "5. Countdown timer\n" +
        "6. Auto update of date and time\n")
}

function main(){
    displayMenu()
    let choice = prompt("Select an option, 0 to exit: ")
    console.log()

    switch (choice){
        case '1':
            phoneBookMenu();
            let phonebookChoice = prompt("Select an option, 0 to go back to main")
            switch (phonebookChoice){
                case '1':
                    console.log("Search Phonebook")
                    break;
                case '2':
                    console.log("Service Nos")
                    break;
                case '3':
                    console.log("Create A Contact")
                    break;
                case '4':
                    console.log("Delete Contact")
                    break;
                case '5':
                    console.log("Edit a Contact")
                    break;
                case '6':
                    console.log("Assign Tone to a Contact")
                    break;
                case '7':
                    console.log("Send Business Card")
                    break;
                case '8':
                    phonebookOptionMenu()
                    let optionChoice = prompt("Select an option, any key to go back to main: ")
                    switch (optionChoice){
                        case '1':
                            console.log("You are viewing a contact")
                            break;
                        case '2':
                            console.log("You have used 10/100 of your phone's memory status")
                            break;
                        default:
                            displayMenu()
                    }
                    break;
                case '9':
                    console.log("View speed dials")
                    break;
                case '10':
                    console.log("Voice tags")
                    break;
                case '0':
                    displayMenu();
                    break;
                default:
                    console.log("Invalid")
                    phoneBookMenu()
            }
            break;
        case '2':
            messageMenu()
            let messageChoice = prompt("Select an option, 0 to go back to main: ")
            switch (messageChoice){
                case '1':
                    console.log("Write a message")
                    break;
                case '2':
                    console.log("Inbox")
                    break;
                case '3':
                    console.log("Outbox")
                    break;
                case '4':
                    console.log("Picture messages")
                    break;
                case '5':
                    console.log("Templates")
                    break;
                case '6':
                    console.log("Smileys")
                    break;
                case '7':
                    messageSettingsMenu()
                    let messageSettingsOption = prompt("Select an option, any key to go back to main: ")
                    switch (messageSettingsOption){
                        case '1':
                            messageSettingsSetMenu()
                            break;
                        case '2':
                            messageSettingsCommonMenu()
                            break;
                        default:
                            displayMenu()
                    }
                    break;
                case '8':
                    console.log("Info service")
                    break;
                case '9':
                    console.log("View mailbox number")
                    break;
                case '10':
                    console.log("Service command editor")
                    break;
                case '0':
                    displayMenu();
                    break;
                default:
                    console.log("Invalid")
                    messageMenu()
            }
            break;
        case '3':
            console.log("START CHAT")
            break;
        case '4':
            callRegisterMenu()
            let callRegisterChoice = prompt("Select an option, 0 to go back to main: ")
            switch (callRegisterChoice){
                case '1':
                    console.log("View Missed Calls")
                    break;
                case '2':
                    console.log("View Received Calls")
                    break;
                case '3':
                    console.log("Check Dialed numbers")
                    break;
                case '4':
                    console.log("Erase Recent call lists")
                    break;
                case '5':
                    callDurationMenu()
                    let callDurationOptions = prompt("Select an option, any key to go back to main: ")
                    switch (callDurationOptions){
                        case '1':
                            console.log("Displaying last call duration")
                            break;
                        case '2':
                            console.log("Displaying all call's duration")
                            break;
                        case '3':
                            console.log("Displaying received calls' duration")
                            break;
                        case '4':
                            console.log("Displaying dialed calls' duration")
                            break;
                        case '5':
                            console.log("Displaying clear timers")
                            break;
                        default:
                            callRegisterMenu()
                    }
                    break;
                case '6':
                    callCostMenu()
                    let callCostOptions = prompt("Select an option, any key to go back to main: ")
                    switch (callCostOptions){
                        case '1':
                            console.log("Your last call was 5k")
                            break;
                        case '2':
                            console.log("All your calls are 10k")
                            break;
                        case '3':
                            console.log("Clearing counters")
                            break;
                        default:
                            callRegisterMenu()
                    }
                    break;
                case '7':
                    callCostSettingsMenu()
                    let costSettingsOptions = prompt("Select an option, any key to go back to main: ")
                    switch (costSettingsOptions){
                        case '1':
                            console.log("Your limit is 6k")
                            break;
                        case '2':
                            console.log("All costs incurred is 15k")
                            break;
                        default:
                            callRegisterMenu()
                    }
                    break;
                case '8':
                    console.log("Prepaid credit")
                    break;
                case '0':
                    displayMenu();
                    break;
                default:
                    console.log("Invalid")
                    callRegisterMenu()
            }
            break;
        case '5':
            tonesMenu();
            let tonesChoice = prompt("Select an option, 0 to go back to main")
            switch (tonesChoice){
                case '1':
                    console.log("Set ringing tone")
                    break;
                case '2':
                    console.log("Set ringing volume")
                    break;
                case '3':
                    console.log("Set incoming call alert")
                    break;
                case '4':
                    console.log("Create a tone")
                    break;
                case '5':
                    console.log("Set message alert tone")
                    break;
                case '6':
                    console.log("Set keypad tones")
                    break;
                case '7':
                    console.log("Set warning and game tones")
                    break;
                case '8':
                    console.log("Set Vibrating alert")
                    break
                case '9':
                    console.log("Set screen saver")
                    break;
                case '0':
                    displayMenu();
                    break;
                default:
                    console.log("Invalid")
                    tonesMenu()
            }
            break;
        case '6':
            settingsMenu();
            let settingsOptions = prompt("Select an option, 0 to go back to main")
            switch (settingsOptions){
                case '1':
                    callSettings()
                    let callSettingsOption = prompt("Select an option, any key to go back to main: ")
                    switch (callSettingsOption){
                        case '1':
                            console.log("Automatic redial activated")
                            break;
                        case '2':
                            console.log("Speed dialing activated")
                            break;
                        case '3':
                            console.log("Check call waiting options")
                            break;
                        case '4':
                            console.log("Sending own number")
                            break;
                        case '5':
                            console.log("Sim 2 currently in use")
                            break;
                        case '6':
                            console.log("Automatic answer set successfully")
                            break;
                        default:
                            settingsMenu()
                    }
                    break;
                case '2':
                    phoneSettings()
                    let phoneSettingsOptions = prompt("Select an option, any key to go back to main: ")
                    switch (phoneSettingsOptions){
                        case '1':
                            console.log("Setting phone language")
                            break;
                        case '2':
                            console.log("Displaying cell info")
                            break;
                        case '3':
                            console.log("Create welcome note")
                            break;
                        case '4':
                            console.log("Set network selection")
                            break;
                        case '5':
                            console.log("Set phone lights")
                            break;
                        case '6':
                            console.log("Confirming SIM service actions")
                            break;
                        default:
                            settingsMenu()
                    }
                    break;
                case '3':
                    securitySettings()
                    let securityOptions = prompt("Select an option, any key to go back to main: ")
                    switch (securityOptions){
                        case '1':
                            console.log("Creating PIN code")
                            break;
                        case '2':
                            console.log("Barring incoming calls")
                            break;
                        case '3':
                            console.log("Setting fixed dials")
                            break;
                        case '4':
                            console.log("Closing user groups")
                            break;
                        case '5':
                            console.log("Setting phone security")
                            break;
                        case '6':
                            console.log("Access codes changed successfully")
                            break;
                        default:
                            settingsMenu()
                    }
                    break;
                case '4':
                    console.log("Restoring factory settings ...")
                    break;
                case '0':
                    displayMenu();
                    break;
                default:
                    console.log("Invalid")
                    settingsMenu()
            }
            break;
        case '7':
            console.log("CALL DIVERT")
            break;
        case '8':
            console.log("GAMES")
            break;
        case '9':
            console.log("Calculator")
            break;
        case '10':
            console.log("Reminders")
            break;
        case '11':
            clockMenu()
            let clockChoice = prompt("Select an option, 0 to go back to main: ")
            switch (clockChoice){
                case '1':
                    console.log("Set alarm clock")
                    break;
                case '2':
                    console.log("Set phone clock")
                    break;
                case '3':
                    console.log("Set phone date")
                    break;
                case '4':
                    console.log("Start stopwatch")
                    break;
                case '5':
                    console.log("Start countdown timer")
                    break;
                case '6':
                    console.log("Date and time auto updated")
                    break;
                case '0':
                    displayMenu();
                    break;
                default:
                    console.log("Invalid")
                    clockMenu()
            }
            break;
        case '12':
            console.log("PROFILES")
            break;
        case '13':
            console.log("SIM SERVICES")
            break;
        case '0':
            process.exit(69)
            break
        default:
            console.log("Invalid")
            displayMenu()
    }
}

main();