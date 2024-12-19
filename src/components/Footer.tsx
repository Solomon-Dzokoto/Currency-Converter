import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="px-[clamp(1rem,4vw,4rem)] py-[1rem]">
            <p className="font-bold text-blue-950">
                {(new Date).getFullYear()}  {""}
                Made with ❤️ by Solomon Elorm Dzokoto
            </p>
            <div className="flex mt-4 items-center gap-4">
                <p className="inline-block">
                    Follow me 👍
                </p>
                <span className="inline-block ">
                    <a className="text-[2rem]" href="https://github.com/Solomon-Dzokoto" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                </span>
                <span className="inline-block ">
                    <a className="text-[2rem]" href="https://www.linkedin.com/in/solomon-elorm-dzokoto-10385b31a/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </span>
                <span className="inline-block ">
                    <a className="text-[2rem]" href="https://x.com/BraSolo73" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;