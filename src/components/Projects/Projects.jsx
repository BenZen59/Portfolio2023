import React from 'react';
import Project1 from '../../img/projet1.png';
import Project2 from '../../img/projet2.png';
import Project3 from '../../img/projet3.png';
import Project4 from '../../img/projet4.png';
import Project5 from '../../img/projet5.png';
import Project6 from '../../img/projet6.png';
import Project7 from '../../img/projet7.png';

const projets = [
  {
    id: 1,
    src: Project1,
    alt: 'projet1',
    name: 'Site cinéma japonais classique',
    description: 'Un site informatif sur le cinéma japonais',
    techno: ['React', 'CSS'],
  },
  {
    id: 1,
    src: Project2,
    alt: 'projet2',
    name: 'Wild Market',
    description: 'Site e-commerce en JS, CSS',
    techno: ['JS', 'CSS'],
  },
  {
    id: 3,
    src: Project3,
    alt: 'projet3',
    name: 'KeepN',
    description: "Site avec l'API TMDB",
    techno: ['React', 'CSS'],
  },
  {
    id: 4,
    src: Project4,
    alt: 'projet4',
    name: 'Site Vitrine Ophtalmologue',
    description: 'Projet client pour un Ophtalmologue',
    techno: ['React', 'CSS', 'Node', 'mySQL', 'Express', 'React-admin'],
  },
  {
    id: 5,
    src: Project5,
    alt: 'projet5',
    name: 'CartFood',
    description: 'Système de panier pour commander de la nourriture',
    techno: ['React', 'CSS'],
  },
  {
    id: 6,
    src: Project6,
    alt: 'projet6',
    name: 'WatchCritique',
    description: "Site avec l'API TMDB accompagner d'un back",
    techno: ['React', 'CSS', 'Node', 'mySQL', 'Express'],
  },
  {
    id: 7,
    src: Project7,
    alt: 'projet7',
    name: 'MovieIncubateur',
    description: "Site avec l'API TMDB et utilisation de Redux",
    techno: ['React', 'Redux', 'Tailwind'],
  },
];

function Projects() {
  return (
    <>
      <h1 className='text-[50px] font-bold font-mono text-black m-[10px]'>
        Mes projets
      </h1>
      <div className='flex flex-wrap font-mono'>
        {projets.map((projet) => (
          <div className='bg-zinc-800 px-20 py-20 rounded-lg border-solid border-2 border-gray-500 m-[10px] w-[783px] h-[344px] '>
            <h4 className='absolute text-gray-400 text-[18px] font-bold ml-[-60px] mt-[-70px]'>
              {projet.name}
            </h4>
            <img
              key={projet.id}
              src={projet.src}
              alt={projet.alt}
              className='w-[783px] h-[201px] mt-[-30px]'
            />
            <p className='text-gray-400 text-[18px] font-bold  mt-[10px]'>
              {projet.description}
            </p>
            <div className='flex '>
              {projet.techno.map((tech, index) => (
                <div
                  className='bg-blue-500 border-solid border-2 border-blue-500 mt-[10px] text-[18px] text-zinc-800 w-auto h-[30px] pl-[2px] pr-[2px] text-center rounded-lg mr-[10px]'
                  key={index}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;