"use client";
import React from "react";
import { BlocksContent, BlocksRenderer } from "@strapi/blocks-react-renderer";

interface ContentRendererProps {
  content: BlocksContent; // Adjust this type based on your Strapi content structure
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ content }) => {
  if (!content || content.length === 0) {
    return <p>Ingen innhold tilgjengelig.</p>;
  }

  return (
    <div>
      <BlocksRenderer content={content} />
    </div>
  );
};

export default ContentRenderer;
