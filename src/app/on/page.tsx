"use client";

import Image from "next/image";
import crescimento from "../../assets/business-concept-with-graphic-holography.jpg"
import { useEffect, useState } from "react";
import Budget from "@/components/budget";
import fabin from "../../assets/file.png";
import kuren from "../../assets/WhatsApp Image 2025-04-12 at 22.11.17.jpeg";

export default function On() {

    const [count, setCount] = useState(0);
    const [countClients, setCountClients] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = 99;
        const endCLient = 50;
        const duration = 3000;
        const interval = 10;
        const step = end / (duration / interval);
        const stepCLient = endCLient / (duration / interval);

        const animation = setInterval(() => {
            start += step;
            start += stepCLient;
            setCount(Math.round(start));
            setCountClients(Math.round(start));

            if (start >= end && start >= endCLient) {
                setCount(end);
                setCountClients(endCLient);
                clearInterval(animation)
            }

        }, interval)

        return () => clearInterval(animation)
    }, []);

    return (
        <div>
            <div className="md:flex gap-x-12 justify-center my-15 px-5 md:px-0">
                <div className="md:w-[30em]">
                    <p className="text-justify">Somos uma empresa de prestação de serviços contábeis, fiscais, trabalhistas e societários, que tem como objetivo atender as empresas que desejam ter as melhores soluções para o seu desenvolvimento. <br /> <br /> Investimos constantemente em alta tecnologia e contamos com profissionais de contabilidade que frequentemente aperfeiçoam suas competências técnicas. Somos motivados pela sua satisfação, somos apaixonados pelo que fazemos e fazemos sempre pensando em você.</p>
                </div>
                <hr className="md:w-px h-0.5 md:h-72 my-6 md:my-0 bg-white border-none " />
                <div className="flex flex-col gap-y-5 md:w-[30em] text-justify">
                    <div>
                        <h2 className="mb-2 font-extrabold text-[18px]">Missão</h2>
                        <p>“Fornecer ao cliente toda estrutura necessária para que ele se concentre somente na administração do seu ramo de negócio.”</p>
                    </div>
                    <div>
                        <h2 className="mb-2 font-extrabold text-[18px]">Missão</h2>
                        <p>“Estabelecimento de parceria com nossos clientes e responsabilidade profissional como principal objetivo.”</p>
                    </div>
                    <div>
                        <h2 className="mb-2 font-extrabold text-[18px]">Missão</h2>
                        <p>“Qualidade e Transparência.”</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#F7F6FA] md:flex justify-center items-center text-center gap-x-28 py-20">
                <div className="text-black">
                    <span className="text-[2.5em]">{count}%</span>
                    <p className="text-[1.5em]">Satisfação</p>
                </div>
                <div className="text-center mx-5 md:mx-0 my-5 md:my-0">
                    <Image src={crescimento} alt="logo de crescimento" width={450} />
                </div>
                <div className="text-black">
                    <span className="text-[2.5em]">+{countClients}</span>
                    <p className="text-[1.5em]">Clientes</p>
                </div>
            </div>

            <Budget />

            <div className="bg-[#cfcaca] py-20">
                <div className="mx-10 md:mx-28">
                    <h1 className="text-[1.5em] text-black font-light md:text-[2em]">Nossa Equipe</h1>
                    <hr className="border border-[#E28B00] w-20 md:w-24"/>
                </div>
                <div className="mx-20 md:flex justify-around mt-20">
                    <div>
                        <Image src={fabin} alt="Foto de Fabin" height={256} width={256} className="grayscale hover:grayscale-0 transition-all duration-300"/>
                        <h3 className="text-[#E28B00] font-bold mt-3">Fábio Oliveira</h3>
                        <p className="text-[#585858] mb-10 md:mb-0">CEO</p>
                    </div>
                    <div>
                        <Image src={kuren} alt="Foto de Kero" width={144} className="grayscale hover:grayscale-0 transition-all duration-300"/>
                        <h3 className="text-[#E28B00] font-bold mt-3">Kerolem Nogueira</h3>
                        <p className="text-[#585858] mb-10 md:mb-0">CEO</p>
                    </div>
                    <div className="bg-black px-5 py-6 h-64 w-64 hover:bg-[#D77300] duration-300">
                        <h2 className="text-[18px] font-bold mb-3 w-30">Experiência, qualidade e prontidão</h2>
                        <p className="text-justify text-[14px]">ao seu lado para alcançar o sucesso e realizar os sonhos da sua empresa de acordo com a legislação</p>
                    </div>
                </div>
            </div>
        </div>
    )
}