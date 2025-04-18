import { Card, CardContent } from "../ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"
import Image from "next/image"
import lipe from "../../assets/WhatsApp Image 2025-04-03 at 21.17.50.jpeg"

const carouselItems = [
    {
        id: 1,
        name: "Lipe São João",
        image: lipe,
        text: "As dúvidas são sempre esclarecidas com atendimento prestativo, que entende o que eu digo. Pagamentos são realizados rigorosamente em dia. Excelente empresa. Recomendo!",
    },
    {
        id: 2,
        name: "Lipe São João",
        image: lipe,
        text: "Pontualidade na entrega de documentos e suporte atencioso. Sempre atendem prontamente minhas solicitações",
    },
    {
        id: 3,
        name: "Lipe São João",
        image: lipe,
        text: "Equipe comprometida com a satisfação do cliente, atende as necessidade de minha empresa.",
    }

]

export function Testimonials() {
    return (
        <div className="bg-[#E8E8E8] text-center py-20 px-3">
            <div className="flex flex-col items-center">
                <h1 className="text-[2em]">Depoimentos</h1>
                <hr className="border border-[#E28B00] w-20 mb-10" />
            </div>
            <div className="px-10">
                <Carousel className="w-full max-w-[25em] md:max-w-[40em] mx-auto">
                    <CarouselContent>
                        {carouselItems.map((item) => (
                            <CarouselItem key={item.id}>
                                <div className="p-1 block md:flex items-center justify-between w-full">
                                    <div className="inline-flex md:flex md:flex-col items-center gap-x-10 md:gap-y-2">
                                        <Image src={item.image} alt="foto pessoal" width={80} height={80} />
                                        <p className="text-[#E28B00] font-bold">{item.name}</p>
                                    </div>
                                    <Card className="max-h-[9em] md:max-h-[10em] max-w-[30em] mt-5 md:mt-0">
                                        <CardContent className="flex aspect-square justify-center">
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
        </div>
    )
}