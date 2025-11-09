import { Apple, ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";

export const CTAGurbetci = () => {
  return (
    <section id="download" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Gurbetçi Ailesine Katılın!
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Binlerce gurbetçinin güvendiği uygulama. Hemen indirin, 
            topluluğumuzun bir parçası olun.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="group w-full sm:w-auto"
              asChild
            >
              <a href="#" className="flex items-center">
                <Apple className="mr-2 w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs opacity-70">İndir</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group w-full sm:w-auto"
              asChild
            >
              <a href="#" className="flex items-center">
                <Play className="mr-2 w-5 h-5 fill-current" />
                <div className="text-left">
                  <div className="text-xs opacity-70">İndir</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-foreground">4.8</div>
              <div className="text-sm text-muted-foreground">App Store</div>
              <div className="text-yellow-500">★★★★★</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">İndirme</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">99%</div>
              <div className="text-sm text-muted-foreground">Memnuniyet</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

