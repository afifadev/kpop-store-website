import { MessageCircle, Sparkles, Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/628388603780";

const ContactSection = () => {
  return (
    <section id="kontak" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 animate-float opacity-30">
        <Heart className="w-16 h-16 text-primary fill-primary" />
      </div>
      <div className="absolute bottom-10 right-10 animate-float opacity-30" style={{ animationDelay: "1s" }}>
        <Sparkles className="w-20 h-20 text-kpop-purple" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Content Card */}
          <div className="gradient-card rounded-3xl p-8 md:p-12 shadow-card text-center">
            {/* Header */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
                <Sparkles className="w-4 h-4" />
                Hubungi Kami
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mau Order atau <span className="text-gradient">Tanya-tanya?</span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Langsung chat kami via WhatsApp untuk pemesanan, pertanyaan, atau request produk K-Pop favoritmu! Kami fast response 💕
              </p>
            </div>

            {/* WhatsApp Button */}
            <div className="flex flex-col items-center gap-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="whatsapp" 
                  size="xl" 
                  className="group"
                  type="button"
                >
                  <MessageCircle className="w-6 h-6 group-hover:animate-wiggle" />
                  Order via WhatsApp
                  <Send className="w-4 h-4 opacity-70" />
                </Button>
              </a>

              <p className="text-sm text-muted-foreground">
                📱 WhatsApp: <span className="font-semibold text-foreground">0838-8603-780</span>
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold text-foreground">Fast Response</h4>
                <p className="text-sm text-muted-foreground">Balasan cepat 24 jam</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎁</span>
                </div>
                <h4 className="font-semibold text-foreground">Packing Aman</h4>
                <p className="text-sm text-muted-foreground">Bubble wrap + kardus</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💯</span>
                </div>
                <h4 className="font-semibold text-foreground">100% Original</h4>
                <p className="text-sm text-muted-foreground">Produk asli bergaransi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
