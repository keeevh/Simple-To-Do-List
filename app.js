const addTask = document.querySelector("#addTask");
const taskTitle = document.querySelector("#taskTitle");
const taskCat = document.querySelector("#TaskCategory");
const app = document.querySelector(".app");

let taskArr = [
  {
    title: "Tidy up living room",
    category: "❤️ Personal",
    enableEdit: false,
    active: true,
  },
  {
    title: "Finishing Project Presentation",
    category: "🕑  Business",
    enableEdit: false,
    active: true,
  },
  {
    title: "Studying JavaScript & React",
    category: "🎓 Learning",
    enableEdit: false,
    active: true,
  },
];

let doneTasks = [];

// Function to display Tasks in the App Container
const showTasks = () => {
  if (taskArr.length === 0) {
    app.innerHTML = `
    <h2>You don't have any commitments</h2>
    <p>Add a task to get started!</p>
    `;
  } else if (taskArr.length === 1) {
    app.innerHTML = `
    <h2>You have 1 commitment</h2>
    <p>Looking good so far, keep going!</p>
    `;
  } else {
    app.innerHTML = `
    <h2>You have ${taskArr.length} commitments</h2>
    <p>Time to get things done!</p>
    `;
  }

  // refreshs the app.js content
  for (let i = 0; i < taskArr.length; i++) {
    let taskCard = `
            <div class="task-card">
                <div class="task-card-left">
                    <input class="taskTitle${[i]}" type="text" value="${
      taskArr[i].title
    }" /disabled />
                    <div class="card-lower">
                        <p>${taskArr[i].category}</p>
                        <div>
                          <button class="task-button editBtn${[
                            i,
                          ]}"><i class="fa-solid fa-pencil"></i></button>
                          <button class="task-button deleteBtn${[
                            i,
                          ]}"><i class="fa-solid fa-trash-can"></i></button>
                          <button class="task-button greenBG checkBtn${[
                            i,
                          ]}"><i class="fa-solid fa-check"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    app.innerHTML += taskCard;
  }

  // let's you edit the task and update the object in taskArr
  for (let i = 0; i < taskArr.length; i++) {
    const getEditBtn = ".editBtn" + [i];
    const editBtn = document.querySelector(getEditBtn);
    const getDeleteBtn = ".deleteBtn" + [i];
    const deleteBtn = document.querySelector(getDeleteBtn);
    const getCheckBtn = ".checkBtn" + [i];
    const checkBtn = document.querySelector(getCheckBtn);
    const getTaskTitle = ".taskTitle" + [i];
    const taskTitle = document.querySelector(getTaskTitle);

    editBtn.addEventListener("click", () => {
      if (taskArr[i].enableEdit === false) {
        // makes title editable and modifies edit button
        taskTitle.disabled = false;
        taskTitle.focus();
        taskArr[i].enableEdit = true;
        editBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
        editBtn.style.background = "rgb(241, 182, 22)";

        // deactivates check & delete button
        deleteBtn.disabled = true;
        deleteBtn.style.opacity = "25%";
        checkBtn.disabled = true;
        checkBtn.style.opacity = "25%";

        editBtn.addEventListener("click", (e) => {
          taskArr[i].title = taskTitle.value;
        });
      } else {
        // disables title editing and returns to old edit button
        taskTitle.disabled = true;
        taskArr[i].enableEdit = false;
        editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
        editBtn.style.background = "#303030";

        // activates check & delete button
        deleteBtn.disabled = false;
        deleteBtn.style.opacity = "100%";
        checkBtn.disabled = false;
        checkBtn.style.opacity = "100%";
      }
    });
  }

  // removes the object from array + DOM on button click
  for (let i = 0; i < taskArr.length; i++) {
    const getDeleteBtn = ".deleteBtn" + [i];
    const deleteBtn = document.querySelector(getDeleteBtn);

    deleteBtn.addEventListener("click", () => {
      taskArr.splice([i], 1);
      showTasks();
      /* deleteBtn.parentElement.parentElement.parentElement.parentElement.remove(); */
    });
  }

  // removes task from array and pushes to new array
  for (let i = 0; i < taskArr.length; i++) {
    const getCheckBtn = ".checkBtn" + [i];
    const checkBtn = document.querySelector(getCheckBtn);

    checkBtn.addEventListener("click", () => {
      let currentTask = taskArr.splice([i], 1);
      doneTasks.push(currentTask);
      showTasks();
    });
  }
};

// Initialize the Array in the App
showTasks();

// Add new Task on Submit
addTask.addEventListener("click", (event) => {
  event.preventDefault();

  if (taskTitle.value === "") {
    alert("You have to enter a task to submit!");
  } else {
    newTask = {
      title: taskTitle.value,
      category: taskCat.options[taskCat.selectedIndex].value,
    };

    taskArr.push(newTask);
    showTasks();
    taskTitle.value = "";
  }
});
