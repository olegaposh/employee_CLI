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

//What type of Employee would you like to add?
// Engineer - email, id, githubname 
// Intern - name, email, id, school 

// get engineers
// get interns 


let internArray = [];
let engineerArray = [];
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
        name: "office",
        message: "What is the Manager's Office Number?"
    }
    
])
.then((answers) => {
    
    getEmployeeType();
    function anotherEmp() {
    inquirer.prompt([

        {
            type: "confirm",
            name: "anotherEmp",
            message: "Would you like to add another Employee?"
        }
    ])
    }
    anotherEmp()
    .then((answer) => {

        while (answer.anotherEmp === true) {

            getEmployeeType();
            anotherEmp();
        }
    })



})
.catch((err) => {

    console.log(err);
})

// let moreEmployees == true;


// while (moreEmployees == true) {
//   let employee = getEmployeeType();

//   if (employee === "intern") {
//     internArray.push(getInternInfo());
//   } else if (employee === "engineer") {
//     engineerArray.push(getEngineerInfo());
//   }
//   moreEmployees = addMoreEmployees();
// }





function getEmployeeType() {
    inquirer.prompt([

        {
            type: "list",
            name: "type",
            message: "What employee would you like to add?",
            choices: ["Engineer", "Intern"]

        }


    ])
        .then(function (answers) {
            console.log(`Test: ${answers.type}`);
            if (answers.type === "Engineer") {
                engineerArray.push(getEngineerInfo());
            } else {
                internArray.push(getInternInfo());
            }
        })
}

// github username
//getEngineerInfo()
function getEngineerInfo() {

    inquirer.prompt([

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
    .then((answers) => {
        console.log(`Test: ${answers.github}`);


    })
    .catch((err) => {

        console.log(err);
    })
}
//school
//getInternInfo()
function getInternInfo() {

    inquirer.prompt([

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
    .then((answers) => {
        console.log(`Test: ${answers.school}`);


    })
    .catch((err) => {

        console.log(err);
    })
}
//office number
//getManagerInfo()
function getManagerInfo(callback) {

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
        console.log(`Test: ${answers.office}`);
        callback();

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
