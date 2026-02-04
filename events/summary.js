const eventEmitter = require("./emitter");
const tracker = require("../utils/eventTracker");

// Summary Event
eventEmitter.on("summary", () => {
  console.log("\n===== EVENT SUMMARY =====");

  const counts = tracker.getSummary();

  for (let event in counts) {
    console.log(`${event} triggered ${counts[event]} time(s).`);
  }

  console.log("=========================\n");
});
