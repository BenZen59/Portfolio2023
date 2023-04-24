import React from 'react';
import ReactLogo from '../../img/react.png';
import NodeLogo from '../../img/node.png';
import JavaLogo from '../../img/java.png';
import Moi from '../../img/photomoi.png';

function Home() {
  return (
    <div className='font-mono text-[34px] ml-[190px] mt-[100px] mr-[190px]'>
      <div className='flex ml-[30px]'>
        <img src={Moi} alt='moi' className='w-[162px] h-[162px] mt-[50px]' />
        <p className='ml-[50px] mt-[50px]'>
          Bonjour, je suis{' '}
          <span className='text-bold text-blue-500'>Benoît</span>, développeur
          Fullstack (React, Node, Java) actuellement en recherche d'un emploi de
          développeur à <span className='text-bold text-blue-500'>Lille</span>.
          <br />
          Ce site portfolio vous permettra d'en apprendre plus sur moi.
        </p>
      </div>

      <div className='flex flex-wrap mt-[50px]'>
        <img className='w-[360px] h-[360px]' src={ReactLogo} alt='reactlogo' />
        <img className='w-1/4 h-1/4' src={NodeLogo} alt='reactlogo' />
        <img className='w-1/4 h-1/4' src={JavaLogo} alt='reactlogo' />
      </div>
    </div>
  );
}

export default Home;
