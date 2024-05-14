import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen items-center justify-between">
      {/* Navbar */}

      {/* Main Content */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 gap-8">
          {/* Tutorials Section */}
          <div className="lg:col-span-2 py-12">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Tutorials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Tailwind CSS Tutorial */}
              <div className="bg-blue-800 hover:bg-blue-800 rounded-lg hover:rounded-xl overflow-hidden shadow-lg shadow-gray-600 hover:shadow-xl transition duration-200">
                <Link href="/tutorials/tailwind">
                  <div className="cursor-pointer p-12">
                    <h3 className="text-2xl font-bold mb-2 text-yellow-200">
                      Tailwind CSS Tutorial
                    </h3>
                    <p className="text-gray-200 font-semibold">
                      Learn how to use Tailwind CSS to create beautiful,
                      responsive designs with ease.
                    </p>
                  </div>
                </Link>
              </div>

              {/* React Tutorial */}
              <div className="bg-yellow-800 hover:bg-yellow-800 rounded-lg hover:rounded-xl overflow-hidden shadow-lg shadow-gray-600 hover:shadow-xl transition duration-200">
                <Link href="/tutorials/react">
                  <div className="cursor-pointer p-12">
                    <h3 className="text-2xl font-bold mb-2 text-yellow-200">
                      React & Next JS Tutorial
                    </h3>
                    <p className="text-gray-200 font-semibold">
                      Discover the fundamentals of React, Next JS and build
                      powerful, interactive,
                      fast, optimized web applications..
                    </p>
                  </div>
                </Link>
              </div>

              {/* Git Tutorial */}
              <div className="bg-orange-800 hover:bg-orange-800 rounded-lg hover:rounded-xl overflow-hidden shadow-lg shadow-gray-600 hover:shadow-xl transition duration-2000">
                <Link href="/tutorials/git">
                  <div className="cursor-pointer p-12">
                    <h3 className="text-2xl font-bold mb-2 text-yellow-200">Git Tutorial</h3>
                    <p className="text-gray-200 font-semibold">
                      Master version control with Git and collaborate seamlessly
                      on your software projects.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg shadow-gray-600 hover:shadow-xl transition duration-200">
            <h2 className="text-3xl font-semibold text-center mb-4">
              About Arifahub
            </h2>
            <p className="text-gray-200 font-semibold mb-4">
              At Arifahub, our mission is to provide accessible and high-quality
              training resources for software developers. Whether you're
              interested in front-end development, back-end development, or
              anything in between, we've got you covered. Our tutorials are
              created and curated by industry experts, ensuring that you receive
              the most relevant and up-to-date content.
            </p>
            <Link href="/about">
              <div className="cursor-pointer text-blue-500 hover:text-blue-700 transition duration-200 text-center">
                Learn more about us
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
