"use strict";

const baseURL = "http://localhost:8080";
let error = `<i class="bi bi-x-octagon text-white fs-3"></i>`;
let warning = `<i class="bi bi-exclamation-circle text-dark fs-3"></i>`;
let success = `<i class="bi bi-check-circle text-white fs-3"></i>`;

// ============ FETCH ALL DATA =============================
const fetchData = async () => {
  const response = await fetch(`${baseURL}/task`);
  const data = await response.json();
  console.log(data);
  dataRender(data);
};

fetchData();

// ================= FETCH ALL DATA END ============================

// ================ RENDER DATA =================
function dataRender(data = []) {
  data.length > 0 ?
    data.forEach((el, i) => {
      const tr = createElement(
        "tr",
        "item",
        `
<td>${i + 1}</td>
<td>${el.title}</td>
<td>${el.descrip}</td>
<td>
${el.date}
</td>
<td> <button class="btn btn-warning" data-edit="${
            el.id
          }" data-bs-toggle="modal" data-bs-target="#exampleModal">EDIT</button> </td>
<td> <button class="btn btn-danger" data-del="${el.id}">DELETE</button> </td>
`
      );

      $("#data").appendChild(tr);
    }) :
    ($("#data").innerHTML = "not found");
}

// ============ RENDER ALL  DATA END =================================

// -=========== ADD TASK =============================================

const addTask = () => {
  const taskTitle = $("#taskTitle").value.trim();
  const taskDesc = $("#taskDesc").value.trim();
  const taskDate = $("#taskDate").value.trim();

  if (
    taskTitle.length === 0 ||
    taskDesc.length === 0 ||
    taskDate.length === 0
  ) {

    toastify(error, "please fill form elements", 'crimson')

  } else {
    toastify(success, "successfully added new task", 'seagreen')
    fetch(`${baseURL}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: taskTitle,
        descrip: taskDesc,
        date: taskDate,
      }),
    });
  }
};

$("#add").addEventListener("submit", () => {
  addTask();
});

// ============ ADD TASK END =================

$("#data").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-warning")) {
    let editId = e.target.getAttribute("data-edit");
    sendModal(editId);
  }

  if (e.target.classList.contains("btn-danger")) {
    let delId = e.target.getAttribute("data-del");
    deleteTask(delId);
  }
});

async function sendModal(id) {
  localStorage.setItem("editId", id);
  const response = await fetch(`${baseURL}/task/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  console.log(result);

  const {
    title,
    descrip,
    date
  } = result;

  $("#editTitle").value = title;
  $("#editDesc").value = descrip;
  $("#editDate").value = date;
}


// =========== EDIT DATA =============================
$("#edit").addEventListener("submit", (e) => {
  e.preventDefault();

  let id = localStorage.getItem("editId");

  const taskTitle = $("#editTitle").value.trim();
  const taskDesc = $("#editDesc").value.trim();
  const taskDate = $("#editDate").value.trim();

  if (
    taskTitle.length === 0 ||
    taskDesc.length === 0 ||
    taskDate.length === 0
  ) {
    alert("Please  fill in the task form");
  } else {
    fetch(`${baseURL}/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: taskTitle,
        descrip: taskDesc,
        date: taskDate,
      }),
    });
  }
});

// ========= delet  tasks =================

function deleteTask(id) {


  toastify(error, 'task succesfully deleted', 'seagreen')

  setTimeout(() => {

    $('.toastify').classList.add('hide-toast');

    fetch(`${baseURL}/task/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
  }, 2000)

}



(function () {

  let userName = localStorage.getItem("user");
  let token = localStorage.getItem("token");

  $('#userLogin').innerHTML = `${userName}`;

  if (!token) {
    location.replace('./login.html');
  }

}())

$('#logout').addEventListener('click', () => {
  localStorage.clear();
  location.reload();
})