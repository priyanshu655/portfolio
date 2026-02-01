import React, { useState, useEffect } from 'react'

const CONTACTS = [
  { id: 'email', label: 'Email', value: 'patelpriyanshu1209@email.com', href: 'mailto:priyanshu@email.com', icon: 'email' },
  { id: 'phone', label: 'Phone', value: '+91 8849617191', href: 'tel:+1234567890', icon: 'phone' },
  { id: 'github', label: 'GitHub', value: 'github.com/yourusername', href: 'https://github.com/priyanshu655', icon: 'github' },
  { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: 'https://www.linkedin.com/in/yourprofile', icon: 'linkedin' },
];

function Icon({ name }) {
  switch (name) {
    case 'email':
      return <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>;
    case 'phone':
      return <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 01.95-.27c1.05.25 2.16.39 3.29.39a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21.5 2.5 13.93 2.5 3a1 1 0 011-1H7a1 1 0 011 1c0 1.13.14 2.24.39 3.29a1 1 0 01-.27.95l-2.2 2.2z"/></svg>;
    case 'github':
      return <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2.1c-3.2.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.8 1.6-.8.9-1.6 2.4-1.1 3-.9.1-.7.4-1.1.7-1.4-2.5-.3-5.1-1.2-5.1-5.4 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.6.1-3.4 0 0 .9-.3 3 .9.9-.2 1.8-.3 2.7-.3s1.8.1 2.7.3c2-1.3 3-.9 3-.9.6 1.8.2 3.1.1 3.4.7.8 1.1 1.7 1.1 2.9 0 4.2-2.6 5.1-5.1 5.4.4.4.7 1 .7 2v3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z"/></svg>;
    case 'linkedin':
      return <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.5 8.98h4.8v2.05c.7-1.3 2.45-2.05 4.2-2.05C22.6 8.98 24 11.04 24 14.52V24h-5V15.6c0-2.24-.04-5.12-3.12-5.12-3.12 0-3.6 2.4-3.6 4.98V24h-5V8.98z"/></svg>;
    default:
      return null;
  }
}

export default function Contact() {
  const [toast, setToast] = useState(null);
  const [copied, setCopied] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  function copy(value, label, id) {
    if (!navigator?.clipboard) {
      setToast('Copied ' + label);
      setCopied(id);
      setTimeout(() => {
        setToast(null);
        setCopied(null);
      }, 1800);
      return;
    }

    navigator.clipboard.writeText(value).then(() => {
      setToast('Copied ' + label);
      setCopied(id);
      setTimeout(() => {
        setToast(null);
        setCopied(null);
      }, 1800);
    }).catch(() => {
      setToast('Failed to copy');
      setTimeout(() => setToast(null), 1800);
    });
  }

  const email = CONTACTS.find((c) => c.id === 'email');
  const github = CONTACTS.find((c) => c.id === 'github');
  const linkedin = CONTACTS.find((c) => c.id === 'linkedin');

  return (
    <section id="contact" className={`section container contact-mini ${mounted ? 'is-visible' : ''}`} aria-label="Contact">
      <div className="contact-mini-left">
        <h3 className="contact-mini-title">Say hello</h3>
        <p className="contact-mini-sub">Available for freelance work & collaborations.</p>
      </div>

      <div className="contact-mini-right">
        <div className="mini-actions" role="toolbar" aria-label="Contact actions">
          {email && (
            <button className={`icon-btn ${copied === email.id ? 'copied' : ''}`} data-tooltip={email.value} title={email.value} aria-label={`Copy ${email.label}`} onClick={() => copy(email.value, email.label, email.id)}>
              {copied === email.id ? (
                <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 6L9 17l-5-5 1.5-1.5L9 14l9.5-9.5z"/></svg>
              ) : (
                <Icon name="email" />
              )}
              <span className="sr-only">Copy email</span>
            </button>
          )}

          {github && (
            <a className="icon-btn" data-tooltip={github.value} href={github.href} target="_blank" rel="noopener noreferrer" title={github.value} aria-label="Open GitHub">
              <Icon name="github" />
            </a>
          )}

          {linkedin && (
            <a className="icon-btn" data-tooltip={linkedin.value} href={linkedin.href} target="_blank" rel="noopener noreferrer" title={linkedin.value} aria-label="Open LinkedIn">
              <Icon name="linkedin" />
            </a>
          )}

          <a className="icon-btn resume-btn" data-tooltip="Resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open resume" title="Resume">
            <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>
          </a>
        </div>
      </div>

      <div className="toast" role="status" aria-live="polite" aria-atomic="true" style={{ display: toast ? 'block' : 'none' }}>{toast}</div>
    </section>
  );
}

