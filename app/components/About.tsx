import { profile } from "../data/portfolio";
import SectionTitle from "./SectionTitle";

const highlights = [
  {
    icon: "🚀",
    title: "Performance đầu tiên",
    text: "Tối ưu LCP, INP và Core Web Vitals từ ngay những dòng code đầu tiên.",
  },
  {
    icon: "🧩",
    title: "Kiến trúc rõ ràng",
    text: "Module hóa, tách concerns, dễ bảo trì và mở rộng cho team lớn.",
  },
  {
    icon: "🎯",
    title: "Định hướng business",
    text: "Code phục vụ mục tiêu kinh doanh, không phải để phô trương kỹ thuật.",
  },
  {
    icon: "📚",
    title: "Học liên tục",
    text: "Luôn cập nhật công nghệ mới và đánh giá khi nào nên áp dụng.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="01 — Về mình"
          title="Một chút về bản thân"
          description="Sản phẩm tốt cần được xây từ nền tảng kỹ thuật vững và sự đồng cảm với người dùng."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {profile.bio.map((p, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-foreground-muted sm:text-lg"
              >
                {p}
              </p>
            ))}

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-accent transition-colors hover:text-highlight"
              >
                Hợp tác cùng mình →
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="glass card-glow rounded-2xl p-6"
              >
                <div className="mb-3 text-3xl">{h.icon}</div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {h.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground-muted">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
