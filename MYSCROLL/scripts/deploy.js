const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("EHS");
  const token = await Contract.deploy("EHS", "EHS");

  console.log("成功部署合约:", token); // 修改这一行

  // await token.deployTransaction.wait();
  // console.log("成功部署合约:", token.address); // 这一行注释掉
}

// 运行脚本
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
