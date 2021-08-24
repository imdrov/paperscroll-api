export class ParameterError extends Error {
	constructor(parameter: string) {
		super(`Вы не указали параметр: ${parameter}`);
	}
}

export interface APIError {
	error_code: number;
	error_msg: string;
	error_text: string;
}

export class APIError extends Error {
	constructor(error: APIError) {
		super();
		this.error_code = error.error_code;
		this.error_msg = error.error_msg;
		this.error_text = error.error_text;
	}
}