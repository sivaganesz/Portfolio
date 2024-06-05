const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API endpoint to handle form submission
app.post('/api/send-email', (req, res) => {
  const { email, name, subject, message } = req.body;

  // Create transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sivaganesz7482@gmail.com', // Your email
      pass: 'sivaganesz824746.' // Your email password
    }
  });

  // Email options
  const mailOptions = {
    from: 'sivaganesz7482@gmail.com',
    to: 'sivaganesz7482@gmail.com', // Replace with the recipient's email address
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
