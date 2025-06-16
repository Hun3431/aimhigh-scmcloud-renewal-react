import { Highlight, themes } from "prism-react-renderer";
import { cn } from "cn-func";

const CodeBlock = ({
  title,
  path,
  code,
}: {
  title?: string;
  path?: string;
  code: string;
}) => {
  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      {title && <div className="text-xl font-bold">{title}</div>}
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <div className="relative flex flex-row justify-between p-4 border-b border-gray-300">
          <div>{path}</div>
          <button
            className="relative pl-1 pb-1"
            onClick={() => {
              handleCopyCode(code);
            }}
          >
            <div className="w-3.5 h-4.5 border-2 bg-white border-[#555] rounded-xs" />
            <div className="absolute top-1 right-1 w-3.5 h-4.5 bg-white border-2 border-[#555] rounded-xs" />
          </button>
        </div>
        <Highlight theme={themes.oneLight} language="tsx" code={code}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={cn("whitespace-pre-wrap p-4", className)}
              style={style}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span>{i + 1} </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </>
  );
};

export default CodeBlock;
