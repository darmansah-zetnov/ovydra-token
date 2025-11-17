## OVYDRA (OVR) Polygon ERC-20 Token

OVYDRA (OVR) is a fixed supply ERC-20 token deployed on the Polygon network. The long term vision of Ovydra is to become a **real world property & infrastructure oriented ecosystem**, built under the **Zetnov** umbrella. This repository contains the onchain ERC-20 contract and basic deployment scripts.

> **Status:** Active development early stage, experimental.


### 1. Token Overview

- **Name:** OVYDRA  
- **Symbol:** OVR  
- **Network:** Polygon (POL)
- **Contract address:** `0xf9C72dcc23962524dC6D50D07d6333D710425E81`  
- **Decimals:** `18`  
- **Maximum supply:** `200,000,000 OVR` (fixed, no further minting)

All tokens were minted once at deployment and distributed according to the tokenomics below.

---

### 2. Tokenomics

Total supply: **200,000,000 OVR**

Planned allocation:

- **Founder:** 50,000,000 OVR (25%)  
- **Community & Ecosystem:** 80,000,000 OVR (40%)  
- **Liquidity:** 30,000,000 OVR (15%)  
- **Treasury/Operations:** 20,000,000 OVR (10%)  
- **Partners:** 10,000,000 OVR (5%)  
- **Reserve/Strategic:** 10,000,000 OVR (5%)

Each allocation is held in a dedicated Polygon wallet (Founder, Community, Liquidity, Treasury, Partners, Reserve) managed by the project.

Over time we will publish:

- Onchain distribution proofs (transaction hashes)  
- A public dashboard mapping each wallet to its role

---

### 3. Fee Model & Burning

The OVYDRA token includes a **configurable transfer fee** with strict limits:

- **Maximum fee:** `3%` (300 basis points)  
- **Initial fee:** `1%` (100 basis points, can be adjusted up to the max)  
- **Fee recipient:** Treasury wallet/project development wallet  
- **Burning:** Token holders can burn OVR via standard ERC-20 burn functionality

Additional safety notes:

- Fee is **disabled for mints and burns**  
- The owner (deployer) and the fee recipient are **fee exempt** to allow internal operations and distribution  
- There is **no mint function** supply cannot increase

---

### 4. Contract & Security Notes

- **Standard:** ERC-20 + ERC-20 Burnable (OpenZeppelin)  
- **Ownership:** Ownable, controlled by the founder at this early stage  
- **Upgradability:** This contract is *not* upgradable: any future versions would be deployed as new contracts

> OVYDRA is still in an early experimental phase.  
> Do **not** treat OVR as a risk free asset. There is no guarantee of value, liquidity or listing on any centralized exchange.

---

### 5. Project Status & Roadmap (High Level)

Current status:

- ✅ Token deployed on Polygon  
- ✅ Source code verified on Polygonscan  
- ✅ Initial token distribution to dedicated wallets  
- ✅ Public GitHub repository for transparency  

Next milestones (subject to change):

1. **Documentation & Branding**
   - Public documentation page (Website)
   - Basic brand identity & logo for OVYDRA

2. **Web & Dashboard (MVP)**
   - Simple landing page explaining the vision and mission & whitepaper
   - Basic token & wallet dashboard (supply, allocation, and main addresses)

3. **Liquidity & Integrations**
   - Initial DEX liquidity on Polygon  
   - Simple community tools (explorer links, how-to guides, etc.)

4. **Property / Infrastructure Direction (Mid-Term)**
   - Explore token driven models for property, rentals or real world infrastructure  
   - Pilot concepts and partnerships under the Zetnov Ecosystem

---

### 6. Early Supporters & Future Investors

OVYDRA is built as a **long term protocol**, but at this moment:

- There is **no public sale** yet  
- There is **no promise of profit or returns**  
- Any future fundraising/early investor round will be announced clearly and transparently once the **MVP (minimum viable product)** is ready

If you are an early supporter, builder or potential strategic partner, you are encouraged to:

- Follow the project’s updates via GitHub and future official channels  
- Reach out via email if you are interested in **building**, not just speculating

---

### 7. Join the Team (Developers & Contributors)

The project is currently led by a solo founder and is looking for **early technical collaborators**, especially:

- Frontend/Web developers (Next.js / React)  
- Smart contract  
- Designers (UI/UX, branding)  
- Community & documentation contributors

Because the budget is very limited at this stage, **compensation will be primarily in OVYDRA tokens** and/or future upside, not traditional salaries.

#### What you can get as an early team member

- **Meaningful token allocation** tied to contribution and commitment  
- **“Founding contributor”** status in documentation and future team pages  
- Real-world portfolio: smart contracts, dApps and protocol work on Polygon  
- Direct influence over product direction and roadmap  
- Long-term upside *if* the project succeeds (with all the associated risk)

If you are interested in contributing, please contact:

- **Email (core contact):** `zetnovtechnologies@gmail.com`  
  Subject: `[OVYDRA] Developer/Contributor Application`

Please include:

- Your full name 
- What you’d like to work on (frontend, smart contracts, design, etc, community manager.)  
- Links (GitHub, portfolio, previous projects if any)

---

### 8. Development Notes

This repository uses Hardhat (TypeScript) for development and deployment.

#### Commands

```bash
# install dependencies
npm install

# compile contracts
npx hardhat compile
```

Deployment uses environment variables (.env file, not committed to Git):

PRIVATE_KEY deployer wallet private key

POLYGON_RPC_URL Polygon RPC endpoint

FEE_RECIPIENT treasury/fee recipient wallet

INITIAL_FEE_BPS initial fee in basis points (e.g. 100 = 1%)

### 9. Contact & Links

GitHub (this repo):
https://github.com/darmansah-zetnov/ovydra-token

Ecosystem: Zetnov/Ovydra Protocol

---

### 10. Thank You & Feedback

Thank you for taking the time to read about OVYDRA (OVR) all the way to the end.

If you have feedback, ideas or constructive criticism about the project, we would genuinely appreciate hearing from you. Every perspective helps us improve the protocol and build something more meaningful over the long term.

You can share your thoughts with us via:

- **Email:** `zetnovtechnologies@gmail.com`  
  Subject: `[OVYDRA] Feedback/Suggestions`

We truly value your interest in OVYDRA and appreciate anyone who is willing to engage, review or support this project in its early stages.
