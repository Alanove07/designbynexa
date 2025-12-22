# Email Template System - Nexa Designs

A professional, themeable email template collection for your design studio. Includes welcome emails, contact confirmations, project quotes, updates, deliveries, and newsletters.

## 📁 Files Overview

```
src/
  templates/
    emailTemplates.js          # Email template definitions
  services/
    emailService.js            # Email sending service
    emailServiceExamples.js    # Usage examples and integration guide
    firebaseEmailFunctionsExample.js  # Backend setup guide
```

## 🎨 Available Templates

### 1. **Welcome Email** (`welcome`)
Greet new subscribers or contacts
- Professional introduction to Nexa Designs
- Feature highlights with smooth animations
- Call-to-action to explore portfolio
- Social media links

```javascript
await emailService.sendWelcomeEmail('user@example.com', 'John');
```

### 2. **Contact Confirmation** (`contactConfirmation`)
Confirm receipt of contact form submissions
- Reassures user their message was received
- Displays message reference number
- Sets expectations for response time
- Tracking information

```javascript
await emailService.sendContactConfirmation('user@example.com', 'John', 'MSG-123456');
```

### 3. **Project Quote** (`projectQuote`)
Send pricing and project proposals to clients
- Custom pricing display
- Timeline information
- Deliverables breakdown
- Call-to-action to get started

```javascript
await emailService.sendProjectQuote(
  'client@example.com',
  'Sarah Johnson',
  'Brand Identity Redesign',
  {
    price: '$2,500',
    timeline: '3-4 weeks',
    deliverables: 'Logo, Brand Guidelines, Business Cards',
    validUntil: '30 days from today',
  }
);
```

### 4. **Project Update** (`projectUpdate`)
Keep clients informed during project work
- Progress message
- Visual progress bar
- Reassurance and engagement
- Contact encouragement

```javascript
await emailService.sendProjectUpdate(
  'client@example.com',
  'Sarah Johnson',
  'Brand Identity Redesign',
  'Initial sketches are complete. We\'re now refining based on your feedback...'
);
```

### 5. **Project Delivery** (`projectDelivery`)
Notify clients when project is complete
- Success celebration
- Delivery details and formats
- File access information
- Request for feedback

```javascript
await emailService.sendProjectDelivery(
  'client@example.com',
  'Sarah Johnson',
  'Brand Identity Redesign',
  {
    date: '2024-12-20',
    formats: 'PNG, SVG, PDF',
    access: 'Download via secure link',
    downloadLink: 'https://download-link.com/project-123',
  }
);
```

### 6. **Newsletter** (`newsletter`)
Share updates and content with subscribers
- Customizable issue number
- Highlight cards for news items
- Latest portfolio additions
- Future announcements

```javascript
await emailService.sendNewsletter(
  'subscriber@example.com',
  12,
  [
    {
      title: 'New Portfolio Addition',
      description: 'Check out our latest branding project...',
    },
  ]
);
```

### 7. **Bulk Newsletter** (`sendBulkNewsletter`)
Send same newsletter to multiple subscribers at once

```javascript
await emailService.sendBulkNewsletter(
  ['user1@example.com', 'user2@example.com'],
  12,
  highlights
);
```

## 🎯 Design Features

