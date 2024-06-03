const fs = require('fs');

const envConfig = `
(function(window) {
  window.__env = window.__env || {};
  window.__env.production = false;
  window.__env.firebase = {
    apiKey: "${process.env.FIREBASE_API_KEY}",
    authDomain: "${process.env.FIREBASE_AUTH_DOMAIN}",
    projectId: "${process.env.FIREBASE_PROJECT_ID}",
    storageBucket: "${process.env.FIREBASE_STORAGE_BUCKET}",
    messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID}",
    appId: "${process.env.FIREBASE_APP_ID}",
  };
})(this);
`;

fs.writeFileSync('./src/assets/env.js', envConfig);
