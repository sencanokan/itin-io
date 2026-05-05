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
        className="blog-content prose prose-slate prose-lg max-w-none min-w-0
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

function inlineMarkdown(text: string): string {
  let r = text;
  r = r.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  r = r.replace(/\*(.+?)\*/g, "<em>$1</em>");
  r = r.replace(/`(.+?)`/g, "<code>$1</code>");
  r = r.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
  return r;
}

function processMarkdown(md: string): { html: string; toc: TOCItem[] } {
  const toc: TOCItem[] = [];
  const lines = md.split("\n");
  const blocks: string[] = [];
  let current = "";

  // Group lines into blocks separated by blank lines
  for (const line of lines) {
    if (line.trim() === "") {
      if (current.trim()) {
        blocks.push(current.trim());
      }
      current = "";
    } else {
      current += (current ? "\n" : "") + line;
    }
  }
  if (current.trim()) blocks.push(current.trim());

  const htmlParts: string[] = [];

  for (const block of blocks) {
    // Table
    if (block.includes("|") && block.includes("---")) {
      const tableLines = block.split("\n");
      const headerLine = tableLines[0];
      const bodyLines = tableLines.slice(2); // skip header + separator

      const headers = headerLine.split("|").map((h) => h.trim()).filter(Boolean);
      const rows = bodyLines.map((row) =>
        row.split("|").map((c) => c.trim()).filter(Boolean)
      );

      const thead = `<thead><tr>${headers.map((h) => `<th>${inlineMarkdown(h)}</th>`).join("")}</tr></thead>`;
      const tbody = `<tbody>${rows.map((row) => `<tr>${row.map((c) => `<td>${inlineMarkdown(c)}</td>`).join("")}</tr>`).join("")}</tbody>`;
      htmlParts.push(`<table>${thead}${tbody}</table>`);
      continue;
    }

    // Heading h2
    if (block.startsWith("## ")) {
      const text = block.slice(3);
      const id = slugify(text);
      toc.push({ id, text, level: 2 });
      htmlParts.push(`<h2 id="${id}">${inlineMarkdown(text)}</h2>`);
      continue;
    }

    // Heading h3
    if (block.startsWith("### ")) {
      const text = block.slice(4);
      const id = slugify(text);
      toc.push({ id, text, level: 3 });
      htmlParts.push(`<h3 id="${id}">${inlineMarkdown(text)}</h3>`);
      continue;
    }

    // Horizontal rule
    if (block === "---") {
      htmlParts.push("<hr />");
      continue;
    }

    // Blockquote
    if (block.startsWith("> ")) {
      const content = block.replace(/^> ?/gm, "");
      htmlParts.push(`<blockquote><p>${inlineMarkdown(content)}</p></blockquote>`);
      continue;
    }

    // List block (unordered, ordered, or checkbox)
    if (block.match(/^(?:- |\d+\. )/)) {
      const listLines = block.split("\n");
      const isOrdered = listLines[0].match(/^\d+\. /);
      const hasCheckbox = listLines.some((l) => l.match(/^- \[[ x]\] /));

      const items = listLines.map((line) => {
        // Checkbox checked
        if (line.match(/^- \[x\] /)) {
          const text = line.replace(/^- \[x\] /, "");
          return `<li class="flex items-start gap-3 list-none"><span class="inline-flex mt-1 h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-green-100 text-green-600"><svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></span><span>${inlineMarkdown(text)}</span></li>`;
        }
        // Checkbox unchecked
        if (line.match(/^- \[ \] /)) {
          const text = line.replace(/^- \[ \] /, "");
          return `<li class="flex items-start gap-3 list-none"><span class="inline-flex mt-1 h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 border-slate-300"></span><span>${inlineMarkdown(text)}</span></li>`;
        }
        // Regular list item
        const text = line.replace(/^(?:- |\d+\. )/, "");
        return `<li>${inlineMarkdown(text)}</li>`;
      });

      const tag = isOrdered ? "ol" : "ul";
      const listClass = hasCheckbox ? ' class="space-y-2 list-none pl-0"' : "";
      htmlParts.push(`<${tag}${listClass}>${items.join("")}</${tag}>`);
      continue;
    }

    // Paragraph (default)
    htmlParts.push(`<p>${inlineMarkdown(block.replace(/\n/g, " "))}</p>`);
  }

  return { html: htmlParts.join("\n"), toc };
}
