"use client";

interface Props {
  content: string;
}

export function BlogContent({ content }: Props) {
  // Simple markdown to HTML conversion for blog posts
  const html = markdownToHtml(content);

  return (
    <div
      className="prose prose-slate prose-lg max-w-none
        prose-headings:font-bold prose-headings:tracking-tight
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
  );
}

function markdownToHtml(md: string): string {
  let html = md;

  // Tables
  html = html.replace(
    /\n\|(.+)\|\n\|[-| :]+\|\n((?:\|.+\|\n?)+)/g,
    (_, header, body) => {
      const headers = header
        .split("|")
        .map((h: string) => h.trim())
        .filter(Boolean);
      const rows = body
        .trim()
        .split("\n")
        .map((row: string) =>
          row
            .split("|")
            .map((c: string) => c.trim())
            .filter(Boolean)
        );

      const thead = `<thead><tr>${headers.map((h: string) => `<th>${inlineMarkdown(h)}</th>`).join("")}</tr></thead>`;
      const tbody = `<tbody>${rows.map((row: string[]) => `<tr>${row.map((c: string) => `<td>${inlineMarkdown(c)}</td>`).join("")}</tr>`).join("")}</tbody>`;

      return `<table>${thead}${tbody}</table>`;
    }
  );

  // Headers
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");

  // Blockquotes
  html = html.replace(
    /^> (.+)$/gm,
    "<blockquote><p>$1</p></blockquote>"
  );

  // Unordered lists
  html = html.replace(
    /(?:^- .+\n?)+/gm,
    (match) => {
      const items = match
        .trim()
        .split("\n")
        .map((line) => `<li>${inlineMarkdown(line.replace(/^- /, ""))}</li>`)
        .join("");
      return `<ul>${items}</ul>`;
    }
  );

  // Ordered lists
  html = html.replace(
    /(?:^\d+\. .+\n?)+/gm,
    (match) => {
      const items = match
        .trim()
        .split("\n")
        .map((line) => `<li>${inlineMarkdown(line.replace(/^\d+\. /, ""))}</li>`)
        .join("");
      return `<ol>${items}</ol>`;
    }
  );

  // Checkbox lists
  html = html.replace(/- \[ \] /g, "- ");
  html = html.replace(/- \[x\] /g, "- ");

  // Horizontal rule
  html = html.replace(/^---$/gm, "<hr />");

  // Paragraphs - wrap remaining text lines
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

  return html;
}

function inlineMarkdown(text: string): string {
  // Bold
  let result = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  // Italic
  result = result.replace(/\*(.+?)\*/g, "<em>$1</em>");
  // Inline code
  result = result.replace(/`(.+?)`/g, "<code>$1</code>");
  // Links
  result = result.replace(
    /\[(.+?)\]\((.+?)\)/g,
    '<a href="$2">$1</a>'
  );
  return result;
}
