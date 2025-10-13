import { PolicyLayout, PolicySection, PolicyKeyPoints } from './PolicyLayout';

export function AIEthicsDataPolicy() {
  return (
    <PolicyLayout
      title="AI Ethics & Data Policy"
      description="Our commitments to responsible innovation, data stewardship, and transparent AI delivery."
      lastUpdated="October 13, 2025"
    >
      <PolicySection number="3.1" title="Purpose">
        <p>
          KMATS is committed to building AI solutions that are trustworthy, inclusive, and aligned
          with our clients' values. This policy outlines the principles that guide our development
          practices and data handling standards.
        </p>
      </PolicySection>

      <PolicySection number="3.2" title="Data Handling Principles">
        <PolicyKeyPoints
          items={[
            'Purpose limitation: Client data is processed solely for the objectives defined in the engagement.',
            'Encryption & access control: Information is encrypted and available only to authorised experts.',
            'No external processing: We do not transmit client datasets to third-party AI APIs or external vendors without explicit approval.',
            'Retention: Data is retained only for the project lifecycle and securely deleted once obligations are met.'
          ]}
        />
      </PolicySection>

      <PolicySection number="3.3" title="Ethical AI Standards">
        <p>We design and deploy AI systems against the following global best practices:</p>
        <PolicyKeyPoints
          items={[
            'Fairness: Identifying and mitigating bias in data and model outputs.',
            'Transparency: Documenting model behaviour and providing explainability where feasible.',
            'Accountability: Owning the quality of our deliverables and addressing issues promptly.',
            'Privacy: Applying anonymisation, minimisation, and secure processing techniques.',
            'Safety: Stress-testing models prior to launch and monitoring for downstream risks.'
          ]}
        />
      </PolicySection>

      <PolicySection number="3.4" title="Auditing and Oversight">
        <p>
          KMATS conducts internal reviews and, where necessary, partners with independent auditors
          to validate model performance, governance controls, and compliance with ethical
          commitments.
        </p>
      </PolicySection>

      <PolicySection number="3.5" title="Client Rights and Transparency">
        <p>Clients can expect:</p>
        <PolicyKeyPoints
          items={[
            'Full visibility into data flows and model design decisions.',
            'Access to documentation such as data inventories, model cards, and testing reports.',
            'The ability to request audits, risk assessments, or remediation plans at any stage.'
          ]}
        />
      </PolicySection>
    </PolicyLayout>
  );
}
