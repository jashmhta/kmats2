import { SEO } from '../components/SEO';
import { generateBreadcrumbSchema } from '../components/StructuredData';
import { PolicyLayout, PolicySection, PolicyKeyPoints } from './PolicyLayout';

export function IntellectualPropertyPolicy() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Intellectual Property Policy', url: '/intellectual-property-policy' }
  ]);

  return (
    <>
      <SEO
        title="Intellectual Property Policy - KMATS"
        description="KMATS intellectual property rights and licensing terms. Learn about ownership structure, open-source compliance, and brand usage guidelines."
        keywords="intellectual property, IP policy, licensing, ownership, trademarks, KMATS"
        path="/intellectual-property-policy"
        structuredData={breadcrumbSchema}
      />
      <PolicyLayout
      title="Intellectual Property Policy"
      description="How KMATS protects creative assets, proprietary tools, and co-developed solutions."
      lastUpdated="October 13, 2025"
    >
      <PolicySection number="4.1" title="Purpose">
        <p>
          This policy defines how KMATS manages intellectual property (IP) across client work,
          internal accelerators, and third-party resources to ensure clarity and respect for all
          contributions.
        </p>
      </PolicySection>

      <PolicySection number="4.2" title="Ownership Structure">
        <PolicyKeyPoints
          items={[
            'Client deliverables: Clients own custom-developed software, models, and assets as described in the governing MOU.',
            'KMATS frameworks & tools: KMATS retains ownership of proprietary algorithms, templates, and reusable components used to accelerate delivery.',
            'Joint innovation: Where work is co-created, IP ownership aligns with the allocation agreed in the MOU or subsequent addenda.'
          ]}
        />
      </PolicySection>

      <PolicySection number="4.3" title="Open-Source and Third-Party Materials">
        <p>
          KMATS honours all applicable open-source licences and third-party usage rights, ensuring
          proper attribution and compliance when such materials are incorporated into a solution.
        </p>
      </PolicySection>

      <PolicySection number="4.4" title="Reuse and Continuous Learning">
        <p>
          KMATS may retain non-identifiable learnings, methodologies, or frameworks developed during
          engagements to improve future offerings. These artefacts will never expose or re-use a
          client's confidential data or proprietary algorithms.
        </p>
      </PolicySection>

      <PolicySection number="4.5" title="Brand and Trademark Usage">
        <PolicyKeyPoints
          items={[
            'Clients may not use the KMATS name, logo, or visual assets without written consent.',
            'KMATS will only reference clients or display their marks publicly after receiving explicit approval.'
          ]}
        />
      </PolicySection>

      <PolicySection number="4.6" title="Alignment with Confidentiality Commitments">
        <p>
          This policy operates alongside the KMATS Confidentiality & NDA Statement. IP stewardship
          therefore includes strict obligations around data privacy, secure storage, and limited
          access to sensitive assets.
        </p>
      </PolicySection>
      </PolicyLayout>
    </>
  );
}
