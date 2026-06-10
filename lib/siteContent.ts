/* =====================================================
   Site-wide page content
   Drives every templated page (services, consulting,
   industries, insights, platforms, about, utility/legal)
   ===================================================== */

export type PageContent = {
  eyebrow: string
  title: string
  description: string
  heroImage?: string
  intro?: {
    heading: string
    body: string[]
    bullets?: string[]
    image?: string
  }
  stats?: { value: string; label: string }[]
  features?: {
    heading?: string
    subheading?: string
    items: { title: string; desc: string }[]
  }
  /** Prose sections — used for legal / document pages */
  sections?: { heading: string; body: string[] }[]
  cta?: { title: string; subtitle: string }
}

/* =====================================================
   SERVICES
   ===================================================== */

export const servicesContent: Record<string, PageContent> = {
  cloud: {
    eyebrow: 'Services',
    title: 'Cloud Services',
    description:
      'Design, migrate, and manage cloud environments that accelerate innovation while keeping costs and risk under control.',
    heroImage: '/images/manufacturing-2.jpg',
    intro: {
      heading: 'A pragmatic path to cloud value',
      body: [
        'Cloud is not a destination — it is an operating model. NovaCore helps you choose the right mix of public, private, and hybrid platforms for every workload, then run them with the discipline your business demands.',
        'From landing zones and migration factories to FinOps and continuous optimization, we bring the engineering depth to make cloud deliver.',
      ],
      bullets: [
        'Cloud strategy and workload placement across hybrid and multicloud',
        'Large-scale migration and modernization programs',
        'FinOps practices that keep consumption aligned to business value',
        'Resilient, secure-by-design cloud operations',
      ],
    },
    stats: [
      { value: '10K+', label: 'workloads migrated to cloud' },
      { value: '40%', label: 'average run-cost reduction achieved' },
      { value: '6', label: 'hyperscaler and platform alliances' },
      { value: '24/7', label: 'global cloud operations coverage' },
    ],
    features: {
      subheading: 'What we offer',
      heading: 'Cloud services across the full lifecycle',
      items: [
        { title: 'Cloud advisory and strategy', desc: 'Business-aligned cloud roadmaps, target operating models, and migration sequencing.' },
        { title: 'Migration and modernization', desc: 'Factory-based migration with refactoring where it creates measurable value.' },
        { title: 'Hybrid and multicloud operations', desc: 'A single operating plane across AWS, Azure, Google Cloud, and private estates.' },
        { title: 'Cloud security and compliance', desc: 'Guardrails, posture management, and regulatory alignment built in from day one.' },
        { title: 'FinOps and optimization', desc: 'Continuous right-sizing, commitment management, and showback transparency.' },
        { title: 'Platform engineering', desc: 'Internal developer platforms that make the secure path the easy path.' },
      ],
    },
    cta: {
      title: 'Make cloud your competitive advantage',
      subtitle: 'Talk to our cloud architects about your migration, modernization, or optimization goals.',
    },
  },

  'core-enterprise': {
    eyebrow: 'Services',
    title: 'Core Enterprise and zCloud',
    description:
      'Modernize mission-critical mainframe and core enterprise systems without putting the business at risk.',
    heroImage: '/images/value-operations.jpg',
    intro: {
      heading: 'The systems your business cannot live without',
      body: [
        'Core enterprise platforms still run the processes that matter most — orders, payments, production, settlement. NovaCore keeps them reliable, secure, and current while opening them to cloud-native innovation.',
        'Our zCloud capabilities bring as-a-service economics and agility to mainframe estates, so you modernize on your terms.',
      ],
      bullets: [
        'Mainframe modernization with proven, low-risk patterns',
        'zCloud: mainframe-as-a-service with consumption pricing',
        'Core system integration with cloud and API ecosystems',
        'Skills continuity for platforms facing talent scarcity',
      ],
    },
    stats: [
      { value: '99.99%', label: 'availability across managed core estates' },
      { value: '30+', label: 'years of mainframe engineering heritage' },
      { value: '50%', label: 'typical reduction in MIPS-related costs' },
      { value: '0', label: 'failed core migrations on our watch' },
    ],
    features: {
      subheading: 'What we offer',
      heading: 'Core enterprise services that de-risk modernization',
      items: [
        { title: 'Mainframe managed services', desc: 'End-to-end operation of z/OS environments with committed SLAs.' },
        { title: 'zCloud platform', desc: 'Consume mainframe capacity as a service with cloud-style flexibility.' },
        { title: 'Application re-platforming', desc: 'Move suitable workloads to distributed or cloud targets safely.' },
        { title: 'Core integration', desc: 'Expose core capabilities through APIs and event streams.' },
        { title: 'Data liberation', desc: 'Make core data available to analytics and AI in near real time.' },
        { title: 'Resilience engineering', desc: 'Recovery, replication, and cyber-vault patterns for core systems.' },
      ],
    },
    cta: {
      title: 'Modernize the core with confidence',
      subtitle: 'Our specialists have run the world’s most demanding core estates for decades.',
    },
  },

  'cyber-resilience': {
    eyebrow: 'Services',
    title: 'Cyber Resilience',
    description:
      'Anticipate, withstand, and recover from cyber threats — keeping operations running when attacks happen.',
    heroImage: '/images/value-security.jpg',
    intro: {
      heading: 'Beyond prevention: resilience by design',
      body: [
        'Determined attackers will eventually get in. What separates leaders is how quickly they detect, contain, and recover. NovaCore builds cyber resilience into your architecture, operations, and culture.',
        'We combine zero-trust design, around-the-clock detection and response, and rehearsed recovery so a bad day never becomes a bad quarter.',
      ],
      bullets: [
        'Zero-trust architectures spanning IT and OT environments',
        'Managed detection and response with 24/7 SOC coverage',
        'Immutable backup and clean-room recovery capabilities',
        'Tabletop exercises and recovery rehearsals that build muscle memory',
      ],
    },
    stats: [
      { value: '24/7', label: 'security operations coverage' },
      { value: '<15min', label: 'median time to triage critical alerts' },
      { value: '4hr', label: 'recovery objective for protected workloads' },
      { value: '100%', label: 'of engagements include recovery rehearsal' },
    ],
    features: {
      subheading: 'What we offer',
      heading: 'Security services for the full attack lifecycle',
      items: [
        { title: 'Security strategy and zero trust', desc: 'Roadmaps and reference architectures aligned to your risk appetite.' },
        { title: 'Managed detection and response', desc: 'Threat hunting, monitoring, and response from global SOCs.' },
        { title: 'Identity and access', desc: 'Modern IAM that secures users, machines, and workloads.' },
        { title: 'OT and IoT security', desc: 'Protection purpose-built for plant floors and connected assets.' },
        { title: 'Cyber recovery', desc: 'Immutable vaults and clean-room recovery to restore trust fast.' },
        { title: 'Incident readiness', desc: 'Playbooks, exercises, and retainer-based response support.' },
      ],
    },
    cta: {
      title: 'Build resilience before you need it',
      subtitle: 'Assess your readiness with a NovaCore cyber resilience workshop.',
    },
  },

  'data-ai': {
    eyebrow: 'Services',
    title: 'Data and AI',
    description:
      'Turn enterprise data into trusted intelligence — and scale AI from pilots to production with confidence.',
    heroImage: '/images/value-ai.jpg',
    intro: {
      heading: 'AI you can trust, built on data you can trust',
      body: [
        'AI value depends on data foundations: quality, governance, and architecture. NovaCore builds modern data platforms and the MLOps discipline to move models from experiment to dependable production.',
        'From generative AI use-case discovery to responsible-AI guardrails, we help you scale what works and retire what doesn’t.',
      ],
      bullets: [
        'Modern data platforms on lakehouse architectures',
        'Production-grade MLOps and LLMOps pipelines',
        'Generative AI use cases with measurable business outcomes',
        'Responsible AI governance, monitoring, and controls',
      ],
    },
    stats: [
      { value: '500+', label: 'data and AI engagements delivered' },
      { value: '3x', label: 'faster model deployment with our MLOps stack' },
      { value: '80%', label: 'of pilots reaching production with our approach' },
      { value: '15+', label: 'industry AI accelerators ready to deploy' },
    ],
    features: {
      subheading: 'What we offer',
      heading: 'From data foundations to AI at scale',
      items: [
        { title: 'Data strategy and governance', desc: 'Operating models that make data a managed, trusted asset.' },
        { title: 'Data platform engineering', desc: 'Cloud-native lakehouse and streaming platforms built to scale.' },
        { title: 'Analytics and BI modernization', desc: 'Self-service insight delivered at the speed of decisions.' },
        { title: 'Machine learning engineering', desc: 'Feature stores, pipelines, and monitoring for reliable ML.' },
        { title: 'Generative AI solutions', desc: 'Retrieval-augmented, agentic, and copilot patterns in production.' },
        { title: 'Responsible AI', desc: 'Bias testing, explainability, and policy enforcement at scale.' },
      ],
    },
    cta: {
      title: 'Scale AI you can trust',
      subtitle: 'Start with a data and AI readiness assessment from NovaCore experts.',
    },
  },

  'digital-workplace': {
    eyebrow: 'Services',
    title: 'Digital Workplace',
    description:
      'Give every employee a secure, intelligent, anywhere-first work experience that boosts productivity and retention.',
    heroImage: '/images/services/applications/services-what-we-do.jpg',
    intro: {
      heading: 'Experience-led, security-assured workplaces',
      body: [
        'Work happens everywhere now. NovaCore designs digital workplaces that feel effortless for employees and stay manageable for IT — from devices and collaboration to virtual desktops and intelligent support.',
        'We measure what employees actually experience and continuously engineer friction out of their day.',
      ],
      bullets: [
        'Modern device lifecycle and endpoint management',
        'Collaboration platforms employees actually love',
        'AI-powered service desks that resolve issues before tickets',
        'Experience-level agreements (XLAs), not just SLAs',
      ],
    },
    stats: [
      { value: '1M+', label: 'endpoints under management' },
      { value: '65%', label: 'of incidents resolved by automation' },
      { value: '+22', label: 'average employee NPS uplift' },
      { value: '30%', label: 'support cost reduction typical in year one' },
    ],
    features: {
      subheading: 'What we offer',
      heading: 'Workplace services built around people',
      items: [
        { title: 'Modern endpoint management', desc: 'Zero-touch provisioning and policy-driven device security.' },
        { title: 'Collaboration and productivity', desc: 'Microsoft 365 and Google Workspace adoption that sticks.' },
        { title: 'Virtual desktops and apps', desc: 'Secure access to any workload from any device.' },
        { title: 'Intelligent service desk', desc: 'Conversational AI support with human escalation that works.' },
        { title: 'Experience analytics', desc: 'Telemetry-driven insight into real employee friction.' },
        { title: 'Field and depot services', desc: 'Hands-on support wherever your people work.' },
      ],
    },
    cta: {
      title: 'Reimagine the employee experience',
      subtitle: 'See how an experience-led workplace transforms productivity and retention.',
    },
  },

  'network-edge': {
    eyebrow: 'Services',
    title: 'Network and Edge',
    description:
      'Build the connected foundation for digital business — from software-defined networks to intelligent edge computing.',
    heroImage: '/images/manufacturing-3.jpg',
    intro: {
      heading: 'The network is the nervous system of digital operations',
      body: [
        'Cloud, IoT, and AI all depend on a network that is fast, secure, and programmable. NovaCore designs and operates software-defined networks and edge platforms that bring compute to where data is created.',
        'For manufacturers, that means deterministic plant-floor connectivity, private 5G, and edge AI that keeps decisions close to the line.',
      ],
      bullets: [
        'SD-WAN and SASE architectures for secure any-to-any connectivity',
        'Private 5G and wireless engineered for industrial environments',
        'Edge compute platforms for real-time analytics and AI',
        'Network operations with AI-driven assurance',
      ],
    },
    stats: [
      { value: '180+', label: 'countries with delivery coverage' },
      { value: '99.99%', label: 'network availability across managed estates' },
      { value: '10ms', label: 'edge inference latency achieved on the floor' },
      { value: '45%', label: 'typical WAN cost optimization' },
    ],
    features: {
      subheading: 'What we offer',
      heading: 'Connectivity and edge services end to end',
      items: [
        { title: 'Network strategy and design', desc: 'Target architectures for campus, branch, WAN, and cloud.' },
        { title: 'SD-WAN and SASE', desc: 'Software-defined, security-converged connectivity at scale.' },
        { title: 'Private 5G and wireless', desc: 'Deterministic wireless for factories, ports, and campuses.' },
        { title: 'Edge computing platforms', desc: 'Deploy and operate compute close to data and decisions.' },
        { title: 'Network managed services', desc: 'AIOps-driven operations with proactive assurance.' },
        { title: 'IoT connectivity', desc: 'Secure onboarding and management for connected assets.' },
      ],
    },
    cta: {
      title: 'Connect everything that matters',
      subtitle: 'Explore network and edge architectures with NovaCore engineers.',
    },
  },
}

