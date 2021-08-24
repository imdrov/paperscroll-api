export declare class ParameterError extends Error {
    constructor(parameter: string);
}
export interface APIError {
    error_code: number;
    error_msg: string;
    error_text: string;
}
export declare class APIError extends Error {
    constructor(error: APIError);
}
