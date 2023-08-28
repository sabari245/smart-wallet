# Smart Contract Wallet

This is a simple implementation of a smart contract wallet with basic functionalities. This contains functions to get the balance and address and transfer money from one wallet to another wallet

## hardhat configuration

To run the local node run the following command

```shell
npx hardhat node
```

> note that this will create a different set of wallets every single time. So the wallet has to be configured before every use. to get around this use some other test nets

To run the test scripts run the following command

```shell
npx hardhat test
```

To run the deploy script in local node

```shell
npx hardhat run scripts/deploy.ts --network localhost
```

## frontend configuration

This project comes with a frontend interface written with next js and shad cn ui, kindly refer to the `client` folder for frontend.

To run the frontend, enter the following commands

```shell
cd client
npm i
npm run dev
```

follow my account for more useful projects

## Disclaimer

THIS PROJECT IS SUBMITTED AS A PROJECT FOR METACRAFTERS ACADEMY, DO NOT USE THIS FOR PRODUCTION UNDER ANY CIRCUMSTANCES