/* =====================================================
   PLATFORMS
   ===================================================== */

export const platformsContent: Record<string, PageContent> = {
  bridge: {
    eyebrow: 'Platforms',
    title: 'NovaCore Bridge',
    description:
      'An open integration platform that gives you a single operational view across your entire technology estate.',
    intro: {
      heading: 'One platform. Total operational clarity.',
      body: [
        'NovaCore Bridge connects your tools, clouds, and data into a single operating plane — correlating events, automating response, and surfacing the insight your teams need to act.',
        'Built on open APIs, Bridge works with the investments you already have rather than replacing them.',
      ],
      bullets: [
        'Unified observability across applications, infrastructure, and cloud',
        'AI-driven event correlation that cuts noise dramatically',
        'Automation workflows that resolve known issues hands-free',
        'Open integrations with 300+ enterprise tools',
      ],
    },
    stats: [
      { value: '300+', label: 'out-of-the-box tool integrations' },
      { value: '85%', label: 'reduction in actionable alert noise' },
      { value: '60%', label: 'of routine incidents auto-remediated' },
      { value: '1', label: 'pane of glass across your estate' },
    ],
    features: {
      subheading: 'Platform capabilities',
      heading: 'What Bridge delivers',
      items: [
        { title: 'Unified observability', desc: 'Metrics, logs, traces, and events in one correlated view.' },
        { title: 'AIOps intelligence', desc: 'Machine learning that finds the signal in operational noise.' },
        { title: 'Workflow automation', desc: 'Codified runbooks that execute consistently, every time.' },
        { title: 'Service mapping', desc: 'Live dependency maps from infrastructure to business service.' },
        { title: 'Open APIs', desc: 'Extend, integrate, and embed Bridge wherever you need it.' },
        { title: 'Governance dashboards', desc: 'SLA, risk, and cost insight for technology leaders.' },
      ],
    },
    cta: {
      title: 'See your estate through one lens',
      subtitle: 'Request a NovaCore Bridge demonstration tailored to your environment.',
    },
  },

  collaborative: {
    eyebrow: 'Platforms',
    title: 'NovaCore Collaborative',
    description:
      'The space where delivery happens — connecting your teams with NovaCore experts, globally and locally.',
    intro: {
      heading: 'Co-delivery, made tangible',
      body: [
        'NovaCore Collaborative is how we work with you: shared backlogs, shared rituals, shared accountability. It combines digital workspaces with physical co-creation hubs in major delivery centers.',
        'The result is transparency you can audit and velocity you can feel.',
      ],
      bullets: [
        'Shared delivery workspaces with real-time progress visibility',
        'Co-creation hubs for workshops, design sprints, and PI planning',
        'Joint metrics and dashboards — one version of the truth',
        'Knowledge transfer built into every engagement',
      ],
    },
    stats: [
      { value: '40+', label: 'co-creation hubs worldwide' },
      { value: '100%', label: 'engagement transparency, by design' },
      { value: '2wk', label: 'typical sprint cadence across teams' },
      { value: '92%', label: 'customer satisfaction across engagements' },
    ],
    features: {
      subheading: 'How it works',
      heading: 'Collaboration without friction',
      items: [
        { title: 'Digital delivery rooms', desc: 'Persistent virtual spaces for every workstream.' },
        { title: 'Co-creation workshops', desc: 'Facilitated sessions that turn ambiguity into roadmaps.' },
        { title: 'Transparent metrics', desc: 'Velocity, quality, and risk visible to everyone.' },
        { title: 'Embedded enablement', desc: 'Your teams skill up while we deliver together.' },
      ],
    },
    cta: {
      title: 'Experience delivery differently',
      subtitle: 'Visit a NovaCore Collaborative hub or join a virtual delivery room.',
    },
  },

  vital: {
    eyebrow: 'Platforms',
    title: 'NovaCore Vital',
    description:
      'Co-creating intelligent, human-centered experiences that put people at the heart of digital transformation.',
    intro: {
      heading: 'Technology with a human pulse',
      body: [
        'Vital is NovaCore’s experience design platform — research, prototyping, and measurement that ensure what we build actually works for the humans who use it.',
        'From employee journeys to customer touchpoints, Vital keeps experience quality measurable and improving.',
      ],
      bullets: [
        'Human-centered research and journey mapping',
        'Rapid prototyping and validation with real users',
        'Experience telemetry and continuous measurement',
        'Accessibility and inclusion engineered in from the start',
      ],
    },
    stats: [
      { value: '200+', label: 'experience transformations delivered' },
      { value: '+30', label: 'average NPS improvement on Vital programs' },
      { value: '4wk', label: 'from concept to validated prototype' },
      { value: 'WCAG', label: 'AA accessibility as a baseline standard' },
    ],
    features: {
      subheading: 'Platform capabilities',
      heading: 'What Vital delivers',
      items: [
        { title: 'Experience research', desc: 'Evidence over opinion: interviews, telemetry, and field studies.' },
        { title: 'Service design', desc: 'End-to-end journeys across channels, systems, and teams.' },
        { title: 'Rapid prototyping', desc: 'Test ideas in days, not quarters.' },
        { title: 'Experience analytics', desc: 'Quantified friction and continuously tracked outcomes.' },
      ],
    },
    cta: {
      title: 'Design experiences people love',
      subtitle: 'Bring a journey that matters and co-create the future state with Vital.',
    },
  },
}

/* =====================================================
   CONSULTING
   ===================================================== */

export const consultingIndexContent: PageContent = {
  eyebrow: 'Consulting',
  title: 'Consulting that turns strategy into action',
  description:
    'Business-led technology decisions, practical transformation roadmaps, and execution at enterprise scale.',
  heroImage: '/images/expert.jpg',
  intro: {
    heading: 'Advice that ships',
    body: [
      'Strategy decks don’t transform companies — execution does. NovaCore Consulting pairs senior advisors with delivery engineers, so every recommendation comes with a credible path to production.',
      'We work shoulder-to-shoulder with your leaders, from first hypothesis to measurable outcome.',
    ],
    bullets: [
      'Senior practitioners, not slide factories',
      'Roadmaps with costed, sequenced, de-risked execution plans',
      'Outcome-linked commercial models available',
      'Deep manufacturing and industrial domain expertise',
    ],
  },
  stats: [
    { value: '1,200+', label: 'consultants across industries' },
    { value: '85%', label: 'of strategies we design, we also deliver' },
    { value: '30+', label: 'countries with active engagements' },
    { value: '9/10', label: 'clients re-engage within 18 months' },
  ],
  features: {
    subheading: 'Capabilities',
    heading: 'How we help leaders move',
    items: [
      { title: 'Digital Transformation', desc: 'Enterprise-wide change programs with measurable business outcomes.' },
      { title: 'Cloud Strategy', desc: 'Workload-by-workload decisions grounded in economics and risk.' },
      { title: 'Cybersecurity Strategy', desc: 'Risk-based security investment aligned to business priorities.' },
      { title: 'Enterprise Architecture', desc: 'Target-state architectures that survive contact with reality.' },
      { title: 'Advisory Services', desc: 'On-demand access to senior expertise when decisions loom.' },
      { title: 'Transformation Programs', desc: 'Program leadership that lands complex, multi-year change.' },
    ],
  },
  cta: {
    title: 'Start the conversation',
    subtitle: 'Bring us your hardest problem. We’ll bring people who have solved it before.',
  },
}

