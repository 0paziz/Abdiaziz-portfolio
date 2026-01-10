import { BlurFade } from "./components/BlurFade";
import { Dock, DockIcon } from "./components/Dock";
import { ProjectCard } from "./components/ProjectCard";
import { ResumeCard } from "./components/ResumeCard";
import { ThemeToggle } from "./components/ThemeToggle";
import { DATA } from "./data/constants";
import { Github, Globe, Home, Linkedin, Mail, Pencil, Twitter, ExternalLink } from "lucide-react";

const ICONS = {
  Home: Home,
  Pencil: Pencil,
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
  Mail: Mail,
  Globe: Globe,
  ExternalLink: ExternalLink // Fallback
};

export default function App() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 py-10 px-6 sm:px-10 font-sans max-w-2xl mx-auto mb-20">
      
      {/* Hero Section */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFade delay={0.125} inView>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm {DATA.name.split(" ")[0]}
                </h1>
              </BlurFade>
              <BlurFade delay={0.175} inView>
                <p className="max-w-[600px] text-zinc-500 text-sm md:text-xl/relaxed dark:text-zinc-400">
                  {DATA.description}
                </p>
              </BlurFade>
            </div>
            <BlurFade delay={0.25} inView>
               <img
                src={DATA.avatarUrl}
                alt={DATA.name}
                className="rounded-full h-28 w-28 md:h-32 md:w-32 object-cover border border-zinc-200 dark:border-zinc-800"
              />
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <BlurFade delay={0.5} inView>
          <div className="space-y-3">
            <h2 className="text-xl font-bold">About</h2>
            <div className="prose max-w-full text-pretty font-sans text-sm text-zinc-500 dark:text-zinc-400">
              <p>{DATA.summary}</p>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Work Experience */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={0.3} inView>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={0.65 + id * 0.05} inView>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={0.35} inView>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((edu, id) => (
            <BlurFade key={edu.school} delay={0.75 + id * 0.05} inView>
               <ResumeCard
                logoUrl={edu.logoUrl}
                altText={edu.school}
                title={edu.school}
                subtitle={edu.degree}
                href={edu.href}
                period={`${edu.start} - ${edu.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={0.8} inView>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={0.85 + id * 0.05} inView>
                <div className="bg-zinc-900 text-white dark:bg-white dark:text-black px-3 py-1 text-xs rounded-full font-medium">
                  {skill}
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={0.9} inView>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-zinc-500">
                  Side projects and applications I’ve built while learning and improving as a developer
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mx-auto w-full max-w-[800px]">
            {DATA.projects.map((project, id) => (
              <BlurFade key={project.title} delay={0.95 + id * 0.05} inView>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links.map(link => ({
                    ...link,
                    icon: (() => {
                      const Icon = ICONS[link.icon] || ExternalLink;
                      return <Icon className="h-4 w-4" />;
                    })()
                  }))}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={1.0} inView>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-zinc-100 dark:bg-zinc-800 px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Feel free to connect with me on social media. Keep building. Keep growing. Let's connect over socials!
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      
      {/* Dock / Navigation */}
      <div className="fixed bottom-5 inset-x-0 z-50 mx-auto w-max h-max pointer-events-none">
        <div className="pointer-events-auto">
             <Dock className="z-50 pointer-events-auto relative">
                {DATA.navbar.filter(item => item.navbar).map((item) => {
                  const Icon = ICONS[item.icon] || Home;
                  return (
                    <DockIcon key={item.label}>
                       <a href={item.href} aria-label={item.label}>
                         <Icon className="size-6 text-zinc-800 dark:text-zinc-100" />
                       </a>
                    </DockIcon>
                  );
                })}
                <div className="border-l border-zinc-200 dark:border-zinc-800 mx-1 h-full w-[1px]" />
                <div className="flex items-center justify-center px-2">
                   {Object.entries(DATA.contact.social).filter(([_, social]) => social.navbar).map(([name, social]) => {
                     const Icon = ICONS[social.icon] || Github;
                     return (
                        <DockIcon key={name}>
                          <a href={social.url} aria-label={social.name}>
                            <Icon className="size-6 text-zinc-800 dark:text-zinc-100" />
                          </a>
                        </DockIcon>
                     );
                   })}
                </div>
                <div className="border-l border-zinc-200 dark:border-zinc-800 mx-1 h-full w-[1px]" />
                <div className="flex items-center justify-center h-full px-2">
                  <ThemeToggle />
                </div>
             </Dock>
        </div>
      </div>
    </main>
  );
}
