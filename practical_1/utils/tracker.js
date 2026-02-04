const eventCounts = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0
};

function track(event) {
  if (eventCounts[event] !== undefined) {
    eventCounts[event]++;
  }
}

function getCounts() {
  return eventCounts;
}

module.exports = { track, getCounts };