export const consultingContent: Record<string, PageContent> = {
  'digital-transformation': {
    eyebrow: 'Consulting',
    title: 'Digital Transformation',
    description:
      'Enterprise-wide change programs that connect technology investment to measurable business outcomes.',
    heroImage: '/images/manufacturing-1.jpg',
    intro: {
      heading: 'Transformation that compounds',
      body: [
        'The best transformations build capability, not just deliverables. We help you sequence change so each phase funds and de-risks the next — turning transformation from a project into a momentum engine.',
      ],
      bullets: [
        'Value-stream-led prioritization of initiatives',
        'Operating model and workforce change designed in parallel',
        'Funding models that link spend to validated outcomes',
        'Transformation offices that actually accelerate delivery',
      ],
    },
    features: {
      subheading: 'Focus areas',
      heading: 'Where we create momentum',
      items: [
        { title: 'Transformation strategy', desc: 'North-star definition with pragmatic, staged roadmaps.' },
        { title: 'Operating model design', desc: 'Product-centric organizations that ship continuously.' },
        { title: 'Process digitization', desc: 'Automation and AI applied where it moves the P&L.' },
        { title: 'Change enablement', desc: 'Adoption engineering so new capabilities stick.' },
      ],
    },
    cta: {
      title: 'Make transformation stick',
      subtitle: 'Talk to leaders who have steered industrial-scale change.',
    },
  },

  'cloud-strategy': {
    eyebrow: 'Consulting',
    title: 'Cloud Strategy',
    description:
      'Workload-by-workload cloud decisions grounded in economics, risk, and your real-world constraints.',
    intro: {
      heading: 'The right cloud, for the right reasons',
      body: [
        'Cloud-first is not a strategy — it’s a slogan. We build cloud strategies on workload-level analysis: what moves, what modernizes, what stays, and why. Every recommendation comes with the business case attached.',
      ],
      bullets: [
        'Portfolio assessment with disposition for every workload',
        'Total-cost models validated against real consumption data',
        'Exit, sovereignty, and concentration risk addressed up front',
        'Landing-zone and operating-model blueprints ready to execute',
      ],
    },
    features: {
      subheading: 'Focus areas',
      heading: 'What a NovaCore cloud strategy covers',
      items: [
        { title: 'Portfolio rationalization', desc: '7R disposition with effort and value scoring.' },
        { title: 'Cloud economics', desc: 'FinOps-ready cost models, not optimistic spreadsheets.' },
        { title: 'Sovereignty and risk', desc: 'Regulatory and resilience constraints designed in.' },
        { title: 'Migration sequencing', desc: 'Wave plans that respect dependencies and capacity.' },
      ],
    },
    cta: {
      title: 'Get a cloud strategy you can execute',
      subtitle: 'Start with a two-week portfolio assessment.',
    },
  },

  cybersecurity: {
    eyebrow: 'Consulting',
    title: 'Cybersecurity Strategy',
    description:
      'Risk-based security strategies that protect what matters most — and earn the board’s confidence.',
    heroImage: '/images/value-security.jpg',
    intro: {
      heading: 'Security investment, prioritized by risk',
      body: [
        'Unlimited threats meet limited budgets. We help CISOs build defensible, risk-based strategies: quantify exposure, prioritize controls, and communicate posture in language the board understands.',
      ],
      bullets: [
        'Cyber risk quantification tied to business impact',
        'Zero-trust roadmaps spanning IT, OT, and cloud',
        'Security operating model and talent strategy',
        'Board-ready reporting and metrics frameworks',
      ],
    },
    features: {
      subheading: 'Focus areas',
      heading: 'How we strengthen your posture',
      items: [
        { title: 'Risk assessment', desc: 'Quantified exposure across your attack surface.' },
        { title: 'Zero-trust strategy', desc: 'Architecture and sequencing for least-privilege everywhere.' },
        { title: 'OT security programs', desc: 'Industrial environments secured without stopping production.' },
        { title: 'Resilience planning', desc: 'Response and recovery strategies rehearsed before crisis.' },
      ],
    },
    cta: {
      title: 'Strengthen your security posture',
      subtitle: 'Engage our strategists for a cyber risk review.',
    },
  },

  'enterprise-architecture': {
    eyebrow: 'Consulting',
    title: 'Enterprise Architecture',
    description:
      'Target-state architectures that survive contact with reality — and the governance to keep them on course.',
    intro: {
      heading: 'Architecture as a product, not a PDF',
      body: [
        'Great architecture is a living capability: decision records, reusable patterns, and guardrails that make the right way the fast way. We help you build EA functions that engineers respect and executives trust.',
      ],
      bullets: [
        'Business-capability-anchored target states',
        'Pattern libraries and golden paths for delivery teams',
        'Architecture decision governance that moves at sprint speed',
        'Technical debt strategy with funded remediation',
      ],
    },
    features: {
      subheading: 'Focus areas',
      heading: 'Where strong architecture pays off',
      items: [
        { title: 'Target-state design', desc: 'Pragmatic future states with credible transition paths.' },
        { title: 'Integration architecture', desc: 'API and event backbones that unlock composability.' },
        { title: 'Debt remediation', desc: 'Prioritized, funded paydown of what slows you most.' },
        { title: 'EA operating model', desc: 'Architects embedded where decisions actually happen.' },
      ],
    },
    cta: {
      title: 'Architect for change',
      subtitle: 'Pressure-test your target state with NovaCore architects.',
    },
  },

  advisory: {
    eyebrow: 'Consulting',
    title: 'Advisory Services',
    description:
      'On-demand access to senior technology expertise — for the decisions that can’t wait for a program.',
    intro: {
      heading: 'Senior judgment, when you need it',
      body: [
        'Some decisions need an experienced outside voice more than a six-month engagement. Our advisory model gives your leaders direct access to NovaCore practitioners — for reviews, second opinions, and decision support.',
      ],
      bullets: [
        'Architecture and vendor decision reviews',
        'Deal-side technical due diligence',
        'Executive sparring for CIOs and CTOs',
        'Flexible retainers sized to your cadence',
      ],
    },
    features: {
      subheading: 'Engagement formats',
      heading: 'Ways to engage our advisors',
      items: [
        { title: 'Decision reviews', desc: 'Structured challenge before you commit.' },
        { title: 'Technical due diligence', desc: 'Clear-eyed assessment for investments and M&A.' },
        { title: 'Executive advisory', desc: 'A standing senior counterpart for your leadership.' },
        { title: 'Health checks', desc: 'Rapid program and platform assessments.' },
      ],
    },
    cta: {
      title: 'Get a second opinion that counts',
      subtitle: 'Set up an advisory retainer or a one-off review.',
    },
  },

  workshops: {
    eyebrow: 'Consulting',
    title: 'Co-creation Workshops',
    description:
      'Facilitated working sessions that turn ambiguity into aligned roadmaps — in days, not months.',
    intro: {
      heading: 'Alignment is a deliverable',
      body: [
        'The hardest part of transformation is getting the right people to agree on what good looks like. Our facilitated workshops compress months of circular debate into focused days that end with decisions, owners, and next steps.',
      ],
      bullets: [
        'Vision and north-star alignment sessions',
        'Architecture and platform design sprints',
        'AI use-case discovery and prioritization',
        'Incident and resilience tabletop exercises',
      ],
    },
    features: {
      subheading: 'Popular formats',
      heading: 'Workshops that move the needle',
      items: [
        { title: 'Discovery sprints', desc: 'From problem statement to validated direction in one week.' },
        { title: 'Design studios', desc: 'Co-create target architectures with your engineers.' },
        { title: 'AI opportunity labs', desc: 'Surface and rank use cases by value and feasibility.' },
        { title: 'Tabletop exercises', desc: 'Rehearse the worst day before it happens.' },
      ],
    },
    cta: {
      title: 'Book a working session',
      subtitle: 'Tell us the decision you need to make — we’ll design the room.',
    },
  },

  programs: {
    eyebrow: 'Consulting',
    title: 'Transformation Programs',
    description:
      'Program leadership that lands complex, multi-year change — on time, on budget, and adopted.',
    intro: {
      heading: 'Delivery muscle for enterprise change',
      body: [
        'Big programs fail in predictable ways: fuzzy scope, optimistic plans, unmanaged dependencies. Our program leaders have landed industrial-scale change and bring the discipline that keeps complexity honest.',
      ],
      bullets: [
        'Outcome-based program design and governance',
        'Dependency and risk management that surfaces truth early',
        'Vendor orchestration across complex delivery ecosystems',
        'Benefit tracking from baseline to realization',
      ],
    },
    features: {
      subheading: 'What we run',
      heading: 'Programs we lead',
      items: [
        { title: 'ERP transformations', desc: 'SAP and Oracle programs with manufacturing depth.' },
        { title: 'Cloud migration programs', desc: 'Factory-model execution at thousand-workload scale.' },
        { title: 'Post-merger integration', desc: 'Technology consolidation with day-one certainty.' },
        { title: 'Operating model rollouts', desc: 'New ways of working, adopted not announced.' },
      ],
    },
    cta: {
      title: 'Put your program on solid ground',
      subtitle: 'Engage NovaCore program leadership from mobilization onward.',
    },
  },

  playbooks: {
    eyebrow: 'Consulting',
    title: 'Consulting Playbooks',
    description:
      'Proven frameworks built from real enterprise engagements — so your transformation starts from experience, not a blank page.',
    intro: {
      heading: 'Reusable wisdom from the field',
      body: [
        'Every NovaCore engagement feeds our playbook library: tested methods, templates, and decision frameworks for the challenges enterprises face again and again. Clients use them to move faster with fewer unforced errors.',
      ],
      bullets: [
        'Migration factory playbook with wave-planning toolkits',
        'Zero-trust adoption playbook for IT and OT',
        'AI scale-up playbook from pilot to production',
        'Legacy exit playbook for end-of-life platforms',
      ],
    },
    features: {
      subheading: 'The library',
      heading: 'Playbooks clients use most',
      items: [
        { title: 'Cloud migration factory', desc: 'Roles, tooling, and cadences for migration at scale.' },
        { title: 'Zero-trust adoption', desc: 'Sequenced controls rollout with quick wins first.' },
        { title: 'AI productionization', desc: 'The path from promising pilot to dependable service.' },
        { title: 'Modern operations', desc: 'SRE and AIOps practices that cut toil systematically.' },
      ],
    },
    cta: {
      title: 'Start from proven ground',
      subtitle: 'Ask us which playbooks fit your current initiatives.',
    },
  },
}

