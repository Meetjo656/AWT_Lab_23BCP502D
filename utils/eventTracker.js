// Object to track event counts
const eventCounts = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0
};

// Function to increment count
function increment(eventName) {
  if (eventCounts[eventName] !== undefined) {
    eventCounts[eventName]++;
  }
}

// Function to get summary
function getSummary() {
  return eventCounts;
}

module.exports = {
  increment,
  getSummary
};
