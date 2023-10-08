const inquirer = require('inquirer');
const fs = require('fs');
const genLogo = require('./logoGen');
const  { Square , Triangle, Circle} = require('./lib/shapes')


function createLogo() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose logo shape',
            choices: ['Circle', 'Triangle', 'Square'],
  
        }, 

        {
            type: 'input',
            name: 'text',
            message: 'Please enter logo text',
            
        },

        {
            type: 'input',
            name: 'color',
            message: "please enter color code",
            
        },
        
        {
            type: 'input',
            name: 'shape-color',
            messge: 'Please enter shape color',

        }
    ]).then((answers) => {
            const { shape, text, color, 'shape-color': shapeColor} = answers;

            let logo;
            switch (shape) {
                case 'Circle': 
                    logo = new Circle(text, color, shapeColor);
                    break;
                case 'Triangle': 
                    logo = new Triangle(text, color, shapeColor);
                    break;
                case 'Square' : 
                    logo = new Square(text, color, shapeColor);
                    break;
                default:
                    console.error('Invalid shape choice');
                    return;
            }
            console.log(logo)
            writeToFile(logo);
        });
        
    
       
}

    function writeToFile(answers){
        fs.writeFileSync('logo.svg', answers.render(), (err) => {
            console.log(err);

       })
       console.log('generated');
    }


    createLogo();