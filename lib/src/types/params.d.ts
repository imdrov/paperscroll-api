export interface getMerchantsParams {
    merchant_ids?: Array<number>;
}
export interface editMerchantParams {
    name?: string;
    group_id?: number;
    avatar?: string;
}
export interface getUsersParams {
    user_ids: Array<number>;
}
export interface getUsersBalancesParams {
    user_ids: Array<number>;
}
export interface createTransfersParams {
    peer_id: number;
    object_type: "balance" | "disinfectants" | "items";
    object_type_id?: number;
    message?: string;
    amount: number;
}
export interface getTransfersParams {
    transfer_ids: Array<number>;
}
export interface getTransfersHistoryParams {
    offset?: number;
    limit?: number;
}
export interface createWebhooksParams {
    url: string;
    events?: ["transfer_new"];
}
