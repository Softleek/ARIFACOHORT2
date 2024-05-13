import React from "react";

const NextJSTutorial = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">
        Next.js Tutorial
      </h1>

      {/* Introduction */}
      <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 p-12 hover:p-14 shadow-gray-300 hover:shadow-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          Next.js is a React framework for building server-side rendered (SSR)
          and statically generated web applications. It extends React with
          additional features such as server-side rendering, automatic code
          splitting, and route pre-fetching, making it easier to build
          production-ready React applications with optimal performance.
        </p>
      </div>

      {/* Server-Side Rendering */}
      <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 p-12 hover:p-14 shadow-gray-300 hover:shadow-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Server-Side Rendering</h2>
        <p>
          Next.js enables server-side rendering (SSR) out of the box, which
          means that pages are generated on the server and delivered as fully
          rendered HTML to the client. SSR improves SEO and initial page load
          performance by serving content directly to search engines and reducing
          client-side rendering time.
        </p>
      </div>

      {/* Static Site Generation */}
      <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 p-12 hover:p-14 shadow-gray-300 hover:shadow-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Static Site Generation</h2>
        <p>
          In addition to SSR, Next.js supports static site generation (SSG),
          where pages are pre-built at build time and served as static files.
          SSG is useful for content-heavy websites that don't require dynamic
          data fetching. It improves performance and reduces server load by
          serving pre-rendered pages directly from a CDN.
        </p>
      </div>

      {/* Automatic Code Splitting */}
      <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 p-12 hover:p-14 shadow-gray-300 hover:shadow-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Automatic Code Splitting
        </h2>
        <p>
          Next.js automatically splits your code into smaller chunks based on
          the pages in your application. This results in faster initial page
          loads because only the code needed for the current page is loaded,
          while other code remains deferred until needed. This feature improves
          performance and reduces bundle size.
        </p>
      </div>

      {/* Route Pre-fetching */}
      <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 p-12 hover:p-14 shadow-gray-300 hover:shadow-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Route Pre-fetching</h2>
        <p>
          Next.js pre-fetches data for the next page when a link is hovered or
          clicked, ensuring that the next page loads quickly with minimal
          latency. This feature enhances user experience by reducing waiting
          times between page transitions and making navigation seamless.
        </p>
      </div>

      {/* Project Structure */}
      <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 p-12 hover:p-14 shadow-gray-300 hover:shadow-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
        <p>
          This section provides a detailed explanation of the project structure
          of a Next.js application.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">src/pages/ Directory</h3>
        <p>
          This directory is a fundamental part of a Next.js application. Each
          file within this directory represents a route in your application. For
          example, <code>index.js</code> corresponds to the root route (e.g.,
          /), while <code>[id].js</code> represents dynamic routes where{" "}
          <code>id</code> is a parameter that can take different values (e.g.,
          /blog/1, /blog/2, etc.). You can also have nested routes by creating
          subdirectories within the pages directory. For instance, a blog
          directory inside pages might contain files like index.js, new.js, and
          [id].js, representing different pages related to blog functionality.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          src/components/ Directory
        </h3>
        <p>
          This directory houses reusable UI components that are used across
          multiple pages in your application. Components such as Header.js,
          Footer.js, Button.js, etc., can be stored here. Organizing components
          in this directory helps maintain a clean codebase and promotes code
          reusability.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          _app.js and _document.js Files
        </h3>
        <p>
          {`_app.js is a special Next.js component that wraps every page component in your application. It's used for global setup such as initializing state management libraries (like Redux), setting up global styles or themes, or adding layout components that should persist across all pages.
        _document.js is another special Next.js component used for server-side rendering (SSR). It allows you to customize the <html>, <head>, and <body> tags of the server-rendered page. You can include meta tags, external scripts, or other document-wide settings here.
        `}
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">src/pages/blog/ Directory</h3>
        <p>
          This directory represents a hypothetical section of your application
          dedicated to blog functionality. Inside the blog directory, you might
          have:
          <ul className="list-disc list-inside ml-4">
            <li>index.js: The main blog page listing all blog posts.</li>
            <li>new.js: A page for creating new blog posts.</li>
            <li>
              [id].js: A dynamic route component for displaying individual blog
              posts. The id parameter could be used to fetch the specific blog
              post from a database.
            </li>
            <li>edit.js: A page for editing existing blog posts.</li>
          </ul>
        </p>
      </div>

      {/* Official Documentation */}
      <div className="mt-8 text-center">
        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-semibold"
        >
          Explore the Official Documentation
        </a>
      </div>
    </div>
  );
};

export default NextJSTutorial;