/* =====================================================
   INDUSTRIES
   ===================================================== */

export const industriesContent: Record<string, PageContent> = {
  manufacturing: {
    eyebrow: 'Industries',
    title: 'Manufacturing',
    description:
      'Bridge IT and OT, accelerate Industry 4.0, and build resilient, future-ready factories.',
    heroImage: '/images/manufacturing-1.jpg',
    intro: {
      heading: 'Deep expertise from the plant floor up',
      body: [
        'Manufacturing is in NovaCore’s DNA. We modernize plant-floor IT and OT environments, connect machines to meaning, and help manufacturers compete on intelligence as much as efficiency.',
        'From discrete to process manufacturing, our teams speak both PLC and P&L.',
      ],
      image: '/images/manufacturing-2.jpg',
      bullets: [
        'IT/OT convergence with zero-trust security built in',
        'Connected factory platforms and digital twins',
        'Predictive maintenance and quality powered by AI',
        'Resilient supply chain visibility end to end',
      ],
    },
    stats: [
      { value: '200+', label: 'manufacturing clients worldwide' },
      { value: '35%', label: 'average unplanned downtime reduction' },
      { value: '500+', label: 'plants connected and modernized' },
      { value: '20yr', label: 'of industrial technology heritage' },
    ],
    features: {
      subheading: 'Solutions',
      heading: 'How we serve manufacturers',
      items: [
        { title: 'Smart factory', desc: 'Connected operations with real-time production intelligence.' },
        { title: 'OT modernization', desc: 'Secure, current plant-floor systems without disruption.' },
        { title: 'Industrial AI', desc: 'Predictive maintenance, quality inspection, and yield optimization.' },
        { title: 'Supply chain visibility', desc: 'End-to-end transparency from supplier to customer.' },
        { title: 'MES and ERP integration', desc: 'Seamless flow from order to shipment.' },
        { title: 'Plant cybersecurity', desc: 'OT-aware protection that keeps lines running.' },
      ],
    },
    cta: {
      title: 'Build your future-ready factory',
      subtitle: 'Talk to manufacturing technologists who have done it before.',
    },
  },

  banking: {
    eyebrow: 'Industries',
    title: 'Banking & Financial Services',
    description:
      'Modernize core banking, strengthen resilience, and deliver digital experiences customers trust.',
    heroImage: '/images/services/applications/insights-bank.jpg',
    intro: {
      heading: 'Trusted technology for trusted institutions',
      body: [
        'Banks run on systems where failure is front-page news. NovaCore modernizes core banking estates, hardens operational resilience, and accelerates digital channels — all within the regulatory guardrails you live by.',
      ],
      bullets: [
        'Core banking modernization with zero-downtime patterns',
        'Operational resilience aligned to DORA and global regulation',
        'Digital channel platforms with bank-grade security',
        'Data and AI for risk, fraud, and personalization',
      ],
    },
    stats: [
      { value: '50+', label: 'financial institutions served' },
      { value: '99.99%', label: 'availability on managed banking estates' },
      { value: '0', label: 'regulatory findings on our platforms' },
      { value: '40%', label: 'faster release cycles after modernization' },
    ],
    features: {
      subheading: 'Solutions',
      heading: 'How we serve financial services',
      items: [
        { title: 'Core modernization', desc: 'Progressive renewal of mission-critical banking systems.' },
        { title: 'Operational resilience', desc: 'Impact-tolerance-driven resilience programs.' },
        { title: 'Payments transformation', desc: 'Real-time, ISO 20022-native payment platforms.' },
        { title: 'Risk and compliance tech', desc: 'RegTech that keeps pace with the rulebook.' },
      ],
    },
    cta: {
      title: 'Modernize with confidence',
      subtitle: 'Discuss your core, cloud, and resilience agenda with our banking team.',
    },
  },

  healthcare: {
    eyebrow: 'Industries',
    title: 'Healthcare',
    description:
      'Secure, interoperable, always-on technology for organizations where uptime is measured in lives.',
    heroImage: '/images/value-strategy.jpg',
    intro: {
      heading: 'Technology in service of care',
      body: [
        'Clinicians need systems that work every time, everywhere. NovaCore modernizes healthcare infrastructure, secures patient data, and connects clinical systems so information follows the patient.',
      ],
      bullets: [
        'EHR-adjacent infrastructure with clinical-grade availability',
        'Healthcare interoperability on FHIR and modern APIs',
        'Medical IoT and connected device security',
        'AI-assisted operations for capacity and flow',
      ],
    },
    stats: [
      { value: '100+', label: 'healthcare organizations supported' },
      { value: '99.99%', label: 'uptime for clinical-critical systems' },
      { value: 'HIPAA', label: 'and global privacy compliance by design' },
      { value: '30%', label: 'faster clinician access to systems' },
    ],
    features: {
      subheading: 'Solutions',
      heading: 'How we serve healthcare',
      items: [
        { title: 'Clinical infrastructure', desc: 'Resilient platforms beneath EHR and clinical systems.' },
        { title: 'Health data interoperability', desc: 'Connected records across the care continuum.' },
        { title: 'Medical device security', desc: 'Visibility and protection for connected care devices.' },
        { title: 'Care workflow automation', desc: 'Less administration, more time for patients.' },
      ],
    },
    cta: {
      title: 'Strengthen the systems behind care',
      subtitle: 'Engage our healthcare technology specialists.',
    },
  },

  retail: {
    eyebrow: 'Industries',
    title: 'Retail & Consumer Goods',
    description:
      'Unified commerce, intelligent supply chains, and store technology that keeps pace with customers.',
    heroImage: '/images/services/applications/customer-romero.jpg',
    intro: {
      heading: 'Every channel. Every shelf. Every moment.',
      body: [
        'Retail rewards speed and punishes friction. NovaCore helps retailers and consumer brands unify commerce platforms, illuminate supply chains, and run stores on technology that just works — through peak and beyond.',
      ],
      bullets: [
        'Unified commerce across digital and physical channels',
        'Demand forecasting and inventory intelligence with AI',
        'Store-edge platforms for POS, IoT, and frictionless checkout',
        'Peak-proof scalability engineered and load-tested',
      ],
    },
    stats: [
      { value: '80+', label: 'retail and consumer brands served' },
      { value: '99.99%', label: 'availability through peak trading' },
      { value: '25%', label: 'inventory carrying-cost reduction achieved' },
      { value: '10K+', label: 'stores running on our managed platforms' },
    ],
    features: {
      subheading: 'Solutions',
      heading: 'How we serve retail',
      items: [
        { title: 'Commerce platforms', desc: 'Composable commerce that ships features weekly.' },
        { title: 'Supply chain intelligence', desc: 'Forecasting and visibility from source to shelf.' },
        { title: 'Store technology', desc: 'Edge platforms for resilient, smart stores.' },
        { title: 'Customer data and AI', desc: 'Personalization that respects privacy.' },
      ],
    },
    cta: {
      title: 'Win every moment of commerce',
      subtitle: 'Explore unified retail technology with NovaCore.',
    },
  },

  telecom: {
    eyebrow: 'Industries',
    title: 'Telecommunications',
    description:
      'Network modernization, OSS/BSS transformation, and the platforms behind next-generation connectivity.',
    heroImage: '/images/services/applications/services-applications.jpg',
    intro: {
      heading: 'Powering the networks that power everything',
      body: [
        'Telecom operators face brutal economics and relentless demand. NovaCore helps carriers modernize OSS/BSS estates, automate network operations, and monetize 5G and edge investments faster.',
      ],
      bullets: [
        'OSS/BSS modernization and consolidation',
        'Network automation and zero-touch operations',
        '5G monetization and edge platform enablement',
        'Customer experience platforms that reduce churn',
      ],
    },
    stats: [
      { value: '30+', label: 'operators and carriers served' },
      { value: '60%', label: 'of network changes automated end to end' },
      { value: '45%', label: 'OSS estate consolidation achieved' },
      { value: '5G', label: 'core and edge expertise in production' },
    ],
    features: {
      subheading: 'Solutions',
      heading: 'How we serve telecom',
      items: [
        { title: 'OSS/BSS transformation', desc: 'Simplified stacks that launch offers in days.' },
        { title: 'Network automation', desc: 'Intent-based operations with closed-loop assurance.' },
        { title: 'Edge and 5G platforms', desc: 'Infrastructure for latency-sensitive services.' },
        { title: 'Digital CX', desc: 'Self-service experiences subscribers prefer.' },
      ],
    },
    cta: {
      title: 'Transform your network economics',
      subtitle: 'Talk with engineers who run carrier-grade environments.',
    },
  },

  energy: {
    eyebrow: 'Industries',
    title: 'Energy & Utilities',
    description:
      'Grid modernization, asset intelligence, and secure operations for the energy transition.',
    heroImage: '/images/manufacturing-3.jpg',
    intro: {
      heading: 'Reliable power for a changing grid',
      body: [
        'The energy transition is rewriting how power is generated, distributed, and consumed. NovaCore helps utilities modernize grid technology, protect critical infrastructure, and turn asset data into operational foresight.',
      ],
      bullets: [
        'Grid modernization and ADMS/SCADA evolution',
        'Critical infrastructure cybersecurity (NERC CIP aligned)',
        'Asset performance management with predictive AI',
        'Field workforce enablement and mobility',
      ],
    },
    stats: [
      { value: '40+', label: 'utilities and energy companies served' },
      { value: '30%', label: 'reduction in unplanned asset outages' },
      { value: '24/7', label: 'monitoring of critical OT environments' },
      { value: 'NERC', label: 'CIP-aligned security delivery' },
    ],
    features: {
      subheading: 'Solutions',
      heading: 'How we serve energy and utilities',
      items: [
        { title: 'Grid technology modernization', desc: 'Resilient, observable, increasingly autonomous grids.' },
        { title: 'OT cybersecurity', desc: 'Protection engineered for energy control systems.' },
        { title: 'Asset intelligence', desc: 'Predictive maintenance across generation and distribution.' },
        { title: 'Customer platforms', desc: 'Digital experiences for the modern energy consumer.' },
      ],
    },
    cta: {
      title: 'Power the transition with confidence',
      subtitle: 'Engage our energy technology specialists.',
    },
  },

  'public-sector': {
    eyebrow: 'Industries',
    title: 'Public Sector',
    description:
      'Citizen-centered digital services, secure infrastructure, and modernization that respects public trust.',
    heroImage: '/images/services/applications/customer-arizona.jpg',
    intro: {
      heading: 'Technology in the public interest',
      body: [
        'Government systems carry obligations private platforms never face: universal access, absolute accountability, public trust. NovaCore modernizes public-sector technology with the security, accessibility, and transparency citizens deserve.',
      ],
      bullets: [
        'Citizen service platforms that are accessible by default',
        'Legacy modernization with continuity of service guaranteed',
        'Sovereign-ready cloud and data architectures',
        'Security accreditation support across frameworks',
      ],
    },
    stats: [
      { value: '60+', label: 'public agencies served' },
      { value: '100%', label: 'WCAG accessibility on delivered services' },
      { value: '70%', label: 'reduction in service processing times' },
      { value: 'Gov', label: 'cloud frameworks and accreditations' },
    ],
    features: {
      subheading: 'Solutions',
      heading: 'How we serve government',
      items: [
        { title: 'Digital citizen services', desc: 'Journeys redesigned around people, not departments.' },
        { title: 'Legacy modernization', desc: 'Progressive renewal without service interruption.' },
        { title: 'Secure government cloud', desc: 'Sovereignty and compliance engineered in.' },
        { title: 'Data for policy', desc: 'Evidence platforms for better public decisions.' },
      ],
    },
    cta: {
      title: 'Deliver services citizens trust',
      subtitle: 'Partner with NovaCore on your modernization mission.',
    },
  },
}

