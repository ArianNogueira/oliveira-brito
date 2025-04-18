import Image from "next/image";
import Link from "next/link";
import logo from "../assets/LOGO PRINCIPAL SEM FUNDO 1.png";
import fundo from "../assets/contemporary-room-workplace-office-supplies-concept.jpg";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <div>
            <div className="relative text-white text-[20px] font-bold p-5 h-[20em] md:h-[15em] flex justify-around items-center bg-black/50 ">
                <Image
                    src={fundo}
                    alt="Fundo do footer"
                    fill
                    className="object-cover -z-10 rounded-lg"
                />
                <div className="flex flex-col md:flex-row items-center gap-y-10 md:gap-y-0 gap-x-60 text-center relative z-10">
                    <div>
                        <p className="text-[18px] md:text-[20px]">Telefone</p>
                        <p className="text-[18px] md:text-[20px]">(98) 98423-5004</p>
                    </div>
                    <div>
                        <p className="text-[18px] md:text-[20px]">Email</p>
                        <p className="text-[18px] md:text-[20px]">contato@obcontabildade.com.br</p>
                    </div>
                    <div>
                        <p className="text-[18px] md:text-[20px]">Siga nossa redes socias</p>
                        <ul className="flex justify-center items-center mt-2 gap-x-5">
                            <li className="hover:text-[#E28B00] duration-100">
                                <Link href={"https://www.instagram.com/oliveiraebrito_contabilidade?igsh=YTh2eDQ4aWVuOHB4"} target="_blank">
                                    <Instagram strokeWidth={1.8}/>
                                </Link>
                            </li>
                            <li className="hover:text-[#E28B00] duration-100">
                                <Linkedin strokeWidth={1.8} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center p-5 text-white mx-6 gap-y-5 md">
                <div>
                    <Image src={logo} alt="logo" width={112} height={112} />
                </div>
                <div>
                    <ul className="flex flex-col md:flex-row justify-center items-center gap-x-5 font-semibold mb-3">
                        <li className="hover:text-[#E28B00] duration-100">Início</li> <hr className="md:w-px h-3 md:h-6 bg-white border-none "/>
                        <li className="hover:text-[#E28B00] duration-100">Sobre Nós</li> <hr className="md:w-px h-3 md:h-6 bg-white border-none "/>
                        <li className="hover:text-[#E28B00] duration-100">Serviços</li> <hr className="md:w-px h-3 md:h-6 bg-white border-none "/>
                        <li className="hover:text-[#E28B00] duration-100">Abrir Empresa</li> <hr className="md:w-px h-3 md:h-6 bg-white border-none "/>
                        <li className="hover:text-[#E28B00] duration-100">Contato</li>
                    </ul>
                </div>
            </div>
            <hr className="mx-full md:mx-10 border-[#E28B00]" />
            <div className="flex flex-col md:flex-row item-center justify-around my-8 text-[14px] md:text-[16px]">
                <p className="flex flex-col justify-center items-center max-w-[20em] md:max-w-full mx-auto md:mx-0 text-center">
                    <span>Endereço:</span>
                    <Link href={"https://maps.app.goo.gl/m1tTmaJXqGc4kYZw7?g_st=aw"} className="hover:text-[#E28B00] duration-100" target="_blank">Centro Comercial NN Center - Av. Acre, Sala 06 - 1º Piso - Turu, São Luís - MA, 65066-620</Link>
                </p>
                <p className="font-semibold flex justify-center items-center gap-x-3 mt-8 md:mt-0">
                    <Link href={""} className="hover:text-[#E28B00] duration-100">Política de privacidade</Link>  |
                    <Link href={""} className="hover:text-[#E28B00] duration-100">Termos de uso</Link>
                </p>
            </div>
        </div>
    )
}