/**
 * Firebase Cloud Functions - Email Sending Example
 * 
 * SETUP INSTRUCTIONS:
 * 1. Install Firebase Extensions: "Trigger Email from Firestore" or use Nodemailer
 * 2. Configure SMTP credentials in Firebase Environment Variables
 * 3. Deploy this function to Firebase
 * 
 * OPTION 1: Using Firebase Extension (Recommended)
 * - Install: https://firebase.google.com/products/extensions/firebase-firebaseextensions_firestore-send-email
 * - This handles email sending automatically from Firestore documents
 * 
 * OPTION 2: Using Nodemailer (Custom Implementation)
 * - Requires: npm install nodemailer
 * - Set environment variables: SMTP_USER, SMTP_PASSWORD, SMTP_HOST, SMTP_PORT
 * 
 * ====================
 * SETUP OPTION 2 (Nodemailer) - Copy this to firebase/functions/index.js:
 * ====================
 */

/*
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

// Initialize nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// HTTP function to send emails
exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
      const {
        to,
        subject,
        htmlContent,
        fromName = 'Nexa Designs',
        replyTo = process.env.REPLY_TO_EMAIL,
      } = req.body;

      // Validate required fields
      if (!to || !subject || !htmlContent) {
        return res.status(400).json({
          error: 'Missing required fields: to, subject, htmlContent',
        });
      }

      // Send email
      const info = await transporter.sendMail({
        from: `${fromName} <${process.env.SMTP_USER}>`,
        to,
        subject,
        html: htmlContent,
        replyTo: replyTo || process.env.SMTP_USER,
        headers: {
          'X-Mailer': 'Nexa Designs Email Service',
        },
      });

      console.log('Email sent:', info.messageId);

      res.status(200).json({
        success: true,
        messageId: info.messageId,
        message: 'Email sent successfully',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  });
});

// Callable function for authenticated users
exports.sendEmailCallable = functions.https.onCall(async (data, context) => {
  // Check authentication
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'User must be authenticated'
    );
  }

  try {
    const {
      to,
      subject,
      htmlContent,
      fromName = 'Nexa Designs',
      replyTo = process.env.REPLY_TO_EMAIL,
    } = data;

    // Validate required fields
    if (!to || !subject || !htmlContent) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'Missing required fields'
      );
    }

    const info = await transporter.sendMail({
      from: `${fromName} <${process.env.SMTP_USER}>`,
      to,
      subject,
      html: htmlContent,
      replyTo: replyTo || process.env.SMTP_USER,
    });

    return {
      success: true,
      messageId: info.messageId,
      message: 'Email sent successfully',
    };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new functions.https.HttpsError('internal', error.message);
  }
});

// Function to send bulk emails
exports.sendBulkEmails = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'User must be authenticated'
    );
  }

  try {
    const { recipients, subject, htmlContent, fromName = 'Nexa Designs' } = data;

    if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'Recipients must be a non-empty array'
      );
    }

    const results = await Promise.all(
      recipients.map(recipient =>
        transporter.sendMail({
          from: `${fromName} <${process.env.SMTP_USER}>`,
          to: recipient,
          subject,
          html: htmlContent,
          replyTo: process.env.REPLY_TO_EMAIL || process.env.SMTP_USER,
        })
      )
    );

    return {
      success: true,
      sent: results.length,
      message: `${results.length} emails sent successfully`,
    };
  } catch (error) {
    console.error('Error sending bulk emails:', error);
    throw new functions.https.HttpsError('internal', error.message);
  }
});
*/

/**
 * ====================
 * SETUP OPTION 1: Firebase Extension
 * ====================
 * 
 * The Firebase "Trigger Email from Firestore" extension automatically sends emails
 * when you create a document in a specified collection.
 * 
 * CREATE A FIRESTORE COLLECTION CALLED 'mail' WITH THIS STRUCTURE:
 * 
 * Collection: mail/
 *   Document ID: (auto-generated)
 *   Fields:
 *   - to: "user@example.com"
 *   - message:
 *       subject: "Email Subject"
 *       html: "<html content>"
 *       text: "Plain text version"
 *   - delivery_status: "pending" (auto-managed by extension)
 * 
 * USAGE IN YOUR CODE:
 * 
 * import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
 * 
 * async function sendEmailViaExtension(recipientEmail, subject, htmlContent) {
 *   try {
 *     await addDoc(collection(db, 'mail'), {
 *       to: recipientEmail,
 *       message: {
 *         subject: subject,
 *         html: htmlContent,
 *       },
 *       timestamp: serverTimestamp(),
 *     });
 *   } catch (error) {
 *     console.error('Error queuing email:', error);
 *   }
 * }
 */

/**
 * ALTERNATIVE SETUP OPTIONS
 * 
 * 1. SendGrid Integration:
 *    - Install SendGrid CLI
 *    - Configure API key in Firebase Environment
 *    - Use SendGrid Node.js SDK
 * 
 * 2. AWS SES:
 *    - Configure AWS credentials
 *    - Use AWS SDK for Node.js
 * 
 * 3. Resend.com (Modern Alternative):
 *    - Sign up for free tier
 *    - Use Resend API
 * 
 * 4. Brevo (formerly Sendinblue):
 *    - Configure API key
 *    - Use SMTP or REST API
 */

/**
 * ENVIRONMENT VARIABLES NEEDED (.env.local for dev, Firebase for production):
 * 
 * SMTP_USER=your-email@gmail.com
 * SMTP_PASSWORD=your-app-specific-password  (for Gmail, use App Password)
 * SMTP_HOST=smtp.gmail.com
 * SMTP_PORT=587
 * REPLY_TO_EMAIL=support@nexadesigns.com
 * 
 * For Gmail:
 * 1. Enable 2-Factor Authentication
 * 2. Go to https://myaccount.google.com/apppasswords
 * 3. Generate an app-specific password
 * 4. Use that password as SMTP_PASSWORD
 */

/**
 * TESTING THE EMAIL SERVICE LOCALLY
 * 
 * 1. Install Firebase CLI:
 *    npm install -g firebase-tools
 * 
 * 2. Start Firebase emulator:
 *    firebase emulators:start
 * 
 * 3. Test email endpoint in browser or with curl:
 *    curl -X POST http://localhost:5001/your-project/us-central1/sendEmail \
 *      -H "Content-Type: application/json" \
 *      -d '{
 *        "to": "test@example.com",
 *        "subject": "Test Email",
 *        "htmlContent": "<h1>Hello</h1>"
 *      }'
 */

export default {};
