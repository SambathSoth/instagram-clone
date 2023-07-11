# Instagram Clone

![Next.js](https://img.shields.io/badge/Next.js-12.2-blueviolet) ![Recoil](https://img.shields.io/badge/Recoil-0.6.1-orange) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0.7-blue)

An Instagram clone built using Next.js, Recoil, and Tailwind CSS. This project replicates the core functionality and user interface of Instagram, including user authentication with Google using NextAuth, and data storage on Firebase.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

The Instagram Clone project aims to demonstrate the development of a full-stack web application using modern frontend technologies. It leverages Next.js as the foundation for server-side rendering and efficient React component-based development. Recoil is utilized for state management, providing a simple and predictable way to manage and share application state. Tailwind CSS is used for fast and responsive styling, ensuring a visually appealing user interface.

## Features

- User authentication with Google using NextAuth
- News feed displaying posts from followed users
- User profile pages with the ability to view and update information
- Upload and share posts with captions and images
- Like, comment, and save posts functionality
- Responsive design for various screen sizes

## Live Demo

A live demo of the Instagram Clone project is available at [https://instagram-sambathsoth.vercel.app/](https://instagram-sambathsoth.vercel.app/).

## Installation

1. Clone the repository:

```bash
git clone https://github.com/SambathSoth/instagram-clone.git
```

2. Navigate to the project directory:

```bash
cd instagram-clone
```

3. Install the dependencies:

```bash
npm install # or yarn install
```

## Configuration

To configure the authentication and data storage for the Instagram Clone project, follow these steps:

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/) if you haven't already.

2. Enable the Google authentication provider in the Firebase project settings.

3. Create a `.env.local` file in the root directory of the project.

4. Add the following environment variables to the `.env.local` file:

```plaintext
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-firebase-measurement-id

NEXTAUTH_URL=http://localhost:3000
GOOGLE_ID=your-google-client-id
GOOGLE_SECRET=your-google-client-secret
```

## Usage

To run the Instagram Clone project locally, follow these steps:

1. Navigate to the project directory:

```bash
cd instagram-clone
```

2. Run the development server:

```bash
npm run dev # or yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have a suggestion or bug fix.
