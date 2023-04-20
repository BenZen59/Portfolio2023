import React from 'react';
import ReactLogo from '../../img/react.png';
import NodeLogo from '../../img/node.png';
import JavaLogo from '../../img/java.png';

function Home() {
  return (
    <div className='font-mono text-[42px] ml-[190px] mt-[100px]'>
      I’m <span className='text-bold text-blue-500'>ZENONE Benoît</span>, a
      Fullstack developer (React, Node, Java) and I am currently looking for a
      job as a developer in{' '}
      <span className='text-bold text-blue-500'>Lille</span>
      <br />
      <div className='flex flex-wrap m-[50px]'>
        <img className='w-[360px] h-[360px]' src={ReactLogo} alt='reactlogo' />
        <img className='w-1/4 h-1/4' src={NodeLogo} alt='reactlogo' />
        <img className='w-1/4 h-1/4' src={JavaLogo} alt='reactlogo' />
      </div>
    </div>
  );
}

export default Home;
