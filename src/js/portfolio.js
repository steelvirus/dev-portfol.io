import {App} from "./App";
import '../scss/app.scss';

window.onload = function () {
    const app = new App('portfolioApp');

    app.start();
};