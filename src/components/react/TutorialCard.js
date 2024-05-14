import Link from "next/link";

const TutorialCard = ({ title, description, href, color }) => {
    return (
      <Link href={href}>
        <div className="bg-gray-800 shadow-md p-4 rounded-lg mb-8 h-full">
          <h2 className="text-lg text-yellow-300 font-medium mb-4">{title}</h2>
          <div
            className={`${color} shadow-md p-6 rounded-lg text-white hover:shadow-lg transition duration-300 cursor-pointer h-2/3`}
          >
            <p>{description}</p>
          </div>
        </div>
      </Link>
    );
  };

  export default TutorialCard