# Project Deployment Guide

This document provides a step-by-step guide on how to deploy this project. Please follow the instructions carefully to ensure a successful deployment.

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- Node.js
- pnpm

**Important Remark:** This project uses  `pnpm` for package management. Please do not use  `npm`.

## Steps

1. **Clone the repository**

   Open your terminal and run the following command:

    ```bash
    git clone https://github.com/ethereum-optimism/ecosystem-contributions
    ```

2. **Navigate to the project directory**

   Change your current directory to the project directory:

    ```bash
   cd ecosystem-contributions
    ```

3. **Install the dependencies**

   Use  `pnpm` to install the project dependencies:

    ```bash
   pnpm install
    ```

4. **Build the project**

   Run the build script:

    ```bash
   pnpm run build
    ```
    If you want to build the project without processing the new markdown files added, use this command instead:
    ```bash
   pnpm run build:unprocessed
    ```

5. **Start the server**

   Start the project:

    ```bash
   pnpm start
    ```

   Your application should now be running at `http://localhost:3000`.

## Troubleshooting

If you encounter any issues during the deployment process, please check the following:

- Ensure that you have the correct permissions to install packages and access the project directory.
- Make sure that  `pnpm` is installed correctly. You can check this by running  `pnpm -v` in your terminal. If  `pnpm` is installed, this command should return the version number.
- If an error occurs during the  `pnpm install` step, try clearing the cache with  `pnpm cache clean` and then run  `pnpm install` again.

If you continue to experience issues, please contact the project maintainer or raise an issue in the project repository.
