require('dotenv').config();

const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/main.js'));
});

app.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    secure: true,
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: process.env.ACCESS_TOKEN
    }
  });

  const mailOptions = {
    from: req.body.email,
    to: process.env.GMAIL_USER,
    subject: `New message from contact form at kubakilar.pl`,
    text: `${req.body.name} <${req.body.email}> says:
    ${req.body.message}`
  };

  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log('error: ', error);
    } else {
      console.log('response: ', response);
    }
  });
});

app.listen(PORT, () => console.log('running'));
