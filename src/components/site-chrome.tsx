import { Link } from "@tanstack/react-router";
import { Music2 } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-hero text-primary-foreground shadow-soft">
            <Music2 className="h-4 w-4" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            Cantata<span className="text-primary">IA</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="/#como-funciona" className="text-muted-foreground transition hover:text-foreground">Como funciona</a>
          <a href="/#exemplos" className="text-muted-foreground transition hover:text-foreground">Exemplos</a>
          <a href="/#planos" className="text-muted-foreground transition hover:text-foreground">Planos</a>
          <a href="/#faq" className="text-muted-foreground transition hover:text-foreground">FAQ</a>
        </nav>
        <Link
          to="/criar"
          className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
        >
          Criar agora
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-cream/60">
      <div className="container mx-auto px-4 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="font-display text-lg text-foreground">CantataIA</div>
            <p className="mt-1 max-w-md">
              Músicas personalizadas criadas com inteligência artificial a partir da sua história.
            </p>
          </div>
          <div className="space-y-1 text-xs">
            <p>As composições são geradas por IA e cedidas integralmente ao comprador.</p>
            <p>© {new Date().getFullYear()} CantataIA — Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
