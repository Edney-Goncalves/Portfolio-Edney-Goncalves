
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Moon, Sun, Download, ExternalLink } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


const Index = () => {
  const [darkMode, setDarkMode] = useState(true);

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
          <h1 className="text-2xl font-bold">Edney Gonçalves</h1>
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
            <Avatar className="w-32 h-32 mx-auto mb-6">
              <AvatarImage src="/edney_foto.jpg" alt="Edney Gonçalves" />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-4xl font-bold">
              EG
              </AvatarFallback>
            </Avatar>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Desenvolvedor <span className="text-primary">Back-end</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transformo ideias em realidade. Especializado em Javascript, Node.js e Solidity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=developer.edney@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8">
                  <Mail className="mr-2 h-5 w-5" />Entre em Contato</Button>
              </a>

              <a href="/EdneyGoncalves_CV.pdf" download>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Download className="mr-2 h-5 w-5" />Download CV
                </Button>
              </a>

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
                Sou estudante de Engenharia de Software, proativo e movido pela paixão por tecnologias emergentes — especialmente blockchain. Com mais de 3 anos de experiência prática no desenvolvimento de aplicações web modernas, transformo ideias em soluções digitais eficientes e escaláveis.
                Minha trajetória começou com a curiosidade sobre o funcionamento da web, evoluindo para projetos robustos que combinam criatividade com código limpo. Atuo como desenvolvedor back-end, com domínio em JavaScript, Node.js no back-end e foco em experiências dinâmicas no frontend. Além disso, exploro o universo da Web3 com desenvolvimento de contratos inteligentes em Solidity.
                Trabalhar em equipe, aprender continuamente e aplicar tecnologia para resolver problemas reais são os pilares que guiam meu dia a dia como desenvolvedor.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Estou me especializando em desenvolvimento back-end, com foco em plataformas descentralizadas, utilizando Solidity para criação de contratos inteligentes. Atualmente estou me aprofundando em TypeScript.</p>
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
                  <div className="text-2xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">Projetos Concluídos</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">2+</div>
                  <div className="text-muted-foreground">Anos de Experiência</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">3+</div>
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
            Entre em contato e vamos desenvolver nosso dApp!!
          </p>
          <Button size="lg" className="text-lg px-8">
            <Mail className="mr-2 h-5 w-5" />
            developer.edney@gmail.com
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
            © 2025 Edney Gonçalves. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
