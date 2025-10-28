// vuln-cmd.js
const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/ping', (req, res) => {
  const host = req.query.host; // user-controlled
  // Dangerous: concatenating input into a shell command
  exec(`ping -c 1 ${host}`, (err, stdout, stderr) => {
    if (err) return res.status(500).send('command failed');
    res.send(`<pre>${stdout}</pre>`);
  });
});

app.listen(3002);
