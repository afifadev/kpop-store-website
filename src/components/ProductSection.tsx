import { ShoppingCart, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import photocardImg from "@/assets/product-photocard.jpg";
import albumImg from "@/assets/album.jpg";
import lightstickImg from "@/assets/lightstick.jpg";
import keychainImg from "@/assets/product-keychain.jpg";
import caseImg from "@/assets/case.jpg";

const WHATSAPP_LINK = "https://wa.me/628388603780";

interface Product {
  id: number;
  name: string;
  category: string;
  priceFrom: string;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Photocard Official",
    category: "Photocard",
    priceFrom: "Rp 15.000",
    image: photocardImg,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Album K-Pop Original",
    category: "Album",
    priceFrom: "Rp 200.000",
    image: albumImg,
    badge: "Popular",
  },
  {
    id: 3,
    name: "Lightstick Official",
    category: "Lightstick",
    priceFrom: "Rp 350.000",
    image: lightstickImg,
  },
  {
    id: 4,
    name: "Keychain Acrylic Cute",
    category: "Keychain",
    priceFrom: "Rp 25.000",
    image: keychainImg,
    badge: "New",
  },
  {
    id: 5,
    name: "Case HP K-Pop Design",
    category: "Case HP",
    priceFrom: "Rp 35.000",
    image: caseImg,
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const orderLink = `${WHATSAPP_LINK}?text=${encodeURIComponent(`Halo Afifa K-Pop Store! Saya tertarik dengan produk: ${product.name} (${product.category}). Boleh info lebih lanjut?`)}`;

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            <Sparkles className="w-3 h-3" />
            {product.badge}
          </span>
        </div>
      )}

      {/* Wishlist button */}
      <button className="absolute top-3 right-3 z-10 p-2 bg-card/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground">
        <Heart className="w-4 h-4" />
      </button>

      {/* Image */}
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {product.category}
          </span>
          <h3 className="font-display font-bold text-lg text-foreground mt-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground">Mulai dari</span>
            <p className="text-lg font-bold text-primary">{product.priceFrom}</p>
          </div>
          <a href={orderLink} target="_blank" rel="noopener noreferrer">
            <Button variant="cute" size="sm" type="button">
              <ShoppingCart className="w-4 h-4" />
              Order
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  return (
    <section id="produk" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
            <Sparkles className="w-4 h-4" />
            Produk Terlaris
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Koleksi <span className="text-gradient">Merchandise K-Pop</span>
          </h2>
          <p className="text-muted-foreground">
            Temukan berbagai merchandise K-Pop original dan berkualitas untuk melengkapi koleksimu!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Lihat Semua Produk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
