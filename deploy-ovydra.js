import { ethers } from "ethers";
import dotenv from "dotenv";
import fs from "fs";

console.log(">>> deploy-ovydra.js loaded");

dotenv.config();
console.log(">>> .env loaded");

const { PRIVATE_KEY, POLYGON_RPC_URL, FEE_RECIPIENT, INITIAL_FEE_BPS } = process.env;

console.log("Env check =>",
  "PRIVATE_KEY:", !!PRIVATE_KEY,
  "RPC:", !!POLYGON_RPC_URL,
  "FEE_RECIPIENT:", !!FEE_RECIPIENT,
  "INITIAL_FEE_BPS:", INITIAL_FEE_BPS
);

if (!PRIVATE_KEY || !POLYGON_RPC_URL || !FEE_RECIPIENT) {
  console.error("Missing env vars: PRIVATE_KEY, POLYGON_RPC_URL, or FEE_RECIPIENT");
  process.exit(1);
}

async function main() {
  console.log(">>> main() started");

  const provider = new ethers.JsonRpcProvider(POLYGON_RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

  console.log("Deploying from address:", wallet.address);

  const artifactPath = "./artifacts/contracts/OvydraToken.sol/OvydraToken.json";
  console.log("Reading artifact from:", artifactPath);
  const artifactJson = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

  const factory = new ethers.ContractFactory(
    artifactJson.abi,
    artifactJson.bytecode,
    wallet
  );

  const feeBps = Number(INITIAL_FEE_BPS || "100");
  console.log("Fee recipient:", FEE_RECIPIENT);
  console.log("Initial fee (bps):", feeBps);

  console.log("Sending deployment transaction...");
  const contract = await factory.deploy(FEE_RECIPIENT, feeBps);

  const tx = contract.deploymentTransaction();
  console.log("Deployment tx hash:", tx.hash);

  console.log("Waiting for confirmation...");
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log("OVYDRA (OVR) token deployed at:", address);
}

main().catch((error) => {
  console.error(">>> ERROR in deploy script:");
  console.error(error);
  process.exit(1);
});
