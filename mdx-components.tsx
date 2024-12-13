import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-4xl font-bold text-white mt-8 mb-4" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-3xl font-semibold text-white mt-6 mb-3" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-2xl font-medium text-white mt-5 mb-2" {...props} />
    ),
    p: (props) => (
      <p className="text-lg text-white mb-4" {...props} />
    ),
    strong: (props) => (
      <strong className="font-semibold text-white" {...props} />
    ),
    em: (props) => (
      <em className="italic text-white" {...props} />
    ),
    code: (props) => (
      <code className="bg-gray-200 dark:bg-gray-700 text-sm font-mono px-2 py-1 rounded" {...props} />
    ),
    pre: (props) => (
      <pre className="bg-gray-800 dark:bg-gray-900 text-white p-4 rounded-md overflow-x-auto" {...props} />
    ),
    ul: (props) => (
      <ul className="list-disc pl-6 mb-4 text-white" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal pl-6 mb-4 text-white" {...props} />
    ),
    li: (props) => (
      <li className="text-lg text-white mb-2" {...props} />
    ),
    a: (props) => (
      <a
        className="text-white underline hover:text-gray-300"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    ...components,
  };
}
