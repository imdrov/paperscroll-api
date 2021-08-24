export interface getMerchantsResponse {
	merchant_id: number;
	owner_id: number;
	group_id: number;
	name: number;
	avatar: string;
	balance: number;
	create_date: number;
}

export interface editMerchantResponse {
	response: true
}

export interface getUsersResponse {
	user_id: number;
	first_name: string;
	last_name: string;
	avatar: string;
	avatar_max: string;
	balance: number;
	improvements_sum: number;
	bonuses_sum: number;
}

export interface getUsersBalancesResponse {
	user_id: number;
	balance: number;
}

export interface createTransfersResponse {
	transfer_id: number;
	external_id: number;
	owner_id: number;
	peer_id: number;
	is_initiator: boolean;
	payload: number;
	type: "transfer" | "steal" | "loss" | "achievement";
	object_type: "balance" | "disinfectants" | "items";
	object_type_id: number;
	message: string;
	amount: number;
	create_date: number;
}

export interface getTransfersResponse {
	transfer_id: number;
	external_id: number;
	owner_id: number;
	peer_id: number;
	is_initiator: boolean;
	payload: number;
	type: "transfer" | "steal" | "loss" | "achievement";
	object_type: "balance" | "disinfectants" | "items";
	object_type_id: number;
	message: string;
	amount: number;
	create_date: number;
}

export interface getTransfersHistoryResponse {
	transfer_id: number;
	external_id: number;
	owner_id: number;
	peer_id: number;
	is_initiator: boolean;
	payload: number;
	type: "transfer" | "steal" | "loss" | "achievement";
	object_type: "balance" | "disinfectants" | "items";
	object_type_id: number;
	message: string;
	amount: number;
	create_date: number;
}

export interface getStorageDisinfectantsResponse {
	type_id: number;
	name: string;
	protection: string;
	cost: number;
	life_time: number;
	chance_reduction: number;
	current_count: number;
}

export interface getStorageItemsResponse {
	type_id: number;
	name: string;
	description: string;
	cost: number;
	current_count: number;
}

export interface getWebhooksResponse {
	webhook_id: number;
	merchant_id: number;
	events: ["transfer_new"];
	secret: string;
	create_date: number;
}

export interface createWebhooksResponse {
	webhook_id: number;
	merchant_id: number;
	events: ["transfer_new"];
	secret: string;
	create_date: number;
}

export interface deleteWebhooksResponse {
	response: boolean;
}

export interface getWebhooksLogsResponse {
	response: Array<string>
}