// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let taskName:Array<string> = ["taskName"];
let taskDate:Array<string> =["taskDate"];
let taskStatus:Array<string> =["taskStatus"];



let task =[ {taskName: "Task 1",
             taskDate: "01/08/2020",
             taskStatus: "todo"},

             {taskName: "Task 2",
             taskDate: "02/08/2020",
             taskStatus: "Pending"},

             {taskName: "Task 3",
             taskDate: "03/08/2020",
             taskStatus: "Pending"},

             {taskName: "Task 4",
             taskDate: "04/08/2020",
             taskStatus: "done"},

             {taskName: "Task 5",
             taskDate: "05/08/2020",
             taskStatus: "pending"},

             {taskName: "Task 6",
             taskDate: "06/08/2020",
             taskStatus: "Pending"},

             {taskName: "Task 7",
             taskDate: "07/08/2020",
             taskStatus: "Pending"},

             {taskName: "Task 8",
             taskDate: "08/08/2020",
             taskStatus: "done"},

             {taskName: "Task 9",
             taskDate: "09/08/2020",
             taskStatus: "pending"},

             {taskName: "Task 10",
             taskDate: "10/08/2020",
             taskStatus: "pending"}];




/*
function update(){
  //this.task1[4]= {taskStatus:"done"};
}
*/

             console.log(task[0].taskName,
                         task[0].taskDate,
                         task[0].taskStatus);

             console.log(task[1].taskName,
                         task[1].taskDate,
                         task[1].taskStatus);

            console.log(task[2].taskName,
                         task[2].taskDate,
                         task[2].taskStatus);

            console.log(task[3].taskName,
                         task[3].taskDate,
                         task[3].taskStatus);

            console.log(task[4].taskName,
                         task[4].taskDate,
                         task[4].taskStatus);

            console.log(task[5].taskName,
                         task[5].taskDate,
                         task[5].taskStatus);

             console.log(task[6].taskName,
                         task[6].taskDate,
                         task[6].taskStatus);

            console.log(task[7].taskName,
                         task[7].taskDate,
                         task[7].taskStatus);

            console.log(task[8].taskName,
                         task[8].taskDate,
                         task[8].taskStatus);

            console.log(task[9].taskName,
                         task[9].taskDate,
                         task[9].taskStatus);         