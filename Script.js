const tasks = [
  "06.00 - Bangun & berdoa malaikat Tuhan",
  "06.30 - Olahraga & mandi",
  "07.00 - OTW Kampus",
  "07.30 - Ngampus",
  "12.00 - Makan & malaikat Tuhan",
  "16.30 - Pulang kampus",
  "17.00 - Istirahat",
  "18.00 - Makan & malaikat Tuhan",
  "18.30 - Belajar",
  "20.00 - Workout",
  "21.00 - Rehat & mandi",
  "21.30 - Prepare tidur",
  "22.00 - Tidur"
];

const todoList = document.getElementById('todoList');

function renderTasks() {
  todoList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `task-${index}`;
    checkbox.checked = localStorage.getItem(`task-${index}`) === 'true';
    checkbox.addEventListener('change', () => {
      localStorage.setItem(`task-${index}`, checkbox.checked);
    });

    const label = document.createElement('label');
    label.setAttribute('for', `task-${index}`);
    label.textContent = task;

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    todoList.appendChild(taskDiv);
  });
}

function resetWeekly() {
  const lastReset = localStorage.getItem('lastReset');
  const now = new Date();
  const last = lastReset ? new Date(lastReset) : new Date(0);

  if ((now - last) > 1000 * 60 * 60 * 24 * 7) {
    tasks.forEach((_, index) => {
      localStorage.removeItem(`task-${index}`);
    });
    localStorage.setItem('lastReset', now.toISOString());
  }
}

window.onload = () => {
  resetWeekly();
  renderTasks();
};const tasks = [
  "06.00 - Bangun & berdoa malaikat Tuhan",
  "06.30 - Olahraga & mandi",
  "07.00 - OTW Kampus",
  "07.30 - Ngampus",
  "12.00 - Makan & malaikat Tuhan",
  "16.30 - Pulang kampus",
  "17.00 - Istirahat",
  "18.00 - Makan & malaikat Tuhan",
  "18.30 - Belajar",
  "20.00 - Workout",
  "21.00 - Rehat & mandi",
  "21.30 - Prepare tidur",
  "22.00 - Tidur"
];

const todoList = document.getElementById('todoList');

function renderTasks() {
  todoList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `task-${index}`;
    checkbox.checked = localStorage.getItem(`task-${index}`) === 'true';
    checkbox.addEventListener('change', () => {
      localStorage.setItem(`task-${index}`, checkbox.checked);
    });

    const label = document.createElement('label');
    label.setAttribute('for', `task-${index}`);
    label.textContent = task;

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    todoList.appendChild(taskDiv);
  });
}

function resetWeekly() {
  const lastReset = localStorage.getItem('lastReset');
  const now = new Date();
  const last = lastReset ? new Date(lastReset) : new Date(0);

  if ((now - last) > 1000 * 60 * 60 * 24 * 7) {
    tasks.forEach((_, index) => {
      localStorage.removeItem(`task-${index}`);
    });
    localStorage.setItem('lastReset', now.toISOString());
  }
}

window.onload = () => {
  resetWeekly();
  renderTasks();
};￼Enter
