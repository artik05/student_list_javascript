import "./styles.css";

const studentList = [];
let studentCount = 1;

function onAddClicked() {
  const name = document.getElementById("name");
  const rollNbr = document.getElementById("rollNbr");
  const sClass = document.getElementById("class");

  if (name && rollNbr && sClass) {
    studentList.push({
      id: studentCount++,
      name: name.value,
      rollNbr: rollNbr.value,
      class: sClass.value
    });
  }

  buildList();
}

function onRemove(id) {
  const index = studentList.findIndex((student) => student.id == id);
  studentList.splice(index, 1);

  buildList();
}

function buildList() {
  const studentListDiv = document.querySelector("#student-list table tbody");

  const rowData = studentList.map((s) => {
    return (
      `<tr><td>${s.name}</td>` +
      `<td>${s.rollNbr}</td>` +
      `<td>${s.class}</td>` +
      `<td><button onclick="onRemove(${s.id})">Remove</button></td></tr>`
    );
  });

  studentListDiv.innerHTML = rowData;
}

buildList();
