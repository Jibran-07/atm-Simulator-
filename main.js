import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "enter your pin",
        type: "number"
    }]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "please select an option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "enter amount to withdraw",
                type: "number"
            }]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`Your balance is ${myBalance}`);
        }
        else {
            console.log("Insufficient balance!");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let choiceAns = await inquirer.prompt([{
                name: "choice",
                message: "please select an amount",
                type: "list",
                choices: [5000, 10000, 15000]
            }]);
        if (choiceAns.choice <= myBalance) {
            myBalance -= choiceAns.choice;
            console.log(`Your remaining balance is ${myBalance}`);
        }
        else {
            console.log("Insufficient balance!");
        }
    }
}
else {
    console.log("InCorrect pin code");
}
