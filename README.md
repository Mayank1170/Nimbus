# Nimbus

## Overview

Nimbus is a DeFi oracle aggregator designed to fetch price data from multiple oracle sources, calculate an average price, and display it on the frontend. This project uses the Pyth Network and switchboard oracle as these are the key oracles for fetching price data.

## Features

- **Multi-Oracle Integration**: Fetches price data from at least two different oracle sources.
- **Data Aggregation**: Computes the average of the fetched price feeds.
- **Real-Time Display**: Presents the aggregated data on the user interface.
- **Deployable**: Can be tested and deployed on Cloudflare or Vercel.

## Technologies Used

- **Next.js**: React framework for building server-side rendered applications.
- **TypeScript**: Programming language for safer and more reliable code.
- **Pyth Network**: Oracle used for fetching high-quality financial data.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node package manager) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mayank1170/Nimbus
2. Navigate to the project directory:
   ```bash
   cd Nimbus
3. Install the dependencies:
   ```bash 
   npm install
4.  Start the development server:
    ```bash 
    npm run dev
5.  Open your browser and navigate to:
    ```bash
    http://localhost:3000

### Usage

    1.  Open the application in your browser.
    2.  Use the navigation bar to switch between different cryptocurrencies.
    3.  The app fetches the latest price data from the oracles, calculates the 
        average, and displays it in real-time.
### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### Acknowledgments

   [Pyth Network](https://pyth.network/) and [Switchboard Protocol](https://switchboard.xyz/) for providing price feed data
   and oracle services



