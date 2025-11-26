const STORAGE_KEY_RESULTS = "results";

function getResults() {
    const results = localStorage.getItem(STORAGE_KEY_RESULTS);
    return results ? JSON.parse(results) : [];
}

function saveResults(results) {
    localStorage.setItem(STORAGE_KEY_RESULTS, JSON.stringify(results));
}

/* Load Results */
function loadResults() {
    const results = getResults();
    const body = document.getElementById("resultsBody");
    body.innerHTML = "";

    if (results.length === 0) {
        body.innerHTML = `<tr><td colspan="5" class="empty">No results found</td></tr>`;
        return;
    }

    results.forEach(result => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${result.studentId}</td>
            <td>${result.subject}</td>
            <td>${result.marks}</td>
            <td>${result.grade || "-"}</td>
            <td>
                <button class="btn secondary" onclick="editResult('${result.id}')">Edit</button>
                <button class="btn primary" style="background:#ef4444;" onclick="deleteResult('${result.id}')">Delete</button>
            </td>
        `;
        body.appendChild(tr);
    });
}

loadResults();

/* Modal Controls */
function openResultModal() {
    document.getElementById("resultModal").style.display = "flex";
}

function closeResultModal() {
    document.getElementById("resultModal").style.display = "none";
    document.getElementById("resultStudentId").value = "";
    document.getElementById("resultSubject").value = "";
    document.getElementById("resultMarks").value = "";
    document.getElementById("resultGrade").value = "";
    delete window.currentResultEditId;
}

/* Create or Update Result */
function createResult() {
    const studentId = document.getElementById("resultStudentId").value.trim();
    const subject = document.getElementById("resultSubject").value.trim();
    const marks = document.getElementById("resultMarks").value.trim();
    const grade = document.getElementById("resultGrade").value.trim();

    if (!studentId || !subject || !marks) {
        alert("Student ID, Subject, and Marks are required");
        return;
    }

    const results = getResults();

    if (window.currentResultEditId) {
        const index = results.findIndex(r => r.id === window.currentResultEditId);
        if (index !== -1) {
            results[index] = { ...results[index], studentId, subject, marks, grade };
        }
    } else {
        const newResult = {
            id: Date.now().toString(),
            studentId,
            subject,
            marks,
            grade
        };
        results.push(newResult);
    }

    saveResults(results);
    closeResultModal();
    loadResults();
}

/* Delete Result */
function deleteResult(id) {
    if (!confirm("Delete this result?")) return;

    const results = getResults();
    const newResults = results.filter(r => r.id !== id);
    saveResults(newResults);
    loadResults();
}

/* Edit Result */
function editResult(id) {
    const results = getResults();
    const result = results.find(r => r.id === id);

    if (result) {
        document.getElementById("resultStudentId").value = result.studentId;
        document.getElementById("resultSubject").value = result.subject;
        document.getElementById("resultMarks").value = result.marks;
        document.getElementById("resultGrade").value = result.grade;

        window.currentResultEditId = id;
        openResultModal();
    }
}
