import { Eye, ShieldCheck, Star, Zap } from "lucide-react";
import { motion } from "motion/react";
import type { ElementType } from "react";

interface TrustStat {
  icon: ElementType;
  value: string;
  label: string;
  description: string;
}

const trustStats: TrustStat[] = [
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Fair Market Prices",
    description:
      "We use live market rates to calculate your gold's exact value — no undercutting.",
  },
  {
    icon: Zap,
    value: "< 15 min",
    label: "Instant Cash",
    description:
      "Walk in and walk out with cash in hand within 15 minutes, guaranteed.",
  },
  {
    icon: Star,
    value: "1000+",
    label: "Happy Customers",
    description:
      "Thousands of satisfied customers trust DK Gold for all their gold needs.",
  },
  {
    icon: Eye,
    value: "Always",
    label: "Transparent Process",
    description:
      "Every step — testing, weighing, pricing — done openly in front of you.",
  },
];

export default function TrustSection() {
  return (
    <section id="why-us" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground text-balance">
            Built on Trust. Powered by Fairness.
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
            DK Gold is built on a foundation of transparency and trust. Here's
            why our customers keep coming back.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-card border border-border hover:border-primary/40 rounded-xl p-6 text-center group hover:shadow-elevated transition-smooth"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-ocid={`trust-stat-${index}`}
            >
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth shadow-subtle">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="font-display font-bold text-3xl text-primary mb-1">
                {stat.value}
              </div>
              <div className="font-display font-semibold text-foreground text-sm mb-2">
                {stat.label}
              </div>
              <p className="text-muted-foreground font-body text-xs leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
