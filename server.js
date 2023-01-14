const express = require("express");
const router = express.Router();
const cors = require('cors');
const nodemailer = require("nodemailer");
const { Postage } = require("react-bootstrap-icons");
require("dotenv").config();


// server used to send send emails
const app = express();
app.use(cors('Access-Control-Allow-Origin'));
app.use(express.json());

app.use("http://cjr23.info", router);
app.listen(), () => console.log("Server Running");
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com', 

  auth: {
    user: 'shaymabel0@gmail.com',
    pass: 'yaftottcnklhxxtb'
  },
});

contactEmail.verify((error) => {
  
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
    console.log(process.env.PORT);
  }
});


router.post("/contact", (req, res) => {
  
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: 'shaymabel0@gmail.com',
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({code: 200, status: "Message Sent" });
    }
  });
});
