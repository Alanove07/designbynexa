/**
 * Email Service - Handles sending emails via various services
 * This service is designed to work with Firebase Cloud Functions or external email APIs
 * 
 * Usage:
 * - Client-side: Call sendEmail() which sends requests to your backend
 * - Backend: Use the email templates and forward to Nodemailer, SendGrid, or Firebase extensions
 */

import emailTemplates from '../templates/emailTemplates';

class EmailService {
  /**
   * Initialize email service with configuration
   * @param {string} apiEndpoint - Your backend API endpoint for sending emails
   */
  constructor(apiEndpoint = '/api/send-email') {
    this.apiEndpoint = apiEndpoint;
  }

  /**
   * Send a welcome email
   * @param {string} recipientEmail - Email address of recipient
   * @param {string} recipientName - Name of recipient
   * @returns {Promise<Object>} Response from email service
   */
  async sendWelcomeEmail(recipientEmail, recipientName = 'there') {
    const htmlContent = emailTemplates.welcome(recipientName);
    return this.sendEmail({
      to: recipientEmail,
      subject: '🎉 Welcome to Nexa Designs!',
      htmlContent,
      template: 'welcome',
      recipientName,
    });
  }

  /**
   * Send contact form confirmation email
   * @param {string} recipientEmail - Email address of person who submitted form
   * @param {string} senderName - Name of form submitter
   * @param {string} messageId - Unique message identifier
   * @returns {Promise<Object>} Response from email service
   */
  async sendContactConfirmation(recipientEmail, senderName = 'there', messageId = '') {
    const htmlContent = emailTemplates.contactConfirmation(senderName, messageId);
    return this.sendEmail({
      to: recipientEmail,
      subject: '✓ We Received Your Message',
      htmlContent,
      template: 'contactConfirmation',
      senderName,
      messageId,
    });
  }

  /**
   * Send project quote/proposal email
   * @param {string} recipientEmail - Client email
   * @param {string} clientName - Client name
   * @param {string} projectTitle - Title of project
   * @param {Object} quoteDetails - Details including price, timeline, deliverables
   * @returns {Promise<Object>} Response from email service
   */
  async sendProjectQuote(recipientEmail, clientName, projectTitle, quoteDetails = {}) {
    const htmlContent = emailTemplates.projectQuote(clientName, projectTitle, quoteDetails);
    return this.sendEmail({
      to: recipientEmail,
      subject: `📊 Your Project Quote: ${projectTitle}`,
      htmlContent,
      template: 'projectQuote',
      clientName,
      projectTitle,
      quoteDetails,
    });
  }

  /**
   * Send project progress update email
   * @param {string} recipientEmail - Client email
   * @param {string} clientName - Client name
   * @param {string} projectTitle - Title of project
   * @param {string} updateMessage - Progress update message
   * @returns {Promise<Object>} Response from email service
   */
  async sendProjectUpdate(recipientEmail, clientName, projectTitle, updateMessage = '') {
    const htmlContent = emailTemplates.projectUpdate(clientName, projectTitle, updateMessage);
    return this.sendEmail({
      to: recipientEmail,
      subject: `📊 Progress Update: ${projectTitle}`,
      htmlContent,
      template: 'projectUpdate',
      clientName,
      projectTitle,
      updateMessage,
    });
  }

  /**
   * Send project delivery/completion email
   * @param {string} recipientEmail - Client email
   * @param {string} clientName - Client name
   * @param {string} projectTitle - Title of project
   * @param {Object} deliveryDetails - Details including date, formats, download link
   * @returns {Promise<Object>} Response from email service
   */
  async sendProjectDelivery(recipientEmail, clientName, projectTitle, deliveryDetails = {}) {
    const htmlContent = emailTemplates.projectDelivery(clientName, projectTitle, deliveryDetails);
    return this.sendEmail({
      to: recipientEmail,
      subject: `🎉 Your Project is Ready: ${projectTitle}`,
      htmlContent,
      template: 'projectDelivery',
      clientName,
      projectTitle,
      deliveryDetails,
    });
  }

  /**
   * Send newsletter
   * @param {string} recipientEmail - Subscriber email
   * @param {number} issueNumber - Newsletter issue number
   * @param {Array} highlights - Array of highlight objects with title and description
   * @returns {Promise<Object>} Response from email service
   */
  async sendNewsletter(recipientEmail, issueNumber = 1, highlights = []) {
    const htmlContent = emailTemplates.newsletter(issueNumber, highlights);
    return this.sendEmail({
      to: recipientEmail,
      subject: `📰 Nexa Designs Newsletter - Issue #${issueNumber}`,
      htmlContent,
      template: 'newsletter',
      issueNumber,
      highlights,
    });
  }

  /**
   * Send bulk newsletter to multiple recipients
   * @param {Array<string>} recipientEmails - Array of email addresses
   * @param {number} issueNumber - Newsletter issue number
   * @param {Array} highlights - Array of highlight objects
   * @returns {Promise<Array>} Array of responses from email service
   */
  async sendBulkNewsletter(recipientEmails, issueNumber = 1, highlights = []) {
    const htmlContent = emailTemplates.newsletter(issueNumber, highlights);
    
    return Promise.all(
      recipientEmails.map(email =>
        this.sendEmail({
          to: email,
          subject: `📰 Nexa Designs Newsletter - Issue #${issueNumber}`,
          htmlContent,
          template: 'newsletter',
          issueNumber,
          highlights,
        })
      )
    );
  }

  /**
   * Generic email sending method
   * This should be implemented on your backend to handle actual email delivery
   * @param {Object} emailData - Email data object
   * @returns {Promise<Object>} Response from email service
   */
  async sendEmail(emailData) {
    try {
      // If you have a backend API endpoint configured
      if (this.apiEndpoint) {
        const response = await fetch(this.apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(emailData),
        });

        if (!response.ok) {
          throw new Error(`Email service error: ${response.statusText}`);
        }

        return await response.json();
      }

      // Fallback: Log to console for development
      console.log('📧 Email would be sent:', emailData);
      return {
        success: true,
        message: 'Email logged to console (configure API endpoint in production)',
      };
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  /**
   * Get HTML template as string (useful for previewing)
   * @param {string} templateName - Name of template (welcome, contactConfirmation, etc.)
   * @param {Object} params - Parameters for the template
   * @returns {string} HTML content
   */
  getTemplateHTML(templateName, params = {}) {
    if (typeof emailTemplates[templateName] === 'function') {
      return emailTemplates[templateName](...Object.values(params));
    }
    return null;
  }
}

// Export singleton instance
export default new EmailService();

// Also export the class for custom initialization if needed
export { EmailService };
