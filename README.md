.main_div {
    width: 100%;
    height: 100vh;
    background: #6983aa;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.center_div {
    width: 25%;
    height: 80vh;

    background-color: #f4f4f4;
    box-shadow: 5px 5px 25px -5px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
}

h1 {
    color: white;
    background-color: transparent;

    background-color: #8566aa;
    padding: 6px 0 2px 0;
    margin-bottom: 10px;
    box-shadow: 5px 5px 15px -5px rgb(0, 0, 0, 0.3);
}

input {
    text-align: center;
    height: 30px;
    top: 10px;
    border: none;
    background: transparent;
    font-size: 20px;
    font-weight: 500;
    width: 60%;
    border-bottom: 2px solid #8566aa;
    outline: none;
}

button {
    min-height: 40px;
    width: 40px;
    border-radius: 50%;
    border-color: transparent;
    background-color: #8566aa;
    color: #fff;
    font-size: 40px;
    border: none;
    outline: none;
    margin-left: 10px;
    box-shadow: 5px 5px 15px -5px rgb(0, 0, 0, 0.3);
}

button:hover {
    background-color: #20bf6b;
}

ol {
    margin-top: 30px;
}

ol li {
    padding-left: 0px;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    min-height: 40px;
    display: flex;
    align-items: center;
    color: #8566aa;
    text-transform: capitalize;
}

.todo_style {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
}

.todo_style .fa_times {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8566aa;
    border-radius: 50%;
    margin: 0 15px 0 35px;
    color: aliceblue;
    box-shadow: 5px 5px 15px -5px rgb(0, 0, 0, 0.3);
}

.todo_style .fa_times:hover {
    background-color: crimson;
}

.todo_style .fa_times:hover .list_style {
    color: crimson;
}

@media(max_width: 768px) {
    .center_div {
        width: 55%;
    }
}

.todo_style .fa_times {
    margin: 0 15px 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    margin-left: 5px;
    min_height: 40px;
    width: 40px;
    color: #fff;
    font-size: 30px;
}





import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import Demo from "./Demo";

ReactDOM.render(<App />, document.getElementById("root"));




import React, { useState } from "react";
import ToDoLists from "./ToDoList";

const App = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };

    const deleteItems = (a) => {
        // console.log("deleted");
        const finalData = Items.filter((itemval, index) => {
            return index != a;
        })
        setItems(finalData)
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo list</h1>
                    <br />
                    <input type="text" placeholder="Add a Items"
                        value={inputList}
                        onChange={itemEvent} />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {/*<li>{inputList}</li>*/}
                        {Items.map((itemval, index) => {
                            return (
                                <ToDoLists
                                    key={index}
                                    id={index}
                                    text={itemval}
                                    onSelect={deleteItems}
                                />
                            );
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
};

export default App;



import React from "react";

const ToDoLists = (props) => {


    return (
        <>
            <div className="todo_style">
                {/* <i class="fa-solid fa-xmark"></i> */}
                {/* <i class="fa-solid fa-arrows-to-circle"></i> */}
                {/* <i className="fa-thin fa-xmark" */}
                {/* onClick={props.onSelect} /> */}
                {/* <i class="fa-regular fa-circle-xmark"></i> */}
                <i class="fa fa-times" aria-hidden="true" />
                <li> {props.text} </li>
                <button onClick={() => {
                    props.onSelect(props.id)
                }}>x</button>
            </div>
        </>
    );
};
export default ToDoLists;



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content="Web site created using create-react-app" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
  <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
  <!-- <i class="fa-sharp fa-solid fa-skull-crossbones"></i>
  <title>React App</title>
</head>

<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
  <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
</body>

</html>
