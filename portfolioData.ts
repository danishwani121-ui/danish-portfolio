import { ProjectData, EducationItem, CertificationItem, SkillCategory, CompactProject } from '../types';

export const DEFAULT_PROFILE_PHOTO =
  'data:image/jpeg;base64,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';

export const RESUME_DOCX_URL =
  'data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,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';

export const PORTFOLIO_OWNER = {
  name: 'Danish Ahmad Wani',
  title: 'Data Analyst | Business Analyst',
  tagline: 'Turning Data Into Clear, Actionable Insights.',
  heroBio: 'Data Analyst focused on turning raw data into actionable insights and business value.',
  aboutBioP1: 'I’m an entry-level Data Analyst with a Bachelor of Business Administration background and hands-on experience in Python, SQL, Excel, and Power BI. I enjoy transforming raw data into clean, meaningful insights through analysis and visualization.',
  aboutBioP2: 'With a business-focused mindset, I look beyond numbers to understand what the data means for real-world decisions.',
  location: 'Srinagar, Jammu & Kashmir, India',
  email: 'wanidanish1304@gmail.com',
  phone: '+91 7889439280',
  linkedin: 'https://linkedin.com/in/danish-wani-2a34a1361',
  linkedinDisplay: 'linkedin.com/in/danish-wani-2a34a1361',
  github: 'https://github.com/danishwani121-ui',
  githubDisplay: 'github.com/danishwani121-ui',
};

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: 'netflix-content',
    number: '01',
    title: 'Netflix Data Analysis',
    tagline: 'Exploratory analysis of Netflix movie and TV catalog distribution, genres & release timelines',
    shortDescription: 'In-depth Exploratory Data Analysis (EDA) on the Netflix catalog to uncover content trends, audience ratings, and country-wise distribution patterns.',
    fullDescription: 'Performed in-depth Exploratory Data Analysis (EDA) on the Netflix catalog to uncover content trends, audience ratings, and country-wise distribution patterns. Delivered compelling visual narratives using Python visualization libraries (Matplotlib, Seaborn, Pandas).',
    businessPerspective: 'Identified genre and regional concentration patterns that support data-backed content acquisition and subscriber retention strategies.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA', 'Jupyter Notebook'],
    workflow: ['Data Cleaning', 'Data Restructuring', 'EDA', 'Trend Visualization', 'Insights'],
    analysisAreas: [
      'Movies vs TV Shows Ratio',
      'Genre Concentration',
      'Country-wise Distribution',
      'Release Year Trends',
      'Content Ratings',
      'Temporal Analysis',
    ],
    accentColor: '#f43f5e', // Rose/Red (Netflix accent theme)
    githubUrlPlaceholder: 'https://github.com/danishwani121-ui',
    notebookUrlPlaceholder: 'https://github.com/danishwani121-ui',
    datasetInfo: {
      source: 'Netflix Catalog Metadata Dataset',
      description: 'Comprehensive catalog data encompassing international movies and TV series available on Netflix, including directors, cast, release year, date added, content rating, duration, and listed genres.',
      keyAttributes: ['Show ID', 'Type (Movie/TV Show)', 'Title', 'Director', 'Country', 'Date Added', 'Release Year', 'Rating', 'Duration', 'Listed In (Genres)'],
    },
    objective: 'Investigate the compositional shifts in Netflix\'s content portfolio over time, assess the split between movies and episodic TV series, and map primary production countries and genre concentrations.',
    dataCleaningSteps: [
      'Parsed raw string date columns into datetime objects (`date_added`) using Pandas to enable temporal analysis',
      'Exploded multi-value comma-separated fields (`country`, `listed_in`) to perform accurate unnested frequency counts',
      'Treated missing values across director, cast, and country columns with explicit placeholders',
      'Extracted numerical duration metrics from string formats (minutes for movies, seasons for TV shows)',
    ],
    edaSteps: [
      'Calculated overall ratio and volumetric breakdown between Movies and TV Shows',
      'Evaluated annual addition trends by year of content release versus year added to the platform',
      'Ranked top content-producing countries and calculated international production contributions',
      'Cross-tabulation of genre frequency distributions across different world regions',
    ],
    visualizationsCreated: [
      'Donut chart & stacked area plots displaying Movies vs TV Shows split over time (Matplotlib)',
      'Time-series line chart tracking content addition acceleration across release years',
      'Horizontal bar charts visualizing top 10 content-producing countries',
      'Heatmap representing the intersection of top genres and target age ratings (Seaborn)',
    ],
    keyInsights: [
      'Catalog composition breakdown between cinematic releases and episodic TV series.',
      'Temporal acceleration in catalog expansion during key global expansion years.',
      'Geographical concentration highlighting top international production hubs outside North America.',
      'Dominant genre clusters identified across both drama/comedy and documentary verticals.',
    ],
    businessTakeaways: [
      'Content Acquisition Strategy: Transition trends toward episodic programming reflect shifting subscriber engagement preferences.',
      'Regional Localization: High volume of international production highlights the business importance of localized content portfolios.',
      'Catalog Life Cycle: Analysis of release-to-addition lag provides insights into studio licensing windows versus Netflix original releases.',
    ],
  },
  {
    id: 'makeup-analysis',
    number: '02',
    title: 'Makeup Datasets 2025',
    tagline: 'Comprehensive beauty industry analysis covering product trends, pricing, and market segmentation',
    shortDescription: 'Analysis of beauty industry datasets covering product trends, ingredient profiling, brand performance, and seasonal demand cycles.',
    fullDescription: 'Comprehensive analysis of beauty industry datasets covering product trends, ingredient profiling, and market segmentation. Revealed consumer preferences, top-performing brands, and seasonal demand cycles through advanced visualizations with Pandas, Seaborn, and Matplotlib.',
    businessPerspective: 'Translated analytical observations into actionable retail strategies for cosmetic catalog positioning, pricing tiers, and brand differentiation.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Market Analysis', 'Jupyter Notebook'],
    workflow: ['Data Cleaning', 'EDA', 'Statistical Analysis', 'Visualization', 'Insights'],
    analysisAreas: [
      'Product Categories',
      'Brand Distribution',
      'Price Spread & Outliers',
      'Customer Rating Analysis',
      'Attribute Relationships',
      'Comparative Market Segmentation',
    ],
    accentColor: '#38bdf8', // Sky / Cyan
    githubUrlPlaceholder: 'https://github.com/danishwani121-ui',
    notebookUrlPlaceholder: 'https://github.com/danishwani121-ui',
    datasetInfo: {
      source: 'Cosmetics & Makeup Catalog Raw Dataset',
      description: 'Structured records containing multiple makeup categories, brand names, retail prices, customer ratings, and product specifications.',
      keyAttributes: ['Product Category', 'Brand', 'Price', 'Rating', 'Review Count', 'Product Features'],
    },
    objective: 'Explore and evaluate pricing variations across makeup product categories, inspect brand distribution patterns, and assess how rating distributions correlate with product price points.',
    dataCleaningSteps: [
      'Identified and treated missing values across rating and price columns using Pandas',
      'Converted inconsistent currency and pricing data types into standardized float values',
      'Cleaned categorical brand and product category names (trimmed whitespace, handled case irregularities)',
      'Identified and handled duplicate product listings in the raw dataset',
    ],
    edaSteps: [
      'Summary statistics (mean, median, standard deviation, interquartile ranges) across pricing tiers',
      'Frequency counts and brand representation analysis across major cosmetics categories',
      'Inspection of product rating distributions and density across distinct price brackets',
      'Bivariate analysis comparing price points across top-represented brands',
    ],
    visualizationsCreated: [
      'Histogram & KDE plots for price and rating distributions (Seaborn)',
      'Boxplots highlighting price spreads across product categories (Matplotlib/Seaborn)',
      'Bar charts showing top brands by catalog share and average rating',
      'Scatter and joint distribution plots mapping price versus customer rating',
    ],
    keyInsights: [
      'Identified wide price dispersion across specialty categories compared to mass-market segments.',
      'Analyzed brand distribution showing category concentration among key industry players.',
      'Observed rating behavior relative to low versus premium price brackets.',
      'Detected outliers in product pricing within select luxury categories.',
    ],
    businessTakeaways: [
      'Pricing Strategy: Categorical price dispersion highlights opportunities for competitive mid-tier product positioning.',
      'Inventory & Portfolio Mix: Category analysis helps retailers allocate catalog space based on popular price bands.',
      'Customer Perception: Rating patterns across pricing tiers inform promotional and value-messaging strategies.',
    ],
  },
  {
    id: 'toyota-pricing',
    number: '03',
    title: 'Toyota Vehicle Pricing Analysis',
    tagline: 'Python-based exploratory analysis investigating factors associated with Toyota resale prices',
    shortDescription: 'Analyzed car pricing trends, fuel types, and mileage relationships from a real-world automotive dataset.',
    fullDescription: 'Analyzed car pricing trends, fuel types, and mileage relationships from a real-world automotive dataset. Cleaned messy data and created insightful visualizations revealing key value drivers and depreciation patterns.',
    businessPerspective: 'Translated statistical observations into plain-language automotive market insights for trade-in valuation and inventory turns.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Cleaning', 'Jupyter Notebook'],
    workflow: ['Data Cleaning', 'Exploratory Analysis', 'Correlation Analysis', 'Visualization', 'Business Interpretation'],
    analysisAreas: [
      'Vehicle Pricing',
      'Mileage Relationships',
      'Fuel Type Variations',
      'Vehicle Age Depreciation',
      'Price Predictors',
      'Outlier Detection',
    ],
    accentColor: '#60a5fa', // Blue
    githubUrlPlaceholder: 'https://github.com/danishwani121-ui',
    notebookUrlPlaceholder: 'https://github.com/danishwani121-ui',
    datasetInfo: {
      source: 'Toyota Pre-Owned Vehicle Listings Dataset',
      description: 'Tabular dataset detailing pre-owned Toyota vehicle specifications, registration years, recorded mileage, transmission types, fuel types, engine size, and listed sale prices.',
      keyAttributes: ['Price', 'Model', 'Year', 'Transmission', 'Mileage', 'Fuel Type', 'Engine Size'],
    },
    objective: 'Perform statistical exploratory data analysis to examine how vehicle age, mileage, fuel type, and specifications associate with market resale prices without applying black-box predictive models.',
    dataCleaningSteps: [
      'Calculated vehicle age from manufacture/registration year relative to dataset baseline',
      'Filtered anomalies, zero-mileage entries, and inconsistent engine size representations',
      'Standardized categorical variables (Transmission, Fuel Type) for unified aggregation',
      'Conducted IQR-based outlier detection on price and mileage to identify extreme listings',
    ],
    edaSteps: [
      'Parametric and non-parametric statistical summaries of resale price distributions',
      'Correlation matrix computation (Pearson / Spearman) across numerical attributes (Price, Age, Mileage, Engine Size)',
      'Sub-group aggregation comparing resale prices by fuel type (Petrol, Diesel, Hybrid)',
      'Distribution spread and variance analysis across top Toyota models',
    ],
    visualizationsCreated: [
      'Correlation heatmap visualizing relationships between Price, Age, Mileage, and Engine Size (Seaborn)',
      'Scatter plot with regression trendline illustrating Price vs. Mileage depreciation curvature (Matplotlib/Seaborn)',
      'Violin and box plots comparing price distributions across Fuel Types and Transmission variants',
      'Multi-panel histograms assessing skewed distributions of mileage and asking prices',
    ],
    keyInsights: [
      'Vehicle age and accumulated mileage exhibit strong inverse associations with resale value.',
      'Fuel type comparison showed distinct price resilience patterns among hybrid variants.',
      'Outlier analysis surfaced high-mileage listings retaining above-average asking price due to engine specifications.',
      'Model-by-model depreciation curves varied significantly between compact and SUV lines.',
    ],
    businessTakeaways: [
      'Valuation Benchmarking: Clear correlation metrics provide dealerships with baseline parameters for trade-in assessments.',
      'Inventory Turn Strategy: Identifying vehicle aging thresholds where resale price drops steepest guides discount timings.',
      'Consumer Demand Trends: Premium pricing on hybrid configurations reflects elevated market demand for fuel-efficient models.',
    ],
  },
];

