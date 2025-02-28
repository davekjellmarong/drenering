"use client";
import React from "react";
import ReactMarkdown from "react-markdown";

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <div className="prose prose-lg max-w-none text-brand-700">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
