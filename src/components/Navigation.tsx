"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navigation() {

    const [isOpen, setIsOpen] = useState(false);
    const toogleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="mt-10 max-w-5xl mx-auto">
            <hr />
            <ul className="hidden md:flex justify-around items-center py-6 px-3">
                <li className="hover:text-[#E28B00] hover:scale-110 duration-300"><Link href={"https://www.gov.br/receitafederal/pt-br/assuntos/agenda-tributaria/2025/marco"} target="_blank">Agenda Tributária</Link></li> <hr className="h-5 border text-white" />
                <li className="hover:text-[#E28B00] hover:scale-110 duration-300"><Link href={"https://ondatta.com.br/contabil/tabelas_praticas/"} target="_blank">Tabelas práticas</Link></li>  <hr className="h-5 border text-white" />
                <li className="hover:text-[#E28B00] hover:scale-110 duration-300"><Link href={"https://ondatta.com.br/contabil/formularios/"} target="_blank">Formulários</Link></li>  <hr className="h-5 border text-white" />
                <li className="hover:text-[#E28B00] hover:scale-110 duration-300"><Link href={"https://ondatta.com.br/contabil/facilitador_contabil/"} target="_blank">Facilitador contábil</Link></li>  <hr className="h-5 border text-white" />
                <li className="hover:text-[#E28B00] hover:scale-110 duration-300"><Link href={"https://ondatta.com.br/contabil/certidoes_negativas/"} target="_blank">Certidões negativas</Link></li>  <hr className="h-5 border text-white" />
                <li className="hover:text-[#E28B00] hover:scale-110 duration-300"><Link href={"https://ondatta.com.br/contabil/modelos_documentos/"} target="_blank">Modelos de documentos </Link></li>
            </ul>

            <div className="md:hidden flex px-3 py-6 justify-center">
                {
                    isOpen
                        ? (<X className="text-[#E28B00] cursor-pointer duration-100" onClick={toogleMenu} />)
                        : (<Menu className="text-[#E28B00] cursor-pointer duration-100" onClick={toogleMenu} />)
                }
            </div>

            {isOpen && (

                <div>
                    <ul className="md:hidden flex flex-col text-center items-center gap-y-2 text-white w-full my-3">
                        <li className="hover:bg-[#353335] w-full"><Link className="block w-full px-4 py-2" href={"https://www.gov.br/receitafederal/pt-br/assuntos/agenda-tributaria/2025/marco"} target="_blank">Agenda Tributária</Link></li>
                        <li className="hover:bg-[#353335] w-full"><Link className="block w-full px-4 py-2" href={"https://ondatta.com.br/contabil/tabelas_praticas/"} target="_blank">Tabelas práticas</Link></li>
                        <li className="hover:bg-[#353335] w-full"><Link className="block w-full px-4 py-2" href={"https://ondatta.com.br/contabil/formularios/"} target="_blank">Formulários</Link></li>
                        <li className="hover:bg-[#353335] w-full"><Link className="block w-full px-4 py-2" href={"https://ondatta.com.br/contabil/facilitador_contabil/"} target="_blank">Facilitador contábil</Link></li>
                        <li className="hover:bg-[#353335] w-full"><Link className="block w-full px-4 py-2" href={"https://ondatta.com.br/contabil/certidoes_negativas/"} target="_blank">Certidões negativas</Link></li>
                        <li className="hover:bg-[#353335] w-full"><Link className="block w-full px-4 py-2" href={"https://ondatta.com.br/contabil/modelos_documentos/"} target="_blank">Modelos de documentos </Link></li>
                    </ul>
                </div>
            )}
            <hr />
        </nav>
    )
}
