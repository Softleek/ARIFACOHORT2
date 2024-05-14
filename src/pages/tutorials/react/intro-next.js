import React from "react";
import Link from "next/link";
import PreviousPageButton from "@/components/buttons/previousButton";

const ComprehensiveNextJsOverview = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-semibold mb-8 text-center text-blue-400">
          Comprehensive Overview of Next.js
        </h1>

        {/* Introduction */}
        <div className="bg-gray-800 shadow-md shadow-gray-300 hover:shadow-gray-700 p-6 rounded-lg text-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Introduction to Next.js:
          </h2>
          <p>
            Next.js is a React framework for building server-side rendered and
            statically generated web applications. It provides a streamlined
            development experience with features like automatic code splitting,
            hot module replacement, and built-in CSS support.
          </p>
        </div>

        {/* Core Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-800 shadow-md shadow-gray-300 hover:shadow-gray-700  p-6 rounded-lg text-gray-300 mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Understanding Next.js Core Concepts:
            </h2>
            <ol className="list-decimal pl-4">
              <li>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  Server-side Rendering (SSR):
                </h3>
                <p>
                  Next.js allows you to render React components on the server
                  and send the HTML response to the client, improving SEO and
                  initial page load performance.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  Static Site Generation (SSG):
                </h3>
                <p>
                  Next.js can generate static HTML files at build time, enabling
                  faster page loads and reducing server load for content that
                  doesn't change frequently.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  API Routes:
                </h3>
                <p>
                  Next.js allows you to create API endpoints within your
                  application, making it easy to handle server-side logic and
                  interact with databases or external services.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  Automatic Code Splitting:
                </h3>
                <p>
                  Next.js automatically splits your code into smaller bundles,
                  ensuring that only the code necessary for each page is loaded,
                  which improves performance.
                </p>
              </li>
            </ol>
          </div>

          {/* Advantages */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Advantages of Using Next.js:
            </h2>
            <ol className="list-decimal pl-4">
              <li>
                <h3 className="text-xl font-semibold mb-2 text-green-600">
                  Improved Performance:
                </h3>
                <p>
                  Next.js optimizes your application for performance with
                  features like server-side rendering, static site generation,
                  and automatic code splitting.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold mb-2 text-green-600">
                  Simplified Development:
                </h3>
                <p>
                  Next.js provides a streamlined development experience with
                  built-in support for features like routing, hot module
                  replacement, and CSS modules.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold mb-2 text-green-600">
                  SEO-Friendly:
                </h3>
                <p>
                  Next.js improves SEO by serving fully-rendered HTML pages to
                  search engine crawlers, ensuring that your content is
                  discoverable.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold mb-2 text-green-600">
                  Flexible Deployment:
                </h3>
                <p>
                  Next.js applications can be deployed as static sites, server-
                  rendered applications, or hybrid applications, giving you
                  flexibility in how you host your project.
                </p>
              </li>
            </ol>
          </div>
        </div>
        {/* Project Structure */}
        <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 p-14 hover:p-14 shadow-gray-300 hover:shadow-gray-700 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
          <p>
            This section provides a detailed explanation of the project
            structure of a Next.js application.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4">
            src/pages/ Directory
          </h3>
          <p>
            This directory is a fundamental part of a Next.js application. Each
            file within this directory represents a route in your application.
            For example, <code>index.js</code> corresponds to the root route
            (e.g., /), while <code>[id].js</code> represents dynamic routes
            where <code>id</code> is a parameter that can take different values
            (e.g., /blog/1, /blog/2, etc.). You can also have nested routes by
            creating subdirectories within the pages directory. For instance, a
            blog directory inside pages might contain files like index.js,
            new.js, and [id].js, representing different pages related to blog
            functionality.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4">
            src/components/ Directory
          </h3>
          <p>
            This directory houses reusable UI components that are used across
            multiple pages in your application. Components such as Header.js,
            Footer.js, Button.js, etc., can be stored here. Organizing
            components in this directory helps maintain a clean codebase and
            promotes code reusability.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4">
            _app.js and _document.js Files
          </h3>
          <p>
            {`_app.js is a special Next.js component that wraps every page component in your application. It's used for global setup such as initializing state management libraries (like Redux), setting up global styles or themes, or adding layout components that should persist across all pages.
        _document.js is another special Next.js component used for server-side rendering (SSR). It allows you to customize the <html>, <head>, and <body> tags of the server-rendered page. You can include meta tags, external scripts, or other document-wide settings here.
        `}
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4">
            src/pages/blog/ Directory
          </h3>
          <p>
            This directory represents a hypothetical section of your application
            dedicated to blog functionality. Inside the blog directory, you
            might have:
            <ul className="list-disc list-inside ml-4">
              <li>index.js: The main blog page listing all blog posts.</li>
              <li>new.js: A page for creating new blog posts.</li>
              <li>
                [id].js: A dynamic route component for displaying individual
                blog posts. The id parameter could be used to fetch the specific
                blog post from a database.
              </li>
              <li>edit.js: A page for editing existing blog posts.</li>
            </ul>
          </p>
        </div>

        {/* Official Documentation Link */}
        <div className="text-center text-xl font-bold pb-8">
          <Link
            href="https://nextjs.org/docs"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Documentation
          </Link>
        </div>

        <PreviousPageButton />
      </div>
    </div>
  );
};

export default ComprehensiveNextJsOverview;
