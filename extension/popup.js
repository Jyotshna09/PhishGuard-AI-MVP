// Scan Page Button
document.getElementById("scanBtn").onclick = async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.tabs.sendMessage(tab.id, { action: "scan" }, async (data) => {
    const res = await fetch("http://127.0.0.1:8000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    let cssClass = "safe";
    if (json.risk === "Suspicious") cssClass = "suspicious";
    if (json.risk === "Dangerous") cssClass = "dangerous";

    document.getElementById("result").innerHTML = `
      <div class="${cssClass}">${json.risk}</div>
      <div>${json.reason}</div>
    `;
  });
};

// Report Phishing Button
document.getElementById("reportBtn").onclick = async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.tabs.sendMessage(tab.id, { action: "scan" }, async (data) => {
    await fetch("http://127.0.0.1:8000/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    alert("Phishing reported successfully");
  });
};
