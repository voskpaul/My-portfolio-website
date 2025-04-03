import { useState } from "react";
import { BsYoutube, BsLinkedin, BsTwitterX, BsGithub } from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100"
      >
        PaulNjeru
      </a>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>
        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Tech</li>
        </a>
        <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Projects</li>
        </a>
        <a href="#contacts" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Contacts</li>
        </a>
      </ul>

      {/* Social Icons */}
      <ul className="hidden md:flex gap-5">
        <li>
          <a href="https://www.youtube.com/@ShortsStepz1169" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
            <BsYoutube />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/paul-njeru-123972270/" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="https://x.com/BrayoMalia" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
            <BsTwitterX />
          </a>
        </li>
        <li>
          <a href="https://github.com/voskpaul" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
            <BsGithub />
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl cursor-pointer" onClick={menuOpen} />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12">
          <ul className="flex flex-col gap-8">
            <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100" onClick={menuOpen}>
              <li>Home</li>
            </a>
            <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100" onClick={menuOpen}>
              <li>Tech</li>
            </a>
            <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100" onClick={menuOpen}>
              <li>Projects</li>
            </a>
            <a href="#contacts" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100" onClick={menuOpen}>
              <li>Contacts</li>
            </a>
          </ul>

          <ul className="flex flex-wrap gap-5">
            <li>
              <a href="https://www.youtube.com/@ShortsStepz1169" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                <BsYoutube />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/paul-njeru-123972270/" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="https://x.com/BrayoMalia" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-sky-500 hover:opacity-100">
                <BsTwitterX />
              </a>
            </li>
            <li>
              <a href="https://github.com/voskpaul" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
                <BsGithub />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
