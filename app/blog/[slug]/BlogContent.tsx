"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface Props {
  content: string;
}

export function BlogContent({ content }: Props) {
  const { html, toc } = processMarkdown(content);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = document.querySelectorAll("article h2, article h3");
    if (headings.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => observerRef.current?.observe(h));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="relative lg:grid lg:grid-cols-[220px_1fr] lg:gap-12 xl:grid-cols-[250px_1fr]">
      {/* Table of Contents - sticky sidebar */}
      {toc.length > 0 && (
        <aside className="hidden lg:block">
          <nav className="sticky top-24">
            <div className="flex items-center gap-2 mb-4">
              <List className="h-4 w-4 text-slate-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                On this page
              </span>
            </div>
            <ul className="space-y-1 border-l border-slate-200">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={cn(
                      "block border-l-2 py-1 text-sm transition-all",
                      item.level === 2 ? "pl-4" : "pl-7",
                      activeId === item.id
                        ? "border-primary-500 text-primary-600 font-medium"
                        : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
                    )}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}

      {/* Article content */}
      <div
        className="prose prose-slate prose-lg max-w-none min-w-0
          prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-24
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-slate-900
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-slate-800
          prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
          prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-slate-900
          prose-ul:my-4 prose-ol:my-4
          prose-li:text-slate-600 prose-li:my-1
          prose-table:my-6 prose-table:w-full prose-table:overflow-hidden prose-table:rounded-xl prose-table:border prose-table:border-slate-200
          prose-th:bg-slate-50 prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:text-sm prose-th:font-semibold prose-th:text-slate-600 prose-th:border-b prose-th:border-slate-200
          prose-td:px-4 prose-td:py-3 prose-td:text-sm prose-td:border-b prose-td:border-slate-100
          prose-blockquote:border-l-primary-500 prose-blockquote:bg-slate-50 prose-blockquote:rounded-r-xl prose-blockquote:py-1 prose-blockquote:px-4
          prose-code:text-primary-600 prose-code:bg-primary-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
          prose-hr:my-8 prose-hr:border-slate-200"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function processMarkdown(md: string): { html: string; toc: TOCItem[] } {
  let html = md;
  const toc: TOCItem[] = [];

  // Tables
  html = html.replace(
    /\n\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)+)/g,
    (_, header, body) => {
      const headers = header.split("|").map((h: string) => h.trim()).filter(Boolean);
      const rows = body.trim().split("\n").map((row: string) =>
        row.split("|").map((c: string) => c.trim()).filter(Boolean)
      );
      const thead = `<thead><tr>${headers.map((h: string) => `<th>${inlineMarkdown(h)}</th>`).join("")}</tr></thead>`;
      const tbody = `<tbody>${rows.map((row: string[]) => `<tr>${row.map((c: string) => `<td>${inlineMarkdown(c)}</td>`).join("")}</tr>`).join("")}</tbody>`;
      return `<table>${thead}${tbody}</table>`;
    }
  );

  // Headers - extract TOC and add IDs
  html = html.replace(/^### (.+)$/gm, (_, text) => {
    const id = slugify(text);
    toc.push({ id, text, level: 3 });
    return `<h3 id="${id}">${text}</h3>`;
  });
  html = html.replace(/^## (.+)$/gm, (_, text) => {
    const id = slugify(text);
    toc.push({ id, text, level: 2 });
    return `<h2 id="${id}">${text}</h2>`;
  });

  // Blockquotes
  html = html.replace(/^> (.+)$/gm, "<blockquote><p>$1</p></blockquote>");

  // Checkbox lists - convert to styled checkboxes (BEFORE regular lists)
  html = html.replace(
    /- \[x\] (.+)/g,
    '- <span class="inline-flex items-center gap-2"><span class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-green-100 text-green-600"><svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></span>$1</span>'
  );
  html = html.replace(
    /- \[ \] (.+)/g,
    '- <span class="inline-flex items-center gap-2"><span class="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-slate-300"></span>$1</span>'
  );

  // Unordered lists
  html = html.replace(/(?:^- .+\n?)+/gm, (match) => {
    const items = match.trim().split("\n")
      .map((line) => `<li>${inlineMarkdown(line.replace(/^- /, ""))}</li>`)
      .join("");
    return `<ul>${items}</ul>`;
  });

  // Ordered lists
  html = html.replace(/(?:^\d+\. .+\n?)+/gm, (match) => {
    const items = match.trim().split("\n")
      .map((line) => `<li>${inlineMarkdown(line.replace(/^\d+\. /, ""))}</li>`)
      .join("");
    return `<ol>${items}</ol>`;
  });

  // Horizontal rule
  html = html.replace(/^---$/gm, "<hr />");

  // Paragraphs
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (
        !trimmed ||
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<table") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<ol") ||
        trimmed.startsWith("<blockquote") ||
        trimmed.startsWith("<hr")
      ) {
        return trimmed;
      }
      return `<p>${inlineMarkdown(trimmed)}</p>`;
    })
    .join("\n");

  return { html, toc };
}

function inlineMarkdown(text: string): string {
  let result = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/\*(.+?)\*/g, "<em>$1</em>");
  result = result.replace(/`(.+?)`/g, "<code>$1</code>");
  result = result.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  return result;
}
