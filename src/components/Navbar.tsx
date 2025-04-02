"use client";

import Image from "next/image";
import logo from "../../assets/LOGO PRINCIPAL SEM FUNDO 1.png"
import fundo from "../../assets/fundo header.jpg";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const toogleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative w-full h-[28em] bg-black/50 ">
            <Image
                src={fundo}
                alt="Fundo do Header"
                layout="fill"
                className="-z-10 object-cover"
            />

            <div className="bg-black/50 flex justify-between items-center p-5 md:px-10">
                <Image src={logo} alt="logo" width={112} height={112} />

                <ul className="hidden md:flex gap-x-4 text-white">
                    <li className="bg-[#D77300] px-3 py-1"><Link href={"#"} > Início</Link></li>
                    <li className="hover:bg-[#E28B00] duration-100 px-3 py-1"><Link href={"#"}> Sobre Nós</Link></li>
                    <li className="hover:bg-[#E28B00] duration-100 px-3 py-1"><Link href={"#"}> Serviços</Link></li>
                    <li className="hover:bg-[#E28B00] duration-100 px-3 py-1"><Link href={"#"}> Abrir Empresa</Link></li>
                    <li className="hover:bg-[#E28B00] duration-100 px-3 py-1"><Link href={"#"}> Notícias</Link></li>
                    <li className="hover:bg-[#E28B00] duration-100 px-3 py-1"><Link href={"#"}> Contato</Link></li>
                </ul>

                <div className="md:hidden">
                    {
                        isOpen
                            ? (<X className="text-[#E28B00] cursor-pointer duration-100" onClick={toogleMenu} />)
                            : (<Menu className="text-[#E28B00] cursor-pointer duration-100" onClick={toogleMenu} />)
                    }
                </div>

                <Link href={"#"} className="hidden md:block text-white border px-6 py-1.5 hover:bg-[#E28B00] hover:border-[#E28B00] duration-100">Login</Link>
            </div>
            <hr className="border-0 md:border mx-10 -mt-3 border-white" />

            {isOpen && (
                <div className="absolute top-37 left-0 w-full z-50 bg-blue-950/80 md:hidden">
                    <ul className="flex flex-col gap-y-3 text-white w-full">
                        <li className="hover:bg-[#E28B00] duration-100 w-full">
                            <Link href={"#"} className="block w-full px-4 py-1">Início</Link>
                        </li>
                        <li className="hover:bg-[#E28B00] duration-100 w-full">
                            <Link href={"#"} className="block w-full px-4 py-1">Sobre Nós</Link>
                        </li>
                        <li className="hover:bg-[#E28B00] duration-100 w-full">
                            <Link href={"#"} className="block w-full px-4 py-1">Serviços</Link>
                        </li>
                        <li className="hover:bg-[#E28B00] duration-100 w-full">
                            <Link href={"#"} className="block w-full px-4 py-1">Abrir Empresa</Link>
                        </li>
                        <li className="hover:bg-[#E28B00] duration-100 w-full">
                            <Link href={"#"} className="block w-full px-4 py-1">Notícias</Link>
                        </li>
                        <li className="hover:bg-[#E28B00] duration-100 w-full">
                            <Link href={"#"} className="block w-full px-4 py-1">Contato</Link>
                        </li>
                    </ul>


                    {/* Botão Login Mobile */}
                    <Link href={"#"} className="block w-full text-center text-white border px-6 py-2 mt-2 hover:bg-[#E28B00] hover:border-[#E28B00] duration-100">
                        Login
                    </Link>
                </div>
            )}

            <div className="text-white flex flex-col justify-center md:items-start items-center mt-10 max-w-full md:max-w-[25em] md:ml-30">
                <h1 className="text-[3.5em] font-sans text-center md:text-start leading-none">Contabilidade profissional e transparente</h1>
                <div className="flex justify-center md:justify-normal gap-x-4 mt-5 w-full">
                    <span className="border px-3 py-2 w-60 text-center text-[14px] bg-[#D77300]"><Link href={""}>Solicite um orçamento</Link></span>
                    <span className="border px-3 py-2 w-60 text-center text-[14px] hover:bg-[#E28B00] duration-100 hover:border-[#E28B00] cursor-pointer"><Link href={""}>Abra sua empresa</Link></span>
                </div>
            </div>
        </div>
    );
}