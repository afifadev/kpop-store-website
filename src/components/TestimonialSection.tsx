import { Star, Quote, Sparkles } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  message: string;
  product: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rina K.",
    location: "Palu",
    rating: 5,
    message: "Photocardnya original semua dan packagingnya super aman! Pengiriman juga cepat. Pasti repeat order lagi! 💕",
    product: "Photocard BTS",
  },
  {
    id: 2,
    name: "Dinda S.",
    location: "Makassar",
    rating: 5,
    message: "Album BLACKPINK yang aku beli kondisinya perfect! Seller ramah dan fast response. Recommended banget!",
    product: "Album BLACKPINK",
  },
  {
    id: 3,
    name: "Ayu M.",
    location: "Jakarta",
    rating: 5,
    message: "Lightstick NCT asli dan berfungsi dengan baik. Harga lebih murah dari toko lain. Thank you kak! 🌟",
    product: "Lightstick NCT",
  },
  {
    id: 4,
    name: "Fitri L.",
    location: "Palu",
    rating: 5,
    message: "Keychain akriliknya lucu banget! Kualitasnya bagus dan warna tidak mudah pudar. Love it! 💖",
    product: "Keychain Stray Kids",
  },
  {
    id: 5,
    name: "Mega P.",
    location: "Bandung",
    rating: 5,
    message: "Case HP designnya aesthetic banget, kualitas cetak jelas dan casenya kuat. Worth the price!",
    product: "Case HP NewJeans",
  },
  {
    id: 6,
    name: "Sarah A.",
    location: "Surabaya",
    rating: 5,
    message: "Semua produk yang aku beli selalu memuaskan. Afifa K-Pop Store emang the best! 💜",
    product: "Various Items",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 relative group">
      {/* Quote icon */}
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />

      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-kpop-gold text-kpop-gold" />
        ))}
      </div>

      {/* Message */}
      <p className="text-foreground/90 mb-4 leading-relaxed">"{testimonial.message}"</p>

      {/* Product tag */}
      <span className="inline-block text-xs font-medium text-primary bg-secondary px-3 py-1 rounded-full mb-4">
        {testimonial.product}
      </span>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-10 h-10 rounded-full gradient-pink flex items-center justify-center text-primary-foreground font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section id="testimoni" className="py-20 gradient-soft">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-3">
            <Sparkles className="w-4 h-4" />
            Testimoni Pelanggan
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apa Kata <span className="text-gradient">Mereka?</span>
          </h2>
          <p className="text-muted-foreground">
            Lebih dari 1000+ pelanggan puas dengan produk dan pelayanan kami!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
