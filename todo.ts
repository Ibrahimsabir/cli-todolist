import inquirer from "inquirer"

let toDos: string[]=[];
let condition = true;

while(condition){
let addList= await inquirer.prompt(
    [
        {
            name:"todo",
            type:"input",
            message:"What do you want to add in your todo list?",
           
        },
        
        {
            name:"addmore",
            type:"confirm",
            message:"Do you want to add another?",
            default:"false"
        }
    ]
   
);
toDos.push(addList.todo);

console.log(toDos)
condition= addList.addmore;
}