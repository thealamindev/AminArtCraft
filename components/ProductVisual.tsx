import type { Product } from "@/lib/products";

export function ProductVisual({
  product,
  large = false,
  variant = 0,
}: {
  product: Product;
  large?: boolean;
  variant?: number;
}) {
  const palette = product.palette;
  const backgrounds = [
    "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.95), transparent 34%), linear-gradient(135deg, #ece2d0, #f8f4ea 60%, #ddc8b5)",
    `radial-gradient(circle at 75% 18%, rgba(255,255,255,0.82), transparent 30%), linear-gradient(135deg, ${palette[0]}, #fbf8f1 55%, ${palette[1]})`,
    `radial-gradient(circle at 22% 78%, rgba(255,255,255,0.88), transparent 32%), linear-gradient(145deg, ${palette[2]}, #f7efe1 58%, ${palette[0]})`,
    `radial-gradient(circle at 50% 24%, rgba(255,255,255,0.9), transparent 28%), linear-gradient(135deg, ${palette[3]}, #f5ead8 52%, ${palette[1]})`,
  ];
  const rotation = ["-rotate-[7deg]", "rotate-[5deg]", "-rotate-[12deg]", "rotate-[10deg]"][variant % 4];
  const brushRotation = ["rotate-[38deg]", "rotate-[58deg]", "rotate-[24deg]", "-rotate-[32deg]"][variant % 4];

  return (
    <div
      className={`relative overflow-hidden ${
        large ? "min-h-[520px]" : "min-h-[270px]"
      }`}
      style={{ background: backgrounds[variant % backgrounds.length] }}
      aria-hidden="true"
    >
      <span className="absolute left-3.5 top-3.5 z-10 rounded-full bg-white/85 px-3 py-1.5 text-xs font-extrabold">
        {product.badge}
      </span>
      <div
        className={`absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 ${rotation} rounded-lg shadow-[0_18px_36px_rgba(30,38,36,0.16)] ${
          large ? "h-[260px] w-[208px]" : "h-[178px] w-[142px]"
        }`}
        style={{ background: product.palette[0] }}
      />
      <div
        className={`absolute left-[24%] top-[26%] ${brushRotation} rounded-full shadow-[0_18px_36px_rgba(30,38,36,0.16)] ${
          large ? "h-56 w-8" : "h-40 w-[22px]"
        }`}
        style={{ background: product.palette[1] }}
      />
      <div
        className={`absolute bottom-[16%] right-[17%] rounded-full border-[14px] bg-transparent shadow-[0_18px_36px_rgba(30,38,36,0.16)] ${
          large ? "size-32" : "size-[86px]"
        }`}
        style={{ borderColor: product.palette[2] }}
      />
      <div
        className={`absolute right-[22%] top-[22%] rotate-12 rounded-md shadow-[0_18px_36px_rgba(30,38,36,0.16)] ${
          large ? "h-20 w-28" : "h-[52px] w-[70px]"
        }`}
        style={{ background: product.palette[3] }}
      />
    </div>
  );
}
