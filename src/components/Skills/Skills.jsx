import React from 'react';
import GitLogo from '../../img/git.svg';
import JavaLogo from '../../img/java.png';
import JSLogo from '../../img/javascript.svg';
import NodeLogo from '../../img/node.svg';
import ReactLogo from '../../img/react.svg';
import ReduxLogo from '../../img/redux.svg';
import SqlLogo from '../../img/sql.svg';
import SpringLogo from '../../img/spring.png';
import ExpressLogo from '../../img/express.png';
import TailwindLogo from '../../img/tailwind.png';

const logos = [
  {
    id: 1,
    src: GitLogo,
    alt: 'git',
    name: 'Git/Github',
  },
  {
    id: 2,
    src: JSLogo,
    alt: 'js',
    name: 'JavaScript',
  },
  {
    id: 3,
    src: TailwindLogo,
    alt: 'tailwind',
    name: 'Tailwind',
  },
  {
    id: 4,
    src: NodeLogo,
    alt: 'node',
    name: 'Node',
  },
  {
    id: 5,
    src: ExpressLogo,
    alt: 'express',
    name: 'Express',
  },
  {
    id: 6,
    src: ReactLogo,
    alt: 'react',
    name: 'React',
  },
  {
    id: 7,
    src: ReduxLogo,
    alt: 'redux',
    name: 'Redux',
  },
  {
    id: 8,
    src: JavaLogo,
    alt: 'java',
    name: 'Java',
  },
  {
    id: 9,
    src: SpringLogo,
    alt: 'spring',
    name: 'Spring Boot',
  },
  {
    id: 10,
    src: SqlLogo,
    alt: 'sql',
    name: 'mySQL',
  },
];

function Skills() {
  return (
    <>
      <h1 className='text-[50px] font-bold font-mono text-black m-[10px]'>
        Mes compétences
      </h1>
      <div className='flex flex-wrap font-mono'>
        {logos.map((logo) => (
          <div className='bg-zinc-800 px-20 py-20 rounded-lg border-solid border-2 border-gray-500 m-[10px] '>
            <h4 className='absolute text-gray-400 text-[18px] font-bold ml-[-60px] mt-[-70px]'>
              {logo.name}
            </h4>
            <img
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className='w-[82px] h-[82px]'
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
