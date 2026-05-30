export type PlanId = "essencial" | "completa" | "premium";

export interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  priceCents: number;
  priceLabel: string;
  duration: string;
  features: string[];
  highlight?: boolean;
}

export const PLANS: Record<PlanId, Plan> = {
  essencial: {
    id: "essencial",
    name: "Essencial",
    tagline: "Uma declaração única",
    priceCents: 4900,
    priceLabel: "R$ 49",
    duration: "≈ 1 min",
    features: [
      "1 versão exclusiva da música",
      "Letra personalizada com a sua história",
      "Entrega em até 24h",
      "Link de download por e-mail",
    ],
  },
  completa: {
    id: "completa",
    name: "Completa",
    tagline: "A escolha favorita",
    priceCents: 8900,
    priceLabel: "R$ 89",
    duration: "≈ 2 min",
    features: [
      "2 versões para você escolher",
      "Capa exclusiva da música",
      "Letra impressa em PDF",
      "Entrega prioritária",
    ],
    highlight: true,
  },
  premium: {
    id: "premium",
    name: "Premium",
    tagline: "Inesquecível",
    priceCents: 14900,
    priceLabel: "R$ 149",
    duration: "até 3 min",
    features: [
      "3 versões exclusivas",
      "Capa + vídeo lyric",
      "Letra impressa em PDF",
      "Entrega expressa em até 6h",
      "Suporte VIP no WhatsApp",
    ],
  },
};

export const PLAN_LIST: Plan[] = [PLANS.essencial, PLANS.completa, PLANS.premium];
