// server.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Path to data.json
const dataPath = path.join(__dirname, "data.json");

// Ensure data.json exists
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify({ projects: [], clients: [] }, null, 2));
    console.log("Created new data.json file");
}

// GET all data
app.get("/data", (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
        res.json(data);
    } catch (err) {
        console.error("Error reading data.json:", err);
        res.status(500).send("Error reading data");
    }
});

// POST new project
app.post("/project", (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
        data.projects.push(req.body);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        res.json({ message: "Project added", project: req.body });
    } catch (err) {
        console.error("Error writing project:", err);
        res.status(500).send("Error adding project");
    }
});

// POST new client
app.post("/client", (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));
        data.clients.push(req.body);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        res.json({ message: "Client added", client: req.body });
    } catch (err) {
        console.error("Error writing client:", err);
        res.status(500).send("Error adding client");
    }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
