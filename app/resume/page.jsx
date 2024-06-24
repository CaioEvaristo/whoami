"use client";

import { FaHtml5, FaNodeJs, FaReact, FaCss3, FaJs, FaAngular, FaVuejs, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiGoland, SiNestjs, SiRuby } from  'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';

const about = {
    title: 'About me',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic dignissimos officiis inventore quo, reiciendis nam ipsa suscipit dicta iste at vero.',
    Info:  [
        {
            fieldName: 'Name',
            fieldValue: 'Caio  Evaristo'
        },
        {
            fieldName: 'Phone',
            fieldValue: '(+55)11949752183'
        },
        {
            fieldName: 'Experience',
            fieldValue: '6 Years'
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Brazilian'
        },
        {
            fieldName: 'Email',
            fieldValue: 'caio.evaristodesouza@hotmail.com'
        },
        {
            fieldName: 'Freelance',
            fieldValue: 'Available'
        },
    ]
};

const experience = {
    icon: '/assets/resume/best-seller.png',
    title: 'My experience',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, dolor laborum. Et, quod consequuntur? Natus, ipsum! Esse distinctio expedita explicabo earum aliquam dolor vel.',
    items: [
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
    title: 'My Skills',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perspiciatis magni quae, nulla dolorem fuga accusamus magnam aut cumque expedita molestiae facere est. Eveniet, voluptates ipsum ut assumenda quos nesciunt.',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'html'
        },
        {
            icon: <FaCss3 />,
            name: 'Css3'
        },
        {
            icon: <FaNodeJs />,
            name: 'NodeJs'
        },
        {
            icon: <FaReact />,
            name: 'React'
        },
        {
            icon: <FaVuejs />,
            name: 'VueJs'
        },
        {
            icon: <FaPhp />,
            name: 'PHP'
        },
        {
            icon: <FaAngular />,
            name: 'Angular'
        },
        {
            icon: <SiGoland />,
            name: 'Golang'
        },
        {
            icon: <SiNextdotjs />,
            name: 'next.js'
        },
        {
            icon: <SiTailwindcss />,
            name: 'Tailwind'
        },
        {
            icon: <SiNestjs />,
            name: 'nestJs'
        },
        {
            icon: <SiRuby/>,
            name: 'Ruby'
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
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.Info.map((info, index) => {
                                        return(
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60'>{info.fieldName}</span>
                                                <span className='text-xl'>{info.fieldValue}</span>
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