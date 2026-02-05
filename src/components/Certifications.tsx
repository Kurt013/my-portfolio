import certificates from "@/data/certificates";

import { Card, CardContent } from "@/components/ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import SectionTemplate from "@/components/sections/SectionTemplate";

const Certifications = () => {
  return (
    <SectionTemplate className="max-w-full">
      <h2 className="text-3xl md:text-4xl font-bold pb-4">Certifications</h2>

      <Carousel className="w-full max-w-[12rem] sm:max-w-xs md:max-w-5xl">
        <CarouselContent className="-ml-1">
          {certificates.map((certificate, index) => (
            <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/2">
              <div className="p-1">
                <Card className="py-0 overflow-hidden">
                  <CardContent className="relative flex aspect-video items-center justify-center p-6">
                    <img
                      src={certificate.certificateImg}
                      alt={certificate.name}
                      className="absolute object-contain"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </SectionTemplate>
  );
};

export default Certifications;
