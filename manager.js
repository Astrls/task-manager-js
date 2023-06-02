// // MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require("fs");
const { toUnicode } = require("punycode");
const readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

// // const showtasks = () => {
// //     console.log(tasks)
// // }

// // showtasks()
gi
// EXEMPLE
// rl.question('What is your age? ', (age) => {
//     console.log('Your age is: ' + age);
//     rl.close();
// });

// let taskList = ["task1","task2"];

let taskList = [
  { taskname: "task1", isdone: "todo" },
  { taskname: "task2", isdone: "todo" },
];

function showTaskList() {
  let i = taskList.length;
  taskList.forEach((i) => console.log(i));
  console.log(i);
  return openMenu();
}

function addTask() {
  rl.question("What task do you want to add? ", function (input) {
    taskList.push(input);
    let i = taskList.length;
    taskList.forEach((i) => console.log(i));
    console.log(i);
    return openMenu();
  });
}

function deleteTask() {
  console.log("these are your current tasks:\n" + taskList);
  rl.question(
    "type the name of the task you want to remove: ",
    function (input) {
      const index = String(taskList.indexOf(input));
      if (index > 1) {
        taskList.splice(index, 1);
      }
      console.log(taskList.taskname);
      return openMenu();
    }
  );
}

function markDone() {
  console.log("marking a task as done");
  exit();
}

function exit() {
  return process.exit();
  exit();
}

function openMenu() {
  rl.question(
    `Welcome to your task manager, Press:
    1. to see all your tasks
    2. to add a task
    3. to delete a task
    4. to mark a task as done
    5. to Exit the task manager
    `,
    function (choiceNb) {
      switch (choiceNb) {
        case "1":
          console.log("Showing your current tasks:");
          return showTaskList();
          break;
        case "2":
          return addTask();
          break;
        case "3":
          return deleteTask();
          break;
        case "4":
          return markDone();
          break;
        case "5":
          return exit();
          break;
        default:
          console.log("Sorry, you need to type a number between 1 & 6");
          return exit();
      }
    }
  );
}

return openMenu();
