/**
 * Email Template Collection for Nexa Designs
 * These templates follow the brand colors and styling
 * Colors: dark-bg (#0f172a), dark-card (#1e293b), primary-blue, accent-purple
 */

const baseStyles = `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const emailTemplates = {
  /**
   * Welcome Email - Sent to new subscribers/contacts
   */
  welcome: (recipientName = 'there') => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Nexa Designs</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          ${baseStyles}
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #0f172a;
          color: #e2e8f0;
        }
        .header {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          padding: 40px 20px;
          text-align: center;
          border-bottom: 2px solid #3b82f6;
        }
        .logo {
          font-size: 28px;
          font-weight: 700;
          color: #3b82f6;
          margin: 0;
          letter-spacing: 1px;
        }
        .content {
          padding: 40px 20px;
        }
        .greeting {
          font-size: 22px;
          color: #f1f5f9;
          margin: 0 0 20px 0;
          font-weight: 600;
        }
        .text {
          font-size: 16px;
          line-height: 1.6;
          color: #cbd5e1;
          margin: 15px 0;
        }
        .highlight {
          color: #3b82f6;
          font-weight: 600;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          padding: 14px 32px;
          text-decoration: none;
          border-radius: 6px;
          margin: 25px 0;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .cta-button:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          transform: translateY(-2px);
        }
        .features {
          margin: 30px 0;
          background-color: #1e293b;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .feature-item {
          margin: 10px 0;
          padding-left: 20px;
          position: relative;
          font-size: 15px;
        }
        .feature-item:before {
          content: "→";
          position: absolute;
          left: 0;
          color: #3b82f6;
          font-weight: bold;
        }
        .footer {
          background-color: #1e293b;
          padding: 30px 20px;
          text-align: center;
          border-top: 1px solid #334155;
          font-size: 13px;
          color: #94a3b8;
        }
        .social-links {
          margin: 20px 0;
        }
        .social-links a {
          display: inline-block;
          width: 40px;
          height: 40px;
          background-color: #334155;
          color: #3b82f6;
          text-decoration: none;
          border-radius: 50%;
          line-height: 40px;
          margin: 0 8px;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background-color: #3b82f6;
          color: white;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1 class="logo">NEXA</h1>
          <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 14px;">Creative Design Studio</p>
        </div>

        <div class="content">
          <h2 class="greeting">Welcome, <span class="highlight">${recipientName}</span>! 👋</h2>
          
          <p class="text">
            Thank you for reaching out to Nexa Designs! We're thrilled to connect with creative minds and innovative brands.
          </p>

          <p class="text">
            Whether you're looking for stunning <span class="highlight">branding solutions</span>, captivating <span class="highlight">visual designs</span>, or creative consultation, you're in the right place.
          </p>

          <div class="features">
            <div class="feature-item">Branding & Identity Design</div>
            <div class="feature-item">Poster & Print Design</div>
            <div class="feature-item">Illustration & Digital Art</div>
            <div class="feature-item">Social Media Content</div>
            <div class="feature-item">Professional Consultation</div>
          </div>

          <p class="text">
            Explore our portfolio to see our latest work, and feel free to reach out with your project ideas. We'd love to help bring your vision to life!
          </p>

          <center>
            <a href="https://DesignbyNexa/#/" class="cta-button">Explore Our Portfolio</a>
          </center>

          <p class="text">
            Got a project in mind? <a href="https://DesignbyNexa/#/contact" style="color: #3b82f6; text-decoration: none;">Get in touch with us</a> and let's create something amazing together.
          </p>
        </div>

        <div class="footer">
          <p style="margin: 0 0 15px 0;">Follow us on social media</p>
          <div class="social-links">
            <a href="https://instagram.com" title="Instagram">f</a>
            <a href="https://twitter.com" title="Twitter">𝕏</a>
            <a href="https://linkedin.com" title="LinkedIn">in</a>
          </div>
          <p style="margin: 20px 0 0 0; color: #64748b;">
            © 2025 Nexa Designs. All rights reserved.<br>
            <a href="https://DesignbyNexa/#/" style="color: #3b82f6; text-decoration: none;">Visit our website</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `,

  /**
   * Contact Form Confirmation - Confirmation that message was received
   */
  contactConfirmation: (senderName = 'there', messageId = '') => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Message Received - Nexa Designs</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          ${baseStyles}
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #0f172a;
          color: #e2e8f0;
        }
        .header {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          padding: 40px 20px;
          text-align: center;
          border-bottom: 2px solid #8b5cf6;
        }
        .logo {
          font-size: 28px;
          font-weight: 700;
          color: #8b5cf6;
          margin: 0;
          letter-spacing: 1px;
        }
        .content {
          padding: 40px 20px;
        }
        .status-box {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          border-left: 4px solid #8b5cf6;
          padding: 25px;
          border-radius: 8px;
          margin: 25px 0;
          text-align: center;
        }
        .status-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }
        .status-text {
          font-size: 18px;
          color: #f1f5f9;
          font-weight: 600;
          margin: 10px 0;
        }
        .status-detail {
          font-size: 14px;
          color: #94a3b8;
          margin: 5px 0;
        }
        .info-section {
          background-color: #1e293b;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .info-label {
          font-size: 12px;
          color: #8b5cf6;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        .info-value {
          font-size: 16px;
          color: #e2e8f0;
          word-break: break-word;
        }
        .text {
          font-size: 16px;
          line-height: 1.6;
          color: #cbd5e1;
          margin: 15px 0;
        }
        .footer {
          background-color: #1e293b;
          padding: 30px 20px;
          text-align: center;
          border-top: 1px solid #334155;
          font-size: 13px;
          color: #94a3b8;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1 class="logo">NEXA</h1>
          <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 14px;">Creative Design Studio</p>
        </div>

        <div class="content">
          <div class="status-box">
            <div class="status-icon">✓</div>
            <div class="status-text">Message Received!</div>
            <div class="status-detail">We've got your message and will be in touch soon</div>
          </div>

          <p class="text">
            Hi <strong>${senderName}</strong>,
          </p>

          <p class="text">
            Thank you for reaching out to Nexa Designs! We've received your message and appreciate you taking the time to connect with us.
          </p>

          <div class="info-section">
            <div class="info-label">Message Reference</div>
            <div class="info-value">${messageId || 'REF-' + Date.now()}</div>
          </div>

          <p class="text">
            Our team will review your inquiry and get back to you as soon as possible, typically within 24-48 hours. If you need immediate assistance, feel free to check our contact page for additional ways to reach us.
          </p>

          <div class="info-section">
            <div class="info-label">What Happens Next?</div>
            <p style="margin: 10px 0; color: #cbd5e1; font-size: 15px;">
              • We'll review your message<br>
              • Our team will assess your project needs<br>
              • We'll reach out with next steps<br>
              • Let's create something amazing together! 🚀
            </p>
          </div>

          <p class="text">
            Keep this email for your records. You can use the message reference above to track your inquiry.
          </p>
        </div>

        <div class="footer">
          <p style="margin: 0;">
            © 2025 Nexa Designs. All rights reserved.<br>
            <a href="https://DesignbyNexa/#/" style="color: #8b5cf6; text-decoration: none;">Visit our website</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `,

  /**
   * Project Quote/Proposal - For sending project quotes to clients
   */
  projectQuote: (clientName = 'Client', projectTitle = 'Your Project', quoteDetails = {}) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Project Quote - Nexa Designs</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          ${baseStyles}
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #0f172a;
          color: #e2e8f0;
        }
        .header {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          padding: 40px 20px;
          text-align: center;
          border-bottom: 2px solid #ec4899;
        }
        .logo {
          font-size: 28px;
          font-weight: 700;
          color: #ec4899;
          margin: 0;
          letter-spacing: 1px;
        }
        .content {
          padding: 40px 20px;
        }
        .greeting {
          font-size: 18px;
          color: #f1f5f9;
          margin: 0 0 20px 0;
          font-weight: 600;
        }
        .quote-section {
          background-color: #1e293b;
          padding: 25px;
          border-radius: 8px;
          margin: 25px 0;
          border-left: 4px solid #ec4899;
        }
        .quote-title {
          font-size: 14px;
          color: #ec4899;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }
        .quote-value {
          font-size: 24px;
          color: #f1f5f9;
          font-weight: 700;
          margin: 10px 0;
        }
        .details-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #334155;
          font-size: 15px;
          color: #cbd5e1;
        }
        .details-row:last-child {
          border-bottom: none;
        }
        .detail-label {
          font-weight: 600;
          color: #e2e8f0;
        }
        .text {
          font-size: 16px;
          line-height: 1.6;
          color: #cbd5e1;
          margin: 15px 0;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
          color: white;
          padding: 14px 32px;
          text-decoration: none;
          border-radius: 6px;
          margin: 25px 0;
          font-weight: 600;
        }
        .footer {
          background-color: #1e293b;
          padding: 30px 20px;
          text-align: center;
          border-top: 1px solid #334155;
          font-size: 13px;
          color: #94a3b8;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1 class="logo">NEXA</h1>
          <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 14px;">Creative Design Studio</p>
        </div>

        <div class="content">
          <h2 class="greeting">Project Quote for <strong>${projectTitle}</strong></h2>
          
          <p class="text">
            Hi <strong>${clientName}</strong>,
          </p>

          <p class="text">
            Thank you for choosing Nexa Designs for your project. We're excited to work with you! Here's your custom quote:
          </p>

          <div class="quote-section">
            <div class="quote-title">Project Estimate</div>
            <div class="quote-value">${quoteDetails.price || 'Contact for pricing'}</div>
            <div class="details-row">
              <span class="detail-label">Timeline:</span>
              <span>${quoteDetails.timeline || '2-4 weeks'}</span>
            </div>
            <div class="details-row">
              <span class="detail-label">Deliverables:</span>
              <span>${quoteDetails.deliverables || 'Custom designs + revisions'}</span>
            </div>
            <div class="details-row">
              <span class="detail-label">Valid Until:</span>
              <span>${quoteDetails.validUntil || '30 days'}</span>
            </div>
          </div>

          <p class="text">
            This quote includes our full creative process, unlimited revisions during the design phase, and final deliverables in your preferred formats.
          </p>

          <center>
            <a href="https://DesignbyNexa/#/contact" class="cta-button">Let's Get Started</a>
          </center>

          <p class="text">
            Have questions about this quote? Feel free to reach out—we're here to help clarify anything and get your project underway!
          </p>
        </div>

        <div class="footer">
          <p style="margin: 0;">
            © 2025 Nexa Designs. All rights reserved.<br>
            <a href="https://DesignbyNexa/#/" style="color: #ec4899; text-decoration: none;">Visit our website</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `,

  /**
   * Project Update - Keep clients informed on project progress
   */
  projectUpdate: (clientName = 'Client', projectTitle = 'Project', updateMessage = '') => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Project Update - Nexa Designs</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          ${baseStyles}
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #0f172a;
          color: #e2e8f0;
        }
        .header {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          padding: 40px 20px;
          text-align: center;
          border-bottom: 2px solid #f59e0b;
        }
        .logo {
          font-size: 28px;
          font-weight: 700;
          color: #f59e0b;
          margin: 0;
          letter-spacing: 1px;
        }
        .content {
          padding: 40px 20px;
        }
        .greeting {
          font-size: 18px;
          color: #f1f5f9;
          margin: 0 0 20px 0;
          font-weight: 600;
        }
        .update-box {
          background-color: #1e293b;
          padding: 25px;
          border-radius: 8px;
          margin: 25px 0;
          border-left: 4px solid #f59e0b;
        }
        .update-label {
          font-size: 12px;
          color: #f59e0b;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }
        .update-content {
          font-size: 15px;
          color: #cbd5e1;
          line-height: 1.6;
        }
        .progress-bar {
          background-color: #334155;
          height: 8px;
          border-radius: 4px;
          margin: 20px 0;
          overflow: hidden;
        }
        .progress-fill {
          background: linear-gradient(90deg, #f59e0b 0%, #f97316 100%);
          height: 100%;
          border-radius: 4px;
        }
        .text {
          font-size: 16px;
          line-height: 1.6;
          color: #cbd5e1;
          margin: 15px 0;
        }
        .footer {
          background-color: #1e293b;
          padding: 30px 20px;
          text-align: center;
          border-top: 1px solid #334155;
          font-size: 13px;
          color: #94a3b8;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1 class="logo">NEXA</h1>
          <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 14px;">Creative Design Studio</p>
        </div>

        <div class="content">
          <h2 class="greeting">📊 Progress Update: <strong>${projectTitle}</strong></h2>
          
          <p class="text">
            Hi <strong>${clientName}</strong>,
          </p>

          <p class="text">
            We wanted to keep you in the loop! Here's an update on your project:
          </p>

          <div class="update-box">
            <div class="update-label">Latest Update</div>
            <div class="update-content">
              ${updateMessage || 'We\'re making great progress on your design. Our team is working hard to bring your vision to life with creativity and precision.'}
            </div>
          </div>

          <p class="text" style="margin: 20px 0;">
            <strong>Project Progress</strong>
          </p>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 65%;"></div>
          </div>
          <p style="font-size: 14px; color: #94a3b8; margin: 5px 0;">65% Complete</p>

          <p class="text">
            Your project is progressing well, and we're excited about the direction it's heading. We'll continue to keep you updated as we move closer to completion.
          </p>

          <p class="text">
            If you have any feedback or questions, don't hesitate to reach out. We're here to ensure you're completely satisfied with the final result.
          </p>
        </div>

        <div class="footer">
          <p style="margin: 0;">
            © 2025 Nexa Designs. All rights reserved.<br>
            <a href="https://DesignbyNexa/#/" style="color: #f59e0b; text-decoration: none;">Visit our website</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `,

  /**
   * Project Delivery - Final deliverable notification
   */
  projectDelivery: (clientName = 'Client', projectTitle = 'Project', deliveryDetails = {}) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Project Complete - Nexa Designs</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          ${baseStyles}
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #0f172a;
          color: #e2e8f0;
        }
        .header {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          padding: 40px 20px;
          text-align: center;
          border-bottom: 2px solid #10b981;
        }
        .logo {
          font-size: 28px;
          font-weight: 700;
          color: #10b981;
          margin: 0;
          letter-spacing: 1px;
        }
        .content {
          padding: 40px 20px;
        }
        .success-message {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
          border: 2px solid #10b981;
          border-radius: 8px;
          padding: 25px;
          text-align: center;
          margin: 25px 0;
        }
        .success-icon {
          font-size: 48px;
          margin-bottom: 15px;
        }
        .success-title {
          font-size: 22px;
          color: #10b981;
          font-weight: 700;
          margin: 10px 0;
        }
        .success-subtitle {
          font-size: 16px;
          color: #cbd5e1;
          margin: 5px 0;
        }
        .delivery-section {
          background-color: #1e293b;
          padding: 20px;
          border-radius: 8px;
          margin: 25px 0;
          border-left: 4px solid #10b981;
        }
        .delivery-item {
          padding: 12px 0;
          border-bottom: 1px solid #334155;
          display: flex;
          justify-content: space-between;
          font-size: 15px;
        }
        .delivery-item:last-child {
          border-bottom: none;
        }
        .delivery-label {
          color: #e2e8f0;
          font-weight: 600;
        }
        .delivery-value {
          color: #cbd5e1;
        }
        .text {
          font-size: 16px;
          line-height: 1.6;
          color: #cbd5e1;
          margin: 15px 0;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          padding: 14px 32px;
          text-decoration: none;
          border-radius: 6px;
          margin: 25px 0;
          font-weight: 600;
        }
        .footer {
          background-color: #1e293b;
          padding: 30px 20px;
          text-align: center;
          border-top: 1px solid #334155;
          font-size: 13px;
          color: #94a3b8;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1 class="logo">NEXA</h1>
          <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 14px;">Creative Design Studio</p>
        </div>

        <div class="content">
          <div class="success-message">
            <div class="success-icon">🎉</div>
            <div class="success-title">Your Project is Ready!</div>
            <div class="success-subtitle">It's been a pleasure working with you</div>
          </div>
          
          <p class="text">
            Hi <strong>${clientName}</strong>,
          </p>

          <p class="text">
            Exciting news! Your project <strong>"${projectTitle}"</strong> is now complete and ready for delivery. We're thrilled with the final result and hope you are too!
          </p>

          <div class="delivery-section">
            <div class="delivery-item">
              <span class="delivery-label">Project Name:</span>
              <span class="delivery-value">${projectTitle}</span>
            </div>
            <div class="delivery-item">
              <span class="delivery-label">Delivery Date:</span>
              <span class="delivery-value">${deliveryDetails.date || new Date().toLocaleDateString()}</span>
            </div>
            <div class="delivery-item">
              <span class="delivery-label">File Formats:</span>
              <span class="delivery-value">${deliveryDetails.formats || 'Multiple formats included'}</span>
            </div>
            <div class="delivery-item">
              <span class="delivery-label">Access:</span>
              <span class="delivery-value">${deliveryDetails.access || 'Download link provided'}</span>
            </div>
          </div>

          <center>
            <a href="${deliveryDetails.downloadLink || 'https://DesignbyNexa/#/'}" class="cta-button">Download Your Files</a>
          </center>

          <p class="text">
            All your final deliverables are ready for download. They've been optimized for both digital and print use, depending on your project needs.
          </p>

          <p class="text">
            If you need any revisions, have questions about the files, or need them in a different format, please don't hesitate to reach out. We're here to help!
          </p>

          <p class="text">
            <strong>What's Next?</strong><br>
            We'd love to hear your feedback and would greatly appreciate a testimonial or review. Also, if you have any future design needs, we're always excited to collaborate again!
          </p>
        </div>

        <div class="footer">
          <p style="margin: 0;">
            © 2025 Nexa Designs. All rights reserved.<br>
            <a href="https://DesignbyNexa/#/" style="color: #10b981; text-decoration: none;">Visit our website</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `,

  /**
   * Newsletter Template - Regular updates and content
   */
  newsletter: (issueNumber = 1, highlights = []) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nexa Designs Newsletter</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          ${baseStyles}
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #0f172a;
          color: #e2e8f0;
        }
        .header {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
          padding: 40px 20px;
          text-align: center;
          border-bottom: 2px solid #6366f1;
        }
        .logo {
          font-size: 28px;
          font-weight: 700;
          color: #6366f1;
          margin: 0;
          letter-spacing: 1px;
        }
        .issue-badge {
          display: inline-block;
          background-color: #6366f1;
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-top: 10px;
        }
        .content {
          padding: 40px 20px;
        }
        .section-title {
          font-size: 20px;
          color: #f1f5f9;
          font-weight: 700;
          margin: 30px 0 20px 0;
          border-bottom: 2px solid #6366f1;
          padding-bottom: 10px;
        }
        .highlight-card {
          background-color: #1e293b;
          padding: 20px;
          border-radius: 8px;
          margin: 15px 0;
          border-left: 4px solid #6366f1;
        }
        .highlight-title {
          font-size: 16px;
          color: #f1f5f9;
          font-weight: 600;
          margin: 0 0 8px 0;
        }
        .highlight-text {
          font-size: 14px;
          color: #cbd5e1;
          margin: 0;
          line-height: 1.5;
        }
        .text {
          font-size: 16px;
          line-height: 1.6;
          color: #cbd5e1;
          margin: 15px 0;
        }
        .footer {
          background-color: #1e293b;
          padding: 30px 20px;
          text-align: center;
          border-top: 1px solid #334155;
          font-size: 13px;
          color: #94a3b8;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1 class="logo">NEXA</h1>
          <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 14px;">Design Newsletter</p>
          <div class="issue-badge">Issue #${issueNumber}</div>
        </div>

        <div class="content">
          <p class="text">
            Hello creative friends! 👋
          </p>

          <p class="text">
            Welcome to this month's Nexa Designs newsletter. We're excited to share the latest projects, design trends, and updates from our studio.
          </p>

          <h2 class="section-title">📰 This Month's Highlights</h2>
          
          ${highlights.length > 0 
            ? highlights.map(h => `
              <div class="highlight-card">
                <h3 class="highlight-title">${h.title || 'New Project'}</h3>
                <p class="highlight-text">${h.description || 'Check out our latest work!'}</p>
              </div>
            `).join('')
            : `
              <div class="highlight-card">
                <h3 class="highlight-title">Featured Project: Brand Identity Redesign</h3>
                <p class="highlight-text">We just completed an amazing brand identity overhaul for an innovative tech startup. Modern, bold, and unforgettable!</p>
              </div>
              <div class="highlight-card">
                <h3 class="highlight-title">Design Tip: Color Psychology in Branding</h3>
                <p class="highlight-text">Did you know colors can influence consumer behavior? Learn how to choose the perfect palette for your brand.</p>
              </div>
            `
          }

          <h2 class="section-title">🎨 Latest Portfolio Additions</h2>
          <p class="text">
            Check out our latest work on the portfolio page. We've added some stunning pieces that showcase our range and creativity.
          </p>

          <p class="text" style="text-align: center; margin: 30px 0;">
            <a href="https://DesignbyNexa/#/portfolio" style="color: #6366f1; text-decoration: none; font-weight: 600;">View Full Portfolio →</a>
          </p>

          <h2 class="section-title">💡 What's Coming</h2>
          <p class="text">
            Stay tuned for exciting announcements! We're working on some innovative design services and special offers for our newsletter subscribers.
          </p>

          <p class="text">
            Have a project in mind? <a href="https://DesignbyNexa/#/contact" style="color: #6366f1; text-decoration: none;">Get in touch</a> and let's create something amazing together!
          </p>
        </div>

        <div class="footer">
          <p style="margin: 0;">
            © 2025 Nexa Designs. All rights reserved.<br>
            <a href="https://DesignbyNexa/#/" style="color: #6366f1; text-decoration: none;">Visit our website</a> | 
            <a href="https://DesignbyNexa/#/portfolio" style="color: #6366f1; text-decoration: none;">Portfolio</a>
          </p>
          <p style="margin: 15px 0 0 0; font-size: 12px; color: #64748b;">
            You're receiving this because you subscribed to our newsletter.
          </p>
        </div>
      </div>
    </body>
    </html>
  `,
};

export default emailTemplates;
