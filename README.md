# OVYDRA (OVR) Polygon ERC-20 Token

OVYDRA (OVR) is a fixed supply ERC-20 token deployed on the **Polygon** network and developed under the **Zetnov** Ecosystem. The token is designed as a clean, transparent asset that can be used for future products around Property, DeFi and Protocol Incentives.

---

## 1. Token Overview

- **Name:** OVYDRA  
- **Symbol:** OVR  
- **Standard:** ERC-20  
- **Network:** Polygon  
- **Contract Address:** `0xf9C72dcc23962524dC6D50D07d6333D710425E81`  
- **Decimals:** 18  
- **Max/Fixed Supply:** 200,000,000 OVR  
- **Minting:** Disabled after initial deployment (no further mint)  
- **Burning:** Enabled (holders can burn their tokens)  

Verified contract on Polygonscan:  
https://polygonscan.com/address/0xf9C72dcc23962524dC6D50D07d6333D710425E81#code

---

## 2. Tokenomics

Total supply: **200,000,000 OVR**

Planned high level allocation:

- **Founder:** 50,000,000 OVR (25%)
- **Community:** 80,000,000 OVR (40%)
- **Liquidity:** 30,000,000 OVR (15%)
- **Treasury:** 20,000,000 OVR (10%)
- **Partners:** 10,000,000 OVR (5%)
- **Reserve:** 10,000,000 OVR (5%)

All tokens were minted once to the deployer wallet and then distributed on-chain to labeled wallets for transparency.

---

## 3. Fee Model

OVYDRA uses a simple transfer fee mechanism:

- **Maximum fee:** 3% (300 basis points), hard coded in the contract  
- **Initial fee:** 1% (100 basis points)  
- **Fee recipient:** Treasury wallet (configurable by the owner)  

No fee is taken on:

- Minting or burning  
- Transfers where either the sender or receiver is marked as fee exempt  

There is **no** blacklist, pause or hidden control that can block normal user transfers.

---

## 4. Contract & Stack

The main contract is `OvydraToken.sol`, built using:

- [OpenZeppelin](https://openzeppelin.com/contracts/) `ERC20`, `ERC20Burnable`, `Ownable`
- [Hardhat](https://hardhat.org/) for compilation and deployment
- [ethers.js](https://docs.ethers.org/) for the deployment script

Key files in this repository:

- `contracts/OvydraToken.sol` core token contract  
- `deploy-ovydra.js` deployment script for Polygon  
- `OvydraToken_flat.sol` flattened source used for Polygonscan verification  

---

## 5. Development Notes

To work with this project locally:

```bash
# install dependencies
npm install

# compile contracts
npx hardhat compile

Deployment uses environment variables (.env file) for:

PRIVATE_KEY deployer wallet private key
POLYGON_RPC_URL Polygon RPC endpoint
FEE_RECIPIENT treasury / fee recipient wallet
INITIAL_FEE_BPS initial fee in basis points (e.g. 100 = 1%)
``` 
6. Contact & Links

GitHub: https://github.com/darmansah-zetnov/ovydra-token

Ecosystem: Zetnov/Ovydra Protocol
Email (temporary): zetnovtechnologies@gmail.com

This repository is provided for transparency and technical reference only.
Nothing here should be considered financial advice or a guarantee of future returns.