const transporter = require('../config/smtp');
const EmailLog = require('../models/EmailLog');

class SMTPService {
  async sendEmail(to, subject, html) {
    try {
      const result = await transporter.sendMail({
        from: process.env.ZOHO_EMAIL,
        to,
        subject,
        html
      });
      
      return { success: true, messageId: result.messageId };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async sendBulk(emails, subject, html) {
    const results = [];
    for (const email of emails) {
      const result = await this.sendEmail(email, subject, html);
      results.push({ email, ...result });
      await new Promise(r => setTimeout(r, 100));
    }
    return results;
  }
}

module.exports = new SMTPService();
