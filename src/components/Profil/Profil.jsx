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
    <div className='font-mono text-[34px] max-md:text-[24px] ml-[190px] mt-[100px] max-md:mt-[0px] mr-[190px] max-md:mr-[5px]'>
      <div className='flex ml-[30px] max-md:ml-[-180px]'>
        <img
          src={Moi}
          alt='moi'
          className='w-[162px] h-[162px] mt-[50px] max-md:w-[102px] h-[102px] mt-[50px]'
        />
        <p className='ml-[50px] mt-[50px] max-md:ml-[15px]'>
          Bonjour, je suis{' '}
          <span className='text-bold text-blue-500'>Benoît</span>, développeur
          Fullstack (React, Node, Java), j'ai commencer à coder durant mon
          adoslence par le biais du moteur de jeu{' '}
          <span className='text-bold text-blue-500'>RPG MAKER</span> grâce à un
          système d'événement inclus dans le logiciel, j'ai également fait mes
          1er pas sur le langage ruby. Après mon Bac STI GEL (génie
          électronique), j'ai intégré l'école{' '}
          <span className='text-bold text-blue-500'>EXIA.CESI</span> durant 2
          ans et j'en suis resorti avec un diplôme d'analyste programmeur. Je
          suis ensuite parti en{' '}
          <span className='text-bold text-blue-500'>Angleterre </span>
          pendant un séjour de 6 mois afin de perfectionner mon anglais. J'ai
          ensuite fait des études de vendeur librairie avant de revenir dans le
          monde de l'IT en faisant une formation développeur web fullstack
          React, Node à la{' '}
          <span className='text-bold text-blue-500'>Wild Code School</span>.
        </p>
      </div>
      <h1 className='text-center text-[50px] text-bold underline ml-[150px] max-md:ml-[-140px] max-md:text-[35px]'>
        Mon CV
      </h1>
      <img
        src={CVimg}
        alt='cv'
        className='ml-[35%] mt-[40px] mb-[10px] max-md:ml-[-70px] max-md:mt-[10px]'
      />
      <button
        className='w-[176px] h-[71px] rounded-lg text-[20px] max-md:text-[16px] bg-blue-500 text-black ml-[48%] mb-[40px] max-md:ml-[-70px]'
        onClick={handleDownload}
      >
        Télécharger le CV
      </button>
    </div>
  );
}

export default Profil;
