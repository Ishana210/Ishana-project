// admin.js
const pname = document.getElementById("pname");
const pdesc = document.getElementById("pdesc");
const pimg = document.getElementById("pimg");

const cname = document.getElementById("cname");
const cdesc = document.getElementById("cdesc");
const cimg = document.getElementById("cimg");

async function addProject() {
    if (!pname.value || !pdesc.value || !pimg.value) {
        alert("Please fill all project fields!");
        return;
    }
    try {
        const res = await fetch("http://localhost:5000/project", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: pname.value,
                description: pdesc.value,
                image: pimg.value
            })
        });
        const data = await res.json();
        alert("Project added!");
        pname.value = ""; pdesc.value = ""; pimg.value = "";
    } catch (err) {
        console.error(err);
        alert("Error adding project");
    }
}

async function addClient() {
    if (!cname.value || !cdesc.value || !cimg.value) {
        alert("Please fill all client fields!");
        return;
    }
    try {
        const res = await fetch("http://localhost:5000/client", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: cname.value,
                description: cdesc.value,
                image: cimg.value
            })
        });
        const data = await res.json();
        alert("Client added!");
        cname.value = ""; cdesc.value = ""; cimg.value = "";
    } catch (err) {
        console.error(err);
        alert("Error adding client");
    }
}
