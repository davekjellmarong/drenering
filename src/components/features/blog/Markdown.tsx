import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Heading text → anchor id, shared with the table of contents.
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/æ/g, "ae")
    .replace(/ø/g, "o")
    .replace(/å/g, "a")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const textOf = (children: React.ReactNode): string =>
  React.Children.toArray(children)
    .map((child) =>
      typeof child === "string"
        ? child
        : React.isValidElement<{ children?: React.ReactNode }>(child)
          ? textOf(child.props.children)
          : ""
    )
    .join("");

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <div className="prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:text-ink-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-brand-600 prose-a:underline-offset-2 prose-strong:text-ink-900 prose-table:text-base prose-th:bg-sand-100 prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => <h2 id={slugify(textOf(children))}>{children}</h2>,
          a: ({ href = "", children }) =>
            href.startsWith("/") ? (
              <Link href={href}>{children}</Link>
            ) : (
              <a href={href} target="_blank" rel="noopener">
                {children}
              </a>
            ),
          table: ({ children }) => (
            <div className="not-prose overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-sm [&_td]:border-t [&_td]:border-border [&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_td]:text-slate-700 [&_th]:bg-sand-100 [&_th]:px-4 [&_th]:py-3 [&_th]:font-semibold [&_th]:text-ink-900">
                {children}
              </table>
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
