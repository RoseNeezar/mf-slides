import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const useMount = (el: ReactDOM.Container) => {
  ReactDOM.render(
    <React.StrictMode>
      <div className="max-w-6xl mx-auto mt-10 text-3xl">
        <div>Name: chat</div>
        <div>Framework: react</div>
        <div>Language: TypeScript</div>
        <div>CSS: Tailwind</div>
      </div>
    </React.StrictMode>,
    el
  );
};

const devRoot = document.querySelector("#chat_app");

if (devRoot) {
  useMount(devRoot);
}

export { useMount };
