"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_promise_1 = __importDefault(require("request-promise"));
const errors_1 = require("./errors");
class API {
    constructor(merchant_id, access_token) {
        this.merchant_id = merchant_id;
        this.access_token = access_token;
        this.token = Buffer.from(`${this.merchant_id}:${this.access_token}`).toString('base64');
    }
    async call(method, params) {
        try {
            const result = await request_promise_1.default(`https://paper-scroll.ru/api/${method}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Basic ${this.token}`
                },
                body: params,
                json: true
            });
            return result;
        }
        catch (e) {
            if (!(e instanceof errors_1.APIError) && e.error.status === 400) {
                throw new errors_1.APIError(e.error);
            }
            throw e;
        }
    }
    async getMerchants(params) {
        const result = await this.call('merchants.get', {
            merchant_ids: (params === null || params === void 0 ? void 0 : params.merchant_ids) ? params.merchant_ids : []
        });
        return result.response;
    }
    async editMerchant({ name, group_id, avatar }) {
        const result = await this.call('merchants.edit', {
            name: name,
            group_id: group_id,
            avatar: avatar
        });
        return result;
    }
    async getUsers({ user_ids }) {
        const result = await this.call('users.get', {
            user_ids: user_ids
        });
        return result;
    }
    async getUsersBalances({ user_ids }) {
        const result = await this.call('users.getBalances', {
            user_ids: user_ids
        });
        return result;
    }
    async createTransfers({ peer_id, object_type, object_type_id, message, amount }) {
        const result = await this.call('transfers.create', {
            peer_id: peer_id,
            object_type: object_type,
            object_type_id: object_type_id ? object_type_id : 0,
            message,
            amount: amount
        });
        return result;
    }
    async getTransfers({ transfer_ids }) {
        const result = await this.call('transfers.get', {
            transfer_ids: transfer_ids
        });
        return result;
    }
    async getTransfersHistory(params) {
        const result = await this.call('transfers.getHistory', {
            offset: (params === null || params === void 0 ? void 0 : params.offset) ? params.offset : 0,
            limit: (params === null || params === void 0 ? void 0 : params.limit) ? params.limit : 100
        });
        return result;
    }
    async getStorageDisinfectants() {
        const result = await this.call('storage.getDisinfectants');
        return result;
    }
    async getStorageItems() {
        const result = await this.call('storage.getItems');
        return result;
    }
    async getWebhooks() {
        const result = await this.call('webhooks.get');
        return result;
    }
    async createWebhooks({ url, events = ['transfer_new'] }) {
        const result = await this.call('webhooks.create', {
            url: url,
            events: events
        });
        return result;
    }
    async deleteWebhooks() {
        const result = await this.call('webhooks.delete');
        return result;
    }
    async getLogsWebhooks() {
        const result = await this.call('webhooks.getLogs');
        return result;
    }
}
exports.default = API;
