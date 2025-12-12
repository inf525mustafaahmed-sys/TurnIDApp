const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const users = [
  { username: 'admin', password: '1234' },
  { username: 'user', password: 'abcd' }
];

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) res.json({ success: true, user: username });
  else res.json({ success: false, message: 'Invalid credentials' });
});

app.get('/', (req, res) => {
  res.send('TurnID Backend Working');
});

app.listen(PORT, () => console.log(Server running on port ));
