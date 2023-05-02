"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletAuth = void 0;
const walletAuth = (req, res, next) => {
    // Mock response
    return res.status(200).send('connected');
};
exports.walletAuth = walletAuth;
