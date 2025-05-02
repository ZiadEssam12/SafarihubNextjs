import nodemailer from "nodemailer";

// Configure transporter for Gmail
const transporter = nodemailer.createTransport({
  service: "gmail", // Gmail SMTP service
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address from .env
    pass: process.env.EMAIL_PASS, // App Password or Gmail password from .env
  },
});

// Function to send email
export default async function sendEmail(
  to,
  subject,
  htmlTemplate,
  plainTextTemplate
) {
  if (process.env.EMAIL_USER) {
    console.log("Found SMTP Email address");
  }

  if (process.env.EMAIL_PASS) {
    console.log("Found SMTP Email password");
  }

  try {
    // Define email options
    const mailOptions = {
      from: `"Safari Hub" <${process.env.EMAIL_USER}>`, // Sender name and email
      to, // Recipient email
      subject, // Email subject
      html: htmlTemplate, // HTML content
      text: plainTextTemplate, // Plain text content
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
