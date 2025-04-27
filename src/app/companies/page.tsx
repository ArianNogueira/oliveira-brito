import Image from "next/image";
import img from "../../assets/person-looking-top-skyscraper.jpg";
import imgAgora from "../../assets/portrait-attractive-businessman-celebrates-by-jumping-raises-his-fist-overhead-outdoor.jpg";

export default function Companies() {
    return (
        <div>
            <div className="md:flex items-center justify-around">
                <div className="md:w-[30em] md:mx-0 p-10 md:p-0">
                    <h1 className="text-[2em] md:text-[3em] mb-5 md:w-[10em]">Nunca foi tão fácil abrir sua empresa</h1>
                    <p className="text-[14px] md:text-[16px] text-justify md:w-[36em]">Nós cuidamos de toda a documentação e processos burocráticos para que você tenha sua empresa aberta muito mais rápido.</p>
                </div>
                <div className="flex flex-col bg-white text-black md:w-xl md:p-16">
                    <form className=" md:w-[28em] p-10 md:p-0">
                        <input type="text" required placeholder="Nome" className="w-full border border-gray-500 py-1 px-3 mb-2 outline-none placeholder:text-[#58585869] placeholder:text-[14px]" />
                        <input type="email" required placeholder="E-mail" className="w-full border border-gray-500 py-1 px-3 mb-2 outline-none placeholder:text-[#58585869] placeholder:text-[14px]" />
                        <input type="tel" required placeholder="Telefone" className="w-full border border-gray-500 py-1 px-3 mb-2 outline-none placeholder:text-[#58585869] placeholder:text-[14px]" />
                        <input type="text" required placeholder="Área de atuação" className="w-full border border-gray-500 py-1 px-3 mb-3 outline-none placeholder:text-[#58585869] placeholder:text-[14px]" />
                        <p className="text-[10px] text-justify leading-6">*Os dados pessoais coletados neste formulário têm por finalidade o retorno à mensagem enviada. Referidos dados não serão utilizados para outra finalidade. Qualquer dúvida, basta entrar em contato com o Encarregado.</p>
                        <button type="submit" className="bg-[#E28B00] py-2 w-full text-white mt-3 cursor-pointer">QUERO ABRIR UMA EMPRESA</button>
                    </form>
                </div>
            </div>

            <div className="bg-[#cfcaca] md:flex items-center justify-between px-10 py-20 text-black">
                <div>
                    <Image src={img} alt="Foto lateral" width={400} />
                </div>
                <div>
                    <div className="my-10 md:w-[20em]">
                        <hr className="w-16 md:w-28 border-[#E28B00]" />
                        <h2 className="text-[1.3em] md:text-[2em]">Cuidamos de todos os procedimentos para a abertura do seu negócio</h2>
                    </div>
                    <div className="md:flex flex-wrap gap-x-10 gap-y-5 md:w-[42em] mx-10 md:mx-0">
                        <div className="w-[18em]">
                            <h3 className="font-bold text-[18px] mt-5 md:mt-0">Equipe qualificada​</h3>
                            <p className="text-justify text-[#585858] mt-3">Nossa equipe é formada por profissionais que possuem alta qualificação, experiência e formação direcionada ao segmento, incluindo diversos cursos de especialização.</p>
                        </div>
                        <div className="w-[18em]">
                            <h3 className="font-bold text-[18px] mt-5 md:mt-0">Agilidade</h3>
                            <p className="text-justify text-[#585858] mt-3">Tenha atenção no que é mais importante no seu negócio, com mais tempo e agilidade para cativar e inovar com seus clientes.</p>
                        </div>
                        <div className="w-[18em]">
                            <h3 className="font-bold text-[18px] mt-5 md:mt-0">Crescimento estratégico</h3>
                            <p className="text-justify text-[#585858] mt-3">Crescimento sustentável e de maneira estratégica. Com soluções para sua gestão, desenvolvendo as estratégias em vendas, finanças, pessoas e processos.</p>
                        </div>
                        <div className="w-[18em]">
                            <h3 className="font-bold text-[18px] mt-5 md:mt-0">Inteligência Financeira</h3>
                            <p className="text-justify text-[#585858] mt-3">Controle do financeiro, análises financeiras e monitoramento de receitas, despesas, custos e investimentos. Com a ajuda de um Contador Consultor especializado em gestão.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-x-24 bg-white text-black">
                <div>
                    <div className="flex flex-col items-center mt-10 md:mt-0">
                        <hr className="w-14 md:w-20 border-[#E28B00]"/>
                        <h1 className="mb-10 md:mb-16 text-[1.5em] text-center">Comece agora</h1>
                    </div>
                    <div className="md:flex flex-col items-center gap-y-16 px-3 md:px-0">
                        <div className="md:w-80 flex gap-x-5">
                            <hr className="md:w-px h-3 md:h-32 bg-[#E28B00] border-none "/>
                            <div>
                                <h3 className="font-bold text-[16px] mb-3">Equipe qualificada​</h3>
                                <p className="text-[14px] text-[#585858] mb-5">Nossa equipe é formada por profissionais que possuem alta qualificação, experiência e formação direcionada ao segmento, incluindo diversos cursos de especialização.</p>
                            </div>
                        </div>
                        <div className="md:w-80 flex gap-x-5 md:ml-80 pr-3">
                            <hr className="md:w-px h-3 md:h-26 bg-[#E28B00] border-none "/>
                            <div>
                                <h3 className="font-bold text-[16px] mb-3">Proposta aceita :)</h3>
                                <p className="text-[14px] text-[#585858] mb-5">A partir desse momento, nós vamos acompanhar todas as suas obrigações fiscais e orientar suas ações, mês a mês.</p>
                            </div>
                        </div>
                        <div className="md:w-80 flex gap-x-5">
                            <hr className="md:w-px h-3 md:h-38 bg-[#E28B00] border-none "/>
                            <div>
                                <h3 className="font-bold text-[16px] mb-3">Nossos contadores cuidando da sua empresa</h3>
                                <p className="text-[14px] text-[#585858] mb-10">Nosso time de contadores irá manter todas as obrigações legais da sua empresa em dia. Teve alguma dúvida? Nossa equipe estará a postos para ajudar no que for preciso.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Image src={imgAgora} alt="Foto lateral direito" className="w-full md:w-2xl"/>
                </div>
            </div>
        </div>
    )
}