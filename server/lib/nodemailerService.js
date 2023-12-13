import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: '465',
  secure: true,
  auth: {
    user: '1924801030282@student.tdmu.edu.vn',
    pass: '@Congacon123'
  }
});

export const sendEmailService = (to, subject, html) => {
  const mailOptions = {
    from: '1924801030282@student.tdmu.edu.vn',
    to: to,
    subject: subject,
    html: html,
  };
  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

