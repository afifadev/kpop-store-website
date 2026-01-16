import { Sparkles, ShoppingBag, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />
      </div>

      {/* Floating decorations */}
      <div className="absolute top-1/4 left-10 animate-float">
        <Star className="w-8 h-8 text-kpop-gold fill-kpop-gold opacity-60" />
      </div>
      <div className="absolute top-1/3 right-16 animate-float" style={{ animationDelay: "0.5s" }}>
        <Sparkles className="w-10 h-10 text-kpop-purple opacity-70" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float" style={{ animationDelay: "1s" }}>
        <Star className="w-6 h-6 text-primary fill-primary opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-secondary-foreground">
            <Sparkles className="w-4 h-4" />
            #1 K-Pop Merchandise Store di Palu
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-foreground">Temukan </span>
            <span className="text-gradient">K-Pop Merch</span>
            <br />
            <span className="text-foreground">Favoritmu!</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Koleksi lengkap photocard, album, lightstick, dan merchandise K-Pop 
            original dengan harga terjangkau untuk para K-Popers sejati! 💖
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="xl" className="group">
              <ShoppingBag className="w-5 h-5 group-hover:animate-wiggle" />
              Belanja Sekarang
            </Button>
            <Button variant="outline" size="xl">
              Lihat Katalog
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Produk</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">⭐ 4.9</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
