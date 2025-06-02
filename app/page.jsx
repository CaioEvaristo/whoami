import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const HomePage = () => {
  return (
    <main className="h-full" role="main">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl font-semibold" role="text">Web Developer</span>
            <h1 className="h1">
              Olá, eu sou <br />
              <span className="text-accent">Caio Evaristo</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              Desenvolvedor Web Full Stack, especializado em React, Next.js e Node.js. 
              Apaixonado por criar soluções inovadoras e experiências digitais excepcionais.
              Comprometido com código limpo, performance e melhores práticas de desenvolvimento.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2 hover:bg-accent hover:text-primary transition-all duration-300"
                href="/assets/Caio Evaristo de Souza.pdf" 
                download="/assets/Caio Evaristo de Souza.pdf"
                aria-label="Baixar Currículo"
              >
                <span>Baixar CV</span>
                <FiDownload className="text-xl" aria-hidden="true" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-300" 
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </main>
  )
}

export default HomePage