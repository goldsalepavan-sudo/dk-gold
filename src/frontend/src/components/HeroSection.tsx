import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const PHONE_NUMBER = "6301798850";
const PHONE_DISPLAY = "+91 63017 98850";
const PHONE_HREF = `tel:${PHONE_NUMBER}`;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-background"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-gold.dim_1200x700.jpg')",
        }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
      {/* Gold shimmer top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px gradient-gold opacity-60"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6 bg-primary/15 text-primary border-primary/30 font-body text-xs tracking-widest uppercase px-4 py-1.5">
              Trusted Gold Buyers Since Day One
            </Badge>
          </motion.div>

          <motion.h1
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight text-balance"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get <span className="text-primary">Instant Cash</span> for Your Gold
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-muted-foreground font-body leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            DK Gold buys all gold at live market rates and releases pledged gold
            fast. Walk in with your gold — walk out with cash. No delays, no
            hidden charges.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href={PHONE_HREF} data-ocid="hero-cta-call">
              <Button
                size="lg"
                className="gap-3 text-lg px-8 py-6 font-display font-semibold shadow-elevated hover:scale-105 transition-smooth w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
            </a>
            <a href="#services">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 text-base px-8 py-6 font-display border-primary/30 text-primary hover:bg-primary/10 transition-smooth w-full sm:w-auto"
              >
                Our Services
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="font-display font-semibold text-primary text-lg">
              {PHONE_DISPLAY}
            </span>
          </motion.div>

          <motion.div
            className="mt-3 flex items-start gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <MapPin className="w-4 h-4 text-primary/70 mt-0.5 shrink-0" />
            <span className="text-muted-foreground font-body text-sm">
              Opposite to D-Mart Lane, Kavuri Hills, Madhapur, Hyderabad
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/60 hover:text-primary transition-smooth"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        aria-label="Scroll to services"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}
