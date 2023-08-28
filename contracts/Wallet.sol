// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Wallet {
    address payable public owner;
    address public proxy;

    constructor(address _owner) {
        owner = payable(_owner);
        proxy = msg.sender;
    }

    receive() external payable {}

    function fund() external payable {}

    function getWalletAddress() external view returns (address) {
        return address(this);
    }

    function getWalletBalance() external view returns (uint256) {
        return address(this).balance;
    }

    function transfer(uint256 amount) external {
        require(
            address(this).balance >= amount,
            "The required amount is not in the account"
        );
        require(msg.sender == proxy, "Only the proxy can call this function");

        WalletFactory(proxy).getMoney{value: amount}();
    }

    function withdraw(uint256 amount) external {
        require(
            address(this).balance >= amount,
            "The required amount is not in the account"
        );
        owner.transfer(amount);
    }
}

contract WalletFactory {
    mapping(address => Wallet) public wallets;
    mapping(address => Wallet) public realAddressWallets;

    function getMoney() external payable {}

    modifier validWallet() {
        Wallet wallet = wallets[msg.sender];
        require(address(wallet) != address(0), "Wallet does not exist");
        _;
    }

    receive() external payable {}

    function createWallet() external {
        Wallet wallet = new Wallet(msg.sender);
        address walletAddress = wallet.getWalletAddress();
        realAddressWallets[walletAddress] = wallet;
        wallets[msg.sender] = wallet;
    }

    function fund() external payable validWallet {
        Wallet wallet = wallets[msg.sender];
        wallet.fund{value: msg.value}();
    }

    function transfer(address to, uint256 amount) external validWallet {
        Wallet wallet = wallets[msg.sender];
        wallet.transfer(amount);
        Wallet toWallet = realAddressWallets[to];
        toWallet.fund{value: amount}();
    }

    function withdraw(uint256 amount) external validWallet {
        Wallet wallet = wallets[msg.sender];
        wallet.withdraw(amount);
    }

    function getWalletAddress() external view validWallet returns (address) {
        Wallet wallet = wallets[msg.sender];
        return wallet.getWalletAddress();
    }

    function getWalletBalance() external view validWallet returns (uint256) {
        Wallet wallet = wallets[msg.sender];
        return wallet.getWalletBalance();
    }
}
