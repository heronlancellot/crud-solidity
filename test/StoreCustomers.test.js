const StoreCustomers = artifacts.require("StoreCustomers");

contract ('StoreCustomers', function (accounts) {

    beforeEach(async () => {
        contract = await StoreCustomers.new(); // Pega instancia do contrato // Antes de cada teste meio que está reiniciando o contrato..
    })
/*
    it('Get Message', async () => {
        const message = await contract.message();
        console.log(message);
        assert(message === "NFT", "The message should be NFT");
    })


    it('Set Message', async () => {
        await contract.setMessage("New message");

        const message = await contract.message();
        assert(message === "New message", "The message should be New message");
    })

    it('Add Customer', async () => {
        const result = await contract.addCustomer({
            name: 'Luiz',
            age: 34
        });

        console.log(result);
        assert(result.tx, "Couldn't add the customer.");
        
    })    

    
*/

    it('Add Customer', async () => {
        await contract.addCustomer({
            name: 'Luiz',
            age: 34
        });
 
        const count = await contract.count();
        assert(count.toNumber() === 1, "Couldn't add the counter");
    })

    it('Get Customer', async () => {
        await contract.addCustomer({
            name: 'Luiz',
            age: 34
        });
 
        const customer = await contract.getCustomer(1);
        assert(customer.name === "Luiz", "Couldn't add the costumers"); 
    })

    it('Edit Customer', async () => {
        await contract.addCustomer({
            name: 'Luiz',
            age: 34
        });
 
        await contract.editCustomer(1, {
            name: 'Fernando',
            age: 0
        });

        const customer = await contract.getCustomer(1);
        assert(customer.name === "Fernando", "Couldn't edit the costumers"); 
    })
    
    it('Remove Customer', async () => {
        await contract.addCustomer({
            name: 'Luiz',
            age: 34
        });

        await contract.removeCustomer(1);
 
        const count = await contract.count();
        assert(count.toNumber() === 0, "Couldn't remove the counter");
    })

})