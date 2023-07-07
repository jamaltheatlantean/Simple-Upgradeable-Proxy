const { ethers, upgradeables} = require("hardhat");

async function main() {
    const Box = await ethers.getContractFactory("Box");

    const box = await upgradeables.deployProxy(Box, [42], {
        initializer: "initialize",
    });
    awiat box.deployed()
}