/* =====================================================
   INSIGHTS
   ===================================================== */

export const insightsContent: Record<string, PageContent> = {
  articles: {
    eyebrow: 'Insights',
    title: 'Articles',
    description:
      'Perspectives from the front lines of enterprise transformation — written by the people doing the work.',
    intro: {
      heading: 'Ideas tested in production',
      body: [
        'Our articles come from practitioners, not pundits: lessons from real engagements, patterns that worked, and honest accounts of what didn’t.',
      ],
      bullets: [
        'IT/OT convergence: lessons from 500 plant rollouts',
        'What zero trust actually costs — and saves',
        'The FinOps practices that survive budget season',
        'Generative AI in the enterprise: beyond the demo',
      ],
    },
    features: {
      subheading: 'Featured reading',
      heading: 'Most-read this quarter',
      items: [
        { title: 'The factory data layer', desc: 'Why manufacturers need a unified namespace before AI.' },
        { title: 'Mainframe in 2026', desc: 'The economics of staying, leaving, and hybrid paths.' },
        { title: 'Resilience as architecture', desc: 'Designing systems that degrade gracefully.' },
        { title: 'The post-pilot AI playbook', desc: 'Getting models from notebook to night shift.' },
      ],
    },
    cta: {
      title: 'Never miss an insight',
      subtitle: 'Get NovaCore perspectives delivered to your inbox.',
    },
  },

  reports: {
    eyebrow: 'Insights',
    title: 'Reports',
    description:
      'In-depth research on the trends reshaping enterprise technology — with data you can take to the board.',
    intro: {
      heading: 'Research with rigor',
      body: [
        'NovaCore reports combine field data from hundreds of engagements with primary research across industries. Each report ends with actions, not just observations.',
      ],
      bullets: [
        'State of Industrial Digital Transformation 2026',
        'Cyber Resilience Benchmark: manufacturing edition',
        'Cloud Economics Review: what workloads really cost',
        'The Enterprise AI Adoption Index',
      ],
    },
    features: {
      subheading: 'Latest reports',
      heading: 'Current research',
      items: [
        { title: 'Industry 4.0 at scale', desc: 'Benchmarks from 200 manufacturers on the journey.' },
        { title: 'The resilience gap', desc: 'Where recovery plans fail when tested.' },
        { title: 'AI value realization', desc: 'What separates the 20% who capture ROI.' },
      ],
    },
    cta: {
      title: 'Request the full research',
      subtitle: 'Access complete reports and benchmark data.',
    },
  },

  whitepapers: {
    eyebrow: 'Insights',
    title: 'Whitepapers',
    description:
      'Deep technical guidance for architects and engineers building what comes next.',
    intro: {
      heading: 'For the people who build',
      body: [
        'Our whitepapers go deep: reference architectures, decision frameworks, and implementation guidance written by NovaCore engineers for their peers.',
      ],
      bullets: [
        'Zero-trust reference architecture for converged IT/OT',
        'Designing the unified namespace for industrial data',
        'Mainframe modernization patterns: a decision guide',
        'Production LLM systems: architecture and guardrails',
      ],
    },
    features: {
      subheading: 'Technical library',
      heading: 'Engineering depth on demand',
      items: [
        { title: 'Architecture blueprints', desc: 'Reference designs validated in production.' },
        { title: 'Decision frameworks', desc: 'Structured choices for consequential calls.' },
        { title: 'Implementation guides', desc: 'The details that make or break delivery.' },
      ],
    },
    cta: {
      title: 'Build on proven patterns',
      subtitle: 'Download whitepapers from the NovaCore engineering library.',
    },
  },

  blogs: {
    eyebrow: 'Insights',
    title: 'Blogs',
    description:
      'Quick takes, engineering notes, and behind-the-scenes thinking from NovaCore teams.',
    intro: {
      heading: 'Thinking out loud',
      body: [
        'Less formal, more frequent: our blogs capture what our teams are learning right now — from the plant floor to the platform team.',
      ],
      bullets: [
        'Engineering notes from large-scale migrations',
        'Field stories from manufacturing modernization',
        'Tooling reviews from practitioners who use them daily',
        'Career paths and culture inside NovaCore',
      ],
    },
    features: {
      subheading: 'Recent posts',
      heading: 'Fresh from the teams',
      items: [
        { title: 'Five lessons from a 3 a.m. cutover', desc: 'What rehearsals never quite capture.' },
        { title: 'Edge AI on a budget', desc: 'Useful inference without exotic hardware.' },
        { title: 'The unsung art of runbooks', desc: 'Documentation that works under pressure.' },
      ],
    },
    cta: {
      title: 'Follow the conversation',
      subtitle: 'Subscribe for new posts from NovaCore teams.',
    },
  },

  events: {
    eyebrow: 'Insights',
    title: 'Events & Webinars',
    description:
      'Join NovaCore experts live — in person and online — for demonstrations, panels, and deep dives.',
    intro: {
      heading: 'Learn with us, live',
      body: [
        'From intimate executive roundtables to hands-on technical workshops, our events connect you with practitioners and peers tackling the same challenges.',
      ],
      bullets: [
        'Monthly webinar series: Manufacturing Modernization Live',
        'Executive roundtables in major industrial hubs',
        'Hands-on labs at NovaCore Collaborative centers',
        'Annual NovaCore Summit — registration now open',
      ],
    },
    features: {
      subheading: 'Upcoming',
      heading: 'On the calendar',
      items: [
        { title: 'Industry 4.0 Live', desc: 'Monthly virtual sessions with factory technology leaders.' },
        { title: 'Cyber Resilience Workshop', desc: 'Tabletop exercise series for security teams.' },
        { title: 'NovaCore Summit 2026', desc: 'Our flagship conference for enterprise technologists.' },
      ],
    },
    cta: {
      title: 'Reserve your seat',
      subtitle: 'Register for upcoming events and webinars.',
    },
  },

  podcasts: {
    eyebrow: 'Insights',
    title: 'Podcasts',
    description:
      'Conversations with the leaders and engineers shaping enterprise technology — on your schedule.',
    intro: {
      heading: 'Listen to leaders',
      body: [
        'The NovaCore podcast network brings you candid conversations: CIOs on transformation scars, engineers on hard technical calls, and industry voices on what’s next.',
      ],
      bullets: [
        'The Modern Factory — manufacturing technology, weekly',
        'Resilience Radio — security and continuity stories',
        'Platform Thinking — architecture and engineering',
        'Available on all major podcast platforms',
      ],
    },
    features: {
      subheading: 'Our shows',
      heading: 'Now playing',
      items: [
        { title: 'The Modern Factory', desc: 'Industry 4.0 stories from people on the floor.' },
        { title: 'Resilience Radio', desc: 'How organizations prepare for their worst day.' },
        { title: 'Platform Thinking', desc: 'Deep dives with architects and SREs.' },
      ],
    },
    cta: {
      title: 'Start listening',
      subtitle: 'Find NovaCore podcasts on your favorite platform.',
    },
  },

  'future-it': {
    eyebrow: 'Insights',
    title: 'The Future of Enterprise IT',
    description:
      'The key trends every CIO should be tracking — and what to do about them now.',
    heroImage: '/images/value-strategy.jpg',
    intro: {
      heading: 'Five forces reshaping enterprise technology',
      body: [
        'Our flagship outlook distills hundreds of client conversations and engagements into the shifts that will define the next planning cycle — with concrete first moves for each.',
      ],
      bullets: [
        'AI moves from feature to fabric across the enterprise stack',
        'IT/OT convergence becomes a board-level resilience topic',
        'Sovereignty reshapes cloud architecture decisions',
        'Platform engineering consolidates the DevOps toolchain',
      ],
    },
    stats: [
      { value: '300+', label: 'CIO conversations behind this outlook' },
      { value: '5', label: 'forces with concrete first moves' },
      { value: '2026', label: 'edition available now' },
      { value: 'Free', label: 'executive summary download' },
    ],
    features: {
      subheading: 'Inside the outlook',
      heading: 'What you’ll take away',
      items: [
        { title: 'Trend deep-dives', desc: 'Evidence and trajectory for each force.' },
        { title: 'First-move playbooks', desc: 'What leading organizations are doing this quarter.' },
        { title: 'Investment signals', desc: 'Where budgets are actually shifting.' },
      ],
    },
    cta: {
      title: 'Read the 2026 outlook',
      subtitle: 'Download the executive summary or request a briefing.',
    },
  },
}

