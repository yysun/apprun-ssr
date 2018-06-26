"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ layout, vdom }) => global.ssr ? layout(vdom) : vdom;
//# sourceMappingURL=index.js.map