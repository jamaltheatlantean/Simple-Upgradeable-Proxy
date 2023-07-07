const { network } = require("hardhat")
const { developmentChains } = require("../helper-hardhat-config")
const { verify } = require("../utils/verify")

module.exports = async ({ getNamedAccounts, deployments}) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    const box = await deploy("Box", {
        from: deployer,
        args: [],
        log: true,
        // wait for live network to verify
        waitConfirmations: network.config.blockConfirmations || 1,
    })
    log(`box deployed at ${box.address}`)
    console.log("Proxy boxv1 deployed")

    if(!developmentChains.includes(network.name) && 
    process.env.ETHERSCAN_API_KEY
    ) {
        await verify(box.address, [INITIAL_SUPPLY])
    }
}

module.exports.tags = ["all", "ATN"]