import { SEO } from '../components/SEO';
import { generateBreadcrumbSchema } from '../components/StructuredData';
import { PolicyLayout, PolicySection, PolicyKeyPoints } from './PolicyLayout';

export function NdaPolicy() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'NDA Policy', url: '/nda' }
  ]);

  return (
    <>
      <SEO
        title="NDA Policy - KMATS"
        description="Non-disclosure agreement terms for confidential business relationships. Learn about mutual protection, confidentiality obligations, and access control."
        keywords="NDA, non-disclosure agreement, confidentiality, privacy, KMATS"
        path="/nda"
        structuredData={breadcrumbSchema}
      />
      <PolicyLayout
      title="Non-Disclosure Agreement (NDA)"
      description="The confidentiality commitments that govern how KMATS safeguards sensitive information."
      lastUpdated="October 13, 2025"
    >
      <PolicySection number="5.1" title="Purpose">
        <p>
          KMATS maintains strict confidentiality standards across every engagement. This statement
          summarises the principles contained in our mutual NDA template and individual project
          agreements.
        </p>
      </PolicySection>

      <PolicySection number="5.2" title="Scope of Confidential Information">
        <p>Our confidentiality obligations apply to, but are not limited to:</p>
        <PolicyKeyPoints
          items={[
            'Datasets, source code, algorithms, documentation, and project specifications.',
            'Business strategies, internal communications, client or partner lists, and commercial terms.',
            'All discussions, workshops, meetings, and written exchanges before, during, and after an engagement.'
          ]}
        />
      </PolicySection>

      <PolicySection number="5.3" title="Mutual Protection">
        <p>
          KMATS typically executes mutual NDAs so that both parties are equally protected. When only
          one party shares confidential material, a one-way NDA may be used instead.
        </p>
      </PolicySection>

      <PolicySection number="5.4" title="Duration and Exceptions">
        <PolicyKeyPoints
          items={[
            'Confidentiality obligations last for the term specified in the MOU or indefinitely if no term is stated.',
            'Information already in the public domain, through lawful means, is not considered confidential.',
            'Disclosures required by law or court order are permitted, provided advance notice is given where possible.'
          ]}
        />
      </PolicySection>

      <PolicySection number="5.5" title="Access Control and Training">
        <p>
          Only KMATS employees, contractors, or affiliates who require access to deliver the project
          may handle confidential information. All personnel are bound by internal agreements and
          complete regular security training.
        </p>
      </PolicySection>

      <PolicySection number="5.6" title="Digital Execution">
        <p>
          NDAs may be executed digitally using secure e-signature platforms or verified email
          confirmations. Clients receive a copy of the fully executed document for their records.
        </p>
      </PolicySection>

      <PolicySection number="5.7" title="Transparency for Prospective Clients">
        <p>
          A summary of this confidentiality commitment is available at{' '}
          <a
            href="https://kmats.in/confidentiality"
            className="text-primary hover:text-primary/80 transition-colors duration-300"
          >
            kmats.in/confidentiality
          </a>{' '}
          so prospective clients can review our privacy-first approach before engaging with KMATS.
        </p>
      </PolicySection>
      </PolicyLayout>
    </>
  );
}
