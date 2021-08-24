"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const api_1 = __importDefault(require("./src/api"));
const errors_1 = require("./src/errors");
class PaperScrollAPI {
    constructor(options) {
        if (!options.merchant_id)
            throw new errors_1.ParameterError('merchant_id');
        if (!options.access_token)
            throw new errors_1.ParameterError('access_token');
        this.api = new api_1.default(options.merchant_id, options.access_token);
    }
}
module.exports = PaperScrollAPI;