/* =====================================================
   ABOUT
   ===================================================== */

export const aboutContent: Record<string, PageContent> = {
  story: {
    eyebrow: 'About Us',
    title: 'Our Story',
    description:
      'Purpose-driven technology services — built by people who believe mission-critical should mean something.',
    heroImage: '/images/expert.jpg',
    intro: {
      heading: 'Built for the systems the world relies on',
      body: [
        'NovaCore was founded on a simple conviction: the technology behind factories, banks, hospitals, and grids deserves the same craft and care as the products it powers.',
        'Today, thousands of NovaCore engineers design, modernize, and run mission-critical systems across the globe — with the steady hands those systems demand.',
      ],
      bullets: [
        'Founded by engineers, led by engineers',
        'Global delivery with deep local presence',
        'Long-term partnerships measured in decades',
        'A culture where reliability is a craft',
      ],
    },
    stats: [
      { value: '20+', label: 'years serving mission-critical enterprises' },
      { value: '60+', label: 'countries with active operations' },
      { value: '1,000+', label: 'enterprise clients worldwide' },
      { value: '90%', label: 'of revenue from multi-year relationships' },
    ],
    features: {
      subheading: 'What guides us',
      heading: 'Our principles',
      items: [
        { title: 'Reliability is respect', desc: 'Systems that work are how we honor the people who depend on them.' },
        { title: 'Truth over comfort', desc: 'We tell clients what they need to hear, with evidence.' },
        { title: 'Craft compounds', desc: 'We invest in mastery because shortcuts are expensive.' },
        { title: 'Partners, not vendors', desc: 'Your outcomes are the only scoreboard that matters.' },
      ],
    },
    cta: {
      title: 'Write the next chapter with us',
      subtitle: 'Whether as a client or a colleague — let’s build something that lasts.',
    },
  },

  leadership: {
    eyebrow: 'About Us',
    title: 'Leadership',
    description:
      'Operators and engineers who have run the systems they now help you transform.',
    intro: {
      heading: 'Led from experience',
      body: [
        'NovaCore’s leadership team combines decades of enterprise operations, engineering, and transformation experience. Most have sat in our clients’ chairs — running plants, platforms, and P&Ls.',
      ],
      bullets: [
        'Executive team averaging 25 years in enterprise technology',
        'Industry leaders for every sector we serve',
        'Engineering fellows guiding technical strategy',
        'A leadership culture of visible accountability',
      ],
    },
    features: {
      subheading: 'The team',
      heading: 'Senior leadership',
      items: [
        { title: 'Onofrio Pirrotta', desc: 'Senior Vice President & Managing Partner — global client portfolio.' },
        { title: 'Office of the CTO', desc: 'Engineering fellows steering platform and AI strategy.' },
        { title: 'Industry leadership', desc: 'Sector leads with operator backgrounds in each industry.' },
        { title: 'Regional leadership', desc: 'Local accountability in every market we serve.' },
      ],
    },
    cta: {
      title: 'Meet the team',
      subtitle: 'Connect with NovaCore leadership in your region.',
    },
  },

  partners: {
    eyebrow: 'About Us',
    title: 'Partners',
    description:
      'A global alliance ecosystem that lets us bring the best of the industry to every engagement.',
    intro: {
      heading: 'Better together, by design',
      body: [
        'No single company owns the modern enterprise stack. NovaCore maintains deep, certified partnerships across hyperscalers, platforms, and industrial technology leaders — so your solution is built from the best available parts.',
      ],
      bullets: [
        'Top-tier partnerships with AWS, Microsoft, and Google Cloud',
        'Premium alliances with SAP, Oracle, and Red Hat',
        'Industrial partnerships across automation leaders',
        'Thousands of certified engineers across the ecosystem',
      ],
    },
    stats: [
      { value: '6', label: 'strategic hyperscaler and platform alliances' },
      { value: '5,000+', label: 'active partner certifications' },
      { value: 'Top', label: 'tier status across major programs' },
      { value: '50+', label: 'specialized technology partnerships' },
    ],
    features: {
      subheading: 'The ecosystem',
      heading: 'Who we partner with',
      items: [
        { title: 'Cloud hyperscalers', desc: 'AWS, Microsoft Azure, and Google Cloud at the highest tiers.' },
        { title: 'Enterprise platforms', desc: 'SAP, Oracle, and Red Hat with premium status.' },
        { title: 'Industrial technology', desc: 'Automation and OT leaders for the plant floor.' },
        { title: 'Security ecosystem', desc: 'Best-of-breed security platforms, integrated.' },
      ],
    },
    cta: {
      title: 'Explore our alliances',
      subtitle: 'See how partnership depth translates to delivery quality.',
    },
  },

  alliances: {
    eyebrow: 'About Us',
    title: 'Alliances',
    description:
      'Strategic technology alliances that give our clients early access, deep expertise, and joint accountability.',
    intro: {
      heading: 'Alliances that work for you',
      body: [
        'Our alliances go beyond logos on a slide: joint engineering, co-funded programs, and escalation paths that reach the right people fast. When you engage NovaCore, the whole ecosystem shows up.',
      ],
      bullets: [
        'Joint solution engineering with alliance partners',
        'Co-investment programs that reduce client cost',
        'Direct escalation lines into partner engineering',
        'Early access to roadmaps and preview programs',
      ],
    },
    features: {
      subheading: 'Strategic alliances',
      heading: 'Our deepest partnerships',
      items: [
        { title: 'Microsoft', desc: 'Azure Expert MSP with multiple specializations.' },
        { title: 'AWS', desc: 'Premier Partner with migration and industrial competencies.' },
        { title: 'Google Cloud', desc: 'Premier Partner across data, AI, and infrastructure.' },
        { title: 'SAP', desc: 'RISE-validated with deep S/4HANA delivery.' },
        { title: 'Oracle', desc: 'Cloud and applications expertise at scale.' },
        { title: 'Red Hat', desc: 'Premier Partner for hybrid platform engineering.' },
      ],
    },
    cta: {
      title: 'Put the ecosystem to work',
      subtitle: 'Ask how our alliances reduce risk and cost on your initiatives.',
    },
  },

  sustainability: {
    eyebrow: 'About Us',
    title: 'Sustainability',
    description:
      'Technology that reduces footprint — ours, and our clients’.',
    intro: {
      heading: 'Sustainable by engineering, not by press release',
      body: [
        'We treat sustainability as an engineering discipline: measure honestly, optimize relentlessly, report transparently. That applies to our own operations and to the client systems we design and run.',
      ],
      bullets: [
        'Science-based targets validated and on track',
        'Green software engineering practices in delivery',
        'Client carbon dashboards on managed estates',
        'Circular IT programs for hardware lifecycles',
      ],
    },
    stats: [
      { value: '50%', label: 'operational emissions reduction since 2020' },
      { value: '100%', label: 'renewable electricity across major sites' },
      { value: '2040', label: 'net-zero commitment, science-based' },
      { value: '30%', label: 'average client workload efficiency gains' },
    ],
    features: {
      subheading: 'Our commitments',
      heading: 'Where we act',
      items: [
        { title: 'Our operations', desc: 'Renewable energy, efficient facilities, sustainable travel.' },
        { title: 'Client systems', desc: 'Carbon-aware architectures and optimization.' },
        { title: 'Supply chain', desc: 'Supplier standards with real teeth.' },
        { title: 'Transparency', desc: 'Audited reporting, published annually.' },
      ],
    },
    cta: {
      title: 'Build sustainably with us',
      subtitle: 'See how green engineering cuts both carbon and cost.',
    },
  },

  diversity: {
    eyebrow: 'About Us',
    title: 'Diversity & Inclusion',
    description:
      'Different perspectives build better systems. We mean that literally.',
    intro: {
      heading: 'Inclusion as an engineering advantage',
      body: [
        'Homogeneous teams ship homogeneous blind spots. We build diverse teams because they make better technical decisions — and because everyone deserves a workplace where they can do their best work as themselves.',
      ],
      bullets: [
        'Inclusive hiring practices, measured and audited',
        'Employee communities with executive sponsorship',
        'Pay equity reviews conducted annually',
        'Accessible-by-default workplaces and tools',
      ],
    },
    stats: [
      { value: '40%', label: 'of leadership roles held by women' },
      { value: '12', label: 'employee resource communities' },
      { value: '100%', label: 'pay equity audit coverage' },
      { value: '60+', label: 'nationalities across our teams' },
    ],
    features: {
      subheading: 'Our approach',
      heading: 'How we build belonging',
      items: [
        { title: 'Fair hiring', desc: 'Structured processes that surface real capability.' },
        { title: 'Career equity', desc: 'Sponsorship and progression tracked transparently.' },
        { title: 'Community', desc: 'Employee groups shaping company decisions.' },
        { title: 'Accountability', desc: 'Public goals and honest reporting.' },
      ],
    },
    cta: {
      title: 'Join a team where you belong',
      subtitle: 'Explore careers at NovaCore.',
    },
  },

  ethics: {
    eyebrow: 'About Us',
    title: 'Ethics & Compliance',
    description:
      'Trust is our license to operate. We protect it with systems, not slogans.',
    intro: {
      heading: 'Doing the right thing, verifiably',
      body: [
        'Clients hand us the keys to their most critical systems. That trust demands more than good intentions: clear standards, real training, safe reporting channels, and consequences that apply to everyone.',
      ],
      bullets: [
        'Code of conduct binding for all employees and partners',
        'Anonymous ethics reporting with non-retaliation guarantees',
        'Anti-corruption and trade compliance programs',
        'Independent audit and board-level oversight',
      ],
    },
    features: {
      subheading: 'Our framework',
      heading: 'How we govern ourselves',
      items: [
        { title: 'Code of conduct', desc: 'Clear standards, annually certified by everyone.' },
        { title: 'Speak-up culture', desc: '24/7 reporting channels, independently operated.' },
        { title: 'Third-party diligence', desc: 'Partners held to the standards we hold ourselves.' },
        { title: 'Data ethics', desc: 'Responsible use of data and AI, governed explicitly.' },
      ],
    },
    cta: {
      title: 'Read our standards',
      subtitle: 'Our code of conduct and policies are public — as they should be.',
    },
  },

  'corporate-citizenship': {
    eyebrow: 'About Us',
    title: 'Corporate Citizenship',
    description:
      'Using what we’re best at — engineering — in service of the communities where we live and work.',
    intro: {
      heading: 'Engineering for good',
      body: [
        'Our citizenship programs put NovaCore skills to work where they matter: digital skills education, technology for nonprofits, and disaster-response infrastructure support.',
      ],
      bullets: [
        'Digital skills programs reaching 100,000 learners',
        'Pro-bono engineering for nonprofit missions',
        'Disaster response technology partnerships',
        'Employee volunteering with paid time to serve',
      ],
    },
    stats: [
      { value: '100K+', label: 'learners reached by skills programs' },
      { value: '40hr', label: 'paid volunteer time per employee yearly' },
      { value: '200+', label: 'nonprofit engineering projects delivered' },
      { value: '$10M+', label: 'in donated services annually' },
    ],
    features: {
      subheading: 'Programs',
      heading: 'Where we serve',
      items: [
        { title: 'Skills for tomorrow', desc: 'Free technology education in underserved communities.' },
        { title: 'Nonprofit engineering', desc: 'Pro-bono platforms for mission-driven organizations.' },
        { title: 'Crisis response', desc: 'Infrastructure support when disasters strike.' },
      ],
    },
    cta: {
      title: 'Partner with our programs',
      subtitle: 'Nonprofits and educators — we’d love to hear from you.',
    },
  },

  kinship: {
    eyebrow: 'About Us',
    title: 'Kinship at NovaCore',
    description:
      'The communities, rituals, and culture that make NovaCore feel like NovaCore.',
    intro: {
      heading: 'A company is its people, together',
      body: [
        'Kinship is our name for the connective tissue of NovaCore life: the communities of practice, mentoring circles, and traditions that turn thousands of colleagues into one crew.',
      ],
      bullets: [
        'Communities of practice for every craft we value',
        'Mentoring circles pairing veterans with rising talent',
        'Global guilds that share knowledge across borders',
        'Traditions that celebrate craft, not just quarters',
      ],
    },
    features: {
      subheading: 'Life together',
      heading: 'What kinship looks like',
      items: [
        { title: 'Guilds and chapters', desc: 'Craft communities with real budgets and real influence.' },
        { title: 'Mentoring circles', desc: 'Structured growth relationships at every level.' },
        { title: 'Engineering days', desc: 'Regular time to learn, experiment, and share.' },
        { title: 'Recognition rituals', desc: 'Celebrating quality work, visibly and often.' },
      ],
    },
    cta: {
      title: 'Experience it yourself',
      subtitle: 'See open roles and find your place in the crew.',
    },
  },

  locations: {
    eyebrow: 'About Us',
    title: 'Locations',
    description:
      'Global scale, local presence — NovaCore teams in the regions where you operate.',
    intro: {
      heading: 'Where you’ll find us',
      body: [
        'NovaCore operates delivery centers, co-creation hubs, and client offices across the globe — close enough to be in the room when it matters.',
      ],
      bullets: [
        'Americas: New York, Toronto, Mexico City, São Paulo',
        'Europe: London, Frankfurt, Milan, Warsaw',
        'Asia-Pacific: Bengaluru, Pune, Singapore, Tokyo, Sydney',
        'Global delivery centers operating around the clock',
      ],
    },
    stats: [
      { value: '60+', label: 'countries with operations' },
      { value: '40+', label: 'co-creation hubs and delivery centers' },
      { value: '24/7', label: 'follow-the-sun delivery coverage' },
      { value: '15', label: 'languages supported in service desks' },
    ],
    features: {
      subheading: 'Regions',
      heading: 'Our global footprint',
      items: [
        { title: 'Americas', desc: 'Full-service presence from Toronto to São Paulo.' },
        { title: 'Europe, Middle East & Africa', desc: 'Deep roots in every major market.' },
        { title: 'Asia-Pacific', desc: 'Engineering scale and regional expertise.' },
      ],
    },
    cta: {
      title: 'Find your nearest team',
      subtitle: 'Reach out and we’ll connect you with the right region.',
    },
  },
}

