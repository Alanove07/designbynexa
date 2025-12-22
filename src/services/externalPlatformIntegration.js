/**
 * EMAIL TEMPLATES - EXTERNAL PLATFORM INTEGRATION GUIDE
 * 
 * Use these templates with Zoho, Mailchimp, Constant Contact, etc.
 * All templates are pure HTML with inline CSS - no external dependencies needed
 */

/**
 * ZOHO CRM / ZOHO MAIL INTEGRATION
 * ================================
 * 
 * STEP 1: Copy raw HTML from templates
 * STEP 2: Customize merge tags for Zoho
 * STEP 3: Import into Zoho
 * 
 * Zoho Merge Tags:
 * - {$contact.firstName} - Contact first name
 * - {$contact.lastName} - Contact last name
 * - {$contact.email} - Contact email
 * - {$org.name} - Organization name
 * - {$user.firstName} - Current user name
 * - {$date} - Current date
 */

export const zohoEmailTemplates = {
  /**
   * Welcome Email for Zoho
   * Usage: Copy this entire HTML and paste in Zoho → Email Templates → HTML View
   */
  welcomeForZoho: `
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
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
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
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1 class="logo">NEXA</h1>
      <p style="margin: 10px 0 0 0; color: #94a3b8; font-size: 14px;">Creative Design Studio</p>
    </div>

    <div class="content">
      <h2 class="greeting">Welcome, <span class="highlight">{$contact.firstName}</span>! 👋</h2>
      
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
   * Contact Confirmation for Zoho
   */
  contactConfirmationForZoho: `
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
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
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
    .text {
      font-size: 16px;
      line-height: 1.6;
      color: #cbd5e1;
      margin: 15px 0;
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
      </div>

      <p class="text">
        Hi <strong>{$contact.firstName}</strong>,
      </p>

      <p class="text">
        Thank you for reaching out to Nexa Designs! We've received your message and appreciate you taking the time to connect with us.
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
        Our team will get back to you as soon as possible, typically within 24-48 hours.
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
};

/**
 * MAILCHIMP INTEGRATION
 * ====================
 * 
 * 1. Go to Campaigns → Create Campaign
 * 2. Choose "Design Email"
 * 3. Click "Code" in the editor
 * 4. Paste template HTML
 * 5. Use Mailchimp merge tags: *|FNAME|*, *|EMAIL|*, etc.
 * 
 * Mailchimp Merge Tags:
 * - *|FNAME|* - First name
 * - *|LNAME|* - Last name
 * - *|EMAIL|* - Email address
 * - *|DATE:M/d/YYYY|* - Current date
 */

export const mailchimpIntegration = `
MAILCHIMP MERGE TAGS:
- *|FNAME|* → First name
- *|LNAME|* → Last name
- *|EMAIL|* → Email address
- *|CAMPAIGN_DATE:M/d/YYYY|* → Campaign date
- *|MC_PREVIEW_TEXT|* → Preview text

EXAMPLE - Replace {$contact.firstName} with *|FNAME|*

HTML:
<h2 class="greeting">Welcome, <span class="highlight">*|FNAME|*</span>! 👋</h2>
`;

/**
 * CONSTANT CONTACT INTEGRATION
 * ===========================
 * 
 * 1. Campaigns → Create Email
 * 2. Select "Code" mode
 * 3. Paste your HTML
 * 4. Use Constant Contact variables: {firstName}, {lastName}, etc.
 */

export const constantContactIntegration = `
CONSTANT CONTACT MERGE VARIABLES:
- {firstName} → Contact first name
- {lastName} → Contact last name
- {email} → Contact email
- {companyName} → Company name

EXAMPLE:
<h2 class="greeting">Welcome, <span class="highlight">{firstName}</span>! 👋</h2>
`;

/**
 * GETRESPONSE INTEGRATION
 * ======================
 * 
 * 1. Campaigns → Create Email
 * 2. Switch to HTML editor
 * 3. Paste template
 * 4. Use GetResponse tags: [Name], [Email], etc.
 */

export const getResponseIntegration = `
GETRESPONSE AUTOMATION TAGS:
- [Name] → Contact name
- [Email] → Contact email
- [Custom:FieldName] → Custom field
- [Date] → Current date

EXAMPLE:
<h2 class="greeting">Welcome, <span class="highlight">[Name]</span>! 👋</h2>
`;

/**
 * BREVO (SENDINBLUE) INTEGRATION
 * ==============================
 * 
 * 1. Campaigns → Create → Email
 * 2. Go to "HTML" tab
 * 3. Paste template code
 * 4. Use Brevo substitution tags: {{FIRSTNAME}}, {{EMAIL}}, etc.
 */

export const brevoIntegration = `
BREVO SUBSTITUTION TAGS:
- {{FIRSTNAME}} → First name
- {{LASTNAME}} → Last name
- {{EMAIL}} → Email address
- {{CUSTOM.fieldname}} → Custom field
- {{DATE_VARIABLE}} → Current date

EXAMPLE:
<h2 class="greeting">Welcome, <span class="highlight">{{FIRSTNAME}}</span>! 👋</h2>
`;

/**
 * SENDGRID DYNAMIC TEMPLATE INTEGRATION
 * ====================================
 * 
 * 1. Go to Email API → Dynamic Templates
 * 2. Create new template
 * 3. Create new version
 * 4. Code editor → Paste HTML
 * 5. Use Handlebars syntax: {{firstName}}, {{email}}, etc.
 */

export const sendgridIntegration = `
SENDGRID HANDLEBARS SYNTAX:
- {{firstName}} → First name
- {{lastName}} → Last name
- {{email}} → Email address
- {{companyName}} → Company name
- {{date}} → Current date

DYNAMIC CONTENT BLOCKS:
{{#if firstName}}
  <h2>Welcome, {{firstName}}!</h2>
{{else}}
  <h2>Welcome!</h2>
{{/if}}

EXAMPLE JSON DATA TO SEND:
{
  "to": "user@example.com",
  "templateId": "d-xxx",
  "dynamicTemplateData": {
    "firstName": "John",
    "email": "john@example.com"
  }
}
`;

/**
 * HUBSPOT EMAIL INTEGRATION
 * =========================
 * 
 * 1. Go to Marketing → Email
 * 2. Create email → Design
 * 3. Click Code view
 * 4. Paste template
 * 5. Use HubSpot personalization: {{ contact.firstname }}, {{ portal.company_name }}
 */

export const hubspotIntegration = `
HUBSPOT PERSONALIZATION TOKENS:
- {{ contact.firstname }} → First name
- {{ contact.lastname }} → Last name
- {{ contact.email }} → Email
- {{ contact.phone_number }} → Phone
- {{ portal.company_name }} → Company name

CONDITIONAL LOGIC:
{%- if contact.firstname -%}
  <h2>Welcome, {{ contact.firstname }}!</h2>
{%- else -%}
  <h2>Welcome!</h2>
{%- endif -%}

EXAMPLE:
<h2 class="greeting">Welcome, {{ contact.firstname }}! 👋</h2>
`;

/**
 * ACTIVECAMPAIGN INTEGRATION
 * ==========================
 * 
 * 1. Campaigns → Create Email Campaign
 * 2. Design → HTML
 * 3. Paste template code
 * 4. Use ActiveCampaign merge fields: %FIRST_NAME%, %EMAIL%, etc.
 */

export const activeCampaignIntegration = `
ACTIVECAMPAIGN MERGE FIELDS:
- %FIRST_NAME% → First name
- %LAST_NAME% → Last name
- %EMAIL% → Email
- %PHONE% → Phone
- %ORGANIZATION% → Organization

EXAMPLE:
<h2 class="greeting">Welcome, %FIRST_NAME%! 👋</h2>
`;

/**
 * GENERIC HTML EXPORT FUNCTION
 * ============================
 * 
 * How to convert templates for different platforms
 */

export function convertTemplateForPlatform(htmlContent, platform) {
  const replacements = {
    zoho: {
      '{$contact.firstName}': '{$contact.firstName}',
      '{$contact.lastName}': '{$contact.lastName}',
      '{$contact.email}': '{$contact.email}',
    },
    mailchimp: {
      '{$contact.firstName}': '*|FNAME|*',
      '{$contact.lastName}': '*|LNAME|*',
      '{$contact.email}': '*|EMAIL|*',
    },
    constantContact: {
      '{$contact.firstName}': '{firstName}',
      '{$contact.lastName}': '{lastName}',
      '{$contact.email}': '{email}',
    },
    getResponse: {
      '{$contact.firstName}': '[Name]',
      '{$contact.lastName}': '[Email]',
      '{$contact.email}': '[Email]',
    },
    brevo: {
      '{$contact.firstName}': '{{FIRSTNAME}}',
      '{$contact.lastName}': '{{LASTNAME}}',
      '{$contact.email}': '{{EMAIL}}',
    },
    sendgrid: {
      '{$contact.firstName}': '{{firstName}}',
      '{$contact.lastName}': '{{lastName}}',
      '{$contact.email}': '{{email}}',
    },
    hubspot: {
      '{$contact.firstName}': '{{ contact.firstname }}',
      '{$contact.lastName}': '{{ contact.lastname }}',
      '{$contact.email}': '{{ contact.email }}',
    },
    activeCampaign: {
      '{$contact.firstName}': '%FIRST_NAME%',
      '{$contact.lastName}': '%LAST_NAME%',
      '{$contact.email}': '%EMAIL%',
    },
  };

  let converted = htmlContent;
  const tags = replacements[platform.toLowerCase()] || {};

  Object.keys(tags).forEach(original => {
    converted = converted.replace(
      new RegExp(original, 'g'),
      tags[original]
    );
  });

  return converted;
}

/**
 * TESTING TEMPLATES
 * =================
 * 
 * Use these free services to preview templates:
 * - Mailmodo: https://mailmodo.com/
 * - Stripo: https://stripo.email/
 * - MJML: https://mjml.io/try-it-live
 * - Litmus: https://www.litmus.com/
 * - Email on Acid: https://www.emailonacid.com/
 */

export default {
  zohoEmailTemplates,
  mailchimpIntegration,
  constantContactIntegration,
  getResponseIntegration,
  brevoIntegration,
  sendgridIntegration,
  hubspotIntegration,
  activeCampaignIntegration,
  convertTemplateForPlatform,
};
