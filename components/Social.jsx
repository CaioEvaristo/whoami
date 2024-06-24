import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const social = [
    {icon: <FaGithub/>, path: "https://github.com/CaioEvaristo"},
    {icon: <FaLinkedinIn/>, path: "https://www.linkedin.com/in/caio-souza-489464131/"},
    {icon: <FaInstagram/>, path: "https://www.instagram.com/caio_gentleman_thief?igsh=dXVhdHc5cHpseW82"}
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {social.map((item, index) => {
                return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
            })}
        </div>
    )
}

export default Social 