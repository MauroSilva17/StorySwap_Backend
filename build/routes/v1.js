"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesV1 = void 0;
const express_1 = __importDefault(require("express"));
const walletAuth_1 = require("src/components/walletAuth");
const routesV1 = () => {
    /**
     * /v1
     */
    const router = express_1.default.Router({ mergeParams: true });
    router.route('/auth').post(walletAuth_1.walletAuth);
    return router;
};
exports.routesV1 = routesV1;
