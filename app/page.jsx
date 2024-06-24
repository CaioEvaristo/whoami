import Photo from "@/components/Photo"
import Social from "@/components/Social"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const HomePage = () =>{
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        { /* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Web Developer</span>
            <h1 className="h1"> Hello I&apos;m <br /> <span className="text-accent">Caio Evaristo</span>
            </h1>

            <p  className="max-w-[500px] mb-9 text-white/80">
              Web Developer, proficient in various technologies and languages, with strong problem-solving skills and the ability to develop solutions.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2"
                href="/assets/Caio Evaristo de Souza.pdf" download="/assets/Caio Evaristo de Souza.pdf">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base houver:bg-accent houver:text-primary houver:transition-all duration-500" />
              </div>
            </div>
          </div>

          { /* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
        <Stats />
    </section>
  )
}

export default HomePage