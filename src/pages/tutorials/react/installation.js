import PreviousPageButton from "@/components/buttons/previousButton";
import React from "react";

const NextJsDevelopmentEnvironmentSetup = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-semibold mb-8 text-center text-blue-400">
          Setting up a Next.js Development Environment
        </h1>

        {/* Introduction */}
        <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction:</h2>
          <p>
            Setting up a robust development environment is crucial for efficient
            React development using the Next.js framework. In this topic, we'll
            cover the steps to set up a Next.js project from scratch using
            modern tools and best practices.
          </p>
        </div>

        {/* Installation of Node.js and npm */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
              1. Installation of Node.js and npm:
            </h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Node.js:
                </h3>
                <p>
                  Node.js is a JavaScript runtime built on Chrome's V8
                  JavaScript engine. It allows you to run JavaScript code on the
                  server-side. Visit the official Node.js website{" "}
                  <a
                    href="https://nodejs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    (https://nodejs.org/)
                  </a>{" "}
                  and download the latest LTS version suitable for your
                  operating system. Follow the installation instructions
                  provided on the website.
                </p>
              </div>
              <div className="bg-blue-800 rounded p-4">
                <h3 className="text-xl font-semibold mb-2 text-green-500">
                  npm (Node Package Manager):
                </h3>
                <p>
                  npm is the default package manager for Node.js. It allows you
                  to install, manage, and publish JavaScript packages. npm is
                  included with Node.js installation, so there's no need to
                  install it separately. However, you can check the version of
                  npm installed by running `npm -v` in your terminal or command
                  prompt.
                </p>
              </div>
            </div>
          </div>

          {/* Create a Next.js App */}
          <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
              2. Create a Next.js App:
            </h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <p>
                  Next.js is a React framework for building server-side rendered
                  and statically generated web applications. To create a new
                  Next.js project, open your terminal or command prompt and run
                  the following command:
                </p>
                <code className="block bg-gray-700 p-2 rounded-md ">
                  npx create-next-app my-next-app
                </code>
              </div>
              <div className="bg-green-500 text-black rounded p-4">
                <p>
                  Replace `my-next-app` with the name of your project. This
                  command will create a new directory with the specified project
                  name and set up a basic Next.js project structure inside it.
                </p>
                <p>
                  During the setup process, choose the following options:
                  <ul className="list-disc pl-4">
                    <li>tailwind - yes</li>
                    <li>eslint - yes</li>
                    <li>app router - no</li>
                    <li>typescript - no</li>
                    <li>src - yes</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>

          {/* Understanding the Project Structure */}
          <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 mb-8">
            <h2 className="text-2xl text-yellow-400 font-semibold mb-4">
              3. Understanding the Project Structure:
            </h2>
            <p>
              Once the project is created, navigate to the project directory and
              explore its structure. The main files and directories you'll
              encounter include: `pages`, `public`, `package.json`, and
              `node_modules`.
            </p>
          </div>

          {/* Running the Development Server */}
          <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 mb-8">
            <h2 className="text-2xl text-yellow-400 font-semibold mb-4">
              4. Running the Development Server:
            </h2>
            <p>
              To start the development server and run your Next.js application
              locally, navigate to the project directory in your terminal or
              command prompt and run the following command:
            </p>
            <code className="block bg-gray-700 p-2 rounded-md mb-4">
              npm run dev
            </code>
            <p>
              This command will start the development server and open your
              default web browser, displaying your Next.js application. Any
              changes you make to your code will be automatically reflected in
              the browser without the need to manually refresh the page.
            </p>
          </div>
        </div>
      </div>
      <PreviousPageButton />
    </div>
  );
};

export default NextJsDevelopmentEnvironmentSetup;
