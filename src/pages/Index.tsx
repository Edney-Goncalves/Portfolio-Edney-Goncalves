
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Moon, Sun, Download, ExternalLink } from 'lucide-react';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python",
    "HTML/CSS", "Git", "SQL", "AWS", "Docker"
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma de e-commerce completa com React e Node.js",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com drag & drop",
      tech: ["React", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard de clima com visualização de dados em tempo real",
      tech: ["JavaScript", "API", "Chart.js"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">João Silva</h1>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              JS
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Desenvolvedor <span className="text-primary">Full Stack</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transformo ideias em soluções digitais. Especializado em React, Node.js e tecnologias modernas para criar experiências web incríveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Mail className="mr-2 h-5 w-5" />
                Entre em Contato
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Sou um desenvolvedor apaixonado por tecnologia com mais de 3 anos de experiência 
                criando aplicações web modernas e eficientes. Minha jornada começou com curiosidade 
                sobre como funcionam os sites, e hoje transformo ideias complexas em soluções digitais elegantes.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Especializo-me em desenvolvimento full stack, com foco especial em React para o frontend 
                e Node.js para o backend. Adoro trabalhar em equipe e estou sempre aprendendo novas tecnologias.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projetos Concluídos</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">Anos de Experiência</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">20+</div>
                  <div className="text-muted-foreground">Clientes Satisfeitos</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Habilidades</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-lg px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Projetos em Destaque</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Vamos Trabalhar Juntos?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Estou sempre aberto a discutir novas oportunidades e projetos interessantes. 
            Entre em contato e vamos criar algo incrível!
          </p>
          <Button size="lg" className="text-lg px-8">
            <Mail className="mr-2 h-5 w-5" />
            joao.silva@email.com
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-4 mb-4">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-muted-foreground">
            © 2024 João Silva. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
