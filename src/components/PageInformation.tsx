'use client';

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const conteudoPorPagina: Record<string, { titulo: string }> = {
    "/": { titulo: "Contabilidade profissional e transparente" },
    "/on": { titulo: "Sobre Nós" },
    "/services": { titulo: "Serviços" },
    "/companies": { titulo: "Abrir Empresa" },
    "/contact": { titulo: "Contato" },
};

export default function PageInformation() {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState(pathname);

    useEffect(() => {
        setCurrentPath(pathname);
    }, [pathname]);

    const conteudo = conteudoPorPagina[currentPath];

    return (
        <div>
            <AnimatePresence mode="wait">
                {conteudo && (
                    <motion.div
                        key={currentPath}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {currentPath === "/" ? (
                            <div className="text-white mx-auto flex flex-col justify-center md:items-start items-center mt-10 max-w-[23em] md:max-w-[25em] md:ml-30">
                                <h1 className="text-[2.5em] md:text-[3.5em] font-sans text-center md:text-start leading-none">
                                    {conteudo.titulo}
                                </h1>
                                <div className="flex justify-center md:justify-normal gap-x-4 mt-5 w-full">
                                    <span className="border px-3 py-2 w-60 text-center text-[14px] bg-[#D77300]">
                                        <Link href={"/contact"}>Solicite um orçamento</Link>
                                    </span>
                                    <span className="border px-3 py-2 w-60 text-center text-[14px] hover:bg-[#E28B00] duration-100 hover:border-[#E28B00] cursor-pointer">
                                        <Link href={"/companies"}>Abra sua empresa</Link>
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className="mt-30 md:ml-20 text-center md:text-left">
                                <div className="text-[12px] md:text-[14px]">
                                    <Link href="/">Início</Link> &gt; {conteudo.titulo}
                                </div>
                                <h1 className="text-[2em] md:text-[3em]">{conteudo.titulo}</h1>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
