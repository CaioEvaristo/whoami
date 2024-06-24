"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectLabel, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt  } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(+55)11 949752183'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'caio.evaristodesouza@hotmail.com'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        description: 'Algum lugar do mundo'
    }
];

const Contact = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* Form */}
                <div className="xl:h-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
                        <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                        <p className="text-white/60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, magni mollitia quis amet modi inventore rerum fuga maiores alias porro eum delectus eaque hic sapiente quibusdam perferendis culpa quidem iusto?
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firtsname" placeholder="Firstname" />
                            <Input type="lastname" placeholder="Lastname"/>
                            <Input type="email" placeholder="Email address" />
                            <Input type="phone" placeholder="Phone number" />
                        </div>
                        <Textarea 
                            className="h-[200px]"
                            placeholder="Type your mmessage here"
                        />
                        <Button size="md" className="max-w-40">Send Message</Button>
                    </form>
                </div>

                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"> 
                    <ul className="flex flex-col gap-10">
                        {info.map((info, index) => {
                            return (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent  rounded-md flex  items-center justify-center">
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