/* =====================================================
   CAREERS
   ===================================================== */

export const careersIndexContent: PageContent = {
  eyebrow: 'Careers',
  title: 'Build what the world relies on',
  description:
    'Join engineers, consultants, and designers working on the systems behind modern life — factories, banks, hospitals, grids.',
  heroImage: '/images/services/applications/services-what-we-do.jpg',
  intro: {
    heading: 'Work that matters, craft that grows',
    body: [
      'At NovaCore you’ll work on systems where quality is non-negotiable — alongside people who take pride in getting it right. We invest seriously in your growth, because our business is built on what you know.',
    ],
    bullets: [
      'Real ownership on mission-critical systems',
      'Learning budgets and certification support that get used',
      'Flexible, hybrid-first ways of working',
      'A culture that promotes craft, not politics',
    ],
  },
  stats: [
    { value: '4.5/5', label: 'employee experience rating' },
    { value: '500+', label: 'open roles right now' },
    { value: '40hr', label: 'annual learning time, guaranteed' },
    { value: '85%', label: 'of leaders promoted from within' },
  ],
  features: {
    subheading: 'Open opportunities',
    heading: 'Where we’re hiring',
    items: [
      { title: 'Engineering', desc: 'Cloud, platform, data, and software engineering at scale.' },
      { title: 'Cybersecurity', desc: 'SOC, offensive security, and resilience engineering.' },
      { title: 'Consulting', desc: 'Strategy and transformation roles across industries.' },
      { title: 'Industrial technology', desc: 'OT, IoT, and smart factory specialists.' },
      { title: 'Design', desc: 'Service and experience design on real-world journeys.' },
      { title: 'Early careers', desc: 'Graduate programs and apprenticeships that launch careers.' },
    ],
  },
  cta: {
    title: 'Find your role',
    subtitle: 'Browse openings or send us your story — we read every one.',
  },
}

export const careersContent: Record<string, PageContent> = {
  'life-at-NovaCore': {
    eyebrow: 'Careers',
    title: 'Life at NovaCore',
    description:
      'Meet the people building mission-critical systems — and see what your week here actually looks like.',
    heroImage: '/images/expert1.jpg',
    intro: {
      heading: 'An honest look inside',
      body: [
        'No stock-photo culture pages here. Life at NovaCore means deep work on hard problems, teammates who review your code like they mean it, and leaders who remember what shipping feels like.',
      ],
      bullets: [
        'Hybrid-first: offices worth commuting to, never mandated theater',
        'Engineering days every month for learning and experiments',
        'Mentoring circles from day one',
        'Real work-life boundaries, modeled from the top',
      ],
    },
    features: {
      subheading: 'Day to day',
      heading: 'What your week looks like',
      items: [
        { title: 'Deep work, protected', desc: 'Meeting-light cultures with maker time respected.' },
        { title: 'Craft community', desc: 'Guilds, brown-bags, and internal conferences.' },
        { title: 'Visible impact', desc: 'Ship things that keep real operations running.' },
        { title: 'Growth on purpose', desc: 'Career frameworks that make progression legible.' },
      ],
    },
    cta: {
      title: 'See yourself here?',
      subtitle: 'Browse open roles and meet the teams.',
    },
  },
}

/* =====================================================
   TOP-LEVEL UTILITY & LEGAL PAGES
   ===================================================== */

