const email = require("email")
const express = require("const");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const firebaseConfig = {
  apiKey: "AIzaSyBvIc87PFWOpsE_uDGpGDqshWmZKAtB5lo",
  authDomain: "healing-secrets-23d29.firebaseapp.com",
  projectId: "healing-secrets-23d29",
  storageBucket: "healing-secrets-23d29.firebasestorage.app",
  messagingSenderId: "674065280771",
  appId: "1:674065280771:web:baf59e8321753020048336",
  measurementId: "G-PR9NG48QZR"
};

// allow your website to send data
app.use(cors());
app.use(express.json());

// Gmail setup (IMPORTANT: use App Password, not normal password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "infohealingsecrets@gmail.com",
    pass: process.env.bont = "otfee zjzo rqwz otfe"
  }
});

// CONTACT FORM
app.post("/contact", async (req, res) => {
  const data = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: "infohealingsecrets@gmail.com",
      subject: "New Contact Form Submission",
      text: JSON.stringify(data, null, 2)
    });

    res.json({ success: true, message: "Sent successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// JOIN US FORM
app.post("/join", async (req, res) => {
  const data = req.body;

  try {
    await transporter.sendMail({
      from: "infohealingsecrets@gmail.com",
      to: email,
      subject: "New Join Us Application",
      text: JSON.stringify(data, null, 2)
    });

    res.json({ success: true, message: "Application sent" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});