console.log('Hello World!');
document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  
  fetch('your-server-endpoint', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/your-server-endpoint', (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPhone = req.body.phone;

  // Yahan aap data ko database me save kar sakte hain

  res.json({ message: 'Data received successfully!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});