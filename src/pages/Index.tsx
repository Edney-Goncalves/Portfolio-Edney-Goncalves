{/* Importação das bibliotecas */}
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Moon, Sun, Download, ExternalLink } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Whatsapp } from "lucide-react";


{/* Lógica do botão dark/white */}
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

  {/* Definição das Habilidades/conhecimentos */}
  const skills = [
    "Pythont", "Postgre", "HTML5/CSS3", "Git/GitHub"
  ];

  {/* Definição dos Projetos em Destaque */}
  const projects = [
    {
      title: "Pousada",
      description: "Aplicação desenvolvida para checkin/checkout de hóspedes num hotel, onde apliquei meus conhecimentos em CRUD",
      tech: ["Python"],
      link: "https://github.com/Edney-Goncalves/projeto_pousada"
    },
    {
      title: "Login",
      description: "Sistema de login, para cadastro de usuário e senha. O intuito foi praticar sistemáticas de segurança e armazenamento de dados sensíveis.",
      tech: ["HTML", "CSS", "Python", "Json"],
      link: "https://github.com/Edney-Goncalves/login"
    },
  ];

  {/* Renderização do componente principal */}
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    
    {/* Nome que volta ao topo */}
    <a href="#" className="text-2xl font-bold text-muted-foreground px-4 py-2 rounded-md transition-colors hover:bg-muted hover:text-foreground">
      Edney Gonçalves
    </a>

    {/* Menu centralizado */}
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


    {/* Botão de modo escuro */}
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


      {/* Seção foto do perfil */}
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
              Bem vindo ao meu <span className="text-primary">Portfólio!</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estudante de Engenharia de Software | Python | Back-end | SQL | PostgreSQL | Git | GitHub 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5511959209860" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8">
                  <Whatsapp className="mr-2 h-5 w-5" />
                    Fale comigo
                  </Button>
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

      {/* Sobre mim */}
      <section id="sobre" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre mim</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Sou estudante de Engenharia de Software, porém já tenho uma experiência de mais de 8 anos na área industrial, o que me proporcionou muito conhecimento e habilidade em lidar com pessoas.
                <br/>
                <br/>
                Acredito que a minha função enquanto programador vai além das competências técnicas em si. É sobre alcançar pessoas e facilitar o acesso delas, seja a um app de compras ou, até mesmo, um site notícias.
                <br/>
                <br/>
                Atualmente estou em busca de oportunidades em estágio para iniciar oficialmente no mercado de trabalho como desenvolvedor. Se você gostar do meu perfil e quiser me contatar, meus endereços estão disponíveis aqui.
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/Edney-Goncalves" target='_blank' rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/edney-gon%C3%A7alves10/" target='_blank' rel="noopener noreferrer">
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

      {/* Seção de habilidades */}
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

      {/* Seção de projetos */}
      <section id="projetos" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Projetos em Destaque</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                    </CardTitle>
                    <CardDescription>
                      {project.description}
                    </CardDescription>
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


      {/* Seção de contatos */}
      <section id="contato"className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Vamos Trabalhar Juntos?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Gostou dos projetos? Então ajude este estudante, dando uma oportunidade de iniciar na área😉 Entre em contato comigo.
          </p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=developer.edney@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              developer.edney@gmail.com
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://github.com/Edney-Goncalves" target='_blank' rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/edney-gon%C3%A7alves10/" target='_blank' rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=developer.edney@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
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
