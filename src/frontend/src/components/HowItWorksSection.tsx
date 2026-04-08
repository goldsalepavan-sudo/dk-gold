import { ClipboardCheck, DollarSign, MapPin } from "lucide-react";
import { motion } from "motion/react";
import type { ElementType } from "react";

interface Step {
  number: string;
  icon: ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: MapPin,
    title: "Bring Your Gold",
    description:
      "Visit our store with your gold jewellery, coins, or bars. No appointment needed — walk in at your convenience during business hours.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Get Instant Valuation",
    description:
      "Our experts assess your gold using certified tools right in front of you. You'll see the purity test and weight measurement live — full transparency guaranteed.",
  },
  {
    number: "03",
    icon: DollarSign,
    title: "Walk Out With Cash",
    description:
      "Agree to our fair market-rate offer and receive cash immediately. No paperwork delays, no waiting period. The entire process takes under 15 minutes.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display font-semibold text-sm tracking-widest uppercase mb-3">
            Simple Process
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground text-balance">
            3 Easy Steps to Get Your Cash
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
            We've made the entire process as simple and fast as possible. From
            walk-in to cash in hand in under 15 minutes.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line — desktop */}
          <div
            className="hidden md:block absolute top-16 left-[16.5%] right-[16.5%] h-px border-t border-dashed border-primary/30"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                data-ocid={`step-${index + 1}`}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center shadow-elevated">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-card border border-primary/40 flex items-center justify-center">
                    <span className="font-display font-bold text-primary text-xs">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
