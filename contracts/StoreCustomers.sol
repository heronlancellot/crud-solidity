// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StoreCustomers {

    struct Customer {
        string name;
        uint8 age;
    }

    uint32 private nextId = 0;
    uint32 public count = 0;

    function getNewId() private returns(uint32){
        return ++nextId;
    }

    mapping(uint32 => Customer) public customers;

    function addCustomer(Customer memory newCustomer) public {
        customers[getNewId()] = newCustomer;
        count ++;
    }

    function getCustomer(uint32 id) public view returns(Customer memory){
        return customers[id];
    }

    function compareStrings(string memory a, string memory b) private pure returns(bool){
        return keccak256(bytes(a)) == keccak256(bytes(b));  
    }

    function editCustomer(uint32 id, Customer memory newCustumer) public {
        Customer memory oldCustomer = customers[id];
        if(oldCustomer.age == 0) return;

        if(oldCustomer.age != newCustumer.age){
            oldCustomer.age = newCustumer.age;
        }
        if(compareStrings(oldCustomer.name, newCustumer.name) != true){
            oldCustomer.name = newCustumer.name;
        }
        customers[id] = oldCustomer;
    }

    function removeCustomer(uint32 id) public {
        Customer memory oldCustomer = customers[id];
        if(bytes(oldCustomer.name).length > 0){
            delete customers[id];
            count --;
        }
    }

/*
    string public message = "NFT";
    function setMessage(string memory newMessage) public{
        message = newMessage;
    }
*/
}