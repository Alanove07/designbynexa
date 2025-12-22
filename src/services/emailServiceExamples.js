/**
 * EMAIL SERVICE - USAGE EXAMPLES
 * 
 * Quick start guide for using the email templates and service
 */

import emailService from '../services/emailService';
import emailTemplates from '../templates/emailTemplates';

/**
 * ============================================
 * QUICK START - Copy & Paste Examples
 * ============================================
 */

/**
 * EXAMPLE 1: Send Welcome Email
 * Use this when a user first contacts you or subscribes
 */
export async function sendWelcomeEmailExample() {
  try {
    const response = await emailService.sendWelcomeEmail(
      'john@example.com', // recipient email
      'John' // recipient name
    );
    console.log('Welcome email sent:', response);
  } catch (error) {
    console.error('Failed to send welcome email:', error);
  }
}

/**
 * EXAMPLE 2: Send Contact Form Confirmation
 * Use this after receiving a contact form submission
 */
export async function sendContactConfirmationExample() {
  try {
    const response = await emailService.sendContactConfirmation(
      'john@example.com', // sender's email
      'John Doe', // sender's name
      'MSG-' + Date.now() // unique message ID
    );
    console.log('Confirmation email sent:', response);
  } catch (error) {
    console.error('Failed to send confirmation:', error);
  }
}

/**
 * EXAMPLE 3: Send Project Quote
 * Use this when providing pricing to a client
 */
export async function sendProjectQuoteExample() {
  try {
    const response = await emailService.sendProjectQuote(
      'client@example.com', // client email
      'Sarah Johnson', // client name
      'Brand Identity Redesign', // project title
      {
        price: '$2,500',
        timeline: '3-4 weeks',
        deliverables: 'Logo, Brand Guidelines, Business Cards',
        validUntil: '30 days from today',
      }
    );
    console.log('Quote email sent:', response);
  } catch (error) {
    console.error('Failed to send quote:', error);
  }
}

/**
 * EXAMPLE 4: Send Project Update
 * Use this to keep clients informed during project work
 */
export async function sendProjectUpdateExample() {
  try {
    const response = await emailService.sendProjectUpdate(
      'client@example.com', // client email
      'Sarah Johnson', // client name
      'Brand Identity Redesign', // project title
      'We\'ve completed initial sketches and color palette exploration. ' +
      'Our team is now refining the logo options based on your feedback. ' +
      'We\'ll have the first round of designs ready for review by Friday!'
    );
    console.log('Update email sent:', response);
  } catch (error) {
    console.error('Failed to send update:', error);
  }
}

/**
 * EXAMPLE 5: Send Project Delivery Notification
 * Use this when project is complete and ready for delivery
 */
export async function sendProjectDeliveryExample() {
  try {
    const response = await emailService.sendProjectDelivery(
      'client@example.com', // client email
      'Sarah Johnson', // client name
      'Brand Identity Redesign', // project title
      {
        date: '2024-12-20',
        formats: 'PNG, SVG, PDF',
        access: 'Download via secure link',
        downloadLink: 'https://your-download-link.com/project-123',
      }
    );
    console.log('Delivery email sent:', response);
  } catch (error) {
    console.error('Failed to send delivery notification:', error);
  }
}

/**
 * EXAMPLE 6: Send Newsletter to Single Subscriber
 * Use this for regular newsletter updates
 */
export async function sendNewsletterExample() {
  try {
    const highlights = [
      {
        title: 'New Portfolio Addition',
        description:
          'Check out our latest branding project for a sustainable fashion startup!',
      },
      {
        title: 'Design Trend: Minimalism in 2025',
        description:
          'Discover how minimalist design is shaping modern web experiences.',
      },
      {
        title: 'Special Offer for Subscribers',
        description: '15% off all services this month! Use code NEXADEC2024',
      },
    ];

    const response = await emailService.sendNewsletter(
      'subscriber@example.com', // subscriber email
      12, // issue number
      highlights
    );
    console.log('Newsletter sent:', response);
  } catch (error) {
    console.error('Failed to send newsletter:', error);
  }
}

/**
 * EXAMPLE 7: Send Bulk Newsletter
 * Use this to send the same newsletter to multiple subscribers
 */
export async function sendBulkNewsletterExample() {
  try {
    const subscribers = [
      'john@example.com',
      'sarah@example.com',
      'mike@example.com',
      'emma@example.com',
    ];

    const highlights = [
      {
        title: 'Holiday Season Special Projects',
        description:
          'See how we helped clients create festive brand experiences.',
      },
      {
        title: 'Behind the Scenes: Design Process',
        description: 'A deep dive into our creative workflow and methodology.',
      },
    ];

    const responses = await emailService.sendBulkNewsletter(
      subscribers,
      12,
      highlights
    );
    console.log(`Newsletters sent to ${responses.length} subscribers`);
  } catch (error) {
    console.error('Failed to send bulk newsletter:', error);
  }
}

