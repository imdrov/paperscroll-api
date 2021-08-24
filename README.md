# PaperScroll API

[Документация PaperScroll API](https://paperscroll.docs.apiary.io)

### Установка

```js
$ npm install paperscroll-api
```

### Пример использования

```js
const PaperScrollAPI = require("paperscroll-api");

const PaperScroll = new PaperScrollAPI({
  merchant_id: merchant_id,
  access_token: "access_token",
});

// Promise example
PaperScroll.api.getMerchants().then((result) => {
  console.log(result);
});
```

### Методы SDK

| API Метод                | Метод в коде            |
| ------------------------ | ----------------------- |
| merchants.get            | getMerchants            |
| merchants.edit           | editMerchant            |
| users.get                | getUsers                |
| users.getBalances        | getUsersBalances        |
| transfers.create         | createTransfer          |
| transfers.get            | getTransfers            |
| transfers.getHistory     | getHistoryTransfers     |
| storage.getDisinfectants | getDisinfectantsStorage |
| storage.getItems         | getItemsStorage         |
| webhooks.get             | getWebhook              |
| webhooks.create          | createWebhook           |
| webhooks.delete          | deleteWebhook           |
| webhooks.getLogs         | getLogsWebhook          |
| \*                       | call                    |
