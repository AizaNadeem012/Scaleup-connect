"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Search, Clock, ArrowLeft } from "lucide-react";
import Navigation from "@/components/navigation";

// Brand Colors
const PRIMARY_COLOR = "#003728";
const ACCENT_COLOR = "#002A1F";
const LIGHT_BACKGROUND_SHADE = "#F2FAF7";

// --- TYPE DEFINITIONS ---
interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  content: string[];
}

interface BlogListProps {
  onSelectPost: (id: string) => void;
}

interface BlogDetailProps {
  post: Post;
  onBack: () => void;
}
// --- END TYPE DEFINITIONS ---

// --- MOCK DATA (ALL 6 POSTS) ---
const mockPosts: Post[] = [
  {
    id: "ai-in-hr-recruitment",
    title:
      "AI in HR: How Artificial Intelligence is Transforming Recruitment and Employee Screening",
    excerpt:
      "Discover practical ways Artificial Intelligence recruitment tools enhance employment screening, minimizing bias and maximizing compliance from the very first CV review.",
    date: "Nov 01, 2025",
    readTime: "8 min read",
    category: "AI in HR",
    imageUrl:
      "https://i.pinimg.com/736x/9f/74/1d/9f741d037c1692f981e49286495e47bd.jpg",
    content: [
      "## Introduction",
      "The integration of Artificial Intelligence in Human Resources is transforming the way organizations attract, evaluate, and retain employees. Traditional recruitment processes are often slow, expensive, and prone to human bias. These inefficiencies lead to poor hiring decisions, increased employee turnover, and unnecessary costs. With the rise of Artificial Intelligence recruitment tools and Artificial Intelligence-powered employee screening, Human Resources professionals can now manage hiring smarter, faster, and more fairly.",
      "This article explores how Artificial Intelligence is reshaping recruitment, the core benefits for HR teams, common challenges to address, and practical steps organizations can take to implement responsible AI-driven hiring.",

      "## What is AI in HR?",
      "Artificial Intelligence in Human Resources means using technologies such as machine learning models, natural language processing, and predictive analytics to automate routine tasks and surface actionable insights. The aim is to reduce manual work, improve consistency, and support data-driven decisions across talent acquisition and people operations.",
      "### Common AI tools used in HR",
      "- Chatbots and virtual assistants for candidate engagement and scheduling.",
      "- Resume parsers and smart shortlisting engines for rapid screening.",
      "- Predictive analytics for job-fit scoring and retention forecasting.",

      "## How AI is Transforming Recruitment",
      "Artificial Intelligence transforms recruitment by automating repetitive tasks and improving matching accuracy. Recruiters can focus on higher-value activities such as relationship building and final evaluation.",
      "### Key ways AI improves recruitment",
      "- Automated Resume Screening — AI can parse and score thousands of resumes based on job criteria, reducing initial shortlisting time from days to minutes.",
      "- Skill and Role Matching — Modern systems match candidate skills and experience to role requirements with semantic understanding instead of only keyword matching.",
      "- Candidate Experience — Chatbots and automated updates keep candidates informed and engaged throughout the hiring process.",
      "Well implemented, these capabilities reduce time-to-hire and increase the quality of shortlisted candidates.",

      "## AI in Employee Screening",
      "Employee screening extends beyond resume checks; it is about verifying credentials, assessing risk, and ensuring compliance. Artificial Intelligence can make these processes more robust and auditable.",
      "### Screening improvements enabled by AI",
      "- Background Verification — Automated cross-checking against verified data sources speeds up validation and reduces manual errors.",
      "- Behavioral and Assessment Analysis — AI-assisted assessments and structured interview analytics provide supplementary signals about candidate fit.",
      "- Audit Trails and Compliance — AI systems can log decisions and provide traceability that supports fair hiring and regulatory needs.",
      "These improvements help organizations reduce hiring risk while maintaining consistent screening standards.",

      "## Benefits of AI in HR",
      "Adopting Artificial Intelligence for recruitment and screening provides multiple benefits for organizations of all sizes.",
      "### Primary benefits",
      "- Faster Hiring Processes — Automated screening and scheduling greatly reduce administrative delay.",
      "- Cost Efficiency — Automation reduces reliance on manual labour for early-stage screening.",
      "- Fairer Evaluation — When designed and monitored correctly, AI can help remove unconscious bias by focusing on skills and outcomes.",
      "- Better Insights — Predictive models support more informed decisions about candidate success and retention potential.",
      "Collectively, these benefits enable teams to scale hiring without sacrificing quality.",

      "## Challenges of Using AI in HR",
      "Artificial Intelligence is powerful, but it is not without pitfalls. Responsible adoption requires awareness and governance.",
      "### Major challenges to address",
      "- Algorithmic Bias — Training data may reflect historical bias; safeguards and audits are required to prevent unfair outcomes.",
      "- Data Privacy — Candidate and employee data is sensitive; compliance with local regulations and secure data handling is essential.",
      "- Over-Reliance on Automation — AI should augment human judgement, not replace it. Final hiring decisions should include human review.",
      "Organisations must invest in explainability, human oversight, and privacy measures to mitigate these challenges.",

      "## Implementation Best Practices",
      "To implement AI responsibly and effectively, Human Resources teams should adopt a deliberate approach.",
      "### Recommended steps",
      "- Start with a clear problem statement such as reducing time-to-hire or improving screening accuracy.",
      "- Pilot with a small, representative dataset and perform fairness and performance evaluations.",
      "- Maintain human-in-the-loop review for all automated shortlist decisions.",
      "- Create an audit trail and document model behaviour, data sources, and decision logic.",
      "Following these steps reduces risk and accelerates value realization from AI.",

      "## The Future of AI in HR",
      "Looking ahead, Artificial Intelligence will continue to augment recruitment in deeper ways. Expect more sophisticated video-interview analytics, continuous performance forecasting, and integrated talent marketplaces that match internal and external mobility opportunities.",
      "Organisations that combine ethical governance with pragmatic pilots will lead the shift to data-driven, fair, and efficient hiring.",

      "## Conclusion",
      "Artificial Intelligence in Human Resources is not intended to replace people. It is a set of tools that empowers Human Resources teams to hire more effectively, reduce bias, and build stronger workforces. When adopted responsibly, Artificial Intelligence brings measurable improvements to recruitment and employee screening that benefit organizations and candidates alike."
    ],
  },

  {
    id: "future-of-work-pakistan",
    title: "The Future of Work in Pakistan: Preparing HR and Businesses for the AI Era",
    excerpt:
      "Exploring how Human Resources in Pakistan can prepare for the Artificial Intelligence era with upskilling, flexible policies, and future-ready strategies.",
    date: "Oct 20, 2025",
    readTime: "7 min read",
    category: "Strategy",
    imageUrl:
      "https://i.pinimg.com/736x/61/e2/34/61e234113469cf8312d7d3978420f37c.jpg",
    content: [
      "## Introduction",
      "Pakistan has a young and rapidly growing workforce. To harness this demographic advantage, businesses and Human Resources departments must prepare for an AI-driven future. This article outlines practical steps for policy makers, business leaders, and Human Resources teams to make the transition smooth and inclusive.",
      "Preparing for the Artificial Intelligence era requires investments in skills, changes in workplace design, and policies that enable flexibility and lifelong learning.",

      "## Why the Future of Work Matters for Pakistan",
      "Global adoption of Artificial Intelligence is reshaping industries. For Pakistan, this shift presents both opportunity and risk. Firms that adapt early can access new markets and improve productivity. Those that do not risk falling behind.",
      "### Economic and social implications",
      "- Job transformation rather than wholesale elimination is likely in most sectors.",
      "- Upskilling and reskilling will determine individual employability.",
      "- Inclusive policies are required to ensure that the benefits are broad-based.",

      "## Key Areas for Human Resources Action",
      "Human Resources functions will be central to enabling the transition.",
      "### Practical steps for HR teams",
      "- Skills Mapping — Conduct a skills audit to identify gaps related to Artificial Intelligence and digital skills.",
      "- Upskilling Programs — Launch targeted reskilling initiatives for critical roles such as data literacy, digital product management, and machine learning awareness.",
      "- Flexible Work Policies — Design hybrid and flexible work models to retain talent and expand access to remote opportunities.",
      "These interventions help organizations remain competitive while supporting employee mobility.",

      "## Building Partnerships and Ecosystems",
      "Government, education, and the private sector must collaborate.",
      "### Recommended collaborations",
      "- Partner with universities and training providers for accredited upskilling programs.",
      "- Support apprenticeships and industry placements for early-career professionals.",
      "- Engage with policy makers to create incentives for workforce development.",
      "Coordinated action accelerates workforce readiness and reduces transition frictions.",

      "## Measuring Success",
      "Set clear metrics to measure the impact of interventions.",
      "### Suggested KPIs",
      "- Percentage of workforce reskilled for priority digital skills.",
      "- Time-to-fill for critical roles that require AI knowledge.",
      "- Employee retention and internal mobility rates following training programs.",
      "Regular measurement ensures programs stay aligned to business needs and deliver results.",

      "## Conclusion",
      "The future of work in Pakistan will be driven by how well organizations prepare their people. By focusing on skills, flexible policies, and multi-stakeholder partnerships, Human Resources can lead a just and prosperous transition to the Artificial Intelligence era."
    ],
  },

  {
    id: "cost-of-bad-hire",
    title: "The Hidden Cost of a Bad Hire – And How AI Can Help Avoid It",
    excerpt:
      "A bad hire can be extremely costly. Learn how Artificial Intelligence hiring solutions reduce risks using predictive analytics and automated evaluation.",
    date: "Oct 15, 2025",
    readTime: "6 min read",
    category: "Analytics",
    imageUrl:
      "https://i.pinimg.com/1200x/a7/7c/b6/a77cb60004d92426a2851237dbfd4582.jpg",
    content: [
      "## Introduction",
      "A bad hire imposes direct and indirect costs on organizations. Direct costs include recruiting and onboarding expenses. Indirect costs include reduced team morale, lost productivity, and potential damage to company reputation. This article explains how to quantify these costs and how Artificial Intelligence can reduce the likelihood of costly hiring mistakes.",
      "Understanding and preventing bad hires is both a financial and strategic imperative.",

      "## What is the True Cost of a Bad Hire?",
      "Industry estimates place the cost of a bad hire at up to thirty percent of that employee's first-year salary, but actual costs often exceed this due to productivity losses and management time spent addressing performance issues.",
      "### Cost categories to consider",
      "- Recruitment and onboarding expenses.",
      "- Lowered team productivity and engagement.",
      "- Customer impact where client-facing roles are involved.",
      "- Opportunity cost for unfilled or poorly filled strategic roles.",

      "## How AI Reduces Hiring Risk",
      "Artificial Intelligence helps reduce risk by adding objective, data-driven signals to the hiring process.",
      "### Useful AI capabilities",
      "- Predictive Analytics — Models that estimate candidate success based on historical performance and role-specific indicators.",
      "- Automated Skill Assessments — Standardized tests and work sample evaluations that provide impartial measures of capability.",
      "- Structured Shortlisting — Systems that apply consistent screening criteria to reduce variability in candidate selection.",
      "These capabilities reduce the probability of mismatch and therefore lower the expected cost of a bad hire.",

      "## Implementation Tips",
      "Adopting Artificial Intelligence is not a panacea. It requires careful integration with human processes.",
      "### Practical guidance",
      "- Validate predictive models against local hiring outcomes to ensure relevance.",
      "- Use AI assessments as decision support rather than final determinations.",
      "- Continuously monitor model performance and fairness metrics.",
      "A disciplined approach yields better hiring outcomes while controlling risk.",

      "## Conclusion",
      "Reducing the incidence of bad hires saves money and protects organisational health. Artificial Intelligence provides tools that make hiring more predictive and defensible. When combined with human oversight and continuous measurement, Artificial Intelligence-based hiring reduces cost and improves quality."
    ],
  },

  {
    id: "learning-development",
    title: "From Intern to Leader: Why Learning and Development is the Real Growth Engine",
    excerpt:
      "Artificial Intelligence is personalizing employee journeys. Explore how training tools are reshaping learning and development strategies.",
    date: "Oct 10, 2025",
    readTime: "6 min read",
    category: "L&D",
    imageUrl:
      "https://i.pinimg.com/1200x/e7/75/fa/e775fa0bf31756747c56f182f1070622.jpg",
    content: [
      "## Introduction",
      "Learning and development is a strategic lever that fuels long-term growth. A strong learning culture helps organizations retain top talent and build internal leadership pipelines. This article explores modern approaches to learning and development, including Artificial Intelligence-enabled personalization and measurement techniques.",
      "Investing in learning drives employee engagement and business resilience.",

      "## Why Learning and Development Matters",
      "Continuous skill development supports career progression and organisational agility. Companies that invest in learning see higher retention, better performance, and faster internal mobility.",
      "### Business benefits",
      "- Increased employee retention and satisfaction.",
      "- Faster promotion cycles for high performers.",
      "- Greater ability to pivot as market needs evolve.",

      "## How Artificial Intelligence Personalizes Learning",
      "Artificial Intelligence enables tailored learning journeys that adapt to individual needs and learning styles.",
      "### AI-driven L and D features",
      "- Personalized learning recommendations based on role requirements and performance data.",
      "- Microlearning modules that fit into daily work and reinforce skills.",
      "- Adaptive assessments that guide learners to the next best activity.",
      "Personalized learning improves completion rates and the transfer of learning to on-the-job performance.",

      "## Designing an Effective L and D Program",
      "A successful learning program combines clear objectives, executive sponsorship, and measurable outcomes.",
      "### Key design elements",
      "- Skills taxonomy aligned to strategy and role families.",
      "- Blended learning that mixes self-paced content, coaching, and project-based assignments.",
      "- Measurement framework that links learning to business outcomes.",
      "A strong program enables a predictable leadership pipeline and reduces external hiring costs.",

      "## Conclusion",
      "Learning and development is not an HR cost center. It is a growth engine. By leveraging Artificial Intelligence to personalize learning and by connecting learning to career progression, organisations can develop leaders from within and future-proof their workforce."
    ],
  },

  {
    id: "hr-compliance-ai-age",
    title: "HR Compliance in the AI Age: Balancing Technology, Law, and Trust",
    excerpt:
      "Learn how Artificial Intelligence compliance tools help Human Resources balance law, technology, and trust in the digital era.",
    date: "Sep 28, 2025",
    readTime: "7 min read",
    category: "Compliance",
    imageUrl:
      "https://i.pinimg.com/736x/9c/87/12/9c87120fec030c5f2ad94d6ead6d437b.jpg",
    content: [
      "## Introduction",
      "As organisations adopt Artificial Intelligence for hiring and people management, compliance becomes a central concern. Human Resources teams must ensure that automated systems operate transparently and in accordance with laws and ethical expectations.",
      "This article outlines the compliance landscape and practical steps to build trustworthy AI systems in Human Resources.",

      "## Key Compliance Considerations",
      "Compliance in the AI era covers privacy, non-discrimination, record-keeping, and vendor management. Organisations must understand local labor laws and data protection regulations when deploying AI solutions.",
      "### Important areas to address",
      "- Data Minimization and Consent — Collect only the data that is necessary and obtain proper consent for processing.",
      "- Explainability — Maintain the ability to explain automated decisions to candidates and regulators.",
      "- Vendor Due Diligence — Evaluate third-party AI vendors for fairness, security, and compliance practices.",

      "## Practical Controls for HR Leaders",
      "Human Resources teams can put controls in place to reduce legal and reputational risk.",
      "### Controls to implement",
      "- Audit Logging — Record decisions and inputs used by AI systems that affect hiring outcomes.",
      "- Fairness Testing — Routinely test models for disparate impact across protected groups.",
      "- Human Review — Ensure humans review edge cases and final hiring decisions.",
      "Such controls help maintain trust and reduce the likelihood of legal exposure.",

      "## Building a Governance Framework",
      "A governance framework formalizes responsibilities, review cadences, and escalation procedures for AI use in Human Resources.",
      "### Governance elements",
      "- Clear ownership between HR, Legal, and Data teams.",
      "- Periodic model performance and fairness reviews.",
      "- Incident response plans for data breaches or model failures.",
      "A well governed AI program is more resilient and easier to defend.",

      "## Conclusion",
      "Balancing technology, law, and trust is essential to unlocking the benefits of Artificial Intelligence in Human Resources. By embedding compliance and transparency into AI deployments, organisations can reap efficiency gains without compromising fairness or privacy."
    ],
  },

  {
    id: "digital-hr-transformation",
    title: "The Roadmap to Digital HR Transformation: Tools, Strategy, and Implementation",
    excerpt:
      "Step-by-step guide to digital Human Resources transformation with Artificial Intelligence tools, strategies, and cultural change.",
    date: "Sep 15, 2025",
    readTime: "8 min read",
    category: "Digital HR",
    imageUrl:
      "https://i.pinimg.com/736x/3c/5f/37/3c5f379c0d1eb0266bb8333c81b8c010.jpg",
    content: [
      "## Introduction",
      "Digital transformation in Human Resources is about modernizing processes, leveraging data, and building capabilities that support a future-ready workforce. Artificial Intelligence plays a critical role in automating processes and providing insights that drive better people decisions.",
      "This roadmap outlines the essential steps to design and execute a digital Human Resources transformation.",

      "## Audit and Strategy",
      "Start with an audit of current systems, processes, and skills. A transformation strategy should align with business objectives and prioritize high-impact initiatives.",
      "### Audit focus areas",
      "- Current HR technology stack and integration gaps.",
      "- Manual processes that consume significant administrative time.",
      "- Skills and change readiness across the organisation.",

      "## Select the Right Tools",
      "Choose tools that integrate well with existing systems and provide measurable value.",
      "### Tool categories to consider",
      "- Applicant Tracking and Recruitment Automation.",
      "- Learning Experience Platforms with personalization.",
      "- Workforce Analytics platforms for strategic planning.",
      "Pick tools that support open standards and provide clear governance capabilities.",

      "## Implementation and Change Management",
      "Successful transformation depends on people and process change as much as on technology.",
      "### Change management best practices",
      "- Executive sponsorship and cross-functional alignment.",
      "- Incremental pilots with clear success metrics.",
      "- Training programs to build internal capability and adoption.",
      "Sustained adoption requires continuous communication and measurement.",

      "## Measure and Iterate",
      "Establish KPIs that connect HR initiatives to business outcomes such as turnover reduction, time-to-hire, and internal mobility.",
      "### Example KPIs",
      "- Reduction in time-to-hire for critical roles.",
      "- Percentage increase in internal promotions.",
      "- Utilization rates for learning platforms.",
      "Use these metrics to iterate, scale successful pilots, and sunset tools that do not deliver value.",

      "## Conclusion",
      "Digital Human Resources transformation is a multi-year journey. By pairing the right technology with deliberate strategy, governance, and change management, organisations can build a resilient, agile, and future-ready people function."
    ],
  },
];
// --- END MOCK DATA ---

