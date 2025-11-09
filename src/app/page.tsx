import { Background } from "@/components/background";
import { AppPreviewGurbetci } from "@/components/blocks/app-preview-gurbetci";
import { CTAGurbetci } from "@/components/blocks/cta-gurbetci";
import { FAQ } from "@/components/blocks/faq";
import { FeaturesGurbetci } from "@/components/blocks/features-gurbetci";
import { HeroGurbetci } from "@/components/blocks/hero-gurbetci";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <HeroGurbetci />
        <FeaturesGurbetci />
      </Background>
      <AppPreviewGurbetci />
      <Background variant="bottom">
        <FAQ />
        <CTAGurbetci />
      </Background>
    </>
  );
}
