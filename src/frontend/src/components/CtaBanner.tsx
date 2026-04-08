import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";

const PHONE_DISPLAY = "+91 63017 98850";
const PHONE_HREF = "tel:6301798850";

export default function CtaBanner() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 gradient-gold opacity-90" />
          <div className="absolute inset-0 bg-background/30" />

          {/* Gold shimmer border */}
          <div className="absolute inset-0 rounded-2xl border border-primary/50" />

          <div className="relative z-10 text-center py-16 px-6 sm:px-12">
            <p className="font-display font-semibold text-primary-foreground/70 text-sm tracking-widest uppercase mb-4">
              Ready to Get Started?
            </p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground text-balance mb-6">
              Don't Wait — Get the Best Price for Your Gold Today
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Our experts are standing by. One call is all it takes to get a
              free, no-obligation valuation of your gold.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href={PHONE_HREF} data-ocid="cta-banner-call">
                <Button
                  size="lg"
                  className="gap-3 text-xl px-10 py-7 font-display font-bold bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated hover:scale-105 transition-smooth"
                >
                  <Phone className="w-6 h-6" />
                  Call Us Now
                </Button>
              </a>
              <div className="text-primary-foreground/90 font-display font-semibold text-2xl flex items-center gap-2">
                <ArrowRight className="w-5 h-5 opacity-60" />
                {PHONE_DISPLAY}
              </div>
            </div>

            <p className="mt-8 text-primary-foreground/60 font-body text-sm">
              Available Monday – Saturday · 9:00 AM – 7:00 PM
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