// --- BLOG LIST COMPONENT ---
function BlogList({ onSelectPost }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = mockPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="text-center mb-16 pt-20">
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-3"
          style={{ color: ACCENT_COLOR }}
        >
          Our Insights
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Building Teams, Fueling Futures. Explore our perspectives on recruitment,
          Artificial Intelligence innovation, and evolving workplace culture.
        </p>

        {/* Search */}
        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, trends..."
              className="w-full py-3 pl-12 pr-6 text-base border-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 border-gray-300"
              style={{
                borderColor: PRIMARY_COLOR + "40",
              }}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>
        </div>
      </header>

      {/* Blog Grid */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post.id)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-full flex flex-col transform hover:scale-[1.02] hover:shadow-xl group"
              style={{
                border: `1px solid ${PRIMARY_COLOR}20`,
              }}
            >
              <div className="relative h-48 w-full">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full text-white uppercase shadow-md"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  {post.category}
                </div>
              </div>
              <div className="p-6 space-y-3 flex-grow flex flex-col">
                <div
                  className="flex items-center space-x-4 text-xs text-gray-500 border-b pb-3 mb-1"
                  style={{ borderColor: PRIMARY_COLOR + "20" }}
                >
                  <span className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1.5" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold" style={{ color: PRIMARY_COLOR }}>
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 flex-grow">{post.excerpt}</p>
                <Button
                  variant="link"
                  className="p-0 h-auto font-bold text-sm flex items-center"
                  style={{ color: ACCENT_COLOR }}
                >
                  Read Article{" "}
                  <ArrowRight className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No articles found.
          </p>
        )}
      </main>
    </>
  );
}

