import Image from "next/image";
import Link from "next/link";
import contabilidade from "../../assets/Contabilidade.jpg";
import societario from "../../assets/Societário.png";
import fiscal from "../../assets/Fiscal.jpg";
import pessoal from "../../assets/Dpto_Pessoal.jpg";




export function Services() {
    return (
        <div>
            <div className="block md:flex text-center justify-around items-center my-15">
                <div>
                    <h1 className="text-[25px]">Alguns de nossos serviços</h1>
                    <hr className="w-20 mb-10 mt-3 md:mt-0 md:mb-0 mx-auto md:mx-0"/>
                </div>
                <span className="bg-[#E28B00] hover:bg-[#D77300] duration-150 text-white text-[18px] py-2 px-6"><Link href={"#"}>Solicite um orçamento</Link></span>
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
                    className="h-40 w-full rounded-lg"/>
  
                    <div>
                        <h2 className="text-[#D77300] font-extrabold text-[18px] my-2">Societário</h2>
                        <p className="text-[#353335] text-[14px]">Serviços completos em questões que envolvem a parte legal (administrativa) das empresas junto aos órgãos públicos e privados.</p>
                    </div>
                </div>
                <div className="bg-white px-3 py-2 w-70 md:w-full h-[20em] rounded-lg shadow-md flex flex-col items-center gap-y-2 hover:scale-110 duration-300">
                    <Image 
                    src={fiscal} 
                    alt="imagem de fiscal"
                    className="h-40 w-full rounded-lg"/>
      
                    <div>
                        <h2 className="text-[#D77300] font-extrabold text-[18px] my-2">Fiscal</h2>
                        <p className="text-[#353335] text-[14px]">Sua empresa com uma assessoria completa para atender a todas as obrigações fiscais.</p>
                    </div>
                </div>
                <div className="bg-white px-3 py-2 w-70 md:w-full h-[20em] rounded-lg shadow-md flex flex-col items-center gap-y-2 hover:scale-110 duration-300">
                    <Image 
                    src={pessoal} 
                    alt="imagem de dpto pessoal"
                    className="h-40 w-full rounded-lg"/>

                    <div>
                        <h2 className="text-[#D77300] font-extrabold text-[18px] my-2">Dpto Pessoal</h2>
                        <p className="text-[#353335] text-[14px]">Imprescindível para qualquer empresa, sendo responsável pela execução de toda a rotina de departamento de pessoal.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}