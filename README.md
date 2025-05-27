# Profile  Dashboard

A responsive web application for managing user profiles, featuring a list view, detailed profile pages, and the ability to add, edit, and delete profiles. The project is built with React and Vite for a fast development experience, styled using Tailwind CSS for utility-first styling.

## Features

* **Profile Listing:** View a comprehensive list of all profiles.
* **Profile Details:** Click on any profile to see a detailed view of their information.
* **Add New Profile:** Easily create new profiles with various details including name, description, contact info, and an optional photo URL.
* **Edit Existing Profile:** Modify existing profile details.
* **Delete Profile:** Remove profiles from the list.
* **Responsive Design:** Optimized for various screen sizes using Tailwind CSS.
* **Dynamic Avatars:** If no photo URL is provided for a new profile, a dynamic avatar based on the profile's name is generated.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **Vite:** A next-generation frontend tooling that provides an extremely fast development experience.
* **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
* **JavaScript (ES6+)**

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

* [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
* [npm](https://www.npmjs.com/get-npm) (comes with Node.js) or [Yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <repository_name>
    ```
    (Replace `<repository_url>` with the actual URL of your GitHub repository, and `<repository_name>` with the name of the cloned directory.)

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure Tailwind CSS:**
    The project uses Tailwind CSS. Ensure its configuration is correctly set up. The necessary `postcss.config.js` and `tailwind.config.js` files are included, and the directives are in `src/index.css`.

    No manual steps are typically needed here if you cloned the project, as the configuration files and `src/index.css` should be in place. If you encounter issues, refer to the [Tailwind CSS with Vite documentation](https://tailwindcss.com/docs/guides/vite).

4. **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    This will start the Vite development server. Open your browser and navigate to the address shown in the console (usually `http://localhost:5173/`).
