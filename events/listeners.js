const eventEmitter = require("./emitter");
const tracker = require("../utils/eventTracker");

// User Login
eventEmitter.on("user-login", (username) => {
  tracker.increment("user-login");
  console.log(`${username} logged in.`);
});

// User Logout
eventEmitter.on("user-logout", (username) => {
  tracker.increment("user-logout");
  console.log(`${username} logged out.`);
});

// User Purchase
eventEmitter.on("user-purchase", (username, item) => {
  tracker.increment("user-purchase");
  console.log(`${username} purchased ${item}.`);
});

// Profile Update
eventEmitter.on("profile-update", (username, field) => {
  tracker.increment("profile-update");
  console.log(`${username} updated ${field}.`);
});

module.exports = eventEmitter;
