import React from "react";
import PreviousPageButton from "@/components/buttons/previousButton";

const JSXSyntaxInNextJS = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-semibold mb-8 text-center text-blue-400">
          Understanding JSX Syntax in Next.js
        </h1>

        {/* Introduction */}
        <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction:</h2>
          <p>
            JSX (JavaScript XML) is a syntax extension for JavaScript used by
            React to describe what the UI should look like. In Next.js, JSX is
            a fundamental part of building dynamic user interfaces and
            integrating React components seamlessly.
          </p>
        </div>

        {/* JSX Syntax Overview */}
        <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4">JSX Syntax Overview:</h2>
          <p>
            JSX allows you to write HTML-like code directly within JavaScript.
            It facilitates the creation of React elements in a more
            straightforward and intuitive manner. Here are some key points
            about JSX syntax in Next.js:
          </p>
          <ul className="list-disc pl-4">
            <li>
              JSX elements resemble HTML tags but are actually syntactic sugar
              for React.createElement calls.
              <pre className="bg-gray-700 text-white p-2 rounded-md my-2">
                {"<div>Hello, world!</div>"}
              </pre>
            </li>
            <li>
              You can embed JavaScript expressions within curly braces {"{}"}
              inside JSX to create dynamic content.
              <pre className="bg-gray-700 text-white p-2 rounded-md my-2">
                {"<div>Hello, {name}!</div>"}
              </pre>
            </li>
            <li>
              JSX attributes use camelCase naming convention, e.g., className
              instead of class.
              <pre className="bg-gray-700 text-white p-2 rounded-md my-2">
                {"<div className='container'>Content</div>"}
              </pre>
            </li>
            <li>
              JSX expressions must have a single parent element, but this can be
              achieved using fragment syntax {"<></>"} or by wrapping multiple
              elements in a div.
              <pre className="bg-gray-700 text-white p-2 rounded-md my-2">
                {"<>"}
                <br />
                {"  <h1>Hello</h1>"}
                <br />
                {"  <h2>World</h2>"}
                <br />
                {"</>"}
              </pre>
            </li>
          </ul>
        </div>

        {/* JSX Usage in Next.js */}
        <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 mb-8">
          <h2 className="text-2xl font-semibold mb-4">JSX Usage in Next.js:</h2>
          <p>
            In Next.js, JSX is used extensively to define the UI components of
            your application. Whether it's creating functional components,
            defining routes, or handling dynamic data, JSX forms the backbone
            of building interactive web interfaces in Next.js.
          </p>
          <p>
            With JSX, you can leverage React's component-based architecture to
            compose reusable UI elements and manage state effectively within
            your Next.js application.
          </p>
          <p>
            Here's an example of JSX usage in a Next.js functional component:
            <pre className="bg-gray-700 text-white p-4 rounded-md my-2">
              {`
              import React from 'react';

              const MyComponent = () => {
                const name = 'John Doe';
                return (
                  <div className="container">
                    <h1>Hello, {name}!</h1>
                  </div>
                );
              };

              export default MyComponent;
              `}
            </pre>
            Let's break down the syntax:
            <ul className="list-disc pl-4">
              <li>
                <code>import React from 'react';</code>: This line imports the
                React library, which is necessary to create React components.
              </li>
              <li>
                <code>const MyComponent = () {` =>  `}&#123;</code>: This declares a
                functional component named MyComponent using ES6 arrow function
                syntax.
              </li>
              <li>
                <code>const name = 'John Doe';</code>: This defines a variable
                name with the value 'John Doe'.
              </li>
              <li>
                <code>return ( ... );</code>: This is the return statement of
                the functional component, which returns JSX code to render.
              </li>
              <li>
                <code>{`<div className="container">`}</code>: This is a JSX
                element representing a div with the class name 'container'.
              </li>
              <li>
                <code>{`<h1>Hello, {name}!</h1>`}</code>: This is another JSX
                element representing a heading tag with dynamic content {`{name}`}
                embedded using curly braces.
              </li>
              <li>
                <code>export default MyComponent;</code>: This exports the
                MyComponent functional component as the default export, making
                it available for use in other files.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <PreviousPageButton />
    </div>
  );
};

export default JSXSyntaxInNextJS;