/**
 * ============================================
 * INTEGRATION WITH EXISTING COMPONENTS
 * ============================================
 */

/**
 * INTEGRATION EXAMPLE 1: Contact Form Component
 * Add this to your Contact.jsx component
 */
export function ContactFormIntegration() {
  // After form submission, send confirmation email:
  // const handleSubmit = async (formData) => {
  //   try {
  //     // Save message to database...
  //
  //     // Send confirmation email to user
  //     await emailService.sendContactConfirmation(
  //       formData.email,
  //       formData.name,
  //       'MSG-' + Date.now()
  //     );
  //
  //     // Send notification to admin (modify template or send separate)
  //     // You might want to create a separate admin notification template
  //
  //     showSuccessMessage('Thank you! We received your message.');
  //   } catch (error) {
  //     showErrorMessage('Failed to send confirmation email.');
  //   }
  // };

  return `
    // See actual Contact.jsx implementation
  `;
}

/**
 * INTEGRATION EXAMPLE 2: Admin Dashboard
 * Add email sending controls to PortfolioManager.jsx
 */
export function AdminDashboardIntegration() {
  // After uploading portfolio item:
  // const handleUploadComplete = async (portfolioItem) => {
  //   // Send "New Project" notification to subscribers (optional)
  //   const subscribers = await getNewsletterSubscribers();
  //   
  //   await emailService.sendBulkNewsletter(
  //     subscribers,
  //     currentIssue,
  //     [{
  //       title: 'New Portfolio Addition',
  //       description: `Check out our latest work: ${portfolioItem.title}`,
  //     }]
  //   );
  // };

  return `
    // See actual PortfolioManager.jsx implementation
  `;
}

/**
 * INTEGRATION EXAMPLE 3: Order/Project Management
 * After creating a new project in the database
 */
export function ProjectCreationIntegration() {
  // const createProject = async (projectData) => {
  //   try {
  //     // Save project to Firestore
  //     const projectRef = await addDoc(collection(db, 'projects'), projectData);
  //
  //     // Send quote email to client
  //     await emailService.sendProjectQuote(
  //       projectData.clientEmail,
  //       projectData.clientName,
  //       projectData.title,
  //       {
  //         price: projectData.price,
  //         timeline: projectData.timeline,
  //         deliverables: projectData.deliverables.join(', '),
  //       }
  //     );
  //
  //     showSuccess('Project created and quote email sent!');
  //   } catch (error) {
  //     showError('Failed to create project');
  //   }
  // };

  return `
    // Implement in project creation flow
  `;
}

/**
 * ============================================
 * TESTING & PREVIEW
 * ============================================
 */

/**
 * Preview HTML template in browser
 * Useful for testing email design before sending
 */
export function previewTemplate(templateName, params = {}) {
  const htmlContent = emailTemplates[templateName](
    ...Object.values(params)
  );

  // Open in new window
  const newWindow = window.open();
  newWindow.document.write(htmlContent);
  newWindow.document.close();
}

/**
 * Download HTML template as file
 * Useful for manual inspection
 */
export function downloadTemplate(templateName, params = {}, filename = null) {
  const htmlContent = emailTemplates[templateName](
    ...Object.values(params)
  );

  const element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/html;charset=utf-8,' + encodeURIComponent(htmlContent)
  );
  element.setAttribute('download', filename || `${templateName}.html`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

/**
 * ============================================
 * CONFIGURATION
 * ============================================
 */

/**
 * Configure email service with custom API endpoint
 * Do this in your main App.jsx or index.js
 */
export function configureEmailService() {
  // Point to your backend endpoint
  const apiEndpoint =
    import.meta.env.VITE_EMAIL_API ||
    'https://your-firebase-function.cloudfunctions.net/sendEmail';

  // Re-export or update the service if needed
  // emailService = new EmailService(apiEndpoint);
}

/**
 * ============================================
 * FIRESTORE INTEGRATION
 * ============================================
 */

/**
 * Alternative: Save email to Firestore 'mail' collection
 * Use this if you have the Firebase Extension installed
 */
export async function sendEmailViaFirestore(
  db,
  recipientEmail,
  subject,
  htmlContent
) {
  const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');

  try {
    await addDoc(collection(db, 'mail'), {
      to: recipientEmail,
      message: {
        subject,
        html: htmlContent,
      },
      timestamp: serverTimestamp(),
    });
    console.log('Email queued via Firestore');
  } catch (error) {
    console.error('Error queueing email:', error);
  }
}

export default {
  sendWelcomeEmailExample,
  sendContactConfirmationExample,
  sendProjectQuoteExample,
  sendProjectUpdateExample,
  sendProjectDeliveryExample,
  sendNewsletterExample,
  sendBulkNewsletterExample,
  previewTemplate,
  downloadTemplate,
  configureEmailService,
  sendEmailViaFirestore,
};
