# Email Templates for External Platforms - Quick Guide

## 🎯 Supported Platforms

✅ **Zoho** (CRM, Mail, Campaigns)  
✅ **Mailchimp**  
✅ **Constant Contact**  
✅ **GetResponse**  
✅ **Brevo** (formerly Sendinblue)  
✅ **SendGrid**  
✅ **HubSpot**  
✅ **ActiveCampaign**  
✅ **Any platform accepting HTML** (AWeber, Campaign Monitor, etc.)

---

## 🚀 Quick Start

### **Step 1: Get the HTML**
- Find template in `src/templates/emailTemplates.js`
- Or use pre-formatted Zoho version in `src/services/externalPlatformIntegration.js`

### **Step 2: Replace Personalization Tags**
Use the correct merge tags for your platform:

| Platform | First Name | Email |
|----------|-----------|-------|
| **Zoho** | `{$contact.firstName}` | `{$contact.email}` |
| **Mailchimp** | `*\|FNAME\|*` | `*\|EMAIL\|*` |
| **Constant Contact** | `{firstName}` | `{email}` |
| **GetResponse** | `[Name]` | `[Email]` |
| **Brevo** | `{{FIRSTNAME}}` | `{{EMAIL}}` |
| **SendGrid** | `{{firstName}}` | `{{email}}` |
| **HubSpot** | `{{ contact.firstname }}` | `{{ contact.email }}` |
| **ActiveCampaign** | `%FIRST_NAME%` | `%EMAIL%` |

### **Step 3: Import to Your Platform**
Paste into the HTML editor of your chosen platform

---

## 📝 Platform-Specific Instructions

### **ZOHO CRM**
1. Settings → Email Templates
2. New Template
3. Click **HTML** tab
4. Copy/paste HTML from `zohoEmailTemplates.welcomeForZoho`
5. Save

**Merge Tag Example:**
```html
<h2>Welcome, {$contact.firstName}! 👋</h2>
```

### **ZOHO CAMPAIGNS**
1. New Campaign → Create from HTML
2. Paste template
3. Customize with Zoho tags
4. Schedule or send

---

### **MAILCHIMP**
1. Create Campaign
2. Design Email
3. Click **Code** button
4. Paste HTML template
5. Replace tags with Mailchimp format

**Tag Conversion:**
```
{$contact.firstName}  →  *|FNAME|*
{$contact.lastName}   →  *|LNAME|*
{$contact.email}      →  *|EMAIL|*
```

---

### **CONSTANT CONTACT**
1. Create Email
2. Select **Code** mode
3. Paste template
4. Use their merge variables

**Tag Conversion:**
```
{$contact.firstName}  →  {firstName}
{$contact.email}      →  {email}
```

---

### **BREVO (SENDINBLUE)**
1. Campaigns → Create Email
2. Go to **HTML** tab
3. Paste template
4. Use Brevo substitution tags

**Tag Conversion:**
```
{$contact.firstName}  →  {{FIRSTNAME}}
{$contact.email}      →  {{EMAIL}}
```

---

### **SENDGRID**
1. Email API → Dynamic Templates
2. Create new template/version
3. Code editor
4. Paste HTML
5. Use Handlebars syntax

**Tag Conversion:**
```
{$contact.firstName}  →  {{firstName}}
{$contact.email}      →  {{email}}
```

**Example JSON to send:**
```json
{
  "to": "user@example.com",
  "templateId": "d-template-id",
  "dynamicTemplateData": {
    "firstName": "John",
    "email": "john@example.com"
  }
}
```

---

### **HUBSPOT**
1. Marketing → Email
2. Create email
3. Design → **Code** view
4. Paste HTML
5. Use HubSpot personalization tokens

**Tag Conversion:**
```
{$contact.firstName}  →  {{ contact.firstname }}
{$contact.email}      →  {{ contact.email }}
```

---

### **ACTIVECAMPAIGN**
1. Campaigns → Create Email Campaign
2. Design → **HTML**
3. Paste template
4. Use merge fields

**Tag Conversion:**
```
{$contact.firstName}  →  %FIRST_NAME%
{$contact.email}      →  %EMAIL%
```

---

## 🔄 Automated Tag Conversion

Use the conversion function in your code:

```javascript
import { convertTemplateForPlatform } from '@/services/externalPlatformIntegration';
import emailTemplates from '@/templates/emailTemplates';

// Get template and convert for Mailchimp
const welcomeHTML = emailTemplates.welcome('John');
const mailchimpVersion = convertTemplateForPlatform(welcomeHTML, 'mailchimp');

// Now use mailchimpVersion in Mailchimp
```

**Supported platforms in converter:**
- `zoho`
- `mailchimp`
- `constantContact`
- `getResponse`
- `brevo`
- `sendgrid`
- `hubspot`
- `activeCampaign`

---

## 🧪 Test Before Sending

Use these free preview tools:

1. **Mailmodo** - https://mailmodo.com/
2. **Stripo** - https://stripo.email/
3. **Litmus** - https://www.litmus.com/
4. **Email on Acid** - https://www.emailonacid.com/

Simply paste your HTML and see how it looks on 70+ email clients.

---

## 📋 Template Features (All Platforms)

✅ **Responsive Design** - Works on mobile + desktop  
✅ **Dark Theme** - Matches Nexa Designs brand  
✅ **Inline CSS** - No external stylesheets needed  
✅ **Self-Contained** - No JavaScript required  
✅ **Email-Safe** - Works in all email clients  
✅ **Accessible** - Semantic HTML, readable fonts  

---

## ⚠️ Important Notes

1. **Images**: Use absolute URLs (https://...) not relative paths
2. **Links**: Make sure all URLs are complete (include https://)
3. **CSS**: Inline styles are already included - don't add external stylesheets
4. **Fonts**: Using web-safe fonts only
5. **Personalization**: Replace merge tags BEFORE importing

---

## 🔗 Full Template HTML Files

**Location:** `src/services/externalPlatformIntegration.js`

Available pre-formatted templates:
- `zohoEmailTemplates.welcomeForZoho` - Welcome email ready for Zoho
- `zohoEmailTemplates.contactConfirmationForZoho` - Contact confirmation for Zoho

**Custom templates:** See `src/templates/emailTemplates.js` for all 6 templates

---

## 📞 Support

**For integration help:**
1. See `src/services/emailServiceExamples.js` for code examples
2. Read `EMAIL_TEMPLATE_README.md` for detailed documentation
3. Check platform-specific docs for their merge tag syntax

---

## 💡 Example Use Cases

### Send Welcome Email via Zoho
1. Copy `zohoEmailTemplates.welcomeForZoho`
2. Go to Zoho CRM → Email Templates
3. Create new → HTML view → Paste
4. Use when contacting leads

### Monthly Newsletter via Mailchimp
1. Get newsletter template from `emailTemplates.newsletter()`
2. Replace `{$contact.firstName}` with `*|FNAME|*`
3. Paste into Mailchimp
4. Schedule campaign

### Project Quote via SendGrid
1. Convert template: `convertTemplateForPlatform(html, 'sendgrid')`
2. Create SendGrid dynamic template
3. Paste converted HTML
4. Send with client data via API

---

## Next Steps

1. ✅ Choose your email platform
2. ✅ Get template HTML from our files
3. ✅ Convert merge tags if needed
4. ✅ Test in preview tool
5. ✅ Import to platform
6. ✅ Send!

**Happy emailing! 🚀**
