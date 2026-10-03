import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css/github-markdown.css'; // Adds standard padding, fonts, and table borders
// Import a highlight.js stylesheet for code coloring (e.g., github-dark or atom-one-dark)
import 'highlight.js/styles/github-dark.css';
import rehypeHighlight from 'rehype-highlight';


export default function MarkdownRenderer({ content }) {
  return (
    <div className="markdown-body">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}
        components={{
          // Customize links to open safely in new tabs
          a: ({ node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
          // Custom style or copy button wrapper for code blocks
          pre: ({ node, ...props }) => (
            <pre style={{ borderRadius: '8px', padding: '12px', overflowX: 'auto' }} {...props} />
          ),
        }}
      >
        
        {content}
      </Markdown>
    </div>
  );
}