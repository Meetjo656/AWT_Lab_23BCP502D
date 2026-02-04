function login() {
  fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: document.getElementById("username").value
    })
  });
}

function purchase() {
  fetch("/api/purchase", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      item: document.getElementById("item").value
    })
  });
}

function updateProfile() {
  fetch("/api/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: document.getElementById("username").value,
      field: document.getElementById("field").value
    })
  });
}

function getSummary() {
  fetch("/api/summary")
    .then(res => res.json())
    .then(data => {
      let html = "";
      for (let e in data) {
        html += `<p>${e}: ${data[e]}</p>`;
      }
      document.getElementById("summary").innerHTML = html;
    });
}
