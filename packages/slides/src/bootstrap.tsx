import React from "react";
//@ts-ignore
import ReactDOM from "react-dom"; //@ts-ignore
import Deck from "@mdxp/core"; //@ts-ignore
import * as components from "@mdxp/components"; //@ts-ignore
import MDXPresentation from "./presentation.mdx";
import { Chat } from "./remote"; //@ts-ignore

ReactDOM.render(
  <Deck components={components}>
    <MDXPresentation />
  </Deck>,
  document.getElementById("root")
);
