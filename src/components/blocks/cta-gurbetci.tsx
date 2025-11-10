
export const CTAGurbetci = () => {
  return (
    <section id="download" className="py-20 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Gurbetci Ailesine Katılın!
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Binlerce gurbetçinin güvendiği uygulama. Hemen indirin, 
            topluluğumuzun bir parçası olun.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <a href="https://apps.apple.com/tr/app/gurbetci-superapp/id6754301307" target="_blank" rel="noopener noreferrer">
              <img src="/appstore.webp" alt="App Store'dan İndir" className="h-14 sm:h-16 hover:opacity-80 transition-opacity" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.gurbetci.app" target="_blank" rel="noopener noreferrer">
              <img src="/googleplay.webp" alt="Google Play'den İndir" className="h-14 sm:h-16 hover:opacity-80 transition-opacity" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-foreground">4.8</div>
              <div className="text-sm text-muted-foreground">App Store</div>
              <div className="text-yellow-500">★★★★★</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">1K+</div>
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

