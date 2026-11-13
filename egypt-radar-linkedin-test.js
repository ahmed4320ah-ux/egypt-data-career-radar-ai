const jobs = new Map();
const jobLink = /https?:\/\/(?:[a-z]{2}\.|www\.)?linkedin\.com\/(?:comm\/)?jobs\/view\/(?:[\w%-]*-)?(\d+)(?=[/?#&\s"'<>).,;]|$)/gi;

function readParts(part) {
  if (!part) return '';
  const text = part.body?.data && /^text\/(plain|html)/i.test(part.mimeType ?? '')
    ? Buffer.from(part.body.data, 'base64url').toString('utf8')
    : '';
  return [text, ...(part.parts ?? []).map(readParts)].join(' ');
}

for (const { json: mail } of $input.all()) {
  const header = mail.payload?.headers?.find(h => h.name.toLowerCase() === 'subject');
  const subject = String(mail.subject ?? mail.Subject ?? header?.value ?? '').trim();
  const source = [subject, mail.textHtml, mail.html, mail.textPlain, mail.text, mail.snippet,
    typeof mail.body === 'string' ? mail.body : '', readParts(mail.payload)].join(' ').replace(/&amp;/gi, '&');
  for (const [, id] of source.matchAll(jobLink)) {
    const job_key = 'linkedin|' + id;
    if (jobs.has(job_key)) continue;
    const title = subject.slice(0, 200) || 'LinkedIn Job Alert';
    jobs.set(job_key, { json: {
      job_key, title: /^\s*[=+@-]/.test(title) ? "'" + title : title,
      company: 'Requires review', location: 'Egypt or remote — verify',
      source: 'LinkedIn Email Alert', source_id: id,
      url: 'https://www.linkedin.com/jobs/view/' + id,
      published_at: '', detected_at: new Date().toISOString(),
      description: 'Job alert extracted from email; review original post.',
      rule_score: 0, remote: false, workplace: '', ai_match_score: '', ai_summary_ar: '',
      ai_required_skills: '', ai_status: 'manual_review', application_status: 'New'
    }});
  }
}
return [...jobs.values()];
