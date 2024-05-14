import PreviousPageButton from "@/components/buttons/previousButton";
import React from "react";

const GitTutorial = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-semibold mb-8 text-center text-blue-600">
        Git Tutorial
      </h1>

      {/* Introduction */}
      <div className="bg-gray-800 shadow-md p-12 rounded-lg text-gray-300 shadow-gray-300 hover:shadow-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction to Git</h2>
        <p>
          Git is a distributed version control system used to track changes in
          source code during software development. It allows multiple developers
          to collaborate on projects efficiently by managing revisions,
          facilitating code review, and enabling seamless integration of new
          features.
        </p>
      </div>

      {/* Cloning a Repository */}
      <div className="bg-gray-800 shadow-md p-12 rounded-lg text-gray-300 shadow-gray-300 hover:shadow-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cloning a Repository</h2>
        <p>
          To clone a repository from a remote server, use the following command
          in your terminal:
        </p>
        <code className="bg-gray-600 text-white p-2 rounded-lg block">
          git clone repository_url
        </code>
        <p>
          Replace <code>&lt;repository_url&gt;</code> with the URL of the
          repository you want to clone.
        </p>
      </div>

      {/* Pulling Changes */}
      <div className="bg-gray-800 shadow-md p-12 rounded-lg text-gray-300 shadow-gray-300 hover:shadow-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pulling Changes</h2>
        <p>
          To fetch the latest changes from the remote repository and merge them
          into your local branch, use the following command:
        </p>
        <code className="bg-gray-600 text-white p-2 rounded-lg block">
          git pull
        </code>
      </div>

      {/* Committing Changes */}
      <div className="bg-gray-800 shadow-md p-12 rounded-lg text-gray-300 shadow-gray-300 hover:shadow-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Committing Changes</h2>
        <p>
          To commit changes to your local repository, use the following command
          after staging the changes with <code>git add</code>:
        </p>
        <code className="bg-gray-600 text-white p-2 rounded-lg block">
          git commit -m "Your commit message"
        </code>
        <p>Replace "Your commit message" with a descriptive message.</p>
      </div>

      {/* Pushing Changes */}
      <div className="bg-gray-800 shadow-md p-12 rounded-lg text-gray-300 shadow-gray-300 hover:shadow-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Pushing Changes</h2>
        <p>
          To push your committed changes to the remote repository, use the
          following command:
        </p>
        <code className="bg-gray-600 text-white p-2 rounded-lg block">
          git push
        </code>
      </div>

      {/* Additional Example */}
      <div className="bg-gray-800 shadow-md p-12 rounded-lg text-gray-300 shadow-gray-300 hover:shadow-gray-700 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Additional Example</h2>
        <p>Here's an example flow for creating a new branch and pushing changes:</p>
        <code className="bg-gray-600 text-white p-2 rounded-lg block">
          git clone repository_url <br/>
          git branch new_branch <br/>
          git checkout new_branch <br/>
          git add -A <br/>
          git commit -am "message" <br/>
          git push origin new_branch
        </code>
      </div>

      {/* Official Documentation */}
      <div className="mt-8 text-center">
        <a
          href="https://git-scm.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline font-semibold"
        >
          Explore the Official Documentation
        </a>
      </div>
      <PreviousPageButton />
    </div>
  );
};

export default GitTutorial;
