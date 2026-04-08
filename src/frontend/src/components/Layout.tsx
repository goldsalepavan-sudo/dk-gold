import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

const PHONE_NUMBER = "6301798850";
const PHONE_DISPLAY = "+91 63017 98850";
const PHONE_HREF = `tel:${PHONE_NUMBER}`;

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header
        className="sticky top-0 z-50 bg-card border-b border-primary/20 shadow-subtle"
        data-ocid="nav"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center shadow-elevated">
                <span className="text-primary-foreground font-display font-bold text-sm">
                  DK
                </span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                DK <span className="text-primary">Gold</span>
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              {["Services", "How It Works", "Why Us", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm font-body font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>

            <a href={PHONE_HREF} data-ocid="nav-cta">
              <Button
                variant="default"
                size="sm"
                className="gap-2 font-display"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
                <span className="sm:hidden">Call Now</span>
              </Button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-card border-t border-primary/20" data-ocid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center">
                  <span className="text-primary-foreground font-display font-bold text-sm">
                    DK
                  </span>
                </div>
                <span className="font-display font-bold text-xl text-foreground">
                  DK <span className="text-primary">Gold</span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Your trusted partner for buying gold at fair market rates,
                releasing pledged gold, and providing instant cash.
              </p>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {[
                  "Buy Gold at Market Rates",
                  "Release Pledged Gold",
                  "Instant Cash Payout",
                  "Free Gold Valuation",
                ].map((s) => (
                  <li key={s}>
                    <span className="text-muted-foreground text-sm font-body hover:text-primary transition-smooth cursor-default">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-semibold text-foreground mb-4">
                Contact Us
              </h4>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth font-display font-semibold text-lg"
                data-ocid="footer-phone"
              >
                <Phone className="w-5 h-5" />
                {PHONE_DISPLAY}
              </a>
              <p className="text-muted-foreground text-sm font-body mt-2">
                Available Mon–Sat, 9 AM – 7 PM
              </p>
              <div className="flex items-start gap-2 mt-4">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  Opposite to D-Mart Lane,
                  <br />
                  Kavuri Hills, Madhapur,
                  <br />
                  Hyderabad
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-muted-foreground text-xs font-body">
              © {new Date().getFullYear()} DK Gold. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs font-body">
              Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
