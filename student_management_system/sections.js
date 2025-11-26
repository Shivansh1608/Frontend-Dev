const STORAGE_KEY_SECTIONS = "sections";

function getSections() {
    const sections = localStorage.getItem(STORAGE_KEY_SECTIONS);
    return sections ? JSON.parse(sections) : [];
}

function saveSections(sections) {
    localStorage.setItem(STORAGE_KEY_SECTIONS, JSON.stringify(sections));
}

/* Load Sections */
function loadSections() {
    const sections = getSections();
    const body = document.getElementById("sectionsBody");
    body.innerHTML = "";

    if (sections.length === 0) {
        body.innerHTML = `<tr><td colspan="4" class="empty">No sections found</td></tr>`;
        return;
    }

    sections.forEach(section => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${section.name}</td>
            <td>${section.className || "-"}</td>
            <td>${section.room || "-"}</td>
            <td>
                <button class="btn secondary" onclick="editSection('${section.id}')">Edit</button>
                <button class="btn primary" style="background:#ef4444;" onclick="deleteSection('${section.id}')">Delete</button>
            </td>
        `;
        body.appendChild(tr);
    });
}

loadSections();

/* Modal Controls */
function openSectionModal() {
    document.getElementById("sectionModal").style.display = "flex";
}

function closeSectionModal() {
    document.getElementById("sectionModal").style.display = "none";
    document.getElementById("sectionName").value = "";
    document.getElementById("sectionClass").value = "";
    document.getElementById("sectionRoom").value = "";
    delete window.currentSectionEditId;
}

/* Create or Update Section */
function createSection() {
    const name = document.getElementById("sectionName").value.trim();
    const className = document.getElementById("sectionClass").value.trim();
    const room = document.getElementById("sectionRoom").value.trim();

    if (!name) {
        alert("Section Name is required");
        return;
    }

    const sections = getSections();

    if (window.currentSectionEditId) {
        const index = sections.findIndex(s => s.id === window.currentSectionEditId);
        if (index !== -1) {
            sections[index] = { ...sections[index], name, className, room };
        }
    } else {
        const newSection = {
            id: Date.now().toString(),
            name,
            className,
            room
        };
        sections.push(newSection);
    }

    saveSections(sections);
    closeSectionModal();
    loadSections();
}

/* Delete Section */
function deleteSection(id) {
    if (!confirm("Delete this section?")) return;

    const sections = getSections();
    const newSections = sections.filter(s => s.id !== id);
    saveSections(newSections);
    loadSections();
}

/* Edit Section */
function editSection(id) {
    const sections = getSections();
    const section = sections.find(s => s.id === id);

    if (section) {
        document.getElementById("sectionName").value = section.name;
        document.getElementById("sectionClass").value = section.className;
        document.getElementById("sectionRoom").value = section.room;

        window.currentSectionEditId = id;
        openSectionModal();
    }
}

