// main.js
async function loadData() {
    try {
        const res = await fetch("http://localhost:5000/data");
        const data = await res.json();

        // Projects
        const projectDiv = document.getElementById("projects");
        projectDiv.innerHTML = "";
        data.projects.forEach(p => {
            projectDiv.innerHTML += `
                <div class="card">
                    <img src="${p.image || 'default-project.jpg'}" alt="${p.name}">
                    <h3>${p.name}</h3>
                    <p>${p.description}</p>
                </div>`;
        });

        // Clients
        const clientDiv = document.getElementById("clients");
        clientDiv.innerHTML = "";
        data.clients.forEach(c => {
            clientDiv.innerHTML += `
                <div class="card">
                    <img src="${c.image || 'default-client.jpg'}" alt="${c.name}">
                    <h4>${c.name}</h4>
                    <p>${c.description}</p>
                </div>`;
        });

    } catch (err) {
        console.error("Error loading data:", err);
    }
}

window.addEventListener("DOMContentLoaded", loadData);
