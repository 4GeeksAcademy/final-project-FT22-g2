//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout.js";


async function enableMocking() {
    if (process.env.NODE_ENV !== 'development') {
        return
    }

    const { worker } = await import('../mocks/browser.js')

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start()
}

enableMocking().then(() => {

    //render your react application
    ReactDOM.render(<Layout />, document.querySelector("#app"));
})