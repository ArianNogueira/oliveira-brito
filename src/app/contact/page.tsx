'use client';

import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import MapaIframe from "./maps";

export default function Contact() {
    return (
        <div>
            <div className="md:flex justify-around py-20 md:p-30 items-center bg-[#F7F6FA]">
                <div className="text-black mx-12 md:w-[30em]">
                    <div className="mb-10">
                        <hr className="border-[#E28B00] w-20"/>
                        <h1 className="text-[25px]">Fale com a gente!</h1>
                    </div>
                    <div className="md:flex justify-between gap-y-8 flex-wrap w-full">
                        <div className="w-42">
                            <h3 className="font-bold text-[18px]">Endereço:</h3>
                            <p className="text-[12px] mb-5 md:mb-0 mt-3 text-[#585858] w-60">Centro Comercial NN Center - Av. Acre, Sala 06 - 1º Piso - Turu, São Luís - MA, 65066-620</p>
                        </div>
                        <div className="w-42">
                            <h3 className="font-bold text-[18px]">Telefone:</h3>
                            <p className="text-[12px] mb-5 md:mb-0 mt-3 text-[#585858]">(98) 98423-5004</p>
                        </div>
                        <div className="w-42">
                            <h3 className="font-bold text-[18px]">E-mail:</h3>
                            <p className="text-[12px] mb-5 md:mb-0 mt-3 text-[#585858]">contato@obcontabildade.com.br</p>
                        </div>
                        <div className="w-42">
                            <h3 className="font-bold text-[18px]">Redes Sociais</h3>
                            <ul className="flex items-center mt-3 gap-x-5">
                                <li className="hover:text-[#E28B00] duration-100">
                                    <Link href={"https://www.instagram.com/oliveiraebrito_contabilidade?igsh=YTh2eDQ4aWVuOHB4"} target="_blank">
                                        <Instagram strokeWidth={1.8} />
                                    </Link>
                                </li>
                                <li className="hover:text-[#E28B00] duration-100">
                                    <Linkedin strokeWidth={1.8} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-black">
                    <form className="w-full md:w-[28em] p-10 md:p-0">
                        <input type="text" required placeholder="Nome" className="w-full border border-gray-500 py-1 bg-white px-3 mb-2 outline-none placeholder:text-[#58585869] placeholder:text-[14px]" />
                        <input type="email" required placeholder="E-mail" className="w-full border border-gray-500 py-1 bg-white px-3 mb-2 outline-none placeholder:text-[#58585869] placeholder:text-[14px]" />
                        <input type="text" required placeholder="Assunto" className="w-full border border-gray-500 py-1 bg-white px-3 mb-2 outline-none placeholder:text-[#58585869] placeholder:text-[14px]" />
                        <textarea rows={4} required placeholder="Mensagem" className="w-full border border-gray-500 py-1 bg-white px-3 mb-3 outline-none placeholder:text-[#58585869] placeholder:text-[14px]" />
                        <p className="text-[10px] text-justify leading-6">*Os dados pessoais coletados neste formulário têm por finalidade o retorno à mensagem enviada. Referidos dados não serão utilizados para outra finalidade. Qualquer dúvida, basta entrar em contato com o Encarregado.</p>
                        <button type="submit" className="bg-[#E28B00] py-2 w-full text-white mt-3 cursor-pointer">ENVIAR</button>
                    </form>
                </div>
            </div>
            <MapaIframe/>
        </div>
    )
}