// vuln-eval.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/calculate', (req, res) => {
  const expr = req.body.expr; // user-supplied
  // Dangerous: evaluating arbitrary code
  try {
    const result = eval(expr);
    res.json({ result });
  } catch (e) {
    res.status(400).send('bad expression');
  }
});

app.listen(3003);
