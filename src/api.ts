import request from 'request-promise';
import { APIError } from './errors';
import {
	createTransfersResponse,
	createWebhooksResponse,
	deleteWebhooksResponse,
	editMerchantResponse,
	getMerchantsResponse,
	getStorageDisinfectantsResponse, 
	getStorageItemsResponse,
	getTransfersHistoryResponse,
	getTransfersResponse,
	getUsersBalancesResponse,
	getUsersResponse,
	getWebhooksLogsResponse,
	getWebhooksResponse
} from './types/response';
import {
	createTransfersParams,
	createWebhooksParams,
	editMerchantParams,
	getMerchantsParams,
	getTransfersHistoryParams,
	getTransfersParams,
	getUsersBalancesParams,
	getUsersParams
} from './types/params';

export default class API {
	private token: string;

	constructor(private merchant_id: number, private access_token: string) {
		this.token = Buffer.from(`${this.merchant_id}:${this.access_token}`).toString('base64');
	}

	async call(method: string, params?: any): Promise<any> {
		try {
			const result = await request(`https://paper-scroll.ru/api/${method}`, {
				method: 'POST',
				headers: {
					'Authorization': `Basic ${this.token}`
				},
				body: params,
				json: true
			});

			return result;
		} catch (e) {
			if (!(e instanceof APIError) && e.error.status === 400) {
				throw new APIError(e.error);
			}

			throw e;
		}
	}

	async getMerchants(params: getMerchantsParams): Promise<getMerchantsResponse[]> {
		const result = await this.call('merchants.get', {
			merchant_ids: params?.merchant_ids ? params.merchant_ids : []
		});

		return result.response;
	}

	async editMerchant({ name, group_id, avatar }: editMerchantParams): Promise<editMerchantResponse> {
		const result = await this.call('merchants.edit', {
			name: name,
			group_id: group_id,
			avatar: avatar
		});

		return result;
	}

	async getUsers({ user_ids }: getUsersParams): Promise<getUsersResponse[]> {
		const result = await this.call('users.get', {
			user_ids: user_ids
		});

		return result;
	}

	async getUsersBalances({ user_ids }: getUsersBalancesParams): Promise<getUsersBalancesResponse[]> {
		const result = await this.call('users.getBalances', {
			user_ids: user_ids
		});

		return result;
	}

	async createTransfers({ peer_id, object_type, object_type_id, message, amount }: createTransfersParams): Promise<createTransfersResponse> {
		const result = await this.call('transfers.create', {
			peer_id: peer_id,
			object_type: object_type,
			object_type_id: object_type_id ? object_type_id : 0,
			message,
			amount: amount
		});

		return result;
	}

	async getTransfers({ transfer_ids }: getTransfersParams): Promise<getTransfersResponse[]> {
		const result = await this.call('transfers.get', {
			transfer_ids: transfer_ids
		});

		return result;
	}

	async getTransfersHistory(params: getTransfersHistoryParams): Promise<getTransfersHistoryResponse[]> {
		const result = await this.call('transfers.getHistory', {
			offset: params?.offset ? params.offset : 0,
			limit: params?.limit ? params.limit : 100
		});

		return result;
	}

	async getStorageDisinfectants(): Promise<getStorageDisinfectantsResponse[]> {
		const result = await this.call('storage.getDisinfectants');

		return result;
	}

	async getStorageItems(): Promise<getStorageItemsResponse[]> {
		const result = await this.call('storage.getItems');

		return result;
	}

	async getWebhooks(): Promise<getWebhooksResponse> {
		const result = await this.call('webhooks.get');

		return result;
	}

	async createWebhooks({ url, events = ['transfer_new'] }: createWebhooksParams): Promise<createWebhooksResponse> {
		const result = await this.call('webhooks.create', {
			url: url,
			events: events
		});

		return result;
	}

	async deleteWebhooks(): Promise<deleteWebhooksResponse> {
		const result = await this.call('webhooks.delete');
	
		return result;
	}

	async getLogsWebhooks(): Promise<getWebhooksLogsResponse> {
		const result = await this.call('webhooks.getLogs');

		return result;
	}
}