# Egypt Data Career Radar AI

**Status: Work in progress.** An n8n project for finding early-career data and AI roles in Egypt and remote roles open to candidates based in Egypt. It focuses on internships, graduate roles, and openings that ask for 0–3 years of experience.

## Workflows

1. **Job Collector** runs hourly, pulls jobs from Jooble Egypt and other public feeds, normalizes listings, and uses a job fingerprint to prevent duplicate rows in Google Sheets.
2. **LinkedIn Email Alerts** extracts job links from alert emails received in Gmail. Candidates review the listing and apply from its official page.
3. **CV Match Agent** uses Gemini to compare two CV profiles, quote available experience evidence, and flag incomplete descriptions for review. The employer-page enrichment currently supports allowlisted Henkel listings, with the original job data available as a fallback.

## Verified integrations

- Jooble Egypt returned listings in a scheduled run. A repeat run produced no duplicate rows.
- The Henkel employer-page lookup supplied live requirements to the CV matching workflow.
- Worklittle practice mode reached the review step at zero cost. The project has not submitted a live application. The checked Henkel listing did not appear in the Worklittle search.

## Repository contents

- [LinkedIn email parser](egypt-radar-linkedin-test.js), an n8n Code node snippet.

Account credentials, CVs, and the live tracker are private. Hosting costs and provider quotas depend on the setup.
