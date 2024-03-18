let task_inpt = document.getElementById('task_inpt');
let add_btn = document.getElementById('add_btn');
let tasks = document.getElementById('tasks');

task_inpt.focus();

let data = JSON.parse(localStorage.getItem("data")) || [];
let lastId = data.length > 0 ? data[data.length - 1].id : 0;

let inputed_task = () => {
    tasks.innerHTML = data.map((x) => {
        return `<hr><div id="${x.id}" class="flex justify-between"><p>${x.task}</p> <button data-id="${x.id}" class="bi bi-trash3-fill text-red-600 delete-btn"></button></div><br>`;
    }).join("");
}

const deleteTask = (id) => {
    data = data.filter((task) => task.id !== id);
    localStorage.setItem("data", JSON.stringify(data));
    inputed_task();
};

add_btn.addEventListener('click', () => {
    let task = {
        id: lastId + 1,
        task: task_inpt.value
    }

    if (task_inpt.value !== "") {
        data.push(task);
        localStorage.setItem("data", JSON.stringify(data)); 
        lastId++;
    } else {
        alert("Please Enter Task");
    }

    inputed_task();
    task_inpt.value = "";
    task_inpt.focus();
});

tasks.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const taskId = parseInt(event.target.getAttribute('data-id'));
        deleteTask(taskId);
    }
});

inputed_task();


// // Get references to DOM elements
// let task_inpt = document.getElementById('task_inpt');
// let add_btn = document.getElementById('add_btn');
// let tasks = document.getElementById('tasks');

// // Focus on the task input field
// task_inpt.focus();

// // Retrieve data from localStorage or initialize an empty array
// let data = JSON.parse(localStorage.getItem("data")) || [];
// // Get the lastId from the existing data or set it to 0
// let lastId = data.length > 0 ? data[data.length - 1].id : 0;

// // Function to render tasks
// let renderTasks = () => {
//     tasks.innerHTML = data.map((x) => {
//         return `<div id="${x.id}" class="flex justify-between">
//                     <p>${x.task}</p> 
//                     <button data-id="${x.id}" class="bi bi-trash3-fill text-red-600 delete-btn">Delete</button>
//                     <button data-id="${x.id}" class="bi bi-pencil-fill text-blue-600 edit-btn">Edit</button>
//                 </div><br>`;
//     }).join("");
// }

// // Function to delete a task
// const deleteTask = (id) => {
//     data = data.filter((task) => task.id !== id);
//     localStorage.setItem("data", JSON.stringify(data));
//     renderTasks();
// };

// // Function to edit a task
// const editTask = (id) => {
//     let updatedTask = prompt("Enter the updated task:");
//     if (updatedTask !== null) {
//         let taskIndex = data.findIndex(task => task.id === id);
//         if (taskIndex !== -1) {
//             data[taskIndex].task = updatedTask;
//             localStorage.setItem("data", JSON.stringify(data));
//             renderTasks();
//         }
//     }
// }

// // Event listener for adding a new task
// add_btn.addEventListener('click', () => {
//     let task = {
//         id: lastId + 1,
//         task: task_inpt.value
//     }

//     if (task_inpt.value !== "") {
//         data.push(task);
//         localStorage.setItem("data", JSON.stringify(data)); 
//         lastId++;
        
//         // Change button text to "Update"
//         add_btn.innerText = "Update";
//     } else {
//         alert("Please Enter Task");
//     }

//     renderTasks();
//     task_inpt.value = "";
//     task_inpt.focus();
// });

// // Event listener for deleting or editing a task
// tasks.addEventListener('click', (event) => {
//     if (event.target.classList.contains('delete-btn')) {
//         const taskId = parseInt(event.target.getAttribute('data-id'));
//         deleteTask(taskId);
//     } else if (event.target.classList.contains('edit-btn')) {
//         const taskId = parseInt(event.target.getAttribute('data-id'));
//         editTask(taskId);
//     }
// });

// // Initial rendering of tasks
// renderTasks();
