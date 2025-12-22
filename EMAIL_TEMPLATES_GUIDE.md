# Email Templates - HTML Files

All email templates are now available as separate, standalone HTML files. Use them directly in Zoho, Mailchimp, or any email platform!

## 📧 Available Templates

### 1. **welcome.html** - Welcome Email
**Use case:** Greet new subscribers or contacts  
**Variables to replace:**
- `{RECIPIENT_NAME}` - Person's first name

**Quick copy:** Open in browser → Select all → Copy → Paste in email platform

---

### 2. **contact-confirmation.html** - Contact Form Confirmation
**Use case:** Confirm receipt of contact form submissions  
**Variables to replace:**
- `{SENDER_NAME}` - Name of person who sent message
- `{MESSAGE_ID}` - Unique message reference (e.g., MSG-123456)

---

### 3. **project-quote.html** - Project Quote/Proposal
**Use case:** Send pricing and project proposals to clients  
**Variables to replace:**
- `{CLIENT_NAME}` - Client name
- `{PROJECT_TITLE}` - Project name
- `{PRICE}` - Quote price (e.g., "$2,500")
- `{TIMELINE}` - How long project takes (e.g., "3-4 weeks")
- `{DELIVERABLES}` - What client will receive
- `{VALID_UNTIL}` - When quote expires (e.g., "30 days")

---

### 4. **project-update.html** - Project Progress Update
**Use case:** Keep clients informed during project work  
**Variables to replace:**
- `{CLIENT_NAME}` - Client name
- `{PROJECT_TITLE}` - Project name
- `{UPDATE_MESSAGE}` - Custom progress update text

---

### 5. **project-delivery.html** - Project Completion Notice
**Use case:** Notify clients when project is complete  
**Variables to replace:**
- `{CLIENT_NAME}` - Client name
- `{PROJECT_TITLE}` - Project name
- `{DELIVERY_DATE}` - Completion date
- `{FILE_FORMATS}` - Available formats (e.g., "PNG, SVG, PDF")
- `{ACCESS_METHOD}` - How to access files (e.g., "Download link")
- `{DOWNLOAD_LINK}` - Actual download URL

---

### 6. **newsletter.html** - Newsletter
**Use case:** Share updates and content with subscribers  
**Variables to replace:**
- `{ISSUE_NUMBER}` - Newsletter issue number (e.g., 12)
- `{HIGHLIGHT_1_TITLE}` - First highlight title
- `{HIGHLIGHT_1_DESCRIPTION}` - First highlight description
- `{HIGHLIGHT_2_TITLE}` - Second highlight title
- `{HIGHLIGHT_2_DESCRIPTION}` - Second highlight description
- `{HIGHLIGHT_3_TITLE}` - Third highlight title
- `{HIGHLIGHT_3_DESCRIPTION}` - Third highlight description

---

## 🚀 How to Use

### Method 1: Zoho CRM / Zoho Mail
1. Open HTML file in text editor
2. Find and replace all variables with actual content
3. Copy entire HTML
4. In Zoho: Settings → Email Templates → New → HTML view
5. Paste the HTML
6. Save

### Method 2: Mailchimp / Constant Contact / etc.
1. Open HTML file in text editor
2. Replace variables with content
3. Copy all HTML
4. In platform: Create Email → Choose HTML/Code view
5. Paste the HTML
6. Preview and send

### Method 3: View in Browser (Testing)
1. Open HTML file directly in your web browser
2. See exactly how it will look in email clients
3. Test all links and styling

### Method 4: Direct Usage (Production)
Use with email APIs:
```javascript
const fs = require('fs');
const template = fs.readFileSync('project-quote.html', 'utf-8');

const customized = template
  .replace('{CLIENT_NAME}', 'John Doe')
  .replace('{PROJECT_TITLE}', 'Logo Design')
  .replace('{PRICE}', '$1,500');

// Send customized HTML via your email service
await emailService.sendEmail({
  to: 'john@example.com',
  subject: 'Your Project Quote',
  htmlContent: customized
});
```

---

## 🎨 Template Features

All templates include:
- ✅ **Dark theme** matching Nexa Designs brand
- ✅ **Unique accent colors** per template
- ✅ **Responsive design** (mobile + desktop)
- ✅ **Inline CSS** (works in all email clients)
- ✅ **Professional layout** with smooth styling
- ✅ **Accessible HTML** with semantic tags
- ✅ **No external dependencies** (images/fonts)

---

## 🔄 Personalization Variables

