import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Moon, Sun, Download, MessageCircle } from "lucide-react";
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
    "Python", "PostgreSQL", "HTML5/CSS3", "Git/GitHub"
  ];

  const projects = [
    {
      title: "Pousada",
      description: "Aplicação desenvolvida para checkin/checkout de hóspedes num hotel, onde apliquei meus conhecimentos em CRUD.",
      tech: ["Python"],
      link: "https://github.com/Edney-Goncalves/projeto_pousada"
    },
    {
      title: "Login",
      description: "Sistema de login com cadastro de usuário e senha, praticando segurança e armazenamento de dados sensíveis.",
      tech: ["HTML", "CSS", "Python", "JSON"],
      link: "https://github.com/Edney-Goncalves/login"
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-muted-foreground px-4 py-2 rounded-md transition-colors hover:bg-muted hover:text-foreground">
            Edney Gonçalves
          </a>

          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-12 text-lg">
            <a href="#sobre" className="font-medium text-muted-foreground px-4 py-2 rounded-md transition-colors hover:bg-muted hover:text-foreground">
              Sobre
            </a>
            <a href="#projetos" className="font-medium text-muted-foreground px-4 py-2 rounded-md transition-colors hover:bg-muted hover:text-foreground">
              Projetos
            </a>
            <a href="#contato" className="font-medium text-muted-foreground px-4 py-2 rounded-md transition-colors hover:bg-muted hover:text-foreground">
              Contato
            </a>
          </nav>

          <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <section className="pt-20 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <Avatar className="w-32 h-32 mx-auto mb-6">
              <AvatarImage src="/edney_foto.jpg" alt="Edney Gonçalves" />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-4xl font-bold">
                EG
              </AvatarFallback>
            </Avatar>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Bem vindo ao meu <span className="text-primary">Portfólio!</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estudante de Engenharia de Software | Python | Back-end | SQL | PostgreSQL | Git | GitHub
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5511959209860" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Fale comigo
                </Button>
              </a>

              <a href="/EdneyGoncalves_CV.pdf" download>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre mim</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Sou estudante de Engenharia de Software, mas trouxe comigo mais de 8 anos de experiência na área industrial, onde desenvolvi habilidades fortes de comunicação, liderança e resolução de problemas.
                <br /><br />
                Acredito que ser programador é muito mais do que escrever código: é criar soluções que impactam positivamente o dia a dia das pessoas.
                <br /><br />
                Atualmente busco minha primeira oportunidade como estagiário em desenvolvimento. Caso tenha interesse no meu perfil, abaixo deixo meus contatos:
              </p>

              <div className="flex gap-4">
                <a href="https://github.com/Edney-Goncalves" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>

                <a href="https://www.linkedin.com/in/edney-gon%C3%A7alves10/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">8+</div>
                  <div className="text-muted-foreground">Anos de Experiência Industrial</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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

      <section id="projetos" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Projetos em Destaque</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
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
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Vamos Trabalhar Juntos?</h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Gostou dos projetos? Então ajude este estudante dando uma oportunidade de iniciar na área
            Entre em contato comigo!
          </p>

          <a href="mailto:developer.edney@gmail.com">
            <Button size="lg" className="text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              developer.edney@gmail.com
            </Button>
          </a>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://github.com/Edney-Goncalves" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>

            <a href="https://www.linkedin.com/in/edney-gon%C3%A7alves10/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>

            <a href="mailto:developer.edney@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>

          <p className="text-muted-foreground">© 2025 Edney Gonçalves. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;