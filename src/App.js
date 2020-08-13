import React from 'react';
import './App.css';
import marked from 'marked';

const initialState = `
  This is a paragraph
  
  **This is bolded text**

  > Block Quotes!
  
  # Heading
  ## Heading 2

  - list item 1
  - list item 2
  - list item 3


  [Visit my website](https://harrypotter.com)

  This is an inline \`<div></div>\`

  This is a block of code
  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y;
  \`\`\`

  ![React](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K)

  `;

class App extends React.Component {

  state= {
    text: initialState
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    const { text } = this.state;

    const markdown = marked(text, { breaks: true });

    return (
      <div className="container-fluid">
        <h2 className="text-center m-4">Convert Your Markdown</h2>
        <div className="row">
          <div className="col-6">
            <h5 className="text-center">Enter your markdown here:</h5>
            <textarea className="form-control p-2" id="editor" value={text} onChange={this.handleChange} />
          </div>
          
          <div className="col-6">
            <h5 className="text-center">See the result:</h5>
            <div className="preview rounded p-2" id="preview" dangerouslySetInnerHTML={{__html: markdown}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
