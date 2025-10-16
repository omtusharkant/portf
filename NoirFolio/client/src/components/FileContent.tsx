import { FileItem } from "@shared/schema";
import { Home, ExternalLink, Mail, Linkedin, Github, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FileContentProps {
  file: FileItem | null;
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.3,
  ease: "easeInOut",
};

export function FileContent({ file }: FileContentProps) {
  if (!file) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
        <Home className="w-16 h-16 mb-4 opacity-50" />
        <p className="text-sm font-mono">Select a file to view its content</p>
      </div>
    );
  }

  const renderContent = () => {
    switch (file.id) {
      case "hero":
        return (
          <motion.div
            key="hero"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="flex flex-col items-center justify-center h-full px-8 text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="text-5xl font-bold font-mono mb-4 gradient-text"
            >
              Portfolio Explorer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="text-xl text-muted-foreground font-mono mb-8 max-w-2xl"
            >
              Navigate through folders to explore my projects, experience, skills, and contact information
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="flex gap-4 text-sm text-muted-foreground font-mono"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 p-3 rounded glossy-card"
              >
                <span className="text-[#FFD700]">📁</span>
                Click folders to expand
              </motion.span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 p-3 rounded glossy-card"
              >
                <span className="text-primary">📄</span>
                Click files to view
              </motion.span>
            </motion.div>
          </motion.div>
        );

      case "project1":
      case "project2":
      case "project3":
        const projectData = parseProjectContent(file.content);
        return (
          <motion.div
            key={file.id}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="h-full overflow-auto p-8"
          >
            <Card className="max-w-4xl mx-auto glossy-card glow-effect">
              <CardHeader>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <CardTitle className="text-2xl font-mono gradient-text">{projectData.title}</CardTitle>
                  <CardDescription className="font-mono">{projectData.subtitle}</CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold font-mono mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {projectData.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground font-mono flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold font-mono mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="font-mono">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold font-mono mb-3">Highlights</h3>
                  <ul className="space-y-2">
                    {projectData.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground font-mono flex items-start gap-2">
                        <span className="text-[#FFD700]">★</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {projectData.links.length > 0 && (
                  <div className="flex gap-3 pt-4">
                    {projectData.links.map((link, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-sm text-primary font-mono flex items-center gap-1 px-4 py-2 rounded glossy-button"
                        data-testid={`link-${link.toLowerCase().replace(' ', '-')}`}
                      >
                        <ExternalLink className="w-3 h-3" />
                        {link}
                      </motion.a>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        );

      case "exp1":
      case "exp2":
      case "exp3":
        const expData = parseExperienceContent(file.content);
        return (
          <motion.div
            key={file.id}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="h-full overflow-auto p-8"
          >
            <Card className="max-w-4xl mx-auto glossy-card glow-effect">
              <CardHeader>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <CardTitle className="text-2xl font-mono gradient-text">{expData.title}</CardTitle>
                  <CardDescription className="font-mono">{expData.company}</CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold font-mono mb-3">Responsibilities</h3>
                  <ul className="space-y-2">
                    {expData.responsibilities.map((resp, i) => (
                      <li key={i} className="text-sm text-muted-foreground font-mono flex items-start gap-2">
                        <span className="text-primary">→</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold font-mono mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {expData.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground font-mono flex items-start gap-2">
                        <span className="text-[#FFD700]">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {expData.technologies.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold font-mono mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {expData.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="font-mono">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        );

      case "skills-frontend":
      case "skills-backend":
      case "skills-design":
      case "skills-other":
        const skillsData = parseSkillsContent(file.content);
        return (
          <motion.div
            key={file.id}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="h-full overflow-auto p-8"
          >
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-2xl font-bold font-mono mb-6 gradient-text"
              >
                {skillsData.title}
              </motion.h2>
              <div className="grid gap-6">
                {skillsData.categories.map((category, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  >
                    <Card className="glossy-card">
                      <CardHeader>
                        <CardTitle className="text-lg font-mono">{category.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {category.items.map((item, j) => (
                            <motion.div
                              key={j}
                              whileHover={{ scale: 1.1, rotate: 2 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge variant="secondary" className="font-mono">{item}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case "contact-info":
        const contactData = parseContactContent(file.content);
        return (
          <motion.div
            key={file.id}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="flex flex-col items-center justify-center h-full px-8"
          >
            <Card className="max-w-2xl w-full glossy-card glow-effect">
              <CardHeader>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <CardTitle className="text-2xl font-mono text-center gradient-text">Get In Touch</CardTitle>
                  <CardDescription className="font-mono text-center">
                    Let's connect and discuss opportunities
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactData.email && (
                  <motion.a
                    href={`mailto:${contactData.email}`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-3 rounded glossy-button"
                    data-testid="link-email"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-mono text-sm">{contactData.email}</span>
                  </motion.a>
                )}
                {contactData.linkedin && (
                  <motion.a
                    href={contactData.linkedin}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-3 rounded glossy-button"
                    data-testid="link-linkedin"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                    <span className="font-mono text-sm">{contactData.linkedin}</span>
                  </motion.a>
                )}
                {contactData.github && (
                  <motion.a
                    href={contactData.github}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-3 rounded glossy-button"
                    data-testid="link-github"
                  >
                    <Github className="w-5 h-5 text-primary" />
                    <span className="font-mono text-sm">{contactData.github}</span>
                  </motion.a>
                )}
                {contactData.website && (
                  <motion.a
                    href={contactData.website}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-3 rounded glossy-button"
                    data-testid="link-website"
                  >
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="font-mono text-sm">{contactData.website}</span>
                  </motion.a>
                )}
                {contactData.location && (
                  <div className="text-center pt-4 text-sm text-muted-foreground font-mono">
                    📍 {contactData.location}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        );

      case "contact-resume":
        return (
          <motion.div
            key={file.id}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="flex flex-col items-center justify-center h-full px-8"
          >
            <Card className="max-w-2xl w-full glossy-card glow-effect">
              <CardHeader>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <CardTitle className="text-2xl font-mono text-center gradient-text">Download Resume</CardTitle>
                  <CardDescription className="font-mono text-center">
                    Get a copy of my full resume
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded glossy-button text-center"
                    data-testid="button-download-pdf"
                  >
                    <div className="text-sm font-mono">PDF</div>
                    <div className="text-xs text-muted-foreground font-mono mt-1">Download</div>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded glossy-button text-center"
                    data-testid="button-download-docx"
                  >
                    <div className="text-sm font-mono">DOCX</div>
                    <div className="text-xs text-muted-foreground font-mono mt-1">Download</div>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 rounded glossy-button text-center"
                    data-testid="button-download-txt"
                  >
                    <div className="text-sm font-mono">TXT</div>
                    <div className="text-xs text-muted-foreground font-mono mt-1">Download</div>
                  </motion.button>
                </div>
                <div className="text-center text-sm text-muted-foreground font-mono pt-4">
                  Last Updated: October 2025
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );

      default:
        return (
          <motion.div
            key={file.id}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="h-full flex flex-col"
          >
            <div className="flex items-center h-12 px-6 border-b border-border flex-shrink-0">
              <h2 className="text-sm font-semibold text-foreground font-mono">
                {file.name}
              </h2>
            </div>
            <div className="p-6 overflow-auto flex-1">
              <div className="text-sm text-foreground font-mono whitespace-pre-wrap leading-relaxed max-w-4xl">
                {file.content}
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <AnimatePresence mode="wait">
      {renderContent()}
    </AnimatePresence>
  );
}

function parseProjectContent(content: string) {
  const lines = content.split('\n');
  const title = lines[0].replace('# ', '');
  const subtitle = lines[2] || '';
  
  const features: string[] = [];
  const technologies: string[] = [];
  const highlights: string[] = [];
  const links: string[] = [];
  
  let section = '';
  lines.forEach(line => {
    if (line.startsWith('## Key Features')) section = 'features';
    else if (line.startsWith('## Technologies')) section = 'tech';
    else if (line.startsWith('## Highlights')) section = 'highlights';
    else if (line.startsWith('## Live Demo') || line.startsWith('## Source')) section = 'links';
    else if (line.startsWith('- ') && section === 'features') features.push(line.substring(2));
    else if (line.startsWith('- ') && section === 'highlights') highlights.push(line.substring(2));
    else if (section === 'tech' && line.trim() && !line.startsWith('##')) {
      technologies.push(...line.split('•').map(t => t.trim()).filter(Boolean));
    }
    else if (section === 'links' && line.includes(':')) {
      links.push(line.split(':')[0].replace('##', '').trim());
    }
  });
  
  return { title, subtitle, features, technologies, highlights, links };
}

function parseExperienceContent(content: string) {
  const lines = content.split('\n');
  const title = lines[0].replace('# ', '').split('\n')[0];
  const company = lines[1] || '';
  
  const responsibilities: string[] = [];
  const achievements: string[] = [];
  const technologies: string[] = [];
  
  let section = '';
  lines.forEach(line => {
    if (line.startsWith('## Responsibilities')) section = 'resp';
    else if (line.startsWith('## Key Achievements')) section = 'achieve';
    else if (line.startsWith('## Technologies')) section = 'tech';
    else if (line.startsWith('- ') && section === 'resp') responsibilities.push(line.substring(2));
    else if (line.startsWith('- ') && section === 'achieve') achievements.push(line.substring(2));
    else if (section === 'tech' && line.trim() && !line.startsWith('##')) {
      technologies.push(...line.split('•').map(t => t.trim()).filter(Boolean));
    }
  });
  
  return { title, company, responsibilities, achievements, technologies };
}

function parseSkillsContent(content: string) {
  const lines = content.split('\n');
  const title = lines[0].replace('# ', '');
  
  const categories: { name: string; items: string[] }[] = [];
  let currentCategory = '';
  
  lines.forEach(line => {
    if (line.startsWith('## ')) {
      currentCategory = line.replace('## ', '');
      categories.push({ name: currentCategory, items: [] });
    } else if (line.startsWith('- ') && currentCategory) {
      const item = line.substring(2).split('⭐')[0].trim();
      categories[categories.length - 1].items.push(item);
    } else if (line.trim() && !line.startsWith('#') && currentCategory && line.includes('•')) {
      const items = line.split('•').map(t => t.trim()).filter(Boolean);
      categories[categories.length - 1].items.push(...items);
    }
  });
  
  return { title, categories };
}

function parseContactContent(content: string) {
  const lines = content.split('\n');
  let email = '';
  let linkedin = '';
  let github = '';
  let website = '';
  let location = '';
  
  lines.forEach(line => {
    if (line.includes('@') && !line.startsWith('#')) email = line.trim();
    else if (line.includes('linkedin.com')) linkedin = line.replace('LinkedIn:', '').trim();
    else if (line.includes('github.com')) github = line.replace('GitHub:', '').trim();
    else if (line.includes('www.')) website = line.replace('Portfolio Website:', '').replace('Portfolio:', '').trim();
    else if (line.includes('Location:')) location = lines[lines.indexOf(line) + 1]?.trim() || '';
  });
  
  return { email, linkedin, github, website, location };
}
