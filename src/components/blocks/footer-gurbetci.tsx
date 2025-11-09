import { Facebook, Instagram, Mail, MapPin, Twitter } from "lucide-react";

export function FooterGurbetci() {
  const footerLinks = {
    Ürün: [
      { label: "Özellikler", href: "#features" },
      { label: "Uygulama", href: "#app" },
      { label: "İndir", href: "#download" },
    ],
    Şirket: [
      { label: "Hakkımızda", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Kariyer", href: "#" },
    ],
    Destek: [
      { label: "Yardım Merkezi", href: "#" },
      { label: "İletişim", href: "#contact" },
      { label: "Gizlilik", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer id="contact" className="bg-muted/30 border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
                  <span className="text-background font-bold text-xl">G</span>
                </div>
                <span className="text-xl font-bold">
                  Gurbetci
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Polonya'daki Türk gurbetçiler için tasarlanmış süper uygulama. 
                Her şey bir arada.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 pt-4">
                <a
                  href="mailto:info@gurbetci.app"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@gurbetci.app
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  Warszawa, Polska
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1 md:col-span-2">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-4">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Bülten</h3>
              <p className="text-sm text-muted-foreground">
                Yeni özellikler ve güncellemelerden haberdar olun.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-2 text-sm rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all">
                  Abone Ol
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Gurbetci SuperApp. Tüm hakları saklıdır.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-muted hover:bg-primary flex items-center justify-center transition-all hover:scale-110 group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

