import { Bot, ExternalLink, Github, Star, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const chatbots = [
    {
      id: 1,
      name: "CodeHelper AI",
      description: "Un asistente de programación que ayuda con código en múltiples lenguajes",
      category: "Desarrollo",
      users: "2.5k",
      rating: 4.8,
      link: "https://chat.openai.com/g/g-example1",
      featured: true,
    },
    {
      id: 2,
      name: "EspañolBot",
      description: "Tutor de español conversacional con ejercicios interactivos",
      category: "Educación",
      users: "1.8k",
      rating: 4.9,
      link: "https://chat.openai.com/g/g-example2",
      featured: false,
    },
    {
      id: 3,
      name: "RecipeGenius",
      description: "Genera recetas personalizadas basadas en ingredientes disponibles",
      category: "Cocina",
      users: "3.2k",
      rating: 4.7,
      link: "https://chat.openai.com/g/g-example3",
      featured: true,
    },
    {
      id: 4,
      name: "FitnessCoach AI",
      description: "Entrenador personal virtual con rutinas personalizadas",
      category: "Salud",
      users: "1.5k",
      rating: 4.6,
      link: "https://chat.openai.com/g/g-example4",
      featured: false,
    },
    {
      id: 5,
      name: "StoryWeaver",
      description: "Crea historias interactivas y cuentos personalizados",
      category: "Entretenimiento",
      users: "2.1k",
      rating: 4.8,
      link: "https://chat.openai.com/g/g-example5",
      featured: false,
    },
    {
      id: 6,
      name: "BusinessAnalyst",
      description: "Analiza datos de negocio y genera insights estratégicos",
      category: "Negocios",
      users: "900",
      rating: 4.5,
      link: "https://chat.openai.com/g/g-example6",
      featured: true,
    },
  ]

  const featuredBots = chatbots.filter((bot) => bot.featured)
  const allBots = chatbots

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">hihihoho AI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Explorar
              </Button>
              <Button variant="ghost" size="sm">
                Categorías
              </Button>
              
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <Bot className="h-20 w-20 text-primary relative z-10" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Descubre Chatbots
            <span className="text-primary"> Increíbles</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explora una colección curada de chatbots de IA creados para resolver problemas reales. Desde asistentes de
            código hasta tutores personalizados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              <Zap className="h-5 w-5 mr-2" />
              Explorar Chatbots
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Ver Destacados
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <div className="text-muted-foreground">Chatbots Únicos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">12k+</div>
              <div className="text-muted-foreground">Usuarios Activos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.7★</div>
              <div className="text-muted-foreground">Calificación Promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Chatbots */}
      

      {/* All Chatbots */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Todos los Chatbots</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explora toda nuestra colección de chatbots especializados
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBots.map((bot) => (
              <Card
                key={bot.id}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-6 w-6 text-primary" />
                      <Badge variant="outline" className="text-xs">
                        {bot.category}
                      </Badge>
                    </div>
                    {bot.featured && <Badge className="bg-accent text-accent-foreground">Destacado</Badge>}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{bot.name}</CardTitle>
                  <CardDescription className="text-sm">{bot.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{bot.users}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current text-yellow-500" />
                        <span>{bot.rating}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    variant="outline"
                    asChild
                  >
                    <a href={bot.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Probar Chatbot
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Bot className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">hihihoho AI</span>
          </div>
          <p className="text-muted-foreground mb-4">Descubre el futuro de la inteligencia artificial</p>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="sm">
              Sobre Nosotros
            </Button>
            <Button variant="ghost" size="sm">
              Contacto
            </Button>
            
          </div>
        </div>
      </footer>
    </div>
  )
}
