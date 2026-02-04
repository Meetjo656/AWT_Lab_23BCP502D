// Load all listeners
require("./events/listeners");
require("./events/summary");

const eventEmitter = require("./events/emitter");

// Emit Events Multiple Times

// Logins
eventEmitter.emit("user-login", "Meet");
eventEmitter.emit("user-login", "Rahul");

// Purchases
eventEmitter.emit("user-purchase", "Meet", "Laptop");
eventEmitter.emit("user-purchase", "Rahul", "Phone");
eventEmitter.emit("user-purchase", "Meet", "Headphones");

// Profile Updates
eventEmitter.emit("profile-update", "Meet", "Email");
eventEmitter.emit("profile-update", "Rahul", "Password");

// Logout
eventEmitter.emit("user-logout", "Meet");

// Trigger Summary
eventEmitter.emit("summary");
