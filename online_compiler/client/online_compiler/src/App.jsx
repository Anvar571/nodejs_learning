import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [code, setCode] = useState("");
  const [output, setOutPut] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [htmlCode, setHtmlCode] = useState("");

  const handleButton = async () => {
    const data = {
      language,
      code,
    };

    try {
      if (language !== "html") {
        const output = await axios.post("http://localhost:5000/run", data);
        setOutPut(output.data.output);
      }else {
        setHtmlCode(`
          <html>
            <head>
            </head>
            <body>
                ${code}
            </body>
          </html>
        `)
      }
    } catch (err) {
      setOutPut(err.response.data.msg.stderr);
    }
  };

  return (
    <div className="App">
      <h1>Online Compiler</h1>
      <div className="code-config">
        <select
          className="select-language"
          value={language}
          onChange={(e) => {setLanguage(e.target.value)}}
        >
          <option value="cpp">C++</option>
          <option value="py">Python</option>
          <option value="html">html</option>
          <option value="js">JavaScript</option>
          <option value="go">Golang</option>
        </select>
        <button onClick={handleButton}>Submit</button>
      </div>
      <div>
        <textarea
          className="code-editor"
          rows="20"
          cols="65"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
        {
          language == "html" ? <iframe className="html-code t2" srcDoc={htmlCode}></iframe> : 
          <textarea className="code-editor t2" rows="20" cols="65" 
          value={output}>
          </textarea>
        }
        
        
      </div>
      <br />
    </div>
  );
}

export default App;
