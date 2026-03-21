import { useEffect } from "react";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaAws,
  FaCloud,
  FaCodeBranch,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { HiMiniSparkles } from "react-icons/hi2";
import {
  SiAnsible,
  SiApachemaven,
  SiDocker,
  SiGithubactions,
  SiGrafana,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiPrometheus,
  SiPython,
  SiSonarqubeserver,
  SiTerraform,
  SiTrivy,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: IconType;
  area: string;
  description: string;
  tone: string;
};

type FocusArea = {
  title: string;
  description: string;
  icon: IconType;
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "04", label: "Hands-on cloud & DevOps projects" },
  { value: "05", label: "Certifications and learning tracks" },
  { value: "AWS", label: "Primary cloud platform focus" },
  { value: "24/7", label: "Reliability and observability mindset" },
];

const focusAreas: FocusArea[] = [
  {
    title: "Infrastructure as Code",
    description:
      "I design repeatable AWS environments using Terraform with structured networking, security controls, and reusable provisioning patterns.",
    icon: FaCloud,
  },
  {
    title: "Delivery Automation",
    description:
      "I automate build and deployment workflows using GitHub Actions, Jenkins, Maven, and Docker to reduce manual deployment effort.",
    icon: FaCodeBranch,
  },
  {
    title: "Monitoring & Security",
    description:
      "I combine Linux administration, Prometheus, Grafana, Trivy scanning, and SonarQube-based quality checks for reliable operations.",
    icon: FaShieldAlt,
  },
];

const skills: Skill[] = [
  {
    name: "AWS",
    icon: FaAws,
    area: "Cloud Platform",
    description: "VPC, EC2, ALB, RDS, Elastic IP, route tables, and security groups.",
    tone: "tone-amber",
  },
  {
    name: "Terraform",
    icon: SiTerraform,
    area: "Infrastructure as Code",
    description: "Reusable modules, plan/apply workflows, scalable provisioning, and cloud automation.",
    tone: "tone-coral",
  },
  {
    name: "Ansible",
    icon: SiAnsible,
    area: "Configuration Management",
    description: "Automated server configuration, provisioning tasks, and repeatable environment setup.",
    tone: "tone-teal",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    area: "Orchestration",
    description: "Container orchestration concepts, workload deployment, scaling, and service exposure.",
    tone: "tone-teal",
  },
  {
    name: "Docker",
    icon: SiDocker,
    area: "Containerization",
    description: "Portable builds, Dockerfiles, image lifecycle, and application packaging.",
    tone: "tone-teal",
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    area: "CI/CD",
    description: "Automated build and deployment pipelines triggered on code changes.",
    tone: "tone-teal",
  },
  {
    name: "Jenkins",
    icon: SiJenkins,
    area: "Automation",
    description: "Continuous integration concepts and repeatable release workflow design.",
    tone: "tone-amber",
  },
  {
    name: "Maven",
    icon: SiApachemaven,
    area: "Build Automation",
    description: "Dependency management, structured builds, and packaging support for Java-based pipelines.",
    tone: "tone-coral",
  },
  {
    name: "SonarQube",
    icon: SiSonarqubeserver,
    area: "Code Quality",
    description: "Static code analysis, quality gates, and code health checks inside delivery pipelines.",
    tone: "tone-amber",
  },
  {
    name: "Trivy",
    icon: SiTrivy,
    area: "Security Scanning",
    description: "Image and dependency vulnerability scanning to strengthen secure delivery workflows.",
    tone: "tone-coral",
  },
  {
    name: "Prometheus",
    icon: SiPrometheus,
    area: "Monitoring",
    description: "Metrics collection, service visibility, and observability foundations.",
    tone: "tone-coral",
  },
  {
    name: "Grafana",
    icon: SiGrafana,
    area: "Dashboards",
    description: "Readable dashboards, visualization, and operational insight reporting.",
    tone: "tone-amber",
  },
  {
    name: "Linux",
    icon: SiLinux,
    area: "Systems",
    description: "Linux administration across CentOS, Red Hat, shell usage, and server operations.",
    tone: "tone-mist",
  },
  {
    name: "Python",
    icon: SiPython,
    area: "Scripting",
    description: "Automation-oriented scripting support for tooling and operational tasks.",
    tone: "tone-coral",
  },
];

