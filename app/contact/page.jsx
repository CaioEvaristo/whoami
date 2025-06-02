"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectLabel, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaBlog, FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Telefone',
        description: '(+55)11 949752183'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'caio.evaristodesouza@hotmail.com'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Endereço',
        description: 'São Paulo, Brasil'
    }
];

const socialIcons = [
    {
        icon: <FaWhatsapp />,
        link: 'https://wa.me/5511949752183',
        color: 'text-[#25D366]'
    },
    {
        icon: <FaInstagram />,
        link: 'https://instagram.com/caio.evaristo',
        color: 'text-[#E4405F]'
    },
    {
        icon: <FaLinkedin />,
        link: 'https://linkedin.com/in/caio-evaristo',
        color: 'text-[#0A66C2]'
    },
    {
        icon: <FaBlog />,
        link: '#',
        color: 'text-gray-500',
        disabled: true
    }
];

const Contact = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* Social Icons */}
                <div className="xl:h-[54%] order-2 xl:order-none">
                    <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                        <h3 className="text-4xl text-accent">Vamos trabalhar juntos</h3>
                        <p className="text-white/60">
                            Estou sempre aberto a novos desafios e oportunidades de colaboração. Se você tem um projeto em mente ou precisa de um desenvolvedor para sua equipe, vamos conversar! Estou pronto para transformar suas ideias em realidade.
                        </p>
                        <div className="flex gap-6">
                            {socialIcons.map((item, index) => (
                                <a 
                                    key={index} 
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] ${item.color} rounded-md flex items-center justify-center ${!item.disabled ? 'hover:bg-accent hover:text-white transition-all duration-300' : 'cursor-not-allowed opacity-50'}`}
                                >
                                    <div className="text-[28px]">{item.icon}</div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"> 
                    <ul className="flex flex-col gap-10">
                        {info.map((info, index) => {
                            return (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{info.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{info.title}</p>
                                        <h3 className="text-xl">{info.description}</h3>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;