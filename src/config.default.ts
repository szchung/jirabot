import Config = require('./lib/ConfigInterface');

var config: Config = {
  jira: {
    protocol: 'https', // https or http
    host: 'jira.yourhost.domain', // Hostname for JIRA
    port: 443, // Usually 80 or 443
    base: '', // If JIRA doesn't sit at the root, put its base directory here
    user: 'username', // Username of JIRA user
    pass: 'password', // Password of JIRA user
    apiVersion: 'latest', // API Version slug
    verbose: false, // Verbose logging
    strictSSL: false, // Set false for self-signed certificates
    regex: /([A-Z]{1}[A-Z0-9]+\-[0-9]+)/g, // The regex to match JIRA Tickets
    sprintField: '', // If using greenhopper, set the custom field that holds sprint information (customfield_1xxxx)
    customFields: {
      // Add any custom fields you would like to display
      // customfield_1xxxx: "Custom Title"
      // Object custom field: Show a member of object
      // "customfield_1xxxx.member": "Custom Title"
    }
  },
  slack: {
    token: 'xoxb-Your-Token', // Your Slack Token
    autoReconnect: true, // Reconnect on disconnect
    autoMark: true // Mark messages as read
  },
  usermap: {
    // Map a JIRA username to a Slack username
    // "jira-username": "slack-username"
  }
};

export = config;
