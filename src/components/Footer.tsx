import { Heart, MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/628388603780";
const INSTAGRAM_LINK = "https://instagram.com/afifasmr17";

const Footer = () => {
  return (
    <footer className="gradient-pink py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 font-display text-2xl font-bold text-primary-foreground mb-4">
              <Heart className="w-6 h-6 fill-primary-foreground" />
              Afifa K-Pop Store
            </a>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Toko K-Pop merchandise terpercaya di Palu! Menyediakan berbagai produk official & original untuk para K-Popers sejati. 💖
            </p>
            <div className="flex gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="secondary" 
                  size="icon"
                  className="hover:scale-110"
                  type="button"
                >
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="secondary" 
                  size="icon"
                  className="hover:scale-110"
                  type="button"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-primary-foreground mb-4">Menu</h4>
            <ul className="space-y-2">
              {["Home", "Produk", "Testimoni", "Kontak"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg text-primary-foreground mb-4">Kontak Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>0838-8603-780</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <Instagram className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>@afifasmr17</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Palu, Jalan Dewi Sartika Lorong Kenangan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 border-t border-primary-foreground/20">
          <span className="text-primary-foreground/90 font-medium">Ready to shop?</span>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button 
              variant="secondary" 
              size="lg"
              className="group"
              type="button"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-wiggle" />
              Chat WhatsApp
            </Button>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} Afifa K-Pop Store. Made with 
            <Heart className="w-4 h-4 inline mx-1 fill-primary-foreground" /> 
            for K-Pop lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
