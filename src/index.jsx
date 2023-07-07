import ReactDom from 'react-dom/client';
import App from './components/App';
import "./styles/style.scss"


const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<App/>)
