import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { slide as Menu } from 'react-burger-menu';
import './MenuBurger.css';

export default function MenuBurger() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='md:hidden h-[100px] w-auto bg-blue-400'>
      <Menu isOpen={menuOpen} width='60%'>
        <div className='text-gray-400 flex flex-col font-mono text-[20pxl]'>
          <div>
            <Link to='/' className='ml-[20px]'>
              • Accueil
            </Link>
          </div>
          <div className='mt-[5px]'>
            <Link to='/profil' className='ml-[20px]'>
              • Profil
            </Link>
          </div>
          <div className='mt-[5px]'>
            <Link to='/skills' className='ml-[20px]'>
              • Compétences
            </Link>
          </div>
          <div className='mt-[5px]'>
            <Link to='/projects' className='ml-[20px]'>
              • Projets
            </Link>
          </div>
          <div className='mt-[5px]'>
            <Link to='/contact' className='ml-[20px]'>
              • Contact
            </Link>
          </div>
          <div className='mt-[10px]'>
            <button
              onClick={() => {
                window.open(
                  'https://www.linkedin.com/in/beno%C3%AEt-zenone-7763aab1/',
                  '_blank'
                );
              }}
            >
              <BsLinkedin className='ml-[20px] w-[25px] h-[25px] mt-[-3px] mr-[20px]' />
            </button>
            <button
              onClick={() => {
                window.open('https://github.com/BenZen59', '_blank');
              }}
            >
              <BsGithub className='w-[25px] h-[25px] mt-[-3px] mr-[20px]' />
            </button>
          </div>
        </div>
      </Menu>
    </div>
  );
}
