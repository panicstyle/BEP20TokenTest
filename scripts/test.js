const PTC = artifacts.require("PTC");

module.exports = async function(callback) {
	try {
        const accounts = await web3.eth.getAccounts()
        console.log('accounts address', accounts[0])

        // Fetch the deployed PTC
        const ptc = await PTC.at("0x674B537736CBCF2D6FA8afE0284B1F1cCCc3e4ff")
        console.log('PTC fetched', ptc.address)

        const balance = await ptc.balanceOf.call("0xa3966d8780e65381863bC947b0042367540846aa")
        console.log('PTC balanceOf', BigInt(balance))
    }
    catch(error) {
        console.log(error)
    }
    callback()
}
