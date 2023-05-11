'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/logo.png';
import Facebook from '../../assets/facebook.png';
import Linkedin from '../../assets/linkedin.png';
import Instagram from '../../assets/instagram.png';
import Youtube from '../../assets/youtube.png';
import GPTW from '../../assets/selo-gptw.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-center pt-12 pb-4 bg-cinza">
            <div className="flex justify-around w-full max-w-7xl gap-5">
                <div>
                    <div>
                        <Image src={Logo} alt="logo company" />
                        <ul className="flex flex-row gap-3 pt-2">
                            <li>
                                <Image src={Facebook} alt="facebook logo" />
                            </li>
                            <li>
                                <Image src={Linkedin} alt="linkedin logo" />
                            </li>
                            <li>
                                <Image src={Instagram} alt="instagram logo" />
                            </li>
                            <li>
                                <Image src={Youtube} alt="youtube logo" />
                            </li>
                        </ul>
                    </div>

                    <Image src={GPTW} alt="logo gptw" width={250} height={300} className="pt-4" />
                </div>

                <div>
                    <h1 className='text-2xl font-bold pb-3'>Endereço</h1>
                    <div>
                        <p>Rua José Paulino, 416 - Sala 802</p>
                        <p>Campinas - SP</p>
                    </div>

                    <div>
                        <span>CNPJ: 24.233.534/0001-26</span>
                        <br></br>
                        <span>CRC: 2SP035218</span>
                    </div>
                </div>

                <div>
                    <h1 className='text-2xl font-bold pb-3'>Links Rápidos</h1>
                    <ul>
                        <li>
                            <p className='cursor-pointer'>Home</p>
                        </li>
                        <li>
                            <p className='cursor-pointer'>Abrir minha empresa</p>
                        </li>
                        <li>
                            <p className='cursor-pointer'>Empresa de serviço</p>
                        </li>
                        <li>
                            <p className='cursor-pointer'>Empresa de comércio</p>
                        </li>
                        <li>
                            <p className='cursor-pointer'>Plano</p>
                        </li>
                        <li>
                            <p className='cursor-pointer'>Seguros</p>
                        </li>
                        <li>
                            <p className='cursor-pointer'>Certificado digital</p>
                        </li>
                        <li>
                            <p className='cursor-pointer'>Blog</p>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-2xl font-bold pb-3'>Canais de atendimento</h1>
                    <div>
                        <span className='cursor-pointer'>suporte@senhorcontabil.com.br</span>
                        <p>Atendimento 7 dias da semana das 9h às 18h.</p>
                    </div>

                    <div className="pt-14 text font-bold">
                        <p>Política de Privacidade</p>
                        <p>Trabalhe Conosco</p>
                    </div>
                </div>
            </div>

            <p className="mt-4 mb-2 font-bold text-sm">&copy; 2023 Senhor Contábil. Todos os direitos reservados.</p>
        </footer>
    );
}


export default Footer;
