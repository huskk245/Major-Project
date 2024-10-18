// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract FoodSupplyChain {
    struct Product {
        string name;
        string location;
        uint timestamp;
        bool isFresh;
    }

    mapping(uint256 => Product) public products;
    uint256 public productCount;

    event ProductCreated(
        uint256 indexed productId,
        string name,
        string location,
        uint timestamp,
        bool isFresh
    );

    function createProduct(string memory name, string memory location, uint timestamp, bool isFresh) public {
        productCount++;
        products[productCount] = Product(name, location, timestamp, isFresh);
        emit ProductCreated(productCount, name, location, timestamp, isFresh);
    }

    function getProduct(uint256 productId) public view returns (string memory, string memory, uint, bool) {
        Product memory product = products[productId];
        return (product.name, product.location, product.timestamp, product.isFresh);
    }
}