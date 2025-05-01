// This is a placeholder for your email sending functionality
// You can replace this with Nodemailer, SendGrid, or any other email service

/**
 * Sends a password reset email to the specified email address
 * @param {string} email The recipient's email address
 * @param {string} token The password reset token
 * @returns {Promise<void>}
 */
export async function sendResetPasswordEmail(email, token) {
  // Create the reset password URL
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/resetPassword?token=${token}`;

  // For development, log the URL to the console
  if (process.env.NODE_ENV === "development") {
    console.log(`Password reset link for ${email}: ${resetUrl}`);
    // In development, just return without sending an actual email
    return Promise.resolve();
  }

  // In production, you would use an email service like Nodemailer, SendGrid, etc.
  // Example with SendGrid (you would need to install @sendgrid/mail):
  /*
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  const msg = {
    to: email,
    from: 'support@safarihub.com',
    subject: 'Password Reset - Safari Hub',
    text: `You requested a password reset. Please use the following link to reset your password: ${resetUrl}. This link will expire in 10 minutes.`,
    html: `
      <div>
        <h1>Password Reset Request</h1>
        <p>You requested a password reset for your Safari Hub account.</p>
        <p>Please click the button below to reset your password. This link will expire in 10 minutes.</p>
        <a href="${resetUrl}" style="
          background-color: #1a73e8; 
          color: white; 
          padding: 10px 20px; 
          text-decoration: none; 
          border-radius: 4px;
          display: inline-block;
          margin: 20px 0;
        ">
          Reset Password
        </a>
        <p>If you didn't request this password reset, you can safely ignore this email.</p>
        <p>Thanks,<br>The Safari Hub Team</p>
      </div>
    `,
  };
  
  return sgMail.send(msg);
  */

  // For now, return a resolved promise as a placeholder
  return Promise.resolve();
}
