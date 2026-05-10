# I-CONTRACT Smart Contract Builder

A low-code / no-code smart contract development platform that allows developers to build, compile, estimate gas, and deploy Solidity smart contracts directly from the browser.

The platform combines a modern browser-based development experience with backend Solidity compilation services, making blockchain development faster and more accessible.

---

## Features

* Drag-and-drop smart contract builder
* Browser-based Solidity development
* Smart contract compilation
* Gas estimation and calculation
* Contract deployment to EVM-compatible chains
* File management system
* Low-code / no-code workflow
* Fast browser UI powered by WebAssembly
* Wallet integration for deployment
* Real-time build feedback

---

## Tech Stack

### Frontend

* WebAssembly (WASM)

  * Drag and drop engine
  * File management
  * UI performance optimization

### Backend

* FastAPI

  * Solidity compilation service
  * Build orchestration
  * API handling

### Blockchain Integration

* Ethers.js

  * Smart contract deployment
  * Wallet interaction
  * Gas estimation
  * Blockchain communication

---

## Architecture

```text
┌──────────────────────┐
│      Frontend        │
│      WebAssembly     │
│  - Drag & Drop UI    │
│  - File Management   │
│  - Browser Logic     │
└─────────┬────────────┘
          │ API Calls
          ▼
┌──────────────────────┐
│       FastAPI        │
│  - Solidity Compile  │
│  - Build Services    │
│  - Contract Artifacts│
└─────────┬────────────┘
          │ ABI / Bytecode
          ▼
┌──────────────────────┐
│      Ethers.js       │
│  - Deploy Contracts  │
│  - Estimate Gas      │
│  - Wallet Connection │
└──────────────────────┘
```

---

## How It Works

1. Users build smart contracts using the browser-based visual interface.
2. WebAssembly powers the frontend interactions, drag-and-drop system, and file handling.
3. Solidity code is sent to the FastAPI backend for compilation.
4. The backend returns compiled artifacts such as:

   * ABI
   * Bytecode
   * Compilation metadata
5. Ethers.js handles:

   * Wallet connection
   * Gas estimation
   * Smart contract deployment
6. Contracts are deployed directly to supported EVM networks.

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/smart-contract-builder.git

cd smart-contract-builder
```

---

## Backend Setup (FastAPI)

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Environment

#### Linux / macOS

```bash
source venv/bin/activate
```

#### Windows

```bash
venv\Scripts\activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Run FastAPI Server

```bash
uvicorn app.main:app --reload
```

---

## Frontend Setup

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file:

```env
VITE_RPC_URL=
VITE_CHAIN_ID=
VITE_CONTRACT_NETWORK=
```

Backend `.env`:

```env
SOLC_VERSION=
API_PORT=
```

---

## Supported Features

* Solidity smart contract compilation
* EVM deployment support
* Gas fee calculation
* Wallet integration
* Visual smart contract workflow
* Multi-file project management

---

## Future Improvements

* Multi-chain deployment
* AI-assisted smart contract generation
* Contract templates marketplace
* Team collaboration
* Smart contract testing environment
* On-chain verification support

---

## Use Cases

* Rapid smart contract prototyping
* Blockchain education
* No-code smart contract deployment
* DAO tooling
* Web3 MVP development
* Hackathon projects

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Open a pull request

---

## License

MIT License

---

## Author
Daniel Tega
Built for modern Web3 development workflows.
