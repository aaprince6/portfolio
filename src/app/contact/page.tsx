"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "alahasanlazim@gmail.com", href: "mailto:alahasanlazim@gmail.com" },
  { icon: MapPin, label: "Location", value: "Bashundhara R/A, Dhaka, Bangladesh", href: null },
  { icon: MessageSquare, label: "Discord", value: "princelazim", href: "https://discord.com/users/631174875536424962" },
];

const socialLinks = [
  { href: "https://github.com/aaprince6", label: "GitHub" },
  { href: "https://www.linkedin.com/in/lazim-al-ahasan-0030a8214/", label: "LinkedIn" },
  { href: "https://www.youtube.com/@lazimalahasan9047", label: "YouTube" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-4">
            Get In Touch
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hi?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-2">Name</label>
                <input type="text" id="name" required value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors placeholder:text-[var(--color-text-muted)]"
                  placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-2">Email</label>
                <input type="email" id="email" required value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors placeholder:text-[var(--color-text-muted)]"
                  placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-text)] mb-2">Message</label>
                <textarea id="message" required rows={6} value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] transition-colors placeholder:text-[var(--color-text-muted)] resize-none"
                  placeholder="Tell me about your project or just say hello..." />
              </div>

              <motion.button type="submit" disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--color-primary)]/25 transition-all duration-300 disabled:opacity-60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "loading" ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                ) : status === "success" ? (
                  <><CheckCircle className="w-4 h-4" /> Message sent! I'll respond soon.</>
                ) : status === "error" ? (
                  <><AlertCircle className="w-4 h-4" /> {errorMsg}</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm">
                    <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/10">
                      <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">{info.label}</p>
                      <p className="text-sm text-[var(--color-text)] font-medium">{info.value}</p>
                    </div>
                  </div>
                );
                return info.href ? <a key={info.label} href={info.href}>{content}</a> : <div key={info.label}>{content}</div>;
              })}
            </div>

            <div>
              <h3 className="text-sm font-medium text-[var(--color-text-muted)] uppercase tracking-wider mb-4">Follow me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-200"
                    whileHover={{ scale: 1.1, y: -2 }} aria-label={social.label}>
                    {social.label === "GitHub" && <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>}
                    {social.label === "LinkedIn" && <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                    {social.label === "YouTube" && <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm">
              <h3 className="font-semibold text-[var(--color-text)] mb-2">Let&apos;s Build Something Great</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Whether it&apos;s a web application, an embedded systems project,
                or creative content — I&apos;m always excited to collaborate on
                interesting projects. Currently open to internships, freelance
                work, and project collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