const stackTicker = [
  ...skills.map((skill) => skill.name),
  "Cloud",
  "Automation",
  "Observability",
  "IaC",
  "Reliability",
];

const projects = [
  {
    title: "Terraform 3-Tier Architecture on AWS",
    summary:
      "Designed a repeatable three-tier AWS architecture using Terraform for provisioning networking, compute, load balancing, and database resources.",
    tags: ["AWS", "Terraform", "VPC", "EC2", "ALB", "RDS"],
    url: "https://github.com/Ramayya325/3-Tire-Architecture-by-using-Terraform-in-AWS.git",
    bullets: [
      "Provisioned VPC, subnets, route tables, security groups, EC2, ALB, and RDS using Infrastructure as Code.",
      "Separated web, application, and database layers to reflect scalable cloud design practices.",
      "Validated infrastructure flow using Terraform plan and apply for consistent environment setup.",
    ],
  },
  {
    title: "AWS VPC Automation using Terraform",
    summary:
      "Built reusable Terraform configurations to automate AWS networking for public and private subnet architectures.",
    tags: ["AWS", "Terraform", "NAT Gateway", "Routing", "Security Groups"],
    url: "https://github.com/Ramayya325/Terraform-AWS-VPC-Project-.git",
    bullets: [
      "Created a custom VPC with both public and private subnets for controlled workload separation.",
      "Configured Internet Gateway, NAT Gateway, route tables, and security groups for secure connectivity.",
      "Improved consistency and reduced manual setup effort for core cloud networking components.",
    ],
  },
  {
    title: "Static Web Server Deployment on AWS",
    summary:
      "Configured an EC2 instance on AWS to host a static website with public accessibility, Linux-based setup, and deployment validation.",
    tags: ["AWS EC2", "Linux", "Elastic IP", "Web Hosting"],
    url: "https://github.com/Ramayya325/fully-automated-IAC-project.git",
    bullets: [
      "Set up a Linux-based web server on Amazon EC2 to host a static website.",
      "Enabled public access using security groups and Elastic IP configuration.",
      "Verified server availability through browser testing and command-line checks.",
    ],
  },
  {
    title: "React Application Containerization with CI/CD",
    summary:
      "Containerized a React application and automated build and deployment tasks using Docker and Jenkins.",
    tags: ["React", "Docker", "Jenkins", "AWS EC2"],
    url: "https://github.com/Ramayya325/java-ci.cd.git",
    bullets: [
      "Created a Dockerfile and packaged the application into a portable container image.",
      "Configured Jenkins-based CI/CD automation to build and deploy on push events.",
      "Strengthened practical understanding of container-based delivery pipelines and release workflows.",
    ],
  },
];

const timeline = [
  {
    period: "2025 — Present",
    title: "Cloud DevOps Engineer • Project-Based Experience",
    description:
      "Building practical cloud and DevOps projects around AWS provisioning, infrastructure automation, CI/CD, containerization, monitoring, and deployment reliability.",
  },
  {
    period: "2021 — 2025",
    title: "B.Tech • Srinivasa Institute of Engineering and Technology",
    description:
      "Completed Mechanical Engineering while actively transitioning into cloud engineering, Linux administration, and DevOps tooling.",
  },
  {
    period: "Continuous Growth",
    title: "Certification-Driven Upskilling",
    description:
      "Expanded foundations in networking, Linux, cybersecurity awareness, and AI-assisted tooling through continuous learning.",
  },
];

const education = [
  {
    title: "Srinivasa Institute of Engineering and Technology",
    subtitle: "B.Tech — Mechanical Engineering",
    meta: "2021 – 2025 • GPA: 7.54/10",
  },
  {
    title: "Sri Chaitanya Junior College",
    subtitle: "Board of Intermediate — MPC",
    meta: "2019 – 2021",
  },
  {
    title: "Bhashyam English Medium School",
    subtitle: "Secondary School Certificate (10th)",
    meta: "2017 – 2018 • GPA: 8.8/10",
  },
];