export const ADDITIONAL_PROJECTS: CompactProject[] = [
  {
    title: 'Sales Data Analysis',
    categoryTag: 'Business Intelligence & KPI',
    description: 'Analyzed key performance indicators including monthly sales figures, regional performance, and profit margins to identify growth trends and commercial opportunities.',
    technologies: ['Python', 'Pandas', 'KPI Analysis', 'Excel'],
    githubUrl: 'https://github.com/danishwani121-ui',
  },
  {
    title: 'E-Commerce Analysis',
    categoryTag: 'E-Commerce & Marketing Analytics',
    description: 'Explored customer ordering behavior, category popularity, and regional sales trends. Applied data wrangling and visualization to derive actionable promotional insights.',
    technologies: ['Python', 'Seaborn', 'Data Viz', 'SQL'],
    githubUrl: 'https://github.com/danishwani121-ui',
  },
  {
    title: 'Student Marks Analyzer',
    categoryTag: 'Automation & Academic Insights',
    description: 'Developed a Python-based system to analyze student academic performance distributions and automate comprehensive summary report generation for educators.',
    technologies: ['Python', 'Automation', 'Report Gen', 'Pandas'],
    githubUrl: 'https://github.com/danishwani121-ui',
  },
];

export const STRENGTHS_LIST = [
  { icon: '💬', title: 'Strong Communication', desc: 'Translating complex data metrics into clear, decision-ready insights for technical and business teams.' },
  { icon: '🧩', title: 'Problem-Solving Mindset', desc: 'Deconstructing messy, unstructured datasets into structured analytical pipelines.' },
  { icon: '⚡', title: 'Quick Learner', desc: 'Rapidly mastering modern analytics libraries, BI platforms, and emerging data tools.' },
  { icon: '🗂️', title: 'Real-World Dataset Experience', desc: 'Hands-on practice cleaning and analyzing actual industry datasets across retail, automotive, and entertainment.' },
  { icon: '🤖', title: 'AI Tools Proficiency', desc: 'Leveraging AI-assisted tooling and modern workflows to accelerate exploratory data analysis and code quality.' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming & Data Analysis',
    description: 'Core analytical programming stack used for data ingestion, cleaning, transformation, and statistical exploration.',
    icon: 'Terminal',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
  },
  {
    category: 'Databases & Querying',
    description: 'Relational database querying and structured data manipulation techniques.',
    icon: 'Database',
    skills: ['SQL', 'MySQL', 'Querying', 'Filtering', 'Aggregation', 'Joins', 'Window Functions'],
  },
  {
    category: 'BI & Reporting',
    description: 'Business intelligence tooling and executive reporting frameworks across overall analytical capabilities.',
    badge: 'Overall Technical Skillset',
    icon: 'BarChart3',
    skills: ['Power BI', 'Microsoft Excel', 'Google Sheets', 'Dashboards', 'Reports', 'KPI Analysis'],
  },
  {
    category: 'Analytics & Methodology',
    description: 'Rigorous end-to-end analytical methodologies applied to raw and complex business data.',
    icon: 'LineChart',
    skills: [
      'Data Cleaning',
      'Data Preprocessing',
      'Exploratory Data Analysis (EDA)',
      'Statistical Analysis',
      'Trend Analysis',
      'Pattern Analysis',
      'Data Interpretation',
      'Business Insights',
    ],
  },
  {
    category: 'Development Tools & Environments',
    description: 'Version control and development environments supporting reproducible analytical workflows.',
    icon: 'Cpu',
    skills: ['Git', 'GitHub', 'VS Code', 'Google Colab', 'HTML/CSS Basics'],
  },
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Understand',
    summary: 'Understand the business question and dataset.',
    detail: 'Frame the business context, establish objectives, examine schema constraints, and clarify key stakeholder questions.',
    icon: 'Search',
  },
  {
    step: '02',
    title: 'Clean',
    summary: 'Handle missing, inconsistent, and unnecessary data.',
    detail: 'Resolve missing values, standardize data types, sanitize categorical labels, and remove duplicates using Pandas & NumPy.',
    icon: 'Sparkles',
  },
  {
    step: '03',
    title: 'Explore',
    summary: 'Use EDA to identify trends, distributions, and patterns.',
    detail: 'Compute summary metrics, detect outliers, evaluate skewness, and assess correlation relationships across attributes.',
    icon: 'Compass',
  },
  {
    step: '04',
    title: 'Visualize',
    summary: 'Create meaningful charts using Matplotlib and Seaborn.',
    detail: 'Build tailored, publication-quality visualizations emphasizing distribution shapes, trend lines, and comparative breakdowns.',
    icon: 'PieChart',
  },
  {
    step: '05',
    title: 'Interpret',
    summary: 'Translate statistical observations into understandable insights.',
    detail: 'Bridge statistical results to real-world context, separating meaningful trends from noise without over-extrapolating.',
    icon: 'Brain',
  },
  {
    step: '06',
    title: 'Communicate',
    summary: 'Present findings in a way that supports decision-making.',
    detail: 'Structure clear executive takeaways that inform strategic business planning, pricing decisions, and operational next steps.',
    icon: 'MessageSquare',
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'Bachelor of Business Administration (BBA)',
    institution: 'Desh Bhagat University, Punjab',
    period: '2020 – 2024',
    badge: 'Undergraduate Degree',
    details: 'Equipped with foundational business management principles, market strategy, managerial economics, organizational dynamics, and data-backed business decision-making.',
  },
  {
    degree: 'Data Analytics Course',
    institution: 'ILS Srinagar',
    period: 'October 2025 – Present',
    badge: 'Professional Training',
    details: 'Comprehensive, hands-on professional analytics curriculum focused on Python programming, database management, statistical exploratory analysis, and BI reporting.',
    coursework: [
      'Python Programming',
      'Data Structures',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Data Cleaning & Preprocessing',
      'EDA',
      'Statistical Analysis',
      'SQL & MySQL',
      'Microsoft Excel',
      'Power BI',
      'Business Analytics',
      'Data Interpretation & Insights',
    ],
  },
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: 'Data Visualization with Python',
    issuer: 'IBM Cognitive Class',
    badgeCode: 'DV0101EN',
    issueDate: 'June 13, 2026',
    verifyUrl: 'https://courses.cognitiveclass.ai/certificates/a1015cbe202c4399807fbfbe22698edf',
    iconName: 'BarChart2',
    skillsCovered: ['Matplotlib', 'Seaborn', 'Data Storytelling', 'Statistical Plotting', 'Visual Layouts'],
  },
  {
    title: 'Python 101 for Data Science',
    issuer: 'IBM Cognitive Class',
    badgeCode: 'PY0101EN',
    issueDate: 'March 27, 2026',
    verifyUrl: 'https://courses.cognitiveclass.ai/certificates/a6bb01ce3b90410a97d56ae37dd9fabe',
    iconName: 'Code',
    skillsCovered: ['Python Fundamentals', 'NumPy Arrays', 'Pandas DataFrames', 'Data Manipulation'],
  },
  {
    title: 'SQL and Relational Databases 101',
    issuer: 'IBM Skills Network · Cognitive Class',
    badgeCode: 'DB0101EN',
    issueDate: 'April 19, 2026',
    verifyUrl: 'https://courses.cognitiveclass.ai/certificates/5ff7a03c45fd41309362f16f080ec0aa',
    iconName: 'Database',
    skillsCovered: ['Relational Schema', 'SQL Select & Filter', 'Aggregation Queries', 'Table Joins'],
  },
];

