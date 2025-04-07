const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════╗
  ║    Server running on     ║
  ║    http://localhost:5000 ║
  ╚══════════════════════════╝
  `);
});