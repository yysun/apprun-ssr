"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apprun_1 = require("apprun");
const SSR = ({ cb }, children) => cb ? cb(children) : children;
class Home extends apprun_1.Component {
    constructor() {
        super(...arguments);
        this.state = '';
        this.view = (state) => apprun_1.default.createElement(SSR, { cb: state.cb },
            apprun_1.default.createElement("div", null,
                "Home - ",
                state.time));
        this.update = {
            '/home': (_, cb) => ({ time: new Date().toLocaleTimeString(), cb })
        };
    }
}
exports.Home = Home;
exports.default = new Home().mount();
//# sourceMappingURL=Home.js.map