import {
  Smartphone,
  Newspaper,
  ShoppingBag,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Güncel Haberler",
    description: "Polonya haberlerini Türkçe çevirisiyle takip edin",
    icon: Newspaper,
  },
  {
    title: "İlan Sistemi",
    description: "Alım-satım, emlak, iş ilanları ve daha fazlası",
    icon: ShoppingBag,
  },
  {
    title: "Mekanlar",
    description: "Türk restoranları, marketleri ve işletmeleri keşfedin",
    icon: MapPin,
  },
  {
    title: "Forum & Topluluk",
    description: "Gurbetçi topluluğuyla iletişime geçin",
    icon: MessageCircle,
  },
];

export const HeroGurbetci = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            Gurbetci SuperApp
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Polonya'daki Türk gurbetçiler için her şey bir arada! Haberler, ilanlar, mekanlar, forum ve daha fazlası
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild size="lg">
              <a href="#download">
                App Store'dan İndir
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="#download"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Google Play'den İndir
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Kullanıcı</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">5K+</div>
              <div className="text-sm text-muted-foreground">İlan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">1K+</div>
              <div className="text-sm text-muted-foreground">Mekan</div>
            </div>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* App Preview Image */}
      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full bg-muted rounded-2xl flex items-center justify-center shadow-lg max-lg:rounded-tr-none border">
          <Smartphone className="w-32 h-32 md:w-48 md:h-48 text-muted-foreground/20" />
          <div className="absolute bottom-10 left-10">
            <p className="text-2xl md:text-4xl font-bold mb-2">Mobil Odaklı Tasarım</p>
            <p className="text-lg md:text-xl text-muted-foreground">iOS ve Android için optimize edildi</p>
          </div>
        </div>
      </div>
    </section>
  );
};

