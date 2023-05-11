import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../assets/logo.png';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import '../../globals.css'
import './Header.css';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <header className="flex flex-row items-center justify-around pt-6 pb-4 bg-cinza">
            <Image src={Logo} alt='logo company' className='logo' />
            <nav className="hidden md:flex md:flex-row">
                <ul className="flex flex-row mt-4">
                    <li className="pr-6">
                        <button className="text-azul hover:text-cereja bg-transparent">
                            <a>Abrir Empresa Grátis</a>
                        </button>
                    </li>
                    <li className="pl-4 pr-4">
                        <button className="text-azul hover:text-cereja bg-transparent">
                            <a>Trocar de Contador</a>
                        </button>
                    </li>
                    <li className="pl-4 pr-4">
                        <button className="text-azul hover:text-cereja bg-transparent">
                            <a>Contabilidade MEI</a>
                        </button>
                    </li>
                    <li className="pl-4 pr-4">
                        <button className="text-azul hover:text-cereja bg-transparent">
                            <a>Planos</a>
                        </button>
                    </li>
                    <li className="pl-4 pr-4">
                        <button className="text-azul hover:text-cereja bg-transparent">
                            <a>Serviços</a>
                        </button>
                    </li>
                    <li className="pl-4 pr-4">
                        <button className="text-azul hover:text-cereja bg-transparent">
                            <a>Blog</a>
                        </button>
                    </li>
                    <li>
                        <button className="bg-cereja text-white font-bold mx-6 py-2 px-4 rounded-md hover:opacity-0.5 text-uppercase">
                            Login
                        </button>
                    </li>
                </ul>
            </nav>


            <div className="md:hidden ml-6">
                <button onClick={toggleMenu}>
                    <FaBars />
                </button>
            </div>

            {showMenu && (
                <nav className="block lg:hidden">
                    <ul className="flex flex-col items-center pr-5">
                        <li className="py-2">
                            <button className="text-azul hover:text-cereja bg-transparent">
                                <a>Abrir Empresa Grátis</a>
                            </button>
                        </li>
                        <li className="py-2">
                            <button className="text-azul hover:text-cereja bg-transparent">
                                <a>Trocar de Contador</a>
                            </button>
                        </li>
                        <li className="py-2">
                            <button className="text-azul hover:text-cereja bg-transparent">
                                <a>Contabilidade MEI</a>
                            </button>
                        </li>
                        <li className="py-2">
                            <button className="text-azul hover:text-cereja bg-transparent">
                                <a>Planos</a>
                            </button>
                        </li>
                        <li className="py-2">
                            <button className="text-azul hover:text-cereja bg-transparent">
                                <a>Serviços</a>
                            </button>
                        </li>
                        <li className="py-2">
                            <button className="text-azul hover:text-cereja bg-transparent">
                                <a>Blog</a>
                            </button>
                        </li>
                        <li>
                        <button className="bg-cereja text-white font-bold py-2.5 px-4 mb-3 rounded-md hover:opacity-0.5 text-uppercase">
                            Login
                        </button>
                    </li>
                    </ul>
                </nav>
            )}



        </header>
    );
}

export default Header;
