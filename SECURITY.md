# Security Policy

## Reporting a Vulnerability

The Hubql Labs team takes security seriously. We appreciate your efforts to responsibly disclose your findings.

### How to Report

If you discover a security vulnerability, please report it by emailing:

**Email**: security@hubql.com

Please **DO NOT** create a public GitHub issue for security vulnerabilities.

### What to Include

When reporting a vulnerability, please include:

1. **Description**: A clear description of the vulnerability
2. **Impact**: The potential impact of the vulnerability
3. **Reproduction**: Steps to reproduce the issue
4. **Proof of Concept**: If possible, include a proof of concept
5. **Suggested Fix**: If you have ideas on how to fix it
6. **Your Contact Info**: How we can reach you for follow-up

### Example Report

```
Subject: [SECURITY] XSS Vulnerability in Contact Form

Description:
There is a cross-site scripting (XSS) vulnerability in the contact form
that allows an attacker to inject malicious scripts.

Impact:
An attacker could steal user session data or perform actions on behalf
of other users.

Reproduction Steps:
1. Navigate to /contact
2. Enter the following in the message field: <script>alert('XSS')</script>
3. Submit the form
4. The script executes on the admin panel

Suggested Fix:
Implement proper input sanitization and CSP headers.

Contact: john@example.com
```

## Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 5 business days
- **Status Update**: Within 10 business days
- **Fix Timeline**: Depends on severity (see below)

## Severity Levels

### Critical
- **Response Time**: Immediate
- **Fix Timeline**: 24-48 hours
- **Examples**: Remote code execution, SQL injection, authentication bypass

### High
- **Response Time**: Within 24 hours
- **Fix Timeline**: 3-7 days
- **Examples**: XSS, CSRF, sensitive data exposure

### Medium
- **Response Time**: Within 48 hours
- **Fix Timeline**: 14-30 days
- **Examples**: Information disclosure, access control issues

### Low
- **Response Time**: Within 5 days
- **Fix Timeline**: 30-90 days
- **Examples**: Minor information leaks, low-impact vulnerabilities

## Security Measures

### Current Protections

1. **HTTPS Only**: All traffic is encrypted with TLS 1.3
2. **Secure Headers**: 
   - Strict-Transport-Security
   - X-Content-Type-Options
   - X-Frame-Options
   - Content-Security-Policy
3. **Input Validation**: All user inputs are validated and sanitized
4. **Authentication**: Secure authentication for admin access
5. **Rate Limiting**: API endpoints are rate-limited
6. **Dependency Scanning**: Regular dependency updates and vulnerability scanning
7. **Environment Variables**: Sensitive data stored securely in environment variables

### Development Practices

- **Code Review**: All code changes require review
- **Dependency Updates**: Regular updates to patch security issues
- **Security Testing**: Regular security audits
- **Access Control**: Principle of least privilege
- **Secrets Management**: No secrets in code or version control

## Supported Versions

We provide security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| Current | :white_check_mark: |
| < 1.0   | :x:                |

## Known Security Considerations

### Environment Variables

Sensitive information is stored in environment variables:

- `TINA_TOKEN`: TinaCMS authentication token
- API keys and secrets

**Never commit these to version control.**

### Third-Party Services

The website integrates with:

- **Vercel**: Hosting and deployment
- **TinaCMS**: Content management
- **PostHog**: Analytics (privacy-focused)
- **Cloudflare**: CDN and security

Each service follows its own security practices.

## Responsible Disclosure

We follow a responsible disclosure process:

1. **Report Received**: We acknowledge receipt of your report
2. **Investigation**: We investigate and validate the issue
3. **Fix Development**: We develop and test a fix
4. **Deployment**: We deploy the fix to production
5. **Public Disclosure**: We publicly disclose the issue (optional)
6. **Recognition**: We recognize your contribution (if desired)

### Recognition

With your permission, we will:

- Acknowledge you in our security hall of fame
- Credit you in the fix commit/release notes
- Provide a reference letter (if requested)

You may remain anonymous if you prefer.

## Bug Bounty

Currently, we do not offer a bug bounty program. However, we deeply appreciate responsible security researchers and their contributions to keeping our users safe.

## Out of Scope

The following are considered out of scope:

- **Social Engineering**: Phishing, vishing, etc.
- **Physical Security**: Physical access to facilities
- **Denial of Service**: DDoS attacks
- **Spam**: Email spam or form spam
- **Third-Party Sites**: Issues on sites we don't control
- **Low-Impact Issues**: Theoretical vulnerabilities without proof of concept

## Security Best Practices for Contributors

If you're contributing to the codebase:

### Do's

- ✅ Use parameterized queries (no SQL injection)
- ✅ Validate and sanitize all user inputs
- ✅ Use HTTPS for all external requests
- ✅ Store secrets in environment variables
- ✅ Implement proper error handling
- ✅ Use secure dependencies (check with `npm audit`)
- ✅ Follow the principle of least privilege
- ✅ Log security-relevant events
- ✅ Use Content Security Policy (CSP)
- ✅ Implement rate limiting on forms

### Don'ts

- ❌ Never commit secrets or API keys
- ❌ Don't use `eval()` or `dangerouslySetInnerHTML` without sanitization
- ❌ Don't store sensitive data in localStorage
- ❌ Don't trust user input
- ❌ Don't use outdated dependencies
- ❌ Don't expose sensitive error messages to users
- ❌ Don't use weak cryptographic algorithms
- ❌ Don't disable security features

## Security Resources

### Helpful Links

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/advanced-features/security-headers)
- [React Security](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
- [npm Security Best Practices](https://docs.npmjs.com/security)

### Security Tools

- `npm audit` - Check for known vulnerabilities
- `npm outdated` - Check for outdated packages
- [Snyk](https://snyk.io/) - Dependency vulnerability scanning
- [OWASP ZAP](https://www.zaproxy.org/) - Security testing

## Questions?

If you have questions about our security policy or practices, please contact:

- **Email**: security@hubql.com
- **General Inquiries**: hello@hubql.com

## Updates

This security policy may be updated from time to time. Check back periodically for updates.

**Last Updated**: December 18, 2025

---

Thank you for helping keep Hubql Labs and our users safe!
