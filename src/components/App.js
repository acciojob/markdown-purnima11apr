import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'

function App() {
    const [markdownText, setMarkdownText] = useState('# Hello world');

    const handleChange = (e) => {
        setMarkdownText(e.target.value);
    }
  


  return (
    <div className='app' style={{ display: 'flex',  height: '100vh', fontFamily: 'Arial, sans-serif' }}>
     <textarea
          className="textarea"
          onChange={handleChange}
          value={markdownText}
          placeholder="Enter Markdown..."
          style={{ width: '50%', height: '100%', padding: '20px', boxSizing: 'border-box' }}
        ></textarea>
         <div className="preview" style={{ width: '50%', height: '100%', padding: '20px', boxSizing: 'border-box', borderLeft: '1px solid #ccc' }}>
          <h1><Markdown>{markdownText}</Markdown></h1>
      </div>
      
      
      
      </div>

  )
}

export default App


