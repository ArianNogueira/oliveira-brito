"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import contabilidade from "../assets/Contabilidade.jpg";
import societario from "../assets/Societário.png";
import fiscal from "../assets/Fiscal.jpg";
import pessoal from "../assets/Dpto_Pessoal.jpg";
import whatsapp from "../assets/whatsapp1.png";

import { Card, CardContent } from "./ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"
import Commenter1 from "../assets/Commenter 1.png"
import Commenter2 from "../assets/Commenter 2.png"
import Commenter3 from "../assets/Commenter 3.png"
import Budget from "./budget";

const carouselItems = [
    {
        id: 1,
        name: "Arian Viegas",
        image: Commenter1,
        text: "Ótimo atendimento, rápido e eficiente. Melhor acessória de São Luís.",
    },
    {
        id: 2,
        name: "Fabio Guilherme",
        image: Commenter2,
        text: "Atendimento foi perfeito, entrega no prazo.",
    },
    {
        id: 3,
        name: "Erik Filho",
        image: Commenter3,
        text: "Atendimento excelente! Super indico 👏🏻👍🏻👏🏻😃😃",
    }

]

export default function Initial() {

    const [isOpen, setIsOpen] = useState(false);
    const toogleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
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

            <div className="block md:flex text-center justify-around items-center my-15">
                <div>
                    <h1 className="text-[25px]">Alguns de nossos serviços</h1>
                    <hr className="w-20 mb-10 mt-3 md:mt-0 md:mb-0 mx-auto md:mx-0" />
                </div>
                <span className="bg-[#E28B00] hover:bg-[#D77300] duration-150 text-white text-[18px] py-2 px-6"><Link href={"/contact"}>Solicite um orçamento</Link></span>
            </div>
            <div className="inline-flex flex-wrap md:flex-nowrap md:flex justify-center md:justify-around items-center max-w-[70em] md:mx-auto gap-x-10 gap-y-5">
                <div className="bg-white px-3 py-2 w-70 md:w-full h-[20em] rounded-lg shadow-md flex flex-col items-center gap-y-2 hover:scale-110 duration-300">
                    <Image
                        src={contabilidade}
                        alt="imagem de contabilidade"
                        className="h-40 w-full rounded-lg"
                    />
                    <div>
                        <h2 className="text-[#D77300] font-extrabold text-[18px] my-2">Contabilidade</h2>
                        <p className="text-[#353335] text-[14px]">Nosso departamento contábil está pronto para atender as necessidades legais da sua empresa.</p>
                    </div>
                </div>
                <div className="bg-white px-3 py-2 w-70 md:w-full h-[20em] rounded-lg shadow-md flex flex-col items-center gap-y-2 hover:scale-110 duration-300">
                    <Image
                        src={societario}
                        alt="imagem de societário"
                        className="h-40 w-full rounded-lg" />

                    <div>
                        <h2 className="text-[#D77300] font-extrabold text-[18px] my-2">Societário</h2>
                        <p className="text-[#353335] text-[14px]">Serviços completos em questões que envolvem a parte legal (administrativa) das empresas junto aos órgãos públicos e privados.</p>
                    </div>
                </div>
                <div className="bg-white px-3 py-2 w-70 md:w-full h-[20em] rounded-lg shadow-md flex flex-col items-center gap-y-2 hover:scale-110 duration-300">
                    <Image
                        src={fiscal}
                        alt="imagem de fiscal"
                        className="h-40 w-full rounded-lg" />

                    <div>
                        <h2 className="text-[#D77300] font-extrabold text-[18px] my-2">Fiscal</h2>
                        <p className="text-[#353335] text-[14px]">Sua empresa com uma assessoria completa para atender a todas as obrigações fiscais.</p>
                    </div>
                </div>
                <div className="bg-white px-3 py-2 w-70 md:w-full h-[20em] rounded-lg shadow-md flex flex-col items-center gap-y-2 hover:scale-110 duration-300">
                    <Image
                        src={pessoal}
                        alt="imagem de dpto pessoal"
                        className="h-40 w-full rounded-lg" />

                    <div>
                        <h2 className="text-[#D77300] font-extrabold text-[18px] my-2">Dpto Pessoal</h2>
                        <p className="text-[#353335] text-[14px]">Imprescindível para qualquer empresa, sendo responsável pela execução de toda a rotina de departamento de pessoal.</p>
                    </div>
                </div>
            </div>

            <section className="block md:flex justify-center items-center mt-20 gap-x-52 bg-white py-10 px-5 md:px-0">
                <div className="max-w-[15em]">
                    <hr className="w-20 border border-[#E28B00]" />
                    <h1 className="text-[#353335] text-[3em] mb-5 md:mb-0">Sobre a Contabilidade</h1>
                </div>
                <div className="max-w-[28em]">
                    <p className="text-[#353335]">
                        Somos uma empresa de prestação de serviços contábeis, fiscais, trabalhistas e societários, que tem como objetivo atender as empresas que desejam ter as melhores soluções para o seu desenvolvimento. <br /> <br /> Investimos constantemente em alta tecnologia e contamos com profissionais de contabilidade que frequentemente aperfeiçoam suas competências técnicas. Somos motivados pela sua satisfação, somos apaixonados pelo que fazemos e fazemos sempre pensando em você.
                    </p>
                </div>
            </section>

            <Budget />

            <section className="bg-[#E8E8E8] text-center py-20 px-3">
                <div className="flex flex-col items-center">
                    <h1 className="text-[2em]">Depoimentos</h1>
                    <hr className="border border-[#E28B00] w-20 mb-10" />
                </div>
                <div className="px-10">
                    <Carousel className="w-full max-w-[25em] md:max-w-[40em] mx-auto">
                        <CarouselContent>
                            {carouselItems.map((item) => (
                                <CarouselItem key={item.id}>
                                    <div className="p-1 block md:flex items-center justify-around w-full">
                                        <div className="inline-flex md:flex md:flex-col items-center gap-x-10 md:gap-y-2">
                                            <Image src={item.image} alt="foto pessoal" width={80} height={80} />
                                            <p className="text-[#E28B00] font-bold">{item.name}</p>
                                        </div>
                                        <Card className="max-h-[9em] md:max-h-[10em] md:w-[30em] mt-5 md:mt-0">
                                            <CardContent className="flex aspect-square ">
                                                <span className="text-[15px] font-normal text-start">
                                                    {item.text}
                                                </span>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>
            <div className="fixed bottom-10 right-4 md:right-8 z-50">
                <Link href="https://wa.me/559884235004">
                    <Image
                        src={whatsapp}
                        alt="Ícone do WhatsApp"
                        // width={70}
                        className="hover:scale-110 transition-transform duration-200 rounded-full w-16 md:w-20"
                    />
                </Link>
            </div>

        </div>
    )
}