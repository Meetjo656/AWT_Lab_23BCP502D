const express = require("express");
const path = require("path");

const eventEmitter = require("./events/emitter");
const tracker = require("./utils/tracker");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// ---------- Event Listeners ----------

eventEmitter.on("user-login", (username) => {
  tracker.track("user-login");
  console.log(`${username} logged in`);
});

eventEmitter.on("user-logout", (username) => {
  tracker.track("user-logout");
  console.log(`${username} logged out`);
});

eventEmitter.on("user-purchase", (username, item) => {
  tracker.track("user-purchase");
  console.log(`${username} purchased ${item}`);
});

eventEmitter.on("profile-update", (username, field) => {
  tracker.track("profile-update");
  console.log(`${username} updated ${field}`);
});

// ---------- API Routes ----------

// ---------- API Routes ----------

// Login
app.post("/api/login", (req, res) => {
  eventEmitter.emit("user-login", req.body.username);
  res.sendStatus(200);
});

// Purchase
app.post("/api/purchase", (req, res) => {
  eventEmitter.emit(
    "user-purchase",
    req.body.username,
    req.body.item
  );
  res.sendStatus(200);
});

// Profile Update
app.post("/api/update", (req, res) => {
  eventEmitter.emit(
    "profile-update",
    req.body.username,
    req.body.field
  );
  res.sendStatus(200);
});

// ✅ SUMMARY ROUTE (ADD THIS)
app.get("/api/summary", (req, res) => {
  res.json(tracker.getCounts());
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
