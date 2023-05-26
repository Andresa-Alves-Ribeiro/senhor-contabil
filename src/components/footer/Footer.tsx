'use client';

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
                        <img src={Logo} alt="logo company" />
                        <ul className="flex flex-row gap-3 pt-2">
                            <li>
                                <img src={Facebook} alt="facebook logo" />
                            </li>
                            <li>
                                <img src={Linkedin} alt="linkedin logo" />
                            </li>
                            <li>
                                <img src={Instagram} alt="instagram logo" />
                            </li>
                            <li>
                                <img src={Youtube} alt="youtube logo" />
                            </li>
                        </ul>
                    </div>

                    <img src={GPTW} alt="logo gptw" width={250} height={300} className="pt-4" />
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
                        <li className='pb-2'>
                            <a className='cursor-pointer hover:text-cereja bg-transparent text-azul text-decoration-none'>Home</a>
                        </li>
                        <li className='pb-2'>
                            <a className='cursor-pointer hover:text-cereja bg-transparent text-azul text-decoration-none'>Abrir minha empresa</a>
                        </li>
                        <li className='pb-2'>
                            <a className='cursor-pointer hover:text-cereja bg-transparent text-azul text-decoration-none'>Empresa de serviço</a>
                        </li>
                        <li className='pb-2'>
                            <a className='cursor-pointer hover:text-cereja bg-transparent text-azul text-decoration-none'>Empresa de comércio</a>
                        </li>
                        <li className='pb-2'>
                            <a className='cursor-pointer hover:text-cereja bg-transparent text-azul text-decoration-none'>Plano</a>
                        </li>
                        <li className='pb-2'>
                            <a className='cursor-pointer hover:text-cereja bg-transparent text-azul text-decoration-none'>Seguros</a>
                        </li>
                        <li className='pb-2'>
                            <a className='cursor-pointer hover:text-cereja bg-transparent text-azul text-decoration-none'>Certificado digital</a>
                        </li>
                        <li className='pb-2'>
                            <a className='cursor-pointer hover:text-cereja bg-transparent text-azul text-decoration-none'>Blog</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h1 className='text-2xl font-bold pb-3'>Canais de atendimento</h1>
                    <div>
                        <span className='cursor-pointer hover:text-cereja bg-transparent'>suporte@senhorcontabil.com.br</span>
                        <p>Atendimento 7 dias da semana das 9h às 18h.</p>
                    </div>

                    <div className="pt-14 text font-bold flex flex-col">
                        <a className='cursor-pointer hover:text-cereja bg-transparent text-azul text-decoration-none'>Política de Privacidade</a>
                        <a className='cursor-pointer hover:text-cereja bg-transparent text-azul text-decoration-none'>Trabalhe Conosco</a>
                    </div>
                </div>
            </div>

            <p className="mt-4 mb-2 font-bold text-sm">&copy; 2023 Senhor Contábil. Todos os direitos reservados.</p>
        </footer>
    );
}


export default Footer;
