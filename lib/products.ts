export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAt?: number;
  rating: string;
  badge: string;
  tag: "special" | "best" | "new";
  stock: string;
  shortDescription: string;
  description: string;
  details: string[];
  palette: string[];
};

export const categories = [
  { name: "DIY Kits", detail: "Curated projects for quiet weekends", color: "#c95f4f" },
  { name: "Paper Goods", detail: "Handmade sheets, cards, and journals", color: "#426a5a" },
  { name: "Studio Tools", detail: "Brushes, pigments, hoops, and blades", color: "#a57c32" },
  { name: "Gift Wrap", detail: "Tags, ribbons, wax seals, and boxes", color: "#547aa5" },
];

export const products: Product[] = [
  {
    slug: "botanical-watercolor-kit",
    name: "Botanical Watercolor Kit",
    category: "DIY Kit",
    price: 42,
    compareAt: 56,
    rating: "4.9",
    badge: "Best Seller",
    tag: "best",
    stock: "In stock",
    shortDescription: "A calm, premium watercolor kit for painting botanical cards.",
    description:
      "A gift-ready kit with artist-grade pigments, textured cards, a detail brush, and a printed botanical study guide for quiet weekend making.",
    details: ["6 pigment pans", "8 cotton cards", "Detail brush", "Printed project guide"],
    palette: ["#f6ead8", "#6f927d", "#d2a03b", "#b85d4f"],
  },
  {
    slug: "handmade-cotton-paper-set",
    name: "Handmade Cotton Paper Set",
    category: "Paper Goods",
    price: 28,
    rating: "4.8",
    badge: "New",
    tag: "new",
    stock: "In stock",
    shortDescription: "Soft deckled-edge cotton sheets for notes, prints, and keepsakes.",
    description:
      "A tactile set of handmade cotton paper with natural edges and subtle tone variation, designed for stationery, art prints, and gift notes.",
    details: ["24 handmade sheets", "Deckled edges", "A5 size", "Acid-free cotton fiber"],
    palette: ["#fff8ec", "#d9b7a2", "#6d8f99", "#2d3632"],
  },
  {
    slug: "ceramic-paint-palette",
    name: "Ceramic Paint Palette",
    category: "Studio Tools",
    price: 36,
    rating: "5.0",
    badge: "Artisan",
    tag: "best",
    stock: "Only 8 left",
    shortDescription: "A hand-glazed palette with roomy wells and a smooth mixing field.",
    description:
      "A durable ceramic palette made for daily studio use, with smooth glaze, generous wells, and enough weight to stay steady while mixing.",
    details: ["Hand-glazed ceramic", "7 wells", "Wide mixing area", "Dishwasher safe"],
    palette: ["#ebe4d3", "#2f413b", "#b04c3f", "#d6a23f"],
  },
  {
    slug: "natural-gift-wrap-bundle",
    name: "Natural Gift Wrap Bundle",
    category: "Gift Wrap",
    price: 24,
    compareAt: 32,
    rating: "4.7",
    badge: "Limited",
    tag: "special",
    stock: "In stock",
    shortDescription: "Coordinated wrap, tags, twine, and seals for elegant gifting.",
    description:
      "A refined packaging bundle with natural paper, cotton twine, handmade tags, and wax seals that make handmade gifts feel finished.",
    details: ["6 wrap sheets", "12 cotton tags", "Natural twine", "Wax seal stickers"],
    palette: ["#d9c9a6", "#384d48", "#bd6d55", "#f1eee5"],
  },
  {
    slug: "embroidered-floral-hoop-kit",
    name: "Embroidered Floral Hoop Kit",
    category: "DIY Kit",
    price: 48,
    rating: "4.9",
    badge: "New Arrival",
    tag: "new",
    stock: "In stock",
    shortDescription: "A modern embroidery kit with soft cotton thread and linen.",
    description:
      "A complete floral embroidery kit with pre-printed linen, a beechwood hoop, cotton thread, needles, and a step-by-step stitch card.",
    details: ["Beechwood hoop", "Pre-printed linen", "12 thread colors", "Needles and guide"],
    palette: ["#f4e4d7", "#567467", "#d88d72", "#e6b64f"],
  },
  {
    slug: "studio-brush-roll",
    name: "Studio Brush Roll",
    category: "Studio Tools",
    price: 54,
    compareAt: 68,
    rating: "4.8",
    badge: "Special Offer",
    tag: "special",
    stock: "In stock",
    shortDescription: "A waxed-canvas roll for protecting brushes and drawing tools.",
    description:
      "A sturdy brush roll with stitched pockets, brass snap closure, and a wipeable lining for everyday studio organization.",
    details: ["Waxed cotton canvas", "12 tool pockets", "Brass snap", "Wipeable lining"],
    palette: ["#d8c4a0", "#253a36", "#a06a45", "#e7e1d0"],
  },
  {
    slug: "pressed-flower-card-kit",
    name: "Pressed Flower Card Kit",
    category: "DIY Kit",
    price: 34,
    compareAt: 44,
    rating: "4.6",
    badge: "Special Offer",
    tag: "special",
    stock: "In stock",
    shortDescription: "Pressed botanicals, folded cards, and translucent envelopes.",
    description:
      "A delicate stationery kit with preserved florals, cotton cards, translucent envelopes, and adhesive sheets for elegant handmade notes.",
    details: ["Pressed flower pack", "10 folded cards", "10 envelopes", "Archival adhesive"],
    palette: ["#f8eadf", "#789174", "#ca8068", "#ead16c"],
  },
  {
    slug: "brass-wax-seal-set",
    name: "Brass Wax Seal Set",
    category: "Gift Wrap",
    price: 39,
    compareAt: 52,
    rating: "4.8",
    badge: "Special Offer",
    tag: "special",
    stock: "In stock",
    shortDescription: "A polished seal handle with wax beads for refined packaging.",
    description:
      "A compact wax seal set with a brass stamp, warm-toned wax beads, a melting spoon, and blank tags for packaging and invitations.",
    details: ["Brass seal stamp", "Wax beads", "Melting spoon", "20 blank tags"],
    palette: ["#ead7b6", "#6a5142", "#b65446", "#d8a737"],
  },
  {
    slug: "linen-journal-binding-kit",
    name: "Linen Journal Binding Kit",
    category: "Paper Goods",
    price: 58,
    rating: "4.9",
    badge: "Best Seller",
    tag: "best",
    stock: "Only 5 left",
    shortDescription: "A bookbinding kit for making a linen-covered studio journal.",
    description:
      "Everything needed to bind a cloth-covered journal, including board, linen, waxed thread, signatures, awl, and a clear stitch guide.",
    details: ["Book board", "Linen cloth", "Waxed thread", "Awl and stitch guide"],
    palette: ["#efe5d2", "#476154", "#927747", "#c9695a"],
  },
  {
    slug: "gouache-color-study-set",
    name: "Gouache Color Study Set",
    category: "Studio Tools",
    price: 62,
    rating: "5.0",
    badge: "Best Seller",
    tag: "best",
    stock: "In stock",
    shortDescription: "Rich gouache tubes and study cards for building color palettes.",
    description:
      "A compact gouache set for palette studies, pairing highly pigmented tubes with swatch cards and a studio mixing prompt sheet.",
    details: ["8 gouache tubes", "Swatch cards", "Mixing sheet", "Cotton storage pouch"],
    palette: ["#f3dfc4", "#2f5756", "#d34537", "#e3a73b"],
  },
  {
    slug: "clay-charm-garland-kit",
    name: "Clay Charm Garland Kit",
    category: "DIY Kit",
    price: 46,
    rating: "4.9",
    badge: "Best Seller",
    tag: "best",
    stock: "In stock",
    shortDescription: "Air-dry clay, cord, and pigments for making decorative charms.",
    description:
      "A weekend-friendly kit for sculpting small clay charms, painting them, and stringing a soft neutral garland for home decor.",
    details: ["Air-dry clay", "Cotton cord", "Paint pigments", "Shape templates"],
    palette: ["#eee2d3", "#5a756d", "#be5f50", "#d4b15a"],
  },
  {
    slug: "silk-ribbon-sampler",
    name: "Silk Ribbon Sampler",
    category: "Gift Wrap",
    price: 31,
    rating: "4.7",
    badge: "New Arrival",
    tag: "new",
    stock: "In stock",
    shortDescription: "Hand-dyed silk ribbons for gifting, styling, and keepsakes.",
    description:
      "A tonal ribbon sampler with soft hand-dyed silk lengths that pair beautifully with handmade paper, florals, and gift boxes.",
    details: ["6 silk colors", "2 yards each", "Plant-dyed tones", "Reusable spool card"],
    palette: ["#f1d4c4", "#6f8f88", "#be6f83", "#e2c45b"],
  },
  {
    slug: "mini-lino-printing-kit",
    name: "Mini Lino Printing Kit",
    category: "DIY Kit",
    price: 52,
    rating: "4.8",
    badge: "New Arrival",
    tag: "new",
    stock: "In stock",
    shortDescription: "A compact block printing kit for cards, tags, and art prints.",
    description:
      "A tidy beginner-friendly lino kit with carving tools, soft blocks, ink, roller, and heavyweight cards for crisp small-batch prints.",
    details: ["Carving tool", "Soft lino blocks", "Ink and roller", "Heavyweight cards"],
    palette: ["#f6ead6", "#334d48", "#d1614d", "#5f86a5"],
  },
  {
    slug: "archival-ink-pad-trio",
    name: "Archival Ink Pad Trio",
    category: "Studio Tools",
    price: 29,
    compareAt: 38,
    rating: "4.6",
    badge: "Special Offer",
    tag: "special",
    stock: "In stock",
    shortDescription: "Three archival ink pads for stamping paper, tags, and labels.",
    description:
      "A practical trio of archival ink pads in deep neutral tones, designed for crisp impressions on handmade paper and packaging.",
    details: ["3 archival pads", "Fast-drying pigment", "Acid-free", "Reusable storage sleeve"],
    palette: ["#eee0cf", "#263936", "#8f5148", "#b88a35"],
  },
  {
    slug: "watercolor-postcard-pack",
    name: "Watercolor Postcard Pack",
    category: "Paper Goods",
    price: 22,
    rating: "4.8",
    badge: "New Arrival",
    tag: "new",
    stock: "In stock",
    shortDescription: "Cold-pressed postcards ready for painting and mailing.",
    description:
      "A set of heavyweight cold-pressed postcards with a smooth address side and textured painting surface for travel notes and small artworks.",
    details: ["18 postcards", "Cold-pressed surface", "Mail-ready back", "Cotton blend paper"],
    palette: ["#fff3df", "#617c75", "#d48b72", "#deb64f"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}
