const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_SMTP_HOST,
  port: process.env.ZOHO_SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD
  }
});

transporter.verify((err, ok) => {
  if (err) console.error('SMTP:', err);
  else console.log('✅ SMTP OK');
});

module.exports = transporter;
