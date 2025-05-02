export default function ResetPassword(resetUrl) {
  console.log("resetURL 1:", resetUrl);

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset Request</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; color: #333333; background-color: #f4f4f4;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #dddddd;">
        <tr>
          <td style="padding: 20px; text-align: center;">
            <h1 style="font-size: 24px; margin: 0 0 10px;">Password Reset Request</h1>
            <p style="font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
              You requested a password reset for your Safari Hub account.
            </p>
            <p style="font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
              Please click the button below to reset your password. This link will expire in 10 minutes.
            </p>
            <a href="${resetUrl}" style="
              display: inline-block;
              background-color: #1a73e8;
              color: #ffffff;
              padding: 12px 24px;
              text-decoration: none;
              border-radius: 4px;
              font-size: 16px;
              font-weight: bold;
            ">
              Reset Password
            </a>
            <p style="font-size: 14px; line-height: 1.5; margin: 20px 0 0;">
              If you didn't request this password reset, you can safely ignore this email.
            </p>
            <p style="font-size: 14px; line-height: 1.5; margin: 10px 0 0;">
              Thanks,<br>The Safari Hub Team
            </p>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
