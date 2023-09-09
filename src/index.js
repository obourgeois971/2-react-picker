// Importer les outils React
import ReactDOM from "react-dom";

// Importer notre premier composant
import { App } from "./App";

// Cibler la div dont l'id est root
const rootDiv = document.getElementById("root");

// Créer un noeud racine react a partir de la div root
const reactRoot = ReactDOM.createRoot(rootDiv);

// Injecter notre premier composant le noeud racine
reactRoot.render(<App />);
