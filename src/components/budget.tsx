import Image from "next/image"
import inovcao from "../assets/people-working-elegant-cozy-office-space.jpg"

export default function Budget() {
    return (
        <div className="relative w-full h-[30em] bg-black/50">
            <Image
                src={inovcao} alt="logo fundo inovação"
                layout="fill"
                className="object-cover -z-10"
            />
            <div className="absolute bg-white flex flex-col items-start md:left-50 top-30 md:top-25 w-full md:w-[32em] py-10 px-5 md:px-20 leading-none">
                <hr className="border-[#E28B00] w-20" />
                <h1 className="text-[2em] md:text-[3em] text-black max-w-72">Confiança & Inovação</h1>
                <p className="text-[#727171] text-[12px] md:text-[16px] py-5 w-64 md:w-full">Pare de perder seu tempo com burocracia e
                solicite um orçamento com a Contabilidade</p>
                <button className="bg-[#E28B00] text-[12px] md:text-[16px] py-2 px-4 md:px-8">Solicite um orçamento</button>
            </div>
        </div>
    )
}