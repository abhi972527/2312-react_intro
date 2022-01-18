import { add } from "./calc";
import("./index.css");

import React from "react";
import ReactDom from "react-dom";

console.log(add(3, 5));

console.log(add(15, 5));


// const h1 = document.createElement("h1");
// h1.innerText = "Hello Webpack";
// h1.classList.add("redcolor");

// document.getElementById("root").appendChild(h1);

//  <h1 class = "redcolor"> <i>React</i> </h1>

ReactDom.render(
    // React.createElement("h1", { className: "redcolor" },
    //     [
    //         React.createElement("i", null, "Hello"),
    //         " webpack and ",
    //         React.createElement("i", null, "React")
    //     ]),      //  What to show
    <h1 className="redcolor">
        Hello Webpack and {" "} <i>React</i> {" "}
    </h1>,   //  JSX

    document.getElementById("root")     //  where to show
);


//  compiler: convert from high level lang to low level lang
//  transpiler: convert from high level to high level