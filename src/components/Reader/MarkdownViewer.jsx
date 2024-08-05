import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

const MarkdownViewer = ({ file }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      const response = await fetch(file);
      const text = await response.text();
      setContent(text);
    };

    fetchMarkdown();
  }, [file]);

  return (
    <div className="font-weight:300">
      <ReactMarkdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
