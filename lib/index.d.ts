import { createTransfersParams, createWebhooksParams, editMerchantParams, getMerchantsParams, getTransfersHistoryParams, getTransfersParams, getUsersBalancesParams, getUsersParams } from './src/types/params';
import { createTransfersResponse, createWebhooksResponse, deleteWebhooksResponse, editMerchantResponse, getMerchantsResponse, getStorageDisinfectantsResponse, getStorageItemsResponse, getTransfersHistoryResponse, getTransfersResponse, getUsersBalancesResponse, getUsersResponse, getWebhooksLogsResponse, getWebhooksResponse } from './src/types/response';
interface IAPI {
    call(method: string, params: any): Promise<any>;
    getMerchants(params?: getMerchantsParams): Promise<getMerchantsResponse[]>;
    editMerchant({ name, group_id, avatar }: editMerchantParams): Promise<editMerchantResponse>;
    getUsers({ user_ids }: getUsersParams): Promise<getUsersResponse[]>;
    getUsersBalances({ user_ids }: getUsersBalancesParams): Promise<getUsersBalancesResponse[]>;
    createTransfers({ peer_id, object_type, object_type_id, message, amount }: createTransfersParams): Promise<createTransfersResponse>;
    getTransfers({ transfer_ids }: getTransfersParams): Promise<getTransfersResponse[]>;
    getTransfersHistory(params?: getTransfersHistoryParams): Promise<getTransfersHistoryResponse[]>;
    getStorageDisinfectants(): Promise<getStorageDisinfectantsResponse[]>;
    getStorageItems(): Promise<getStorageItemsResponse[]>;
    getWebhooks(): Promise<getWebhooksResponse>;
    createWebhooks({ url, events }: createWebhooksParams): Promise<createWebhooksResponse>;
    deleteWebhooks(): Promise<deleteWebhooksResponse>;
    getLogsWebhooks(): Promise<getWebhooksLogsResponse>;
}
interface PaperScrollAPI {
    merchant_id: number;
    access_token: string;
    api?: IAPI;
}
declare class PaperScrollAPI {
    constructor(options: PaperScrollAPI);
}
export = PaperScrollAPI;
