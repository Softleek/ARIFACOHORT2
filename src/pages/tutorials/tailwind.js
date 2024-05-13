// TailwindTutorial.js

import React from "react";

const TailwindTutorial = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">
        Tailwind CSS Tutorial
      </h1>

      {/* Introduction */}
      <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          Tailwind CSS is a utility-first CSS framework that allows you to
          quickly build custom designs by applying pre-defined utility classes
          directly to HTML elements. This tutorial will guide you through the
          basics of Tailwind CSS and provide examples of its usage.
        </p>
      </div>

      {/* Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Background Color Example */}
        <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300">
          <h2 className="text-2xl font-semibold mb-4">
            Background Color Classes
          </h2>
          <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
            <p>Example: Blue Background</p>
          </div>
          <div className="bg-red-500 text-white p-4 rounded-lg mb-4">
            <p>Example: Red Background</p>
          </div>
        </div>

        {/* Text Color Example */}
        <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300">
          <h2 className="text-2xl font-semibold mb-4">Text Color Classes</h2>
          <div className="text-white bg-blue-500 p-4 rounded-lg mb-4">
            <p>Example: White Text on Blue Background</p>
          </div>
          <div className="text-white bg-red-500 p-4 rounded-lg mb-4">
            <p>Example: White Text on Red Background</p>
          </div>
        </div>

        {/* Padding and Margin Example */}
        <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300">
          <h2 className="text-2xl font-semibold mb-4">
            Padding and Margin Classes
          </h2>
          <div className="p-4 mb-4 bg-gray-700">
            <div className="m-4 bg-blue-500 text-white rounded-lg">
              <p>Example: Padding 4, Margin 4</p>
            </div>
          </div>
          <div className="p-8 mb-4 bg-gray-700">
            <div className="m-8 bg-red-500 text-white rounded-lg">
              <p>Example: Padding 8, Margin 8</p>
            </div>
          </div>
        </div>

        {/* Border and Rounded Corners Example */}
        <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300">
          <h2 className="text-2xl font-semibold mb-4">
            Border and Rounded Corners Classes
          </h2>
          <div className="border border-blue-500 rounded-lg p-4 mb-4">
            <p>Example: Border with Rounded Corners</p>
          </div>
          <div className="border border-red-500 rounded-lg p-4 mb-4">
            <p>Example: Border with Rounded Corners</p>
          </div>
        </div>

        {/* Shadows Example */}
        <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300">
          <h2 className="text-2xl font-semibold mb-4">Shadow Classes</h2>
          <div className="shadow-lg p-4 mb-4 bg-gray-700">
            <p>Example: Large Shadow</p>
          </div>
          <div className="shadow-md p-4 mb-4 bg-gray-700">
            <p>Example: Medium Shadow</p>
          </div>
        </div>

        {/* Responsive Example */}
        <div className="bg-gray-800 shadow-md p-6 rounded-lg text-gray-300">
          <h2 className="text-2xl font-semibold mb-4">
            Responsive Classes
          </h2>
          <div className="bg-blue-500 md:bg-red-500 p-4 rounded-lg mb-4">
            <p>
              Example: Blue Background on Small Screens, Red Background on
              Medium Screens
            </p>
          </div>
          <div className="bg-red-500 md:bg-green-500 p-4 rounded-lg mb-4">
            <p>
              Example: Red Background on Small Screens, Green Background on
              Medium Screens
            </p>
          </div>
        </div>
      </div>

      {/* Link to Official Documentation */}
      <div className="mt-8 text-center">
        <a
          href="https://tailwindcss.com/docs"
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

export default TailwindTutorial;