export const utilityContent: Record<string, PageContent> = {
  investors: {
    eyebrow: 'Company',
    title: 'Investors',
    description:
      'Financial information, governance, and the long-term strategy behind NovaCore’s performance.',
    intro: {
      heading: 'Built for durable growth',
      body: [
        'NovaCore’s model is built on multi-year, mission-critical relationships — revenue that recurs because the work matters. Our investor materials detail strategy, performance, and governance.',
      ],
      bullets: [
        'Quarterly results and annual reports',
        'Governance documents and board composition',
        'ESG disclosures and ratings',
        'Investor events and contact information',
      ],
    },
    stats: [
      { value: '90%', label: 'recurring revenue from managed relationships' },
      { value: '20+', label: 'years of consecutive profitability' },
      { value: 'A-', label: 'ESG rating, independently assessed' },
      { value: 'Q4', label: 'FY2026 results — date announced' },
    ],
    features: {
      subheading: 'Resources',
      heading: 'Investor materials',
      items: [
        { title: 'Financial reports', desc: 'Quarterly and annual filings with commentary.' },
        { title: 'Governance', desc: 'Board, committees, and policies.' },
        { title: 'ESG reporting', desc: 'Audited sustainability and citizenship disclosures.' },
      ],
    },
    cta: {
      title: 'Contact investor relations',
      subtitle: 'Reach our IR team for materials and meetings.',
    },
  },

  trust: {
    eyebrow: 'Company',
    title: 'Trust Center',
    description:
      'How NovaCore protects your data, secures its services, and earns the confidence of the world’s most demanding clients.',
    intro: {
      heading: 'Trust, documented',
      body: [
        'Security questionnaires shouldn’t require archaeology. Our Trust Center centralizes certifications, compliance reports, security practices, and data-handling commitments in one place.',
      ],
      bullets: [
        'ISO 27001, SOC 2 Type II, and sector certifications',
        'Data residency and sovereignty options',
        'Sub-processor transparency and notifications',
        'Security whitepapers and audit summaries',
      ],
    },
    features: {
      subheading: 'Inside the center',
      heading: 'What you’ll find',
      items: [
        { title: 'Certifications', desc: 'Current attestations, downloadable on demand.' },
        { title: 'Security practices', desc: 'How we build, run, and defend our services.' },
        { title: 'Privacy commitments', desc: 'Data handling, residency, and rights.' },
        { title: 'Status and incidents', desc: 'Live service status with honest postmortems.' },
      ],
    },
    cta: {
      title: 'Need a specific document?',
      subtitle: 'Request compliance materials through the Trust Center.',
    },
  },

  certifications: {
    eyebrow: 'Company',
    title: 'Certifications',
    description:
      'Independent attestations of NovaCore’s security, quality, and operational standards.',
    intro: {
      heading: 'Verified, not asserted',
      body: [
        'Our certifications are maintained continuously, audited independently, and available to clients on request.',
      ],
      bullets: [
        'ISO 27001 — information security management',
        'SOC 2 Type II — security, availability, confidentiality',
        'ISO 9001 — quality management systems',
        'Industry-specific attestations across regulated sectors',
      ],
    },
    features: {
      subheading: 'Current attestations',
      heading: 'Our certification portfolio',
      items: [
        { title: 'Security', desc: 'ISO 27001, SOC 2 Type II, and CSA STAR.' },
        { title: 'Quality', desc: 'ISO 9001 across global delivery.' },
        { title: 'Continuity', desc: 'ISO 22301 business continuity certification.' },
        { title: 'Sector', desc: 'PCI DSS, HIPAA, and regional frameworks.' },
      ],
    },
    cta: {
      title: 'Request certification documents',
      subtitle: 'Current certificates available under NDA where required.',
    },
  },

  sitemap: {
    eyebrow: 'Navigation',
    title: 'Sitemap',
    description: 'Everything on NovaCore.com, organized in one place.',
    sections: [
      {
        heading: 'Services',
        body: [
          'Applications · Cloud · Core Enterprise and zCloud · Cyber Resilience · Data and AI · Digital Workplace · Network and Edge',
        ],
      },
      {
        heading: 'Platforms',
        body: ['NovaCore Bridge · NovaCore Collaborative · NovaCore Vital'],
      },
      {
        heading: 'Consulting',
        body: [
          'Digital Transformation · Cloud Strategy · Cybersecurity Strategy · Enterprise Architecture · Advisory Services · Co-creation Workshops · Transformation Programs · Consulting Playbooks',
        ],
      },
      {
        heading: 'Industries',
        body: [
          'Manufacturing · Banking & Financial Services · Healthcare · Retail & Consumer Goods · Telecommunications · Energy & Utilities · Public Sector',
        ],
      },
      {
        heading: 'Insights',
        body: [
          'Articles · Reports · Whitepapers · Blogs · Events & Webinars · Podcasts · Future of Enterprise IT',
        ],
      },
      {
        heading: 'Company',
        body: [
          'Our Story · Leadership · Partners · Alliances · Sustainability · Diversity & Inclusion · Ethics & Compliance · Corporate Citizenship · Kinship · Locations · Careers · Investors · Trust · News · Case Studies · Contact',
        ],
      },
    ],
    cta: {
      title: 'Can’t find what you need?',
      subtitle: 'Our team can point you to the right place.',
    },
  },

  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    description:
      'How NovaCore collects, uses, and protects personal information.',
    sections: [
      {
        heading: '1. Information we collect',
        body: [
          'We collect information you provide directly (such as contact details submitted through forms), information collected automatically (such as device and usage data), and information from business partners where permitted by law.',
        ],
      },
      {
        heading: '2. How we use information',
        body: [
          'We use personal information to provide and improve our services, respond to inquiries, personalize content, meet legal obligations, and protect the security of our systems. We do not sell personal information.',
        ],
      },
      {
        heading: '3. Sharing and transfers',
        body: [
          'We share information with service providers under contract, with affiliates for the purposes described here, and where required by law. International transfers are protected by appropriate safeguards, including standard contractual clauses.',
        ],
      },
      {
        heading: '4. Your rights',
        body: [
          'Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal information, and to object to certain processing. Contact privacy@novacore.example to exercise these rights.',
        ],
      },
      {
        heading: '5. Retention and security',
        body: [
          'We retain personal information only as long as necessary for the purposes described and protect it with technical and organizational measures appropriate to its sensitivity.',
        ],
      },
      {
        heading: '6. Contact',
        body: [
          'Questions about this policy may be directed to our privacy office at privacy@novacore.example. This policy was last updated in 2026.',
        ],
      },
    ],
    cta: {
      title: 'Questions about your data?',
      subtitle: 'Our privacy team responds to every inquiry.',
    },
  },

  terms: {
    eyebrow: 'Legal',
    title: 'Terms of Use',
    description: 'The terms governing your use of NovaCore websites and content.',
    sections: [
      {
        heading: '1. Acceptance of terms',
        body: [
          'By accessing this website, you agree to these Terms of Use and all applicable laws. If you do not agree, please do not use the site.',
        ],
      },
      {
        heading: '2. Use of content',
        body: [
          'Content on this site is provided for general information. You may view and download materials for personal, non-commercial use, provided you retain all copyright and proprietary notices.',
        ],
      },
      {
        heading: '3. Intellectual property',
        body: [
          'All trademarks, logos, and content are the property of NovaCore Inc. or their respective owners. Nothing here grants any license to use them without written permission.',
        ],
      },
      {
        heading: '4. Disclaimers',
        body: [
          'The site is provided “as is” without warranties of any kind. NovaCore is not liable for damages arising from use of the site to the maximum extent permitted by law.',
        ],
      },
      {
        heading: '5. Changes',
        body: [
          'We may update these terms at any time. Continued use of the site constitutes acceptance of the updated terms.',
        ],
      },
    ],
    cta: {
      title: 'Need clarification?',
      subtitle: 'Contact our legal team with questions about these terms.',
    },
  },

  security: {
    eyebrow: 'Legal',
    title: 'Security',
    description:
      'Our commitment to securing NovaCore systems — and how to report a vulnerability.',
    sections: [
      {
        heading: 'Our security practices',
        body: [
          'NovaCore operates a defense-in-depth security program covering secure development, infrastructure hardening, continuous monitoring, and independent testing. Our practices are certified under ISO 27001 and audited under SOC 2 Type II.',
        ],
      },
      {
        heading: 'Responsible disclosure',
        body: [
          'We welcome reports from security researchers. If you believe you have found a vulnerability in a NovaCore system, please report it to security@novacore.example. We commit to acknowledging reports within 48 hours and will not pursue action against good-faith research.',
        ],
      },
      {
        heading: 'What to include',
        body: [
          'Please include a description of the issue, steps to reproduce, and any relevant proof of concept. Please do not access data that is not yours, degrade service availability, or disclose the issue publicly before we have addressed it.',
        ],
      },
    ],
    cta: {
      title: 'Report a security issue',
      subtitle: 'Our security team reviews every report, fast.',
    },
  },

  'csr-policy': {
    eyebrow: 'Legal',
    title: 'CSR Policy',
    description:
      'NovaCore’s corporate social responsibility commitments and governance.',
    sections: [
      {
        heading: 'Purpose',
        body: [
          'This policy defines NovaCore’s commitments to responsible business conduct across environmental stewardship, community impact, labor practices, and governance.',
        ],
      },
      {
        heading: 'Environment',
        body: [
          'We commit to science-based emissions reduction targets, renewable energy procurement, circular IT practices, and transparent annual reporting of progress.',
        ],
      },
      {
        heading: 'Community',
        body: [
          'We invest in digital skills education, pro-bono engineering for nonprofits, and disaster response support, with paid volunteer time for all employees.',
        ],
      },
      {
        heading: 'Governance',
        body: [
          'CSR performance is overseen at board level, reported annually, and embedded in executive objectives. Suppliers are held to equivalent standards through our supplier code of conduct.',
        ],
      },
    ],
    cta: {
      title: 'Read our full CSR report',
      subtitle: 'Audited disclosures published annually.',
    },
  },

  'do-not-sell': {
    eyebrow: 'Privacy',
    title: 'Do Not Sell or Share My Personal Information',
    description:
      'Exercise your rights regarding the sale or sharing of personal information.',
    sections: [
      {
        heading: 'Your choice',
        body: [
          'NovaCore does not sell personal information for money. Certain data sharing for advertising analytics may qualify as “sharing” under some privacy laws. You can opt out of such sharing at any time.',
        ],
      },
      {
        heading: 'How to opt out',
        body: [
          'Use the Cookie Preferences link in our footer to disable advertising cookies, or submit a request to privacy@novacore.example with the subject “Do Not Sell or Share.” We honor Global Privacy Control signals automatically.',
        ],
      },
      {
        heading: 'What happens next',
        body: [
          'Opt-out requests are processed within 15 business days. Your choice does not affect essential site functionality or contracted services.',
        ],
      },
    ],
    cta: {
      title: 'Manage your preferences',
      subtitle: 'Update cookie settings or contact our privacy office.',
    },
  },

  'cookie-preferences': {
    eyebrow: 'Privacy',
    title: 'Cookie Preferences',
    description:
      'Understand and control how NovaCore uses cookies on this site.',
    sections: [
      {
        heading: 'Essential cookies',
        body: [
          'Required for the site to function — security, session management, and load balancing. These cannot be disabled.',
        ],
      },
      {
        heading: 'Analytics cookies',
        body: [
          'Help us understand how visitors use the site so we can improve it. Data is aggregated and does not identify you personally.',
        ],
      },
      {
        heading: 'Marketing cookies',
        body: [
          'Used to measure campaign effectiveness and show relevant content. Disabled by default in regions requiring consent.',
        ],
      },
      {
        heading: 'Managing preferences',
        body: [
          'You can change your choices at any time using your browser settings or by contacting privacy@novacore.example. We honor Global Privacy Control signals automatically.',
        ],
      },
    ],
    cta: {
      title: 'Questions about cookies?',
      subtitle: 'Our privacy team is happy to help.',
    },
  },
}

/* =====================================================
   LOOKUP HELPERS
   ===================================================== */

export const contentMaps = {
  services: servicesContent,
  platforms: platformsContent,
  consulting: consultingContent,
  industries: industriesContent,
  insights: insightsContent,
  about: aboutContent,
  careers: careersContent,
  utility: utilityContent,
} as const
