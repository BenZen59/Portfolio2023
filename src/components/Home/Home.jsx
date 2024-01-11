import React from 'react';
import ReactLogo from '../../img/react.png';
import NodeLogo from '../../img/node.png';
import JavaLogo from '../../img/java.png';
import Moi from '../../img/photomoi.png';

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

      <div className='flex flex-wrap mt-[50px] ml-[350px] max-md:ml-[-100px] max-md:mt-[10px]'>
        <img
          className='w-[260px] h-[260px] max-md:w-[82px] max-md:h-[82px]'
          src={ReactLogo}
          alt='reactlogo'
        />
        <img
          className='w-1/4 h-1/4 max-md:w-[82px] max-md:h-[82px]'
          src={NodeLogo}
          alt='reactlogo'
        />
        <img
          className='w-1/4 h-1/4 max-md:w-[82px] max-md:h-[82px] max-md:mb-[20px]'
          src={JavaLogo}
          alt='reactlogo'
        />
      </div>
    </div>
  );
}

export default Home;
