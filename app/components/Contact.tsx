"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { profile, socials } from "../data/portfolio";
import { ArrowUpRightIcon, MailIcon, SocialIcon } from "./Icons";
import SectionTitle from "./SectionTitle";

// Cấu hình EmailJS — public key để lộ ở frontend là bình thường.
const EMAILJS_SERVICE_ID = "service_4whimqn";
const EMAILJS_TEMPLATE_ID = "template_r5183qs";
const EMAILJS_PUBLIC_KEY = "m_VqWYdWVPeyE_u9R";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: nếu ô ẩn bị điền thì coi như bot, bỏ qua.
    if (new FormData(form).get("botcheck")) return;

    setStatus("sending");
    setErrorMsg("");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Gửi không thành công, vui lòng thử lại sau.");
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="05 — Liên hệ"
          title="Cùng xây dựng điều gì đó tuyệt vời"
          description="Mình luôn sẵn sàng trao đổi về các ý tưởng, dự án, hoặc cơ hội hợp tác mới."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Thông tin liên hệ
            </h3>
            <p className="mb-6 text-sm text-foreground-muted">
              Gửi mình một email hoặc kết nối qua mạng xã hội. Mình thường phản
              hồi trong vòng 24h.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="group mb-4 flex items-center gap-3 rounded-xl border border-border bg-surface/50 p-4 transition-all hover:border-accent/50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-cyan/20 text-accent">
                <MailIcon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="text-xs text-foreground-dim">Email</div>
                <div className="font-mono text-sm text-foreground">
                  {profile.email}
                </div>
              </div>
              <ArrowUpRightIcon className="h-4 w-4 text-foreground-dim transition-all group-hover:rotate-45 group-hover:text-accent" />
            </a>

            <div className="mt-6">
              <div className="mb-3 text-xs uppercase tracking-wider text-foreground-dim">
                Hoặc tìm mình ở
              </div>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface/50 text-foreground-muted transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
                  >
                    <SocialIcon name={s.icon} className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="glass rounded-2xl p-6 sm:p-8 space-y-4"
          >
            {/* Honeypot chống spam — người dùng thật không nhìn thấy ô này */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Tên của bạn" name="name" placeholder="Nguyễn Văn A" required />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="ban@example.com"
                required
              />
            </div>
            <Field
              label="Tiêu đề"
              name="subject"
              placeholder="Mình có một dự án..."
            />
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-foreground-muted"
              >
                Nội dung
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Mô tả ngắn về dự án hoặc nội dung bạn muốn trao đổi..."
                className="w-full resize-none rounded-xl border border-border bg-surface/40 px-4 py-3 text-sm text-foreground placeholder:text-foreground-dim focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-cyan px-6 py-3 font-medium text-background shadow-[0_8px_30px_-8px_rgba(56,189,248,0.6)] transition-all hover:shadow-[0_12px_40px_-8px_rgba(56,189,248,0.8)] hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "sending"
                ? "Đang gửi..."
                : status === "sent"
                  ? "Đã gửi ✓"
                  : "Gửi tin nhắn"}
              {(status === "idle" || status === "error") && (
                <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:rotate-45" />
              )}
            </button>

            {status === "sent" && (
              <p className="text-sm text-cyan">
                Cảm ơn bạn! Tin nhắn đã được gửi, mình sẽ phản hồi sớm.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm text-foreground-muted">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-surface/40 px-4 py-3 text-sm text-foreground placeholder:text-foreground-dim focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
