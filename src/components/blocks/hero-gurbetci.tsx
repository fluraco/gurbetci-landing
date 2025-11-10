import {
  Newspaper,
  ShoppingBag,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";

const features = [
  {
    title: "Güncel Haberler",
    description: "Ülkedeki haberleri Türkçe çevirisiyle takip edin",
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
    description: "Gurbetci topluluğuyla iletişime geçin",
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
            Avrupa'daki Türk gurbetçiler için her şey bir arada! Haberler, ilanlar, mekanlar, forum ve daha fazlası
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <a href="https://apps.apple.com/tr/app/gurbetci-superapp/id6754301307" target="_blank" rel="noopener noreferrer">
              <img src="/appstore.webp" alt="App Store'dan İndir" className="h-12 sm:h-14 hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.gurbetci.app" target="_blank" rel="noopener noreferrer">
              <img src="/googleplay.webp" alt="Google Play'den İndir" className="h-12 sm:h-14 hover:opacity-80 transition-opacity" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-foreground">100+</div>
              <div className="text-sm text-muted-foreground">Kullanıcı</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">10+</div>
              <div className="text-sm text-muted-foreground">İlan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">100+</div>
              <div className="text-sm text-muted-foreground">İşletme</div>
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
    </section>
  );
};

