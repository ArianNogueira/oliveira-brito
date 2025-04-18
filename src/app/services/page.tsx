import Image from "next/image";
import kuren from "../../assets/WhatsApp Image 2025-04-12 at 22.11.17.jpeg";
import Budget from "@/components/budget";
import Link from "next/link";

export default function Services() {
    return (
        <div>
            <div className="flex justify-around my-20">
                <div className="hidden md:block">
                    <Image src={kuren} alt="Foto Kuren" width={200} />
                    <p className="mt-3">Kerolem Nogueira - CEO</p>
                </div>
                <div className="mx-8 md:flex flex-wrap justify-between md:w-[50em]">
                    <div className="w-full md:w-[15em]">
                        <h2 className="text-[18px] font-bold mb-2">Contabilidade</h2>
                        <p className="text-justify mb-8 md:mb-0">Nosso departamento contábil está pronto para atender as necessidades legais da sua empresa.</p>
                    </div>
                    <div className="w-full md:w-[15em]">
                        <h2 className="text-[18px] font-bold mb-2">Abertura De Empresa</h2>
                        <p className="text-justify mb-8 md:mb-0">Abra sua empresa com a estrutura societária mais adequada, sempre com foco na economia tributária.</p>
                    </div>
                    <div className="w-full md:w-[15em]">
                        <h2 className="text-[18px] font-bold mb-2">Fiscal</h2>
                        <p className="text-justify mb-8 md:mb-0">Sua empresa com uma assessoria completa para atender a todas as obrigações fiscais.</p>
                    </div>
                    <div className="w-full md:w-[15em]">
                        <h2 className="text-[18px] font-bold mb-2">Financeiro</h2>
                        <p className="text-justify mb-8 md:mb-0">Terceirização do Financeiro permite que você mantenha-se focado na gestão dos seus négocios.</p>
                    </div>
                    <div className="w-full md:w-[15em]">
                        <h2 className="text-[18px] font-bold mb-2">Departamento Pessoal</h2>
                        <p className="text-justify mb-8 md:mb-0">Imprescindível para qualquer empresa, sendo responsável pela execução de toda a rotina de departamento de pessoal.</p>
                    </div>
                    <div className="w-full md:w-[15em]">
                        <h2 className="text-[18px] font-bold mb-2">Societário</h2>
                        <p className="text-justify">Serviços completos em questões que envolvem a parte legal (administrativa) das empresas junto aos órgãos públicos e privados.</p>
                    </div>
                </div>
            </div>
            <Budget />
            <div className="md:flex justify-around bg-[#F7F6FA] text-black py-28 px-8 md:px-0">
                <div className="flex flex-col gap-y-5 md:w-80">
                    <div>
                        <hr className="border-[#E28B00] w-20 md:w-28" />
                        <h1 className="text-[2em] md:text-[3em]">O que nos diferencia?</h1>
                    </div>
                    <p className="text-[#585858] text-justify">Para ser diferente, fazer você confiar na gente com informação limpa e de  maneira objetiva, ao contratar a Contábil, você terá:</p>
                    <hr className="border-gray-400"/>
                    <div className="flex gap-x-5 my-5 md:my-0 items-center">
                        <Link href={""} className="bg-[#E28B00] text-white py-1 px-6 hover:bg-[#D77300] duration-200">
                            Contratar
                        </Link>
                        <Link href={""} className="border border-black py-1 px-6 hover:bg-[#D77300] hover:border-[#D77300] hover:text-white duration-200">
                            Abrir empresa
                        </Link>
                    </div>
                </div>
                <hr className="my-10 w-full border-gray-400 md:hidden"/>
                <div className="flex flex-col gap-y-5 md:w-[35em]">
                    <div>
                        <h2 className="text-[18px] font-bold">Equipe qualificada</h2>
                        <p className="text-[#585858] text-[14px] text-justify mt-2 w-[24em] md:w-[35em]">Nossa equipe é formada por profissionais que possuem alta qualificação, experiência e formação direcionada ao segmento, incluindo diversos cursos de especialização.</p>
                    </div>
                    <hr className="border-gray-400 w-[23em] md:w-xl"/>
                    <div>
                        <h2 className="text-[18px] font-bold">Agilidade</h2>
                        <p className="text-[#585858] text-[14px] text-justify mt-2 w-[24em] md:w-[35em]">Tenha atenção no que é mais importante no seu negócio, com mais tempo e agilidade para cativar e inovar com seus clientes.</p>
                    </div>
                    <hr className="border-gray-400 w-[23em] md:w-xl"/>
                    <div>
                        <h2 className="text-[18px] font-bold">Crescimento estratégico</h2>
                        <p className="text-[#585858] text-[14px] text-justify mt-2 w-[24em] md:w-[35em]">Crescimento sustentável e de maneira estratégica. Com soluções para sua gestão, desenvolvendo as estratégias em vendas, finanças, pessoas e processos</p>
                    </div>
                    <hr className="border-gray-400 w-[23em] md:w-xl"/>
                    <div>
                        <h2 className="text-[18px] font-bold">Inteligência Financeira</h2>
                        <p className="text-[#585858] text-[14px] text-justify mt-2 w-[24em] md:w-[35em]">Controle do financeiro, análises financeiras e monitoramento de receitas, despesas, custos e investimentos. Com a ajuda de um Contador Consultor especializado em gestão.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}