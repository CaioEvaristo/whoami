"use client";

import { FaHtml5, FaNodeJs, FaReact, FaCss3, FaJs, FaAngular, FaVuejs, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiGoland, SiNestjs, SiRuby, SiTypescript } from  'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';

const about = {
    title: 'Sobre mim',
    description: 'Desenvolvedor Full Stack com mais de 7 anos de experiência em desenvolvimento de software. Especializado em React, Node.js e outras tecnologias modernas. Comprometido com a entrega de soluções de alta qualidade e experiência do usuário excepcional.',
    Info:  [
        {
            fieldName: 'Nome',
            fieldValue: 'Caio Evaristo'
        },
        {
            fieldName: 'Email',
            fieldValue: 'caio.evaristodesouza@hotmail.com'
        },
        {
            fieldName: 'Telefone',
            fieldValue: '(+55)11949752183'
        },
        {
            fieldName: 'Nacionalidade',
            fieldValue: 'Brasileiro'
        },
        {
            fieldName: 'Experiência',
            fieldValue: '7+ Anos'
        },
        {
            fieldName: 'Freelance',
            fieldValue: 'Disponível'
        }
    ]
};

const experience = {
    icon: '/assets/resume/best-seller.png',
    title: 'Minha Experiência',
    description: 'Experiência profissional em desenvolvimento de software, com foco em soluções web e mobile, utilizando tecnologias modernas e boas práticas de desenvolvimento.',
    items: [
        {
            company: 'Automa Trade',
            position: 'Full Stack Developer',
            duration: '2024 - Atualmente'
        },
        {
            company: 'Pontal Tech',
            position: 'Full Stack Developer',
            duration: '2019 - 2020 / 2021 - 2024'
        },
        {
            company: 'AP Interactive',
            position: 'Backend Developer',
            duration: '2020 - 2021'
        }
    ]
};

const skill = {
    title: 'Minhas Habilidades',
    description: 'Desenvolvedor Full Stack com amplo conhecimento em diversas tecnologias e frameworks modernos. Especializado em desenvolvimento web com foco em React, Node.js e suas ecossistemas. Experiência em arquitetura de software, desenvolvimento de APIs RESTful, e implementação de soluções escaláveis.',
    skillList: [
        {
            icon: <FaPhp />,
            name: 'PHP'
        },
        {
            icon: <FaNodeJs />,
            name: 'Node.js'
        },
        {
            icon: <SiTypescript />,
            name: 'TypeScript'
        },
        {
            icon: <FaAngular />,
            name: 'Angular'
        },
        {
            icon: <FaReact />,
            name: 'React'
        },
        {
            icon: <FaVuejs />,
            name: 'Vue.js'
        },
        {
            icon: <SiNextdotjs />,
            name: 'Next.js'
        },
        {
            icon: <SiNestjs />,
            name: 'NestJS'
        },
        {
            icon: <SiTailwindcss />,
            name: 'Tailwind CSS'
        },
        {
            icon: <SiGoland />,
            name: 'Go'
        }
    ]
};

const Resume = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'} }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl-py-0' 
        >
            <div className='container mx-auto'>
                <Tabs defaultValue='aboutme' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='aboutme'>About me</TabsTrigger>
                        <TabsTrigger value='skill'>Skills</TabsTrigger>
                        <TabsTrigger value='experience'>Experience</TabsTrigger>
                    </TabsList>

                    {/* CONTENt */}
                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value='aboutme' className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-8 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.Info.map((info, index) => {
                                        return(
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60 text-sm'>{info.fieldName}</span>
                                                <span className='text-base'>{info.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        
                        <TabsContent value='skill' className='w-full h-full'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skill.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skill.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skill.skillList.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group '>
                                                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>{item.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value='experience' className='w-full h-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>

                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-col-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left '>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        
                    </div>
                </Tabs>
            </div>
        </motion.div>


    )
}

export default Resume