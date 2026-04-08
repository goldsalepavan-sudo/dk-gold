import { Card, CardContent } from "@/components/ui/card";
import { Banknote, Coins, Unlock } from "lucide-react";
import { motion } from "motion/react";
import type { ElementType } from "react";

interface ServiceCard {
  icon: ElementType;
  title: string;
  description: string;
  highlight: string;
}

const services: ServiceCard[] = [
  {
    icon: Coins,
    title: "Buy Gold at Market Rates",
    description:
      "We purchase all forms of gold — jewellery, coins, bars — at live market prices. No undercutting, no guesswork. You get exactly what your gold is worth.",
    highlight: "Live Market Pricing",
  },
  {
    icon: Unlock,
    title: "Release Pledged Gold",
    description:
      "Recover your pledged gold quickly and hassle-free. We help you release mortgaged or pledged gold with a smooth, transparent process and immediate service.",
    highlight: "Fast & Hassle-Free",
  },
  {
    icon: Banknote,
    title: "Instant Cash Payout",
    description:
      "No waiting, no bank transfers, no delays. Once your gold is valued, you receive cash on the spot. Walk in, get valued, walk out with money in hand.",
    highlight: "Same-Day Payment",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground text-balance">
            Complete Gold Services Under One Roof
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
            Whether you want to sell your gold, release a pledge, or simply need
            quick cash — DK Gold has you covered with fair rates and instant
            service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <Card
                className="h-full bg-card border-border hover:border-primary/40 transition-smooth group shadow-subtle hover:shadow-elevated"
                data-ocid={`service-card-${index}`}
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-6 group-hover:scale-105 transition-smooth shadow-elevated">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="mb-3">
                    <span className="text-xs font-display font-semibold text-primary tracking-wider uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                      {service.highlight}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
