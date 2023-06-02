// // MY TASK MANAGER - TERMINAL

// SETUP CODE
const fs = require("fs");
const { toUnicode } = require("punycode");
const readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

//Array of objects for task list
let taskList = [
  //   { taskname: "task1", isdone: "-> to do" },
  //   { taskname: "task2", isdone: "-> to do" },
];

//Function calling the task presents in the task list
function showTaskList() {
  let a = taskList.length;
  if (a <= 0) {
    console.log("\n There are no tasks in your list for now...\n");
  } else {
    console.log(
      "these are your current tasks:\n \n" +
        taskList.map((a) => `${a.taskname} ${a.isdone}`).join("\r\n") +
        "\n"
    );
  }
  return openMenu();
}

//Function adding a task to the task list and setting its isdone status to "to do"
function addTask() {
  rl.question("What task do you want to add? ", function (input) {
    const OBJ = { taskname: input, isdone: "-> to do" };
    taskList.push(OBJ);
    console.log(`\nYour task ${input} has been added to the list\n`);
    return openMenu();
  });
}

//Function removing a task from the task list
function deleteTask() {
  console.log(
    "these are your current tasks:\n \n" +
      taskList.map((a) => `${a.taskname} ${a.isdone}`).join("\r\n") +
      "\n"
  );
  rl.question(
    "type the name of the task you want to remove: ",
    function (input) {
      const INDEX2 = taskList.findIndex((v) => v.taskname == String(input));
      if (INDEX2 > -1 && INDEX2 <= taskList.length) {
        taskList.splice(INDEX2, 1);
        console.log(input + " has been removed");
        return openMenu();
      } else {
        console.log("this is not in your task list");
        return deleteTask();
      }
    }
  );
}

//Function setting the status of a specific task to "DONE"
function markDone() {
  console.log(
    "these are your current tasks:\n \n" +
      taskList.map((a) => `${a.taskname} ${a.isdone}`).join("\r\n") +
      "\n"
  );
  rl.question("What task do you want to mark as done? ", function (input) {
    const INDEX3 = taskList.findIndex((v) => v.taskname == String(input));
    if (INDEX3 > -1 && INDEX3 <= taskList.length) {
      taskList[INDEX3].isdone = "-> DONE";
      return openMenu();
    } else {
      console.log("this is not in your task list");
      return deleteTask();
    }
  });
}

//Function to exit the program
function exit() {
  return process.exit();
}

//Menu to select the options
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
          console.log("Sorry, you need to type a number between 1 & 5\n");
          return openMenu();
      }
    }
  );
}

return openMenu();
