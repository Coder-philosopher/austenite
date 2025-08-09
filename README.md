# Industrial Metallic Waste Detection & Sorting – Hackathon Project

This project was built during a hackathon as a proof-of-concept web application for **industrial metallic waste detection and sorting**. The idea combines **machine learning** for image-based classification of waste materials with a modern web interface to visualize detection results and sorting efficiency.

Our proposal aims to automate waste segregation in industrial environments, reduce manual labor, and improve recycling rates by quickly identifying and categorizing metallic waste.

## Key Features

- **ML Model Integration** – Prototype setup to connect to an image classification model for detecting metallic vs. non-metallic waste.
- **Real-time Visualization** – Display of detection results and sorting statistics.
- **Data Charts** – Interactive charts (using Recharts) to show waste type distribution, accuracy rates, and sorting performance.
- **Responsive UI** – TailwindCSS-based layout optimized for both desktop and mobile.
- **Developer Friendly** – Built with TypeScript for type safety and scalability.

## Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Utilities**: clsx
- **Build Tool**: Vite
- **Linting & Code Quality**: ESLint, TypeScript ESLint

*(See `package.json` for full dependency list.)*

## Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/metal-waste-detection.git

# Navigate into the project folder
cd metal-waste-detection

# Install dependencies
npm install

# Run development server
npm run dev
