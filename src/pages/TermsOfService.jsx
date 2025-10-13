import { PolicyLayout, PolicySection, PolicyKeyPoints } from './PolicyLayout';

export function TermsOfService() {
  return (
    <PolicyLayout
      title="Terms of Service"
      description="Understand the commitments that guide every KMATS engagement."
      lastUpdated="October 13, 2025"
    >
      <PolicySection number="2.1" title="Agreement to Terms">
        <p>
          By accessing the KMATS website or engaging our services, you agree to these Terms of
          Service ("Terms"). If you do not agree with any part of these Terms, please discontinue
          use of our services immediately.
        </p>
      </PolicySection>

      <PolicySection number="2.2" title="Scope of Services">
        <p>
          KMATS delivers artificial intelligence consultancy, software development, machine learning
          solutions, data analytics, and related professional services (collectively, the "Services")
          as defined in each engagement.
        </p>
      </PolicySection>

      <PolicySection number="2.3" title="Engagement Framework">
        <p>
          Each project is governed by a Memorandum of Understanding (MOU) or similar agreement that
          sets out deliverables, timelines, and commercial terms. If any provision in these Terms
          conflicts with an executed MOU, the MOU will prevail for that engagement.
        </p>
      </PolicySection>

      <PolicySection number="2.4" title="Payments and Refunds">
        <PolicyKeyPoints
          items={[
            'Fees are milestone-based and detailed in the relevant MOU.',
            'Unless otherwise agreed in writing, payments are non-refundable once a milestone is delivered.',
            'Invoices must be settled within the timeframe stated in the MOU.'
          ]}
        />
      </PolicySection>

      <PolicySection number="2.5" title="Intellectual Property">
        <PolicyKeyPoints
          items={[
            'Clients retain ownership of custom deliverables they commission unless the MOU states otherwise.',
            'KMATS retains ownership of proprietary tools, accelerators, or pre-existing components used to deliver the engagement.',
            'Shared or co-created assets will follow the allocation set out in the governing MOU.'
          ]}
        />
      </PolicySection>

      <PolicySection number="2.6" title="Acceptable Use">
        <p>Clients agree not to:</p>
        <PolicyKeyPoints
          items={[
            'Use KMATS deliverables for unlawful, discriminatory, or otherwise unethical purposes.',
            'Reverse-engineer, resell, or distribute proprietary KMATS components without written permission.',
            'Violate ethical AI usage guidelines communicated during the engagement.'
          ]}
        />
      </PolicySection>

      <PolicySection number="2.7" title="Limitation of Liability">
        <p>
          KMATS provides services on a best-effort basis. We are not liable for indirect,
          consequential, incidental, or punitive damages arising from the use of solutions,
          recommendations, or outputs derived from our services.
        </p>
      </PolicySection>

      <PolicySection number="2.8" title="Termination">
        <p>KMATS may suspend or terminate an engagement if:</p>
        <PolicyKeyPoints
          items={[
            'The client breaches contractual, legal, or ethical commitments.',
            'Misuse of deliverables or confidential information is identified.',
            'Required payments are not received within the agreed timeline.'
          ]}
        />
      </PolicySection>

      <PolicySection number="2.9" title="Governing Law">
        <p>
          These Terms are governed by the laws of India. Any disputes will fall under the exclusive
          jurisdiction of the courts of Mumbai, Maharashtra, unless an executed MOU specifies an
          alternative venue.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
