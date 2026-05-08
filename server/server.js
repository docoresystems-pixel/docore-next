const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// =====================================
// MIDDLEWARE
// =====================================

app.use(cors());

app.use(express.json());

// =====================================
// GMAIL CONFIG
// =====================================

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "docoresystems@gmail.com",
    pass: "jrjtqcabusrbvtgn",
  },
});

// =====================================
// TEST ROUTE
// =====================================

app.get("/", (req, res) => {
  res.send("Docore Backend Running");
});

// =====================================
// SEND ENQUIRY
// =====================================

app.post("/api/enquiries", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("NEW ENQUIRY");

    // =====================================
    // EMAIL CONTENT
    // =====================================

    const mailOptions = {
      from: "docoresystems@gmail.com",

      to: "docoresystems@gmail.com",

      subject: "New Website Inquiry",

      html: `
        <h2>New Inquiry Received</h2>

        <p><b>Name:</b> ${name}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Message:</b></p>

        <p>${message}</p>
      `,
    };

    // =====================================
    // SEND MAIL
    // =====================================

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Inquiry Sent Successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

// =====================================
// SERVER
// =====================================

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Backend Running On Port ${PORT}`);
});