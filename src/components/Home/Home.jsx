import React from 'react';
import Moi from '../../img/photomoi.png';
import MiniReactLogo from '../../img/react_mini_icone.png';
import MiniJavaLogo from '../../img/java_mini_icone.png';
import MiniWebLogo from '../../img/web_mini_logo.png';

const logos = [
  {
    id: 1,
    src: MiniReactLogo,
    alt: 'react',
    name: 'Développeur React',
  },
  {
    id: 2,
    src: MiniJavaLogo,
    alt: 'java',
    name: 'Développeur Java',
  },
  {
    id: 3,
    src: MiniWebLogo,
    alt: 'web',
    name: 'Développeur web',
  },
];

function Home() {
  return (
    <div className='font-mono text-[34px] max-md:text-[24px] ml-[190px] mt-[100px] max-md:mt-[0px] mr-[190px] max-md:mr-[5px]'>
      <div className='flex ml-[30px] max-md:ml-[-180px]'>
        <img
          src={Moi}
          alt='moi'
          className='w-[162px] h-[162px] max-md:w-[102px] max-md:h-[102px] mt-[50px]'
        />
        <p className='ml-[50px] mt-[50px] max-md:ml-[15px]'>
          Bonjour, <span className='text-bold text-blue-500'>Je suis</span>{' '}
          <br />
          <p>
            <span className='text-bold text-blue-500'>Benoît</span>
            <br />
            <div className='text-[20px]'>
              Développeur Fullstack (React, Node, Java)
            </div>
          </p>
          <br />
          <div className='text-[18px]'>
            Actuellement en formation{' '}
            <span className='text-bold text-blue-500'>TP CDA</span> à l'AFPA,
            actuellement en recherche d'un stage de développeur informatique sur{' '}
            <span className='text-bold text-blue-500'>Lille</span>.
            <br />
            Ce site portfolio vous permettra d'en apprendre plus sur moi.
          </div>
        </p>
      </div>
      <div className='flex justify-center mt-8 max-md:ml-[-180px]'>
        {logos.map((logo) => (
          <div className='bg-gray-400 h-[200px] w-[200px] m-[10px] hover:bg-blue-400'>
            <h4 className='absolute text-[24px] max-md:text-[13px] font-bold w-24 mt-28 ml-5 max-md:ml-3'>
              {logo.name}
            </h4>
            <img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className='w-[48px] h-[48px] max-md:w-[35px] max-md:h-[35px] ml-3 mt-16'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
