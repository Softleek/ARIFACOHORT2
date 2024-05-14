import React from "react";
import TutorialCard from "@/components/react/TutorialCard";
import PreviousPageButton from "@/components/buttons/previousButton";

const ReactTutorial = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">
        React & Next.js Tutorial
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Overview of React and Next.js */}
        <TutorialCard
          title="Introduction To React"
          description=" React is a JavaScript library for building user interfaces. It
          allows you to create reusable UI components and manage the state of
          your application efficiently."
          href="/tutorials/react/intro"
          color="bg-purple-900"
        />

        <TutorialCard
          title="Introduction To Next JS"
          description="Next.js is a React framework for building server-side rendered (SSR)
          and statically generated web applications. It extends React with
          additional features such as server-side rendering, automatic code
          splitting, and route pre-fetching."
          href="/tutorials/react/intro-next"
          color="bg-purple-900"
        />

        {/* Setting up a Next.js project */}
        <TutorialCard
          title="Setting up a Next.js project"
          description="Step-by-step guide to setting up a Next.js project, which includes setting up React as well."
          href="/tutorials/react/installation"
          color="bg-green-900"
        />

        {/* Understanding JSX syntax in Next.js */}
        <TutorialCard
          title="Understanding JSX syntax in Next.js"
          description="Dive into JSX syntax and its usage within Next.js applications to build dynamic user interfaces."
          href="/tutorials/react/jsx-syntax"
          color="bg-yellow-900"
        />

        {/* Creating React components within a Next.js project */}
        <TutorialCard
          title="Creating React components within a Next.js project"
          description="Learn how to create and structure React components within a Next.js project for efficient development."
          href="/tutorials/react/installation"
          color="bg-blue-900"
        />


        {/* State and props management in React components within Next.js context */}
        <TutorialCard
          title="State and props management in React components within Next.js context"
          description="Learn how to manage state and props in React components within a Next.js context for efficient data management."
          href="/tutorials/state-props-management-nextjs"
          color="bg-red-900"
        />

        {/* React hooks usage within Next.js */}
        <TutorialCard
          title="React hooks usage within Next.js"
          description="Explore how to leverage React hooks like useState and useEffect within Next.js applications for state management and side effects."
          href="/tutorials/react-hooks-usage-nextjs"
          color="bg-pink-900"
        />

        {/* Handling forms in React components within a Next.js project */}
        <TutorialCard
          title="Handling forms in React components within a Next.js project"
          description="Learn best practices for handling forms in React components within a Next.js project for user input and data submission."
          href="/tutorials/handling-forms-nextjs"
          color="bg-indigo-900"
        />

        {/* Conditional rendering and list rendering in React components */}
        <TutorialCard
          title="Conditional rendering and list rendering in React components"
          description="Understand how to implement conditional rendering and list rendering techniques in React components within a Next.js project for dynamic UIs."
          href="/tutorials/conditional-list-rendering-nextjs"
          color="bg-teal-900"
        />

        {/* Data fetching in React components within Next.js */}
        <TutorialCard
          title="Data fetching in React components within Next.js"
          description="Learn different methods for data fetching in React components within a Next.js application, including API routes and SWR library."
          href="/tutorials/data-fetching-nextjs"
          color="bg-orange-900"
        />

        {/* Server-side rendering (SSR) with React components in Next.js */}
        <TutorialCard
          title="Server-side rendering (SSR) with React components in Next.js"
          description="Explore server-side rendering (SSR) concepts and how to implement SSR with React components in a Next.js project for improved performance and SEO."
          href="/tutorials/ssr-react-components-nextjs"
          color="bg-cyan-900"
        />

        {/* Static site generation (SSG) with React components in Next.js */}
        <TutorialCard
          title="Static site generation (SSG) with React components in Next.js"
          description="Learn about static site generation (SSG) and how to implement SSG with React components in Next.js for pre-rendered and optimized pages."
          href="/tutorials/ssg-react-components-nextjs"
          color="bg-gray-700"
        />

        {/* Authentication and authorization in Next.js using React components */}
        <TutorialCard
          title="Authentication and authorization in Next.js using React components"
          description="Learn how to implement authentication and authorization in Next.js applications using React components for secure user authentication."
          href="/tutorials/auth-nextjs-react-components"
          color="bg-blue-900"
        />

        {/* Optimizing React components in a Next.js application for performance */}
        <TutorialCard
          title="Optimizing React components in a Next.js application for performance"
          description="Discover techniques and best practices for optimizing React components in a Next.js application to enhance performance and user experience."
          href="/tutorials/optimizing-react-components-nextjs"
          color="bg-emerald-900"
        />
      </div>

      {/* Official Documentation */}
      <div className="mt-8 text-center">
        <a
          href="https://reactjs.org/docs/getting-started.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-900 hover:underline"
        >
          Explore the Official Documentation
        </a>
      </div>

      <PreviousPageButton />
    </div>
  );
};

export default ReactTutorial;
