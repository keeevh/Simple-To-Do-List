const addTask = document.querySelector("#addTask");
const taskTitle = document.querySelector("#taskTitle");
const taskCat = document.querySelector("#TaskCategory");
const app = document.querySelector(".app");

let taskArr = [
  {
    title: "Tidy up living room",
    category: "❤️ Personal",
  },
  {
    title: "Finishing Project Presentation",
    category: "🕑  Work",
  },
  {
    title: "Studying JavaScript & React",
    category: "🎓 Learning",
  },
];

// Function to display Tasks in the App Container
const showTasks = () => {
  for (let i = 0; i < taskArr.length; i++) {
    let taskCard = `
            <div class="task-card">
                <div class="task-card-left">
                    <input type="textarea" value="${taskArr[i].title}" /disabled />
                    <div class="card-lower">
                        <p>${taskArr[i].category}</p>
                        <button class="task-button edit-button"><i class="fa-solid fa-pencil"></i></button>
                        <button class="task-button"><i class="fa-solid fa-trash-can"></i></button>
                        <button class="task-button check-button"><i class="fa-solid fa-check"></i></button>
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
taskArr.forEach((el) => {
  
});