### Universal Variables (all templates):
- Links use `https://DesignbyNexa/#/` 

### Email-specific personalization:
Replace these with actual merge tags for your platform:

| What to do | Zoho | Mailchimp | Brevo | HubSpot |
|-----------|------|----------|-------|---------|
| Insert first name | `{$contact.firstName}` | `*\|FNAME\|*` | `{{FIRSTNAME}}` | `{{ contact.firstname }}` |
| Insert email | `{$contact.email}` | `*\|EMAIL\|*` | `{{EMAIL}}` | `{{ contact.email }}` |
| Insert company | `{$org.name}` | `*\|COMPANY\|*` | `{{COMPANY}}` | `{{ contact.company }}` |

See [EXTERNAL_PLATFORM_GUIDE.md](EXTERNAL_PLATFORM_GUIDE.md) for complete platform integration details.

---

## 📝 Template Customization

Each HTML file can be customized:

1. **Add your logo** - Replace the "NEXA" text with your image
2. **Change colors** - Search/replace hex colors:
   - Blue: `#3b82f6` (welcome)
   - Purple: `#8b5cf6` (contact)
   - Pink: `#ec4899` (quote)
   - Orange: `#f59e0b` (update)
   - Green: `#10b981` (delivery)
   - Indigo: `#6366f1` (newsletter)

3. **Modify footer** - Edit social links and copyright info
4. **Update links** - Replace all `https://DesignbyNexa/#/` with your actual domain

---

## 🧪 Testing Templates

### Before Sending:

1. **Open in browser** - Double-click the HTML file to preview
2. **Test responsiveness** - Resize browser window to mobile size
3. **Check links** - Click all buttons to verify URLs work
4. **Preview on multiple devices** - Test on phone, tablet, desktop

### Use Online Preview Tools:
- [Mailmodo](https://mailmodo.com/) - Free email preview
- [Stripo](https://stripo.email/) - Template editor and tester
- [Litmus](https://www.litmus.com/) - Professional preview testing

---

## ✏️ Quick Find & Replace Guide

### Replace all client names:
```
Find: {CLIENT_NAME}
Replace with: Your actual client name
```

### Replace all links:
```
Find: https://DesignbyNexa/#/
Replace with: https://yourdomain.com/
```

### Replace social media:
```
Find: https://instagram.com → https://instagram.com/yourprofile
Find: https://twitter.com → https://twitter.com/yourprofile
Find: https://linkedin.com → https://linkedin.com/yourprofile
```

---

## 📁 File Locations

All templates are in: `src/templates/`

```
src/templates/
├── welcome.html
├── contact-confirmation.html
├── project-quote.html
├── project-update.html
├── project-delivery.html
├── newsletter.html
├── emailTemplates.js          (Original JS version)
└── [other template files]
```

---

## 🔗 Related Files

- **[EXTERNAL_PLATFORM_GUIDE.md](EXTERNAL_PLATFORM_GUIDE.md)** - Platform-specific setup instructions
- **[EMAIL_TEMPLATE_README.md](EMAIL_TEMPLATE_README.md)** - Detailed documentation
- **[src/services/emailService.js](src/services/emailService.js)** - JavaScript integration
- **[src/services/externalPlatformIntegration.js](src/services/externalPlatformIntegration.js)** - Platform conversion tools

---

## 💡 Best Practices

1. **Always test first** - Open in browser before sending
2. **Use absolute URLs** - Never use relative paths for links/images
3. **Replace all variables** - Don't send with `{PLACEHOLDER}` text
4. **Keep backups** - Save originals before customizing
5. **Validate links** - Ensure all URLs are correct and working
6. **Check mobile preview** - Resize to 320px width to test mobile

---

## 🆘 Troubleshooting

**Q: Template looks broken in Gmail/Outlook?**
A: All CSS is inline. If broken, check that you copied the entire HTML including the `<style>` tag.

**Q: Variables showing as {PLACEHOLDER}?**
A: Make sure you replaced ALL instances with actual content. Use Ctrl+H (Find & Replace) to replace them all at once.

**Q: Links not working?**
A: Make sure you're using complete URLs with `https://` prefix.

**Q: Images not showing?**
A: Use absolute image URLs (starting with https://), not relative paths.

---

## ✨ Ready to Go!

All templates are:
- ✅ Production-ready
- ✅ Tested in major email clients
- ✅ Mobile-responsive
- ✅ Easy to customize
- ✅ No dependencies needed

Pick a template, customize the variables, and send! 🚀
