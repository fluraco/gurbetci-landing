import { DashedLine } from "../dashed-line";

const screenshots = [
  {
    title: "Sosyal",
    description: "Güncel Avrupa haberleri",
    image: "/mockups/social.png",
  },
  {
    title: "İlanlar",
    description: "Alım-satım ve daha fazlası",
    image: "/mockups/ilan.png",
  },
  {
    title: "İşletmeler",
    description: "Türk işletmeleri keşfet",
    image: "/mockups/isletme.png",
  },
  {
    title: "Mesajlaşma",
    description: "Toplulukla bağlan",
    image: "/mockups/chat.png",
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
                  <img 
                    src={screen.image} 
                    alt={screen.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Title and Description */}
              <div className="text-center mt-4 space-y-1">
                <h3 className="text-foreground font-semibold text-lg">
                  {screen.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

