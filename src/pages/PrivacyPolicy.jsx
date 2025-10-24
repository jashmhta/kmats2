import { PolicyLayout, PolicySection, PolicyKeyPoints } from './PolicyLayout';

export function PrivacyPolicy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      description="How KMATS collects, uses, and protects the information entrusted to us."
      lastUpdated="October 13, 2025"
    >
      <PolicySection number="1.1" title="Overview">
        <p>
          KMATS AI & Tech Consultancy ("KMATS", "we", "our", or "us") respects your privacy and is
          committed to protecting the personal and business information shared with us. This policy
          explains what we collect, how we use it, and the safeguards we apply across our website,
          communications, and client engagements.
        </p>
      </PolicySection>

      <PolicySection number="1.2" title="Data We Collect">
        <p>We collect only the information required to deliver our services effectively:</p>
        <PolicyKeyPoints
          items={[
            'Personal data: Name, email address, phone number, company information, and communication history.',
            'Usage data: Analytics metrics (for example, Google Analytics) that show how visitors interact with our website.',
            'Client data: Project briefs, datasets, and technical assets shared to build, deploy, or support AI solutions.',
            'Non-personal data: Aggregated or anonymised insights that help us improve performance and reliability.'
          ]}
        />
      </PolicySection>

      <PolicySection number="1.3" title="How We Use Data">
        <p>All data is processed for legitimate business purposes such as:</p>
        <PolicyKeyPoints
          items={[
            'Responding to enquiries and providing ongoing support.',
            'Delivering consulting engagements, including research, development, and optimisation tasks.',
            'Managing contracts, billing, and client success activities.',
            'Meeting legal, regulatory, and compliance requirements.'
          ]}
        />
        <p>
          KMATS never sells personal data and does not use client-provided materials for unrelated
          AI model training. Processing stays within the scope defined by each engagement.
        </p>
      </PolicySection>

      <PolicySection number="1.4" title="Cookies and Analytics">
        <p>
          We rely on lightweight analytics tools, primarily Google Analytics, to understand how the
          site performs. Visitors can manage or disable cookies directly in their browser settings
          without affecting access to core content.
        </p>
      </PolicySection>

      <PolicySection number="1.5" title="International Data Transfers">
        <p>
          Because KMATS serves clients worldwide, information may be processed outside India. When
          data crosses borders, we apply safeguards aligned with the EU GDPR, India's Digital
          Personal Data Protection (DPDP) Act, and other applicable privacy regulations.
        </p>
      </PolicySection>

      <PolicySection number="1.6" title="Data Security">
        <p>
          Personal and project data is protected using KMATS proprietary security controls, robust
          encryption, and secure infrastructure. Access is restricted to authorised team members who
          require it to deliver or support services.
        </p>
      </PolicySection>

      <PolicySection number="1.7" title="Data Retention">
        <p>
          We retain data only for as long as necessary to fulfil the purpose for which it was
          collected, complete an engagement, or satisfy statutory and accounting obligations.
        </p>
      </PolicySection>

      <PolicySection number="1.8" title="Your Rights">
        <p>
          Under the GDPR, India's DPDP Act, and other privacy frameworks, you may exercise the
          following rights at any time:
        </p>
        <PolicyKeyPoints
          items={[
            'Request a copy of the data we hold about you.',
            'Ask us to correct inaccurate or incomplete information.',
            'Request deletion, subject to contractual or legal requirements.',
            'Withdraw consent where processing is based on consent.'
          ]}
        />
        <p>
          To exercise these rights, email{' '}
          <a
            href="mailto:privacy@kmats.in"
            className="text-primary hover:text-primary/80 transition-colors duration-300"
          >
            privacy@kmats.in
          </a>
          .
        </p>
      </PolicySection>

      <PolicySection number="1.9" title="Contact">
        <p>
          If you have questions about this Privacy Policy or our data practices, email{' '}
          <a
            href="mailto:krishankshah@kmats.in"
            className="text-primary hover:text-primary/80 transition-colors duration-300"
          >
            krishankshah@kmats.in
          </a>
          . We aim to respond to all privacy enquiries within two business days.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
