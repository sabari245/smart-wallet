import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.21",
  networks: {
    hardhat: {
      loggingEnabled: false
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/aeb085248fd14c89a9635a8ac81321fa",
      accounts: ["<your address>"]
    }
  }
};

export default config;
