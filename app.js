const addTask = document.querySelector("#addTask");
const taskTitle = document.querySelector("#taskTitle");
const taskCat = document.querySelector("#TaskCategory");
const app = document.querySelector(".app");

let taskArr = [
  {
    title: "Tidy up living room",
    category: "❤️ Personal",
    enableEdit: false,
  },
  {
    title: "Finishing Project Presentation",
    category: "🕑  Work",
    enableEdit: false,
  },
  {
    title: "Studying JavaScript & React",
    category: "🎓 Learning",
    enableEdit: false,
  },
];

// Function to display Tasks in the App Container
const showTasks = () => {
  app.innerHTML = "";
  for (let i = 0; i < taskArr.length; i++) {
    let taskCard = `
            <div class="task-card">
                <div class="task-card-left">
                    <input class="taskTitle${[i]}" type="textarea" value="${
      taskArr[i].title
    }" /disabled />
                    <div class="card-lower">
                        <p>${taskArr[i].category}</p>
                        <button class="task-button editBtn${[
                          i,
                        ]}"><i class="fa-solid fa-pencil"></i></button>
                        <button class="task-button deleteBtn${[
                          i,
                        ]}"><i class="fa-solid fa-trash-can"></i></button>
                        <button class="task-button checkBtn${[
                          i,
                        ]}"><i class="fa-solid fa-check"></i></button>
                    </div>
                </div>
            </div>
        `;
    app.innerHTML += taskCard;
  }
};

// Initialize the Array in the App
showTasks();

// Add new Task on Submit
addTask.addEventListener("click", (event) => {
  event.preventDefault();

  newTask = {
    title: taskTitle.value,
    category: taskCat.options[taskCat.selectedIndex].value,
  };

  taskArr.push(newTask);
  showTasks();
});

// Enable Edit, Delete and Done function
for (let i = 0; i < taskArr.length; i++) {
  // Edit Task
  let getEditBtn = ".editBtn" + [i];
  let editBtn = document.querySelector(getEditBtn);
  let getTaskTitle = ".taskTitle" + [i];
  let taskTitle = document.querySelector(getTaskTitle);

  editBtn.addEventListener("click", () => {
    if (taskArr[i].enableEdit === false) {
      taskTitle.disabled = false;
      taskTitle.focus();
      taskArr[i].enableEdit = true;
      editBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
      editBtn.style.background = "rgb(241, 182, 22)";

      editBtn.addEventListener("click", (e) => {
        taskArr[i].title = taskTitle.value;
      });
    } else {
      taskTitle.disabled = true;
      taskArr[i].enableEdit = false;
      editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
      editBtn.style.background = "#303030";
    }
  });
}
