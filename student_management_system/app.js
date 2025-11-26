/*
   Student Management - LocalStorage Version
*/

const STORAGE_KEY = "students";

// Helper to get students
function getStudents() {
    const students = localStorage.getItem(STORAGE_KEY);
    return students ? JSON.parse(students) : [];
}

// Helper to save students
function saveStudents(students) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

/* TAB SWITCHING */
document.getElementById("tabStudents").onclick = () => showPage("pageStudents", "tabStudents");

function showPage(pageId, tabId) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
    document.getElementById(tabId).classList.add("active");
}

/* LOAD STUDENTS */
function loadStudents() {
    const students = getStudents();
    const body = document.getElementById("studentsBody");
    body.innerHTML = "";

    if (students.length === 0) {
        body.innerHTML = `<tr><td colspan="5" class="empty">No students found</td></tr>`;
        return;
    }

    students.forEach(student => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.section || "-"}</td>
            <td>${student.enrollmentDate || "-"}</td>
            <td>
                <button class="btn secondary" onclick="editStudent('${student.id}')">Edit</button>
                <button class="btn primary" style="background:#ef4444;" onclick="deleteStudent('${student.id}')">Delete</button>
            </td>
        `;
        body.appendChild(tr);
    });
}

/* INITIAL LOAD */
loadStudents();

/* MODAL */
function openStudentModal() {
    document.getElementById("studentModal").style.display = "flex";
}

function closeStudentModal() {
    document.getElementById("studentModal").style.display = "none";
    document.getElementById("studentName").value = "";
    document.getElementById("studentEmail").value = "";
    document.getElementById("studentSection").value = "";
    document.getElementById("studentDate").value = "";
    // Clear edit ID if any
    delete window.currentEditId;
}

/* CREATE OR UPDATE STUDENT */
function createStudent() {
    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("studentEmail").value.trim();
    const section = document.getElementById("studentSection").value.trim();
    const date = document.getElementById("studentDate").value;

    if (!name || !email) {
        alert("Name and Email are required!");
        return;
    }

    const students = getStudents();

    if (window.currentEditId) {
        // Update existing
        const index = students.findIndex(s => s.id === window.currentEditId);
        if (index !== -1) {
            students[index] = { ...students[index], name, email, section, enrollmentDate: date };
        }
    } else {
        // Create new
        const newStudent = {
            id: Date.now().toString(), // Simple ID generation
            name,
            email,
            section,
            enrollmentDate: date
        };
        students.push(newStudent);
    }

    saveStudents(students);
    closeStudentModal();
    loadStudents();
}

/* DELETE STUDENT */
function deleteStudent(id) {
    if (!confirm("Are you sure you want to delete?")) return;

    const students = getStudents();
    const newStudents = students.filter(s => s.id !== id);
    saveStudents(newStudents);
    loadStudents();
}

/* EDIT STUDENT */
function editStudent(id) {
    const students = getStudents();
    const student = students.find(s => s.id === id);

    if (student) {
        document.getElementById("studentName").value = student.name;
        document.getElementById("studentEmail").value = student.email;
        document.getElementById("studentSection").value = student.section;
        document.getElementById("studentDate").value = student.enrollmentDate;

        window.currentEditId = id; // Store ID for update
        openStudentModal();
    }
}




