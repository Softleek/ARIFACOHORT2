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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Tailwind CSS Tutorial */}
              <div className="bg-blue-600 hover:bg-blue-800 rounded-lg hover:rounded-xl overflow-hidden shadow-lg shadow-gray-300 hover:shadow-xl transition duration-200">
                <Link href="/tutorials/tailwind">
                  <div className="cursor-pointer p-8">
                    <h3 className="text-xl font-semibold mb-2">
                      Tailwind CSS Tutorial
                    </h3>
                    <p className="text-gray-200">
                      Learn how to use Tailwind CSS to create beautiful,
                      responsive designs with ease.
                    </p>
                  </div>
                </Link>
              </div>

              {/* React Tutorial */}
              <div className="bg-yellow-600 hover:bg-yellow-800 rounded-lg hover:rounded-xl overflow-hidden shadow-lg shadow-gray-300 hover:shadow-xl transition duration-200">
                <Link href="/tutorials/react">
                  <div className="cursor-pointer p-8">
                    <h3 className="text-xl font-semibold mb-2">
                      React Tutorial
                    </h3>
                    <p className="text-gray-200">
                      Discover the fundamentals of React and build powerful,
                      interactive web applications.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Next.js Tutorial */}
              <div className="bg-green-600 hover:bg-green-800 rounded-lg hover:rounded-xl overflow-hidden shadow-lg shadow-gray-300 hover:shadow-xl transition duration-200">
                <Link href="/tutorials/nextjs">
                  <div className="cursor-pointer p-8">
                    <h3 className="text-xl font-semibold mb-2">
                      Next.js Tutorial
                    </h3>
                    <p className="text-gray-200">
                      Explore Next.js, the React framework for production, and
                      learn to build fast, optimized web applications.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Git Tutorial */}
              <div className="bg-orange-600 hover:bg-orange-800 rounded-lg hover:rounded-xl overflow-hidden shadow-lg shadow-gray-300 hover:shadow-xl transition duration-2000">
                <Link href="/tutorials/git">
                  <div className="cursor-pointer p-8">
                    <h3 className="text-xl font-semibold mb-2">Git Tutorial</h3>
                    <p className="text-gray-200">
                      Master version control with Git and collaborate seamlessly
                      on your software projects.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg shadow-gray-300 hover:shadow-xl transition duration-200">
            <h2 className="text-3xl font-semibold text-center mb-4">
              About Arifahub
            </h2>
            <p className="text-gray-200 mb-4">
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
