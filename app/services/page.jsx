"use client";

import { BsArrowDownRight }  from "react-icons/bs"
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        num: '01',
        title: 'Web Developer',
        description: 'Desenvolvimento de aplicações web modernas e responsivas utilizando React, Next.js e outras tecnologias atuais. Criação de interfaces intuitivas, otimizadas para performance e SEO, com foco em experiência do usuário e acessibilidade.',
        href: ''
    },
    {
        num: '02',
        title: 'Software Developer',
        description: 'Desenvolvimento de software completo, desde o backend até o frontend. Implementação de APIs RESTful, integração com bancos de dados, autenticação e autorização, além de testes automatizados para garantir a qualidade do código.',
        href: ''
    },
    {
        num: '03',
        title: 'Software architecture',
        description: 'Design e implementação de arquiteturas de software escaláveis e manuteníveis. Definição de padrões de projeto, boas práticas de desenvolvimento, e estruturação de sistemas que atendam às necessidades do negócio com alta performance e segurança.',
        href: ''
    }
]

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1, 
                        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex flex-1 flex-col justify-center gap-6 group">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                                <p className="text-white/60">{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services;