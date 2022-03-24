const PTC = artifacts.require("PTC");

module.exports = async function(callback) {
        try {
        const accounts = await web3.eth.getAccounts()
        console.log('accounts address', accounts[0])

        // Fetch the deployed PTC
        const ptc = await PTC.at("0x674B537736CBCF2D6FA8afE0284B1F1cCCc3e4ff")
        console.log('PTC fetched', ptc.address)

        const address1 = "0xa3966d8780e65381863bC947b0042367540846aa";
        var balance1 = await ptc.balanceOf.call(address1);
        console.log('PTC balanceOf',  address1, BigInt(balance1))

        const address2 = "0x304b3C0f5b2561eE5B03CAD9fA7Da055F9217049"
        var balance2 = await ptc.balanceOf.call(address2)
        console.log('PTC balanceOf', address2, BigInt(balance2))

        amount = "10000000000000000000"
        const transferTx = await ptc.transfer(address2, amount)
        console.log('PTC transfer', transferTx.tx)

        balance2 = await ptc.balanceOf.call(address2)
        console.log('PTC balanceOf', address2, BigInt(balance2))

    }
    catch(error) {
        console.log(error)
    }
    callback()
}
