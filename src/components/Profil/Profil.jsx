import React from 'react';
import { saveAs } from 'file-saver';
import CV from '../../pdf/cv.pdf';
import CVimg from '../../img/cv.png';
import Moi from '../../img/photomoi.png';

function Profil() {
  const handleDownload = () => {
    saveAs(CV, 'CV.pdf');
  };
  return (
    <div className='font-mono text-[42px] ml-[190px] mt-[100px] mr-[190px]'>
      <div className='flex ml-[30px]'>
        <img src={Moi} alt='moi' className='w-[288px] h-[303px] mt-[60px]' />
        <p className='ml-[50px] mt-[50px]'>
          Bonjour, je suis{' '}
          <span className='text-bold text-blue-500'>Benoît</span>, développeur
          Fullstack (React, Node, Java), j'ai commencer à coder durant mon
          adoslence par le biais du moteur de jeu{' '}
          <span className='text-bold text-blue-500'>RPG MAKER</span> par le bias
          d'un système d'événement inclus dans le logiciel, j'ai égaler fait mes
          1er pas sur le langage ruby. Après mon Bac STI GEL (génie
          électronique), j'ai intégré l'école{' '}
          <span className='text-bold text-blue-500'>EXIA.CESI</span> durant 2
          ans et j'en suis resorti avec un diplôme d'analyste programmeur. Je
          suis encore parti en{' '}
          <span className='text-bold text-blue-500'>Angleterre </span>
          pendant un séjour de 6 mois afin de perfectionner mon anglais. J'ai
          ensuite fait des études de vendeur librairie avant de revenir dans le
          monde de l'IT en faisant une formation développeur web fullstack
          React, Node à la{' '}
          <span className='text-bold text-blue-500'>Wild Code School</span>.
        </p>
      </div>
      <h1 className='text-center text-[50px] text-bold underline ml-[150px]'>
        Mon CV
      </h1>
      <img src={CVimg} alt='cv' className='ml-[40%] mt-[40px] mb-[10px]' />
      <button
        className='w-[176px] h-[71px] rounded-lg text-[25px] bg-blue-500 text-black ml-[50%] mb-[40px]'
        onClick={handleDownload}
      >
        Télécharger le CV
      </button>
    </div>
  );
}

export default Profil;
