// action.js
const core = require('@actions/core');

try {
  const message = core.getInput('message');
  console.log(`Message: ${message}`);
  core.setOutput('time', new Date().toTimeString());
} catch (error) {
  core.setFailed(error.message);
}

