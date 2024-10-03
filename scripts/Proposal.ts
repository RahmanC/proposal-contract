const { ethers } = require("hardhat");

async function main() {
  const ProposalContract = await ethers.getContractFactory("ProposalContract");

  const proposalContract = await ProposalContract.deploy();

  const proposal = await proposalContract.waitForDeployment();

  console.log("ProposalContract deployed to:", proposal.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
