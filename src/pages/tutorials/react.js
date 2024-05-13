// ReactTutorial.js

import React from "react";

const ReactTutorial = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">
        React Tutorial
      </h1>

      {/* Introduction */}
      <div className="bg-gray-800 shadow-md shadow-gray-100 hover:shadow-gray-600 hover:p-14 p-12 rounded-lg text-gray-300 mb-8">
        <h2 className="text-2xl text-gray-100 font-semibold mb-4">Introduction</h2>
        <p>
          React is a JavaScript library for building user interfaces. It allows
          you to create reusable UI components and manage the state of your
          application efficiently. React follows a component-based architecture
          where each UI element is represented as a component, making it easier
          to maintain and scale your application.
        </p>
      </div>

      {/* Component-Based Architecture */}
      <div className="bg-gray-800 shadow-md shadow-gray-100 hover:shadow-gray-600 hover:p-14 p-12 rounded-lg text-gray-300 mb-8">
        <h2 className="text-2xl text-gray-100 font-semibold mb-4">
          Component-Based Architecture
        </h2>
        <p>
          In React, you can break down your UI into reusable components. Each
          component encapsulates its own logic and UI, making it easier to
          develop and maintain complex applications. Components can be composed
          together to build larger UIs, and they can also pass data between
          each other using props.
        </p>
      </div>

      {/* Virtual DOM */}
      <div className="bg-gray-800 shadow-md shadow-gray-100 hover:shadow-gray-600 hover:p-14 p-12 rounded-lg text-gray-300 mb-8">
        <h2 className="text-2xl text-gray-100 font-semibold mb-4">Virtual DOM</h2>
        <p>
          One of the key features of React is its use of a virtual DOM. The
          virtual DOM is a lightweight representation of the actual DOM
          hierarchy. When the state of a component changes, React updates the
          virtual DOM first, calculates the difference (diffing) between the
          previous and new virtual DOM trees, and then efficiently updates only
          the necessary parts of the actual DOM, resulting in faster rendering
          performance.
        </p>
      </div>

      {/* JSX */}
      <div className="bg-gray-800 shadow-md shadow-gray-100 hover:shadow-gray-600 hover:p-14 p-12 rounded-lg text-gray-300 mb-8">
        <h2 className="text-2xl text-gray-100 font-semibold mb-4">JSX</h2>
        <p>
          JSX is a syntax extension for JavaScript that allows you to write
          HTML-like code directly within your JavaScript files. It makes your
          React code more readable and expressive. JSX gets compiled to
          JavaScript by tools like Babel before being executed in the browser.
        </p>
      </div>

      {/* State and Props */}
      <div className="bg-gray-800 shadow-md shadow-gray-100 hover:shadow-gray-600 hover:p-14 p-12 rounded-lg text-gray-300 mb-8">
        <h2 className="text-2xl text-gray-100 font-semibold mb-4">State and Props</h2>
        <p>
          In React, state represents the data that a component manages
          internally. It can be accessed and modified using the `setState`
          method. Props, short for properties, are used to pass data from parent
          components to child components. Props are immutable and are passed
          down from the parent component.
        </p>
      </div>

      {/* Hooks */}
      <div className="bg-gray-800 shadow-md shadow-gray-100 hover:shadow-gray-600 hover:p-14 p-12 rounded-lg text-gray-300 mb-8">
        <h2 className="text-2xl text-gray-100 font-semibold mb-4">Hooks</h2>
        <p>
          Hooks are a new addition in React that allows you to use state and
          other React features without writing a class. They enable you to
          reuse stateful logic across different components. Some commonly used
          hooks include useState, useEffect, useContext, and useRef.
        </p>
      </div>

      {/* Official Documentation */}
      <div className="mt-8 text-center">
        <a
          href="https://reactjs.org/docs/getting-started.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Explore the Official Documentation
        </a>
      </div>
    </div>
  );
};

export default ReactTutorial;