All templates include:
- **Dark Theme**: Matches Nexa Designs brand (dark-bg: #0f172a)
- **Color Variants**: Different accent colors per template
  - Welcome: Blue (#3b82f6)
  - Contact: Purple (#8b5cf6)
  - Quote: Pink (#ec4899)
  - Update: Orange (#f59e0b)
  - Delivery: Green (#10b981)
  - Newsletter: Indigo (#6366f1)
- **Responsive Design**: Works on all devices
- **Professional Layout**: Clean, modern structure
- **Social Links**: Built-in footer with social media
- **Animations**: Smooth hover effects
- **Accessibility**: Semantic HTML, readable fonts

## 🚀 Quick Start

### Step 1: Basic Usage

```javascript
import emailService from '@/services/emailService';

// Send welcome email
await emailService.sendWelcomeEmail('john@example.com', 'John');
```

### Step 2: Configure Backend

Choose one of these options:

#### Option A: Firebase Cloud Functions (Recommended)
See `firebaseEmailFunctionsExample.js` for detailed setup

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Create functions directory
firebase init functions

# Install dependencies
cd functions
npm install nodemailer cors
```

#### Option B: Firebase Extension
1. Go to Firebase Console → Extensions
2. Install "Trigger Email from Firestore"
3. Configure your email provider
4. Use Firestore 'mail' collection

#### Option C: External Email Service
Use SendGrid, Resend, AWS SES, or Brevo

### Step 3: Set Environment Variables

Create `.env.local` in project root:

```env
VITE_EMAIL_API=https://your-firebase-function.cloudfunctions.net/sendEmail
```

## 📧 Implementation Guide

### In Contact Form Component

```javascript
import emailService from '@/services/emailService';

const handleContactSubmit = async (formData) => {
  try {
    // Save to database
    const messageId = await saveMessageToFirestore(formData);

    // Send confirmation to user
    await emailService.sendContactConfirmation(
      formData.email,
      formData.name,
      messageId
    );

    showSuccess('Thank you! We received your message.');
  } catch (error) {
    showError('Failed to send confirmation email.');
  }
};
```

### In Admin Dashboard

```javascript
import emailService from '@/services/emailService';

const handleSendQuote = async (clientEmail, clientName, projectDetails) => {
  try {
    await emailService.sendProjectQuote(
      clientEmail,
      clientName,
      projectDetails.title,
      {
        price: projectDetails.price,
        timeline: projectDetails.timeline,
        deliverables: projectDetails.deliverables.join(', '),
      }
    );

    showSuccess('Quote email sent!');
  } catch (error) {
    showError('Failed to send quote email.');
  }
};
```

### In Project Management

```javascript
// On project completion
const handleProjectComplete = async (project) => {
  await emailService.sendProjectDelivery(
    project.clientEmail,
    project.clientName,
    project.title,
    {
      date: new Date().toLocaleDateString(),
      formats: 'PNG, SVG, PDF, EPS',
      downloadLink: generateSecureDownloadLink(project.id),
    }
  );
};

// For progress updates
const handleProjectUpdate = async (project, updateMessage) => {
  await emailService.sendProjectUpdate(
    project.clientEmail,
    project.clientName,
    project.title,
    updateMessage
  );
};
```

### Bulk Newsletter

```javascript
const sendMonthlyNewsletter = async () => {
  const subscribers = await getNewsletterSubscribers();

  const highlights = [
    {
      title: 'Featured Project: E-Commerce Redesign',
      description:
        'We transformed a struggling online store into a conversion machine...',
    },
    {
      title: 'Design Trend: AI-Generated Backgrounds',
      description: 'Exploring the future of design with generative AI...',
    },
  ];

  try {
    await emailService.sendBulkNewsletter(
      subscribers,
      getCurrentIssueNumber(),
      highlights
    );

    showSuccess(`Newsletter sent to ${subscribers.length} subscribers`);
  } catch (error) {
    showError('Failed to send newsletter');
  }
};
```

## 🧪 Testing Templates

### Preview in Browser

```javascript
import { previewTemplate } from '@/services/emailServiceExamples';

// View template in new window
previewTemplate('welcome', { recipientName: 'John' });
```

### Download as HTML File

```javascript
import { downloadTemplate } from '@/services/emailServiceExamples';

// Download template for inspection
downloadTemplate('projectQuote', {
  clientName: 'Sarah',
  projectTitle: 'Branding',
  quoteDetails: { price: '$5000' },
});
```

### Firebase Local Testing

```bash
# Start Firebase emulator
firebase emulators:start

# Test email function via localhost
curl -X POST http://localhost:5001/your-project/us-central1/sendEmail \
  -H "Content-Type: application/json" \
  -d '{
    "to": "test@example.com",
    "subject": "Test Email",
    "htmlContent": "<h1>Hello Test</h1>"
  }'
```

## 🔧 Customization

### Change Color Scheme

Edit the color variables in `emailTemplates.js`:

```javascript
// Example: Change primary blue to different color
.header {
  border-bottom: 2px solid #your-color;
}
```

### Add New Template

```javascript
// In emailTemplates.js
specialOffer: (customerName, discount) => `
  <!DOCTYPE html>
  <html>
    <!-- Your HTML here -->
  </html>
`,

// In emailService.js
async sendSpecialOffer(email, customerName, discount) {
  const htmlContent = emailTemplates.specialOffer(customerName, discount);
  return this.sendEmail({
    to: email,
    subject: `Special Offer: ${discount}% Off!`,
    htmlContent,
  });
}
```

### Customize Template Parameters

All templates accept parameters:

```javascript
// Modify template to accept custom content
const htmlContent = emailTemplates.welcome(
  'John',
  'Custom tagline here',
  'https://custom-cta-url.com'
);
```

## 📊 Email Service Architecture

```
┌─────────────────────────────────────┐
│   React Component                   │
│   (Contact/Admin/etc)               │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   emailService.js                   │
│   - sendWelcomeEmail()              │
│   - sendContactConfirmation()       │
│   - sendProjectQuote()              │
│   - etc.                            │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   emailTemplates.js                 │
│   - HTML generation                 │
│   - Dynamic content injection       │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   Your Backend (Choice of):         │
│   ┌─────────────────────────────┐   │
│   │ Firebase Cloud Functions    │   │
│   ├─────────────────────────────┤   │
│   │ Firebase Extension          │   │
│   ├─────────────────────────────┤   │
│   │ External Email Service      │   │
│   │ (SendGrid, Resend, etc)     │   │
│   └─────────────────────────────┘   │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│   Email Provider                    │
│   (Gmail, SendGrid, AWS SES, etc)   │
└─────────────────────────────────────┘
```

## 🛠️ Backend Setup Options

### 1. Firebase Cloud Functions (Recommended)

**Pros:**
- Integrated with Firebase
- Secure authentication
- Scales automatically
- Free tier available

**Setup Time:** ~15 minutes

See `firebaseEmailFunctionsExample.js` for complete code.

### 2. Firebase Extension

**Pros:**
- No code required
- Easy setup
- Built-in error handling

**Setup Time:** ~5 minutes

Install from Firebase Console → Extensions

### 3. External Email Service

**Popular Options:**
- SendGrid: Free tier, 100 emails/day
- Resend: Modern alternative, great for React
- AWS SES: Cheapest option
- Brevo: Full marketing automation

**Setup Time:** ~20 minutes per service

## 🔐 Security Considerations

1. **Never expose API keys** - Use environment variables
2. **Rate limit emails** - Prevent abuse
3. **Verify email addresses** - Before sending
4. **Use SMTP credentials securely** - Store in Firebase Environment
5. **Add DKIM/SPF records** - For email authentication
6. **Sanitize user input** - If including in emails

## 📱 Responsive Testing

All templates are mobile-responsive. Test on:
- Mobile browsers (iOS Safari, Chrome)
- Desktop email clients (Gmail, Outlook, Apple Mail)
- Web-based clients (Gmail web)
- Email preview tools (Mailmodo, Stripo)

## 🚨 Troubleshooting

### Emails not sending
1. Check backend endpoint is configured
2. Verify Firebase credentials
3. Check email address is valid
4. Review console for error messages

### Images not loading
- Use absolute URLs, not relative paths
- Check image hosting is accessible
- Verify CORS settings if needed

### Styling issues
- Test in multiple email clients
- Some clients strip CSS - use inline styles
- Use web-safe fonts only

### Firebase Function errors
- Check Cloud Functions logs in Firebase Console
- Verify environment variables are set
- Test locally with emulator first

## 📚 Additional Resources

- [Firebase Cloud Functions Docs](https://firebase.google.com/docs/functions)
- [Nodemailer Documentation](https://nodemailer.com/)
- [SendGrid Integration](https://sendgrid.com/docs/)
- [Email Best Practices](https://litmus.com/resources/email-best-practices)
- [MJML Email Framework](https://mjml.io/) (alternative)

## 🎓 Next Steps

1. Choose your backend email service
2. Set up Firebase Cloud Function or extension
3. Configure environment variables
4. Integrate with Contact component
5. Test with real email address
6. Deploy to production

## 📝 Notes

- All templates use Tailwind-inspired color scheme
- Email HTML is self-contained (no external CSS)
- Tested on major email clients
- Mobile-first responsive design
- Ready for production use

---

**Need help?** Check `emailServiceExamples.js` for complete integration examples!
