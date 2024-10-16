import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdComputer } from "react-icons/md";

export default function Header() {
  return (
    <div className="bg-blue-400	h-[60px] text-black p-[10px] font-mono max-md:hidden">
      <p className="text-[32px] text-left mt-[-8px] flex">
        <MdComputer className="w-[50px] h-[50px] mr-1" />
        Benoît ZENONE
      </p>
      <div className="flex justify-end mt-[-35px] text-[18px] font-bold">
        <Link to="/" className="ml-[20px]">
          Accueil
        </Link>
        <Link to="/profil" className="ml-[20px]">
          Profil
        </Link>
        <Link to="/skills" className="ml-[20px]">
          Compétences
        </Link>
        <Link to="/experiences" className="ml-[20px]">
          Expériences
        </Link>
        <Link to="/formations" className="ml-[20px]">
          Formations
        </Link>
        <Link to="/projects" className="ml-[20px]">
          Projets
        </Link>
        <Link to="/contact" className="ml-[20px]">
          Contact
        </Link>
        <button
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/beno%C3%AEt-zenone-7763aab1/",
              "_blank",
            );
          }}
        >
          <BsLinkedin className="ml-[20px] w-[25px] h-[25px] mt-[-3px] mr-[20px]" />
        </button>
        <button
          onClick={() => {
            window.open("https://github.com/BenZen59", "_blank");
          }}
        >
          <BsGithub className="w-[25px] h-[25px] mt-[-3px] mr-[20px]" />
        </button>
      </div>
    </div>
  );
}
