"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = exports.ParameterError = void 0;
class ParameterError extends Error {
    constructor(parameter) {
        super(`Вы не указали параметр: ${parameter}`);
    }
}
exports.ParameterError = ParameterError;
class APIError extends Error {
    constructor(error) {
        super();
        this.error_code = error.error_code;
        this.error_msg = error.error_msg;
        this.error_text = error.error_text;
    }
}
exports.APIError = APIError;
