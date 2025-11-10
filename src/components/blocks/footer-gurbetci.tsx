import { Instagram, Mail, MapPin } from "lucide-react";

export function FooterGurbetci() {
  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/gurbetciapp", 
      label: "Instagram" 
    },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      href: "https://www.tiktok.com/@gurbetciapp", 
      label: "TikTok" 
    },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img 
                src="/logos/gurbetciicon.png" 
                alt="Gurbetci Logo" 
                className="w-10 h-10 rounded-xl"
              />
              <span className="text-xl font-bold">
                Gurbetci
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Avrupa'daki Türk gurbetçiler için tasarlanmış süper uygulama. 
              Her şey bir arada.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <a
                href="mailto:info@gurbetci.app"
                className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@gurbetci.app
              </a>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Warszawa, Polska
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary flex items-center justify-center transition-all hover:scale-110 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gurbetci SuperApp. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
