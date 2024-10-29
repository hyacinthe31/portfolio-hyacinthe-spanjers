import Link from "next/link"
import ToggleDarkMode from "./ToggleDarkMode"
import { FaArrowCircleUp, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return (
        <nav className="flex w-full justify-center">
        <div className="w-[98%] flex items-center h-16 justify-center max-w-xl fixed top-2 z-50 border rounded-full backdrop-blur-xl">
            <div className="flex items-center justify-around md:gap-6 md:justify-center w-full">
                {/* Icône du menu burger pour mobile */}
                <button onClick={toggleMenu} className="md:hidden">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Liens principaux visibles uniquement sur desktop */}
                <div className="hidden md:flex gap-6">
                    <Link href="#monParcours" className="hover:underline">Mon parcours</Link>
                    <Link href="#mesProjets" className="hover:underline">Mes projets</Link>
                    <Link href="#meContacter" className="hover:underline">Me contacter</Link>
                </div>
                <Link href="#" className="flex items-center hover:scale-110">
                    <FaArrowCircleUp size={20} />
                </Link>

                <ToggleDarkMode />
                </div>
            </div>

        {/* Menu mobile avec animation */}
        {isOpen && (
            <div className="fixed top-16 left-0 w-full bg-white dark:bg-gray-800 z-40">
            <div className="flex flex-col items-center gap-4 py-4 animate-fade-in">
                <Link href="#monParcours" className="hover:underline" onClick={toggleMenu}>
                Mon parcours
                </Link>
                <Link href="#mesProjets" className="hover:underline" onClick={toggleMenu}>
                Mes projets
                </Link>
                <Link href="#meContacter" className="hover:underline" onClick={toggleMenu}>
                Me contacter
                </Link>
            </div>
            </div>
        )}
        </nav>
    )
}

export default NavBar