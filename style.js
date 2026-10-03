function showSection(sectionId) {

    let sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");
}


// Add new alert

function addAlert() {

    let table = document.getElementById("alertTable");

    let row = table.insertRow();

    row.innerHTML = `
        <td>New AI Alert Detected</td>
        <td>
            <span class="badge critical">Critical</span>
        </td>
        <td>Just Now</td>
        <td>Active</td>
    `;

    let total = document.getElementById("totalAlerts");

    total.innerText = parseInt(total.innerText) + 1;

    alert("New AI Alert Added!");
}


// Accept decision

function acceptDecision(button) {

    button.parentElement.style.background = "#dcfce7";

    button.parentElement.querySelector("p").innerText =
        "Decision Accepted ✓";

    button.disabled = true;
}


// Reject decision

function rejectDecision(button) {

    button.parentElement.style.background = "#fee2e2";

    button.parentElement.querySelector("p").innerText =
        "Decision Rejected ✕";

    button.disabled = true;
}


// Save settings

function saveSettings() {

    alert("Settings saved successfully!");
}


// Logout

function logout() {

    alert("Logout button clicked!");
}
// AI Alert & Decision Dashboard

let totalAlerts = 12;
let highAlerts = 3;
let mediumAlerts = 5;
let resolvedAlerts = 4;

// Generate New Alert
function generateAlert() {

    totalAlerts++;
    highAlerts++;

    document.getElementById("totalAlerts").innerText = totalAlerts;
    document.getElementById("highAlerts").innerText = highAlerts;

    const alertList = document.getElementById("alertList");

    const newAlert = document.createElement("div");

    newAlert.className = "alert high";

    newAlert.innerHTML = `
        <b>New Security Alert</b>
        <span class="badge high-badge">HIGH</span>
        <p>AI detected a new critical issue.</p>
    `;

    alertList.appendChild(newAlert);

    alert("New High Priority Alert Generated!");
}


// Clear Alerts
function clearAlerts() {

    document.getElementById("alertList").innerHTML = "";

    totalAlerts = 0;
    highAlerts = 0;
    mediumAlerts = 0;

    document.getElementById("totalAlerts").innerText = totalAlerts;
    document.getElementById("highAlerts").innerText = highAlerts;
    document.getElementById("mediumAlerts").innerText = mediumAlerts;

    resolvedAlerts++;

    document.getElementById("resolvedAlerts").innerText = resolvedAlerts;

    document.getElementById("decisionText").innerText =
        "All alerts have been cleared. System is stable.";

    alert("All alerts cleared successfully!");
}


// AI Decision
function makeDecision() {

    let decision = document.getElementById("decisionText");

    if (highAlerts > 0) {

        decision.innerText =
            "⚠ AI Recommendation: Immediately check the High Priority Alert.";

    }

    else if (mediumAlerts > 0) {

        decision.innerText =
            "⚠ AI Recommendation: Monitor the Medium Priority Alert.";

    }

    else {

        decision.innerText =
            "✓ AI Recommendation: No critical alerts. System is stable.";

    }
}


// Page Load Message
window.onload = function () {

    console.log("AI Alert Dashboard Loaded Successfully");

};

