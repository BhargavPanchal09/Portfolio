import { useState } from 'react'
import './Contact.css'

// Edit contact details here when your profiles or availability change.
const contact = {
  email: 'bhargav8090@gmail.com',
  github: 'https://github.com/BhargavPanchal09',
  linkedin: 'https://www.linkedin.com/in/bhargav-panchal',
  availableFrom: 'January 2027',
}

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('')
  const composeUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=${encodeURIComponent(contact.email)}`
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopyStatus('Email address copied.')
    } catch {
      setCopyStatus('Select the email address above to copy it, or choose Email me.')
    }
  }
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-content" data-reveal>
        <p className="contact-eyebrow">GET IN TOUCH</p>
        <h2 id="contact-title" className="contact-title">Let's build something meaningful.</h2>
        <p className="contact-intro">
          Have an opportunity in full-stack development or AI and machine learning?
          I'd love to hear about your team and the problems you're solving.
        </p>

        <p className="contact-availability">
          <span aria-hidden="true" />
          Available from {contact.availableFrom}
        </p>

        <div className="contact-card">
          <p className="contact-card-label">START A CONVERSATION</p>
          <div className="contact-channels">
            <div className="contact-channel contact-channel-email">
              <svg className="contact-channel-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" />
              </svg>
              <h3>Email</h3>
              <a className="contact-address" href={composeUrl}>{contact.email}</a>
              <a className="contact-email-button" href={composeUrl}>
                Email me<span className="contact-sr-only"> in Gmail</span>
              </a>
              <div className="contact-email-options">
                <a href={`mailto:${contact.email}`}>Use email app</a>
                <button type="button" onClick={copyEmail}>Copy address</button>
              </div>
              <p className="contact-copy-status" role="status">{copyStatus}</p>
            </div>
            <a className="contact-channel contact-social" href={contact.github} target="_blank" rel="noopener noreferrer">
              <svg className="contact-channel-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
              </svg>
              <h3>GitHub</h3>
              <p>Explore my code</p>
              <span className="contact-channel-action">View projects</span>
              <span className="contact-sr-only"> (opens in a new tab)</span>
            </a>
            <a className="contact-channel contact-social" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <svg className="contact-channel-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="8" width="4" height="13" rx="1" /><path d="M11 21V9h4v2c1-3 6-3 6 2v8M15 14v7" /><circle cx="5" cy="4" r="1.5" />
              </svg>
              <h3>LinkedIn</h3>
              <p>Connect professionally</p>
              <span className="contact-channel-action">View profile</span>
              <span className="contact-sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
