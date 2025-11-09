import { Smartphone } from "lucide-react";

import { DashedLine } from "../dashed-line";

const screenshots = [
  {
    title: "Haberler",
    description: "Güncel Polonya haberleri",
  },
  {
    title: "İlanlar",
    description: "Alım-satım ve daha fazlası",
  },
  {
    title: "Mekanlar",
    description: "Türk işletmeleri keşfet",
  },
  {
    title: "Forum",
    description: "Toplulukla bağlan",
  },
];

export const AppPreviewGurbetci = () => {
  return (
    <section id="app" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            MODERN ARAYÜZ
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 text-center max-w-4xl lg:mt-24">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl mb-4">
            Kullanımı Kolay, Görünümü Muhteşem
          </h2>
          <p className="text-muted-foreground text-lg">
            Modern ve şık tasarımıyla her işlemi kolayca gerçekleştirin
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 lg:mt-20">
          {screenshots.map((screen, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Phone Mockup */}
              <div className="relative bg-foreground rounded-[2rem] p-2 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <div className="bg-background rounded-[1.5rem] overflow-hidden aspect-[9/19]">
                  <div className="h-full bg-muted flex flex-col items-center justify-center p-4">
                    <Smartphone className="w-16 h-16 text-foreground/80 mb-4" />
                    <h3 className="text-foreground font-semibold text-lg text-center mb-1">
                      {screen.title}
                    </h3>
                    <p className="text-muted-foreground text-xs text-center">
                      {screen.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm">
            iOS ve Android için optimize edilmiş, hızlı ve akıcı deneyim
          </p>
        </div>
      </div>
    </section>
  );
};

