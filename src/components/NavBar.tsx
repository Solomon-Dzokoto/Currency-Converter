import Logo from '../assets/currency (1).png'
import { FaGithub } from 'react-icons/fa'

const NavBar = () => {
    return (
        <nav className='relative flex justify-between z-10'>
            <span className='flex items-center gap-4'>
                <img
                    className='size-12 animate-bounce '
                    src={Logo}
                    alt="Logo" />
                <h1 className='text-white font-semibold text-[clamp(.7rem,2vw,1rem)]'>CURRENCY CONVERTER</h1>
            </span>
            <a className='flex bg-inherit p-2 rounded-md hover:bg-violet-600  hover:bg-opacity-10 transition-all  items-center gap-4 text-[2rem] text-white' href='https://github.com/Solomon-Dzokoto/Currency-Converter' target='_blank' rel='noopener noreferrer'>
                <FaGithub />
                <p className='text-white text-[clamp(.7rem,2vw,1rem)]'>View Repo</p>
            </a>
        </nav>
    )
}

export default NavBar
