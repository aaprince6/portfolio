"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { blogPostsData } from "@/data/content";

const categoryColors: Record<string, string> = {
  tutorial: "#2563eb", project: "#059669", thoughts: "#d97706", gaming: "#7c3aed",
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[var(--color-text)] mb-4">Post not found</h1>
          <Link href="/blog" className="text-[var(--color-primary)] hover:underline">Back to blog</Link>
        </div>
      </div>
    );
  }

  const catColor = categoryColors[post.category] || "#2563eb";

  const markdownToHtml = (md: string) => {
    const lines = md.split("\n");
    let html = "";
    let inCodeBlock = false;
    for (const line of lines) {
      if (line.startsWith("```")) {
        if (inCodeBlock) { html += "</code></pre>\n"; inCodeBlock = false; }
        else { html += `<pre class="overflow-x-auto rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] p-4 my-4"><code class="text-sm text-[var(--color-text)]">`; inCodeBlock = true; }
        continue;
      }
      if (inCodeBlock) { html += line.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "\n"; continue; }
      if (line.startsWith("### ")) { html += `<h3 class="text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">${line.slice(4)}</h3>\n`; }
      else if (line.startsWith("## ")) { html += `<h2 class="text-2xl font-bold text-[var(--color-text)] mt-10 mb-4">${line.slice(3)}</h2>\n`; }
      else if (line.startsWith("# ")) { html += `<h1 class="text-3xl font-bold text-[var(--color-text)] mt-12 mb-4">${line.slice(2)}</h1>\n`; }
      else if (line.startsWith("- ")) { html += `<li class="text-[var(--color-text-muted)] ml-4 list-disc">${line.slice(2)}</li>\n`; }
      else if (line.match(/^\d+\. /)) { html += `<li class="text-[var(--color-text-muted)] ml-4 list-decimal">${line.replace(/^\d+\. /, "")}</li>\n`; }
      else if (line.trim() === "") { html += "<br />\n"; }
      else { html += `<p class="text-[var(--color-text-muted)] leading-relaxed">${line}</p>\n`; }
    }
    return html;
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />Back to blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: `${catColor}20`, color: catColor, border: `1px solid ${catColor}40` }}>{post.category}</span>
            <span className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]"><Calendar className="w-3 h-3" />{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]"><Clock className="w-3 h-3" />{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">{post.title}</h1>
          <p className="text-lg text-[var(--color-text-muted)] mb-8">{post.description}</p>
          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (<span key={tag} className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]"><Tag className="w-3 h-3" />{tag}</span>))}
          </div>
        </motion.div>
        <motion.div className="prose prose-invert max-w-none" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }} />
      </div>
    </div>
  );
}