// --- BLOG DETAIL COMPONENT ---
function BlogDetail({ post, onBack }: BlogDetailProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-8">
      <button
        onClick={onBack}
        className="mb-10 flex items-center font-semibold hover:underline"
        style={{ color: PRIMARY_COLOR }}
      >
        <ArrowLeft className="h-5 w-5 mr-2" /> Back to Insights
      </button>

      <header className="mb-12 text-center">
        <div
          className="inline-block text-xs font-semibold px-4 py-1.5 rounded-full text-white uppercase shadow-md mb-6"
          style={{ backgroundColor: ACCENT_COLOR }}
        >
          {post.category}
        </div>
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
          style={{ color: PRIMARY_COLOR }}
        >
          {post.title}
        </h1>
        <div className="flex justify-center space-x-8 text-sm text-gray-600 font-medium">
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" /> {post.date}
          </span>
          <span className="flex items-center">
            <Clock className="h-4 w-4 mr-2" /> {post.readTime}
          </span>
        </div>
      </header>

      <div className="w-full h-[420px] rounded-2xl overflow-hidden mb-12 shadow-xl">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="object-cover w-full h-full"
        />
      </div>

      <main className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-serif">
        {post.content.map((p, i) => {
          if (p.startsWith("## ")) {
            return (
              <h2
                key={i}
                className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-gray-900"
              >
                {p.replace("## ", "")}
              </h2>
            );
          }
          if (p.startsWith("### ")) {
            return (
              <h3
                key={i}
                className="text-xl md:text-2xl font-semibold mt-6 mb-3 text-gray-800"
              >
                {p.replace("### ", "")}
              </h3>
            );
          }
          // render list items starting with "- " as <li> groups by contiguous lines
          if (p.startsWith("- ")) {
            // To keep implementation simple we render as paragraph lines that start with dash.
            // The prose class will style them reasonably. For stricter list rendering, parse into <ul>.
            return (
              <p key={i} className="mb-3">
                {p.replace("- ", "• ")}
              </p>
            );
          }
          return (
            <p key={i} className="mb-5 text-base md:text-lg leading-7">
              {p}
            </p>
          );
        })}
      </main>
    </div>
  );
}

// --- MAIN APP ---
export default function BlogApp() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const selectedPost = mockPosts.find((p) => p.id === selectedPostId);

  return (
    <div
      className="pb-24 min-h-screen"
      style={{ backgroundColor: LIGHT_BACKGROUND_SHADE }}
    >
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-10 pb-8">
        {selectedPost ? (
          <BlogDetail
            post={selectedPost}
            onBack={() => setSelectedPostId(null)}
          />
        ) : (
          <BlogList onSelectPost={setSelectedPostId} />
        )}
      </div>
    </div>
  );
}
