const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
let employeeArray =  [];
//let internArray = [];
//let engineerArray = [];

//ask manager questions
inquirer.prompt([

    {
        type: "input",
        name: "name",
        message: "What is the first name of the Manager?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the Employee ID of the Manager?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email of the Manager?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's Officce Number?"
    }

]).then((answers) => {
    const mgr = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    employeeArray.push(mgr);
    //getEmployees();
    //render(employeeArray);
    //console.log(render(employeeArray));
    //getEmployeesThen();
    
});

// async function - This just allows us to use the await keyword.
// await keyword - This keyword means we wait for the result of a Promise (In other words we wait for the result of the asynchrnous function, in this case inquirer.prompt).
// return Promise (which is just any asynchronous function. In this case inquirer.prompt).
async function getEmployees() {
    let endLoop = false;

    while (!endLoop) {
        let res = await getEmployeeType();
        
        if (res.add === "Engineer") {
            employeeArray.push(await getEngineerInfo());
        } else if (res.add === "Intern") {
            employeeArray.push(await getInternInfo());
        } else {
            endLoop = true;
            console.log(employeeArray);
            render(employeeArray);
        }
    }
}

function getEmployeesThen() {
    let endLoop = false;

    while (!endLoop) {
        getEmployeeType().then(function(res) {
            if (res.add === "Engineer") {
                getEngineerInfo().then(function(res2) {
                    engineerArray.push(res2);
                });
            } else if (res.add === "Intern") {
                getInternInfo().then(function(res2) {
                    internArray.push(res2);
                });
            } else {
                endLoop = true;
            }
        });
    }
}



function getEmployeeType() {
    return inquirer.prompt([
        {
            type: "list",
            name: "add",
            message: "What employee would you like to add?",
            choices: ["Engineer", "Intern", "I'm done"]
        }
    ]);
}


// github username
//getEngineerInfo()
function getEngineerInfo() {

    return inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "What is the first name of the Engineer?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Employee ID of the Engineer?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee email of the Engineer?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's GitHub username?"
        }

    ])
        // .then((answers) => {
        //     //console.log(`Test: ${answers.github}`);


        // })
        // .catch((err) => {

        //     console.log(err);
        // })
}
//school
//getInternInfo()
function getInternInfo() {

    return inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "What is the first name of the Intern?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Employee ID of the Intern?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee email of the Intern?"
        },
        {
            type: "input",
            name: "school",
            message: "What school did the Intern attend?"
        }

    ])
        // .then((answers) => {
        //     //console.log(`Test: ${answers.school}`);


        // })
        // .catch((err) => {

        //     console.log(err);
        // })
}
//office number
//getManagerInfo()
function getManagerInfo() {

    inquirer.prompt([

        {
            type: "input",
            name: "name",
            message: "What is the first name of the Manager?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the Employee ID of the Manager?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the email of the Manager?"
        },
        {
            type: "input",
            name: "office",
            message: "What is the Manager's Office Number?"
        }

    ])
        .then((answers) => {
            //console.log(`Test: ${answers.office}`);
            

        })
        .catch((err) => {

            console.log(err);
        })
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```





// ask if u want another
        // add another or done 

        // inquirer.prompt([

        //     {
        //         type: "confirm",
        //         name: "anotherEmp",
        //         message: "Would you like to add another Employee?"
        //     }
        // ])


        //     .then((answer) => {


        //         if (answer.anotherEmp === true) {

        //             addEmployee();
        //         } else 



        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })