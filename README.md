# Egypt Data Career Radar AI

**Status: Work in progress.** An n8n project for finding early-career data and AI roles in Egypt and remote roles open to candidates based in Egypt. The target is internships, graduate roles, and roles that ask for 0–3 years of experience.

## Workflows

1. **Job Collector** reads public job feeds, normalizes listings, and checks a job fingerprint before saving them to Google Sheets. Listings with unclear experience requirements are flagged for review.
2. **LinkedIn Email Alerts** extracts job links from alert emails received in Gmail. Candidates review the listing and apply from its official page.
3. **CV Match Agent** uses Gemini to compare job requirements with two CV profiles and recommend the better fit, with matching and missing keywords.

## Integration status

- The Collector has run in n8n with its existing sources. Jooble Egypt awaits an API key and a live collection test.
- Worklittle is configured in the working draft as a manual practice request and awaits credentials and verification. Practice mode runs without submitting an application.
- This project aims to use free allowances where available. Hosting and provider quotas depend on the setup.

Account credentials, personal CVs, and the live tracker are private.
