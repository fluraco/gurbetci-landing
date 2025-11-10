import {
  Newspaper,
  ShoppingBag,
  MapPin,
  MessageCircle,
  Users,
  Shield,
  Bell,
  Sparkles,
} from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Güncel Haberler",
    description: "Ülkenizdeki güncel haberleri Türkçe çevirisiyle takip edin. Gündem, teknoloji, spor ve daha fazlası.",
    icon: Newspaper,
  },
  {
    title: "İlan Sistemi",
    description: "Alım-satım, emlak, iş ilanları ve diğer her şey. Ücretsiz ve kolay ilan yayınlayın.",
    icon: ShoppingBag,
  },
  {
    title: "Mekanlar",
    description: "Bulunduğunuz bölgedeki Türk restoranları, marketleri, gezilecek yerleri ve işletmeleri keşfedin.",
    icon: MapPin,
  },
  {
    title: "Forum",
    description: "Gurbetci topluluğuyla iletişime geçin. Sorularınızı sorun, forumda istediğinizi paylaşın.",
    icon: MessageCircle,
  },
  {
    title: "Gruplar",
    description: "İlgi alanlarınıza göre gruplara katılın. Yeni arkadaşlıklar kurun.",
    icon: Users,
  },
  {
    title: "Mesajlaşma",
    description: "İnsanlarla kişisel sohbetler oluşturun, sesli veya metinli görüşmeleri güvenle yapın.",
    icon: Shield,
  },
  {
    title: "Bildirimler",
    description: "Önemli haberler ve mesajlarınız için anında bildirim alın.",
    icon: Bell,
  },
  {
    title: "Tamamen Ücretsiz",
    description: "Kullanıcı dostu, modern ve hızlı bir deneyim. Tamamen ücretsiz kullanın.",
    icon: Sparkles,
  },
];

export const FeaturesGurbetci = () => {
  return (
    <section id="features" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            TÜM İHTİYAÇLARINIZ TEK UYGULAMADA
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Avrupa'da <br></br>yaşamınızı kolaylaştırın
          </h2>
          <p className="text-muted-foreground leading-snug">
            Gurbetci SuperApp, Avrupa'da yaşayan Türk gurbetçiler için özel olarak tasarlanmış
            bir süper uygulamadır. Haberlerden ilanlara, mekanlardan foruma kadar her şey burada.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:mt-12 lg:mt-20">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

