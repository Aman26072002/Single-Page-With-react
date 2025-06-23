import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TextServicePage = () => {
  const [text, setText] = useState('');

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleClear = () => {
    setText('');
  };

  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim());
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1>Text Service</h1>
        <p className="lead">Use our tools to format your text easily.</p>
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          rows="8"
          value={text}
          onChange={handleChange}
          placeholder="Enter your text here..."
        ></textarea>
      </div>

      <div className="d-flex flex-wrap gap-2 mb-4">
        <button className="btn btn-primary" onClick={handleUpperCase}>UPPERCASE</button>
        <button className="btn btn-secondary" onClick={handleLowerCase}>lowercase</button>
        <button className="btn btn-warning" onClick={handleRemoveSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-danger" onClick={handleClear}>Clear Text</button>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Preview</h5>
          <p className="card-text">{text.length > 0 ? text : 'Nothing to preview.'}</p>
        </div>
      </div>
    </div>
  );
};

export default TextServicePage;