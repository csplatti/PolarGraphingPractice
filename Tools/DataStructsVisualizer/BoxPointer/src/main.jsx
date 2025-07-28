import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ListInput from "../Components/ListInput";
import "bootstrap/dist/css/bootstrap.css";
import { parseListInput, boxPointer } from "../Utils/boxPointer.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="list-input-container"><ListInput width={500} height={80} handleInput={boxPointer}/></div>
  </React.StrictMode>,
)
