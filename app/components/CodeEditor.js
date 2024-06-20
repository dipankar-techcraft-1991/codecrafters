import { Editor } from "@monaco-editor/react";
import { useState } from "react";

const CodeEditor = ({ darkMode }) => {
  const sampleCode =
    "const sum = (a,b) => {\n   return a + b; \n} \nconsole.log('Result: ',sum(1,2));";

  const [code, setCode] = useState(sampleCode);
  const [output, setOutput] = useState("");
  const [submit, setSubmit] = useState("");

  const runCode = () => {
    setOutput("Code Executed Successfully! \nResult: 3");
    setSubmit("");
  };

  const submitCode = () => {
    setSubmit("Code Submitted Successfully.");
    setOutput("");
  };

  return (
    <div
      className={`flex h-full flex-col shadow-2xl shadow-slate-900 ${
        darkMode
          ? "bg-gradient-to-r from-slate-900 to-slate-700 text-white"
          : ""
      }`}
    >
      <Editor
        height={`70vh`}
        defaultLanguage={`javascript`}
        theme={darkMode ? "vs-dark" : "vs-light"}
        value={code}
        onChange={setCode}
        options={{
          fontSize: "18px",
        }}
      />

      <div className="flex space-x-4 p-2">
        <button
          onClick={runCode}
          className="mb-2 me-2 mt-2 rounded-lg bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-cyan-400"
        >
          Run Code
        </button>
        <button
          onClick={submitCode}
          className="mb-2 me-2 mt-2 rounded-lg bg-gradient-to-r from-green-600 via-green-700 to-green-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-400"
        >
          Submit Code
        </button>
      </div>
      {output && (
        <div className="m-2 rounded border-t border-gray-300 bg-white p-4">
          <h3 className="font-bold text-gray-800">Output:</h3>
          <pre className="text-gray-700">{output}</pre>
        </div>
      )}
      {submit && (
        <div className="m-2 rounded border-t border-gray-300 bg-white p-4">
          <h3 className="font-bold text-gray-800">Message:</h3>
          <pre className="text-gray-700 dark:text-gray-200">{submit}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;
