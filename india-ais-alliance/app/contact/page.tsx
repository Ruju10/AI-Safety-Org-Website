import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — India AI Safety Coordination Hub',
  description: 'Get in touch with the India AI Safety Coordination Hub.',
}

const contactFormUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL

export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        paddingTop: 120,
        paddingBottom: 80,
        paddingLeft: 52,
        paddingRight: 52,
        background: 'var(--white)',
      }}
    >
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <h1
          style={{
            fontFamily: 'var(--font-fraunces)',
            fontSize: 'clamp(40px, 6vw, 68px)',
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
            marginBottom: 24,
          }}
        >
          Get in Touch
        </h1>

        <p
          style={{
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            color: 'var(--ink-mid)',
            lineHeight: 1.8,
            fontWeight: 300,
            maxWidth: 560,
            marginBottom: 56,
          }}
        >
          Have a question, want to collaborate, or just curious about what&apos;s happening in
          India&apos;s AI safety space? We&apos;d love to hear from you. Drop us a note and
          we&apos;ll get back to you shortly.
        </p>

        {contactFormUrl ? (
          <iframe
            src={contactFormUrl}
            width="100%"
            height="600"
            style={{
              border: 'none',
              borderRadius: 12,
            }}
            title="Contact form"
          />
        ) : (
          <div
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '56px 40px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: 'var(--ink-mid)',
                lineHeight: 1.7,
              }}
            >
              Contact form coming soon. In the meantime, reach us through our{' '}
              <a
                href="/get-involved"
                style={{ color: 'var(--teal)', textDecoration: 'none', fontWeight: 500 }}
              >
                Get Involved
              </a>{' '}
              page.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