export const SOFT_SKILLS = [
  { name: 'Analytical Thinking', description: 'Deconstructing complex data problems into logical, manageable steps' },
  { name: 'Problem Solving', description: 'Identifying data quality issues and formulating structured solutions' },
  { name: 'Business Communication', description: 'Explaining technical observations in clear business language' },
  { name: 'Team Collaboration', description: 'Working constructively across cross-functional project goals' },
  { name: 'Customer Handling', description: 'Understanding end-user perspectives and stakeholder needs' },
  { name: 'Time Management', description: 'Structuring analysis pipelines efficiently and meeting milestones' },
  { name: 'Adaptability', description: 'Quickly learning new analytical tooling and evolving data environments' },
  { name: 'Quick Learning', description: 'Eagerly mastering modern data frameworks and analytical techniques' },
];

export const LANGUAGES = [
  { name: 'English', level: 'Professional Working Proficiency', flag: 'EN' },
  { name: 'Urdu', level: 'Native / Fluent', flag: 'UR' },
  { name: 'Hindi', level: 'Native / Fluent', flag: 'HI' },
  { name: 'Kashmiri', level: 'Native Language', flag: 'KS' },
];

export const BUSINESS_EXPERIENCE = {
  projectTitle: 'Orchard AI Kashmir',
  role: 'Creator & AI Product Concept',
  tagline: 'AI-Powered Horticulture Advisory & Smart Orchard Intelligence for Kashmir',
  appUrl: 'https://orchardai-kashmir.ai.studio/',
  appUrlDisplay: 'orchardai-kashmir.ai.studio',
  description: 'Designed and built an intelligent agricultural web application leveraging AI and data analytics to support Kashmiri apple orchardists with precision disease diagnosis, spray schedules, crop yield optimization, and climate-aware farming advisories.',
  competencies: [
    { title: 'AI & Product Thinking', desc: 'Designing tailored AI diagnostic prompts and structured decision-support flows for orchardists.' },
    { title: 'Customer & Regional Understanding', desc: 'Addressing localized challenges of Kashmiri apple growers—from scab management to seasonal weather risks.' },
    { title: 'Data & Advisory Engineering', desc: 'Translating complex agricultural data, spray timelines, and pest indicators into simple, actionable farmer guidance.' },
    { title: 'Digital Experience Design', desc: 'Creating an accessible, mobile-first interface optimized for fast field queries and seasonal alerts.' },
    { title: 'Problem Solving & Real-World Impact', desc: 'Bridging the gap between modern generative AI technologies and grassroots horticulture practices.' },
  ],
  clarification: 'Demonstrates end-to-end AI product design, problem solving in a real regional industry (Kashmir Horticulture), and user-centric data synthesis.',
};
