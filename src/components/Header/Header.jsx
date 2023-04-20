import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Header() {
  return (
    <div className='bg-blue-400	h-[60px] text-black  p-[10px] font-mono	'>
      <p className='text-[32px] text-center mt-[-8px]'>Benoît ZENONE</p>
      <div className='flex justify-end mt-[-35px] text-[20px]'>
        <button className='ml-[20px]'>Accueil</button>
        <button className='ml-[20px]'>Profil</button>
        <button className='ml-[20px]'>Compétences</button>
        <button className='ml-[20px]'>Projets</button>
        <button className='ml-[20px]'>Contact</button>
        <button>
          <BsLinkedin className='ml-[20px] w-[25px] h-[25px] mt-[-3px] mr-[20px]' />
        </button>
        <button>
          <BsGithub className='w-[25px] h-[25px] mt-[-3px] mr-[20px]' />
        </button>
      </div>
    </div>
  );
}