const certifications = [
  "CCNA — Cisco (via Besant Technologies)",
  "Linux Administration — Besant Technologies",
  "Certified Cybersecurity Educator Professional (CCEP) — Red Team Leaders",
  "Google AI for Anyone",
  "Google AI for JavaScript Developers (TensorFlow.js)",
];

const languages = ["Telugu — Native", "English — Professional working proficiency"];

const contacts = [
  {
    label: "Email",
    value: "nanihari505@gmail.com",
    href: "mailto:nanihari505@gmail.com?subject=Cloud%20DevOps%20Opportunity%20for%20Hari%20Ramayya",
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "+91 7893588359",
    href: "tel:+917893588359",
    icon: FaPhoneAlt,
  },
  {
    label: "GitHub",
    value: "github.com/ramayya325",
    href: "https://github.com/ramayya325",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mharamayya325",
    href: "https://www.linkedin.com/in/mharamayya325",
    icon: FaLinkedin,
  },
];

const pipelineNodes = [
  { label: "Code", icon: FaCodeBranch, top: "14%", left: "8%", tone: "node-coral" },
  { label: "Build", icon: SiJenkins, top: "14%", left: "38%", tone: "node-amber" },
  { label: "Container", icon: SiDocker, top: "40%", left: "26%", tone: "node-teal" },
  { label: "Deploy", icon: FaCloud, top: "40%", left: "62%", tone: "node-coral" },
  { label: "Observe", icon: SiPrometheus, top: "68%", left: "20%", tone: "node-amber" },
  { label: "Dashboards", icon: SiGrafana, top: "68%", left: "58%", tone: "node-teal" },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-3" data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display-font text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
      <p className="text-sm leading-6 text-slate-300 sm:text-base">{description}</p>
    </div>
  );
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell relative min-h-screen overflow-hidden text-slate-100">
      <div className="mesh-lines" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />

      <header className="relative z-20 mx-auto max-w-7xl px-6 pt-5">
        <nav className="glass-card frost-nav flex flex-col gap-3 rounded-full px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="display-font text-base font-semibold text-white sm:text-lg">
            Hari Ramayya
          </a>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto max-w-7xl scroll-mt-28 px-6 pb-14 pt-10 sm:pb-16 sm:pt-14">
          <div className="grid gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
            <div className="space-y-6">
              <div className="signal-pill w-fit" data-reveal>
                <HiMiniSparkles className="text-sm text-amber-200" />
                Cloud DevOps Engineer • Automation • Observability • AWS
              </div>

              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400 sm:text-sm" data-reveal>
                  Crafting reliable cloud workflows with infrastructure automation and delivery discipline
                </p>
                <h1 className="display-font max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-6xl" data-reveal>
                  Moganti Hari Achutya Ramayya
                  <span className="hero-accent mt-2 block">Cloud DevOps Engineer</span>
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg" data-reveal>
                  I design cloud-first systems using AWS, Terraform, Docker, GitHub Actions, Linux,
                  Prometheus, and Grafana — turning infrastructure work into scalable, automated, and
                  observable delivery pipelines.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 text-sm text-slate-100" data-reveal>
                <span className="micro-pill">Amalapuram, Andhra Pradesh</span>
                <span className="micro-pill">Open to Cloud DevOps Engineer roles</span>
                <span className="micro-pill">AWS • Terraform • Docker • CI/CD</span>
              </div>

              <div className="flex flex-wrap gap-4" data-reveal>
                <a href="#projects" className="cta-primary">
                  View Projects
                  <FaArrowRight />
                </a>
                <a href="#contact" className="cta-secondary">
                  Let&apos;s Connect
                </a>
              </div>

              <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4" data-reveal>
                {stats.map((item) => (
                  <div key={item.label} className="glass-card metric-card rounded-[1.35rem] p-4">
                    <p className="display-font text-2xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1.5 text-sm leading-5 text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" data-reveal>
              <div className="pipeline-board glass-card rounded-[1.7rem] p-4 sm:p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="eyebrow !text-[0.65rem]">Animated workflow</p>
                    <h2 className="display-font text-lg font-semibold text-white sm:text-xl">
                      Cloud delivery pipeline
                    </h2>
                  </div>
                  <div className="micro-pill text-[0.7rem]">live concept panel</div>
                </div>

                <div className="pipeline-canvas">
                  <div className="pipeline-track track-top" />
                  <div className="pipeline-track track-middle" />
                  <div className="pipeline-track track-bottom" />
                  <div className="packet packet-one" />
                  <div className="packet packet-two" />
                  <div className="packet packet-three" />

                  {pipelineNodes.map((node, index) => {
                    const Icon = node.icon;
                    return (
                      <div
                        key={node.label}
                        className={`pipeline-node ${node.tone}`}
                        style={{ top: node.top, left: node.left, animationDelay: `${index * 0.3}s` }}
                      >
                        <Icon />
                        <span>{node.label}</span>
                      </div>
                    );
                  })}

                  <div className="terminal-mini terminal-a">
                    <span className="terminal-title">iac</span>
                    terraform apply
                  </div>
                  <div className="terminal-mini terminal-b">
                    <span className="terminal-title">container</span>
                    docker build .
                  </div>
                  <div className="terminal-mini terminal-c">
                    <span className="terminal-title">monitor</span>
                    prometheus = up
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-12 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeading
              eyebrow="About"
              title="A cloud-focused portfolio with a more original visual identity"
              description="Instead of using the common neon-portfolio style, this design uses a refined obsidian theme with teal, amber, and copper accents plus pipeline-inspired motion to reflect DevOps work more naturally."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <article
                    key={area.title}
                    className="glass-card focus-card rounded-[1.45rem] p-5"
                    data-reveal
                    style={{ transitionDelay: `${index * 110}ms` }}
                  >
                    <div className="skill-icon tone-amber mb-4">
                      <Icon />
                    </div>
                    <h3 className="display-font text-lg font-semibold text-white">{area.title}</h3>
                    <p className="mt-2.5 text-sm leading-6 text-slate-300">{area.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-12 sm:py-14">
          <SectionHeading
            eyebrow="Skills"
            title="Icon-led cloud and DevOps skill stack"
            description="Your skill stack now has its own motion system — a flowing tool ticker, animated orbit halos, and staggered card movement that makes the technologies feel active instead of static."
          />

          <div className="skill-stack-shell glass-card mt-8 rounded-[1.7rem] p-4 sm:p-5" data-reveal>
            <div className="skill-stack-marquee" aria-hidden="true">
              <div className="skill-stack-lane">
                {[...stackTicker, ...stackTicker].map((item, index) => (
                  <span key={`${item}-${index}`} className="stack-token">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="skill-stack-grid mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <article
                    key={skill.name}
                    className="glass-card skill-card rounded-[1.45rem] p-5"
                    data-reveal
                    style={{
                      transitionDelay: `${index * 70}ms`,
                      ["--skill-delay" as any]: `${index * 0.34}s`,
                    }}
                  >
                    <span className="skill-beam" aria-hidden="true" />
                    <div className="flex items-start justify-between gap-3">
                      <div className="skill-visual" aria-hidden="true">
                        <span className="skill-orbit orbit-one" />
                        <span className="skill-orbit orbit-two" />
                        <span className="skill-ping ping-a" />
                        <span className="skill-ping ping-b" />
                        <div className={`skill-icon ${skill.tone}`}>
                          <Icon />
                        </div>
                      </div>
                      <span className={`inline-flex rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${skill.tone}`}>
                        {skill.area}
                      </span>
                    </div>
                    <h3 className="display-font mt-4 text-xl font-semibold text-white">{skill.name}</h3>
                    <p className="mt-2.5 text-sm leading-6 text-slate-300">{skill.description}</p>
                    <div className="skill-signal mt-4">
                      <span className="signal-dot" />
                      <span>active in cloud toolkit</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-12 sm:py-14">
          <SectionHeading
            eyebrow="Projects"
            title="Hands-on work across AWS, Terraform, Kubernetes, Docker, and CI/CD"
            description="These project cards are presented with a command-line inspired layout to make the portfolio feel closer to real platform engineering work rather than a standard personal site." 
          />

          <div className="mt-8 grid gap-5 xl:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="glass-card project-card overflow-hidden rounded-[1.6rem]"
                data-reveal
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="terminal-bar px-5 py-3.5">
                  <span className="dot bg-[#ff7d57]" />
                  <span className="dot bg-[#ffb454]" />
                  <span className="dot bg-[#58e1c1]" />
                  <span className="ml-3 text-[0.65rem] uppercase tracking-[0.28em] text-slate-400">project workflow</span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="display-font text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.url && (
                    <div className="mt-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-teal-300 hover:text-teal-200 transition-colors"
                      >
                        <FaGithub className="text-xs" />
                        View Repository
                      </a>
                    </div>
                  )}

                  <ul className="feature-list mt-5 space-y-2.5 text-sm leading-6 text-slate-300">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-12 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Journey"
              title="Learning path, education, certifications, and strengths"
              description="This section brings together your transition into cloud DevOps engineering, your academic background, and the certifications that support your professional direction."
            />

            <div className="space-y-5">
              <div className="glass-card rounded-[1.6rem] p-5 sm:p-6" data-reveal>
                <div className="timeline-wrap space-y-6">
                  {timeline.map((item) => (
                    <article key={item.title} className="timeline-entry">
                      <span className="timeline-dot" />
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-200/80">{item.period}</p>
                      <h3 className="display-font mt-1.5 text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-2.5 text-sm leading-6 text-slate-300">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 xl:grid-cols-2">
                <div className="glass-card edu-card rounded-[1.6rem] p-5 sm:p-6" data-reveal>
                  <p className="eyebrow">Education</p>
                  <div className="mt-4 space-y-4">
                    {education.map((item) => (
                      <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                        <h3 className="display-font text-base font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm text-slate-300">{item.subtitle}</p>
                        <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.2em] text-slate-400">{item.meta}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="glass-card cert-card rounded-[1.6rem] p-5 sm:p-6" data-reveal>
                    <p className="eyebrow">Certifications</p>
                    <ul className="mt-4 space-y-2.5 text-sm leading-6 text-slate-300">
                      {certifications.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-[0.45rem] h-2.5 w-2.5 rounded-full bg-[#ffb454] shadow-[0_0_18px_rgba(255,180,84,0.5)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="glass-card rounded-[1.6rem] p-5 sm:p-6" data-reveal>
                    <p className="eyebrow">Languages</p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {languages.map((item) => (
                        <span key={item} className="tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-12 sm:py-14">
          <div className="glass-card rounded-[1.7rem] p-5 sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-4" data-reveal>
                <p className="eyebrow">Contact</p>
                <h2 className="display-font text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Ready for cloud, DevOps, and infrastructure-focused opportunities
                </h2>
                <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                  If you are hiring for a Cloud DevOps Engineer role, I would love to contribute to
                  infrastructure automation, CI/CD workflows, deployment reliability, and monitoring-focused delivery.
                </p>
                <a
                  href="mailto:nanihari505@gmail.com?subject=Cloud%20DevOps%20Opportunity%20for%20Hari%20Ramayya"
                  className="cta-primary"
                >
                  Start a Conversation
                  <FaArrowRight />
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {contacts.map((item, index) => {
                  const Icon = item.icon;
                  const content = (
                    <div
                      className="contact-card h-full rounded-[1.25rem] p-4"
                      data-reveal
                      style={{ transitionDelay: `${index * 90}ms` }}
                    >
                      <div className="skill-icon tone-teal mb-3">
                        <Icon />
                      </div>
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">{item.label}</p>
                      <p className="mt-2.5 break-all text-sm font-medium text-white sm:text-[0.95rem]">{item.value}</p>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <a key={item.label} href={item.href} className="block">
                        {content}
                      </a>
                    );
                  }

                  return <div key={item.label}>{content}</div>;
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-2">
        <p className="footer-note text-center text-sm text-slate-500">
          Designed & developed by Moganti Hari Achutya Ramayya — Cloud DevOps Engineer.
        </p>
      </footer>
    </div>
  );
}

export default App;
