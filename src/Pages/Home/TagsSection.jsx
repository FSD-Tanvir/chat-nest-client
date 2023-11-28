import React from "react";

const allTags = [
    { value: "react", label: "React" },
    { value: "javascript", label: "JavaScript" },
    { value: "nodejs", label: "Node.js" },
    { value: "css", label: "CSS" },
    { value: "html", label: "HTML" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "typescript", label: "TypeScript" },
    { value: "graphql", label: "GraphQL" },
    { value: "mongodb", label: "MongoDB" },
    { value: "react-native", label: "React Native" },
    { value: "angular", label: "Angular" },
    { value: "vuejs", label: "Vue.js" },
    { value: "expressjs", label: "Express.js" },
    { value: "docker", label: "Docker" },
    { value: "kubernetes", label: "Kubernetes" },
    { value: "aws", label: "AWS" },
    { value: "firebase", label: "Firebase" },
    { value: "git", label: "Git" },
    { value: "sql", label: "SQL" },
    // Add more tag options as needed
  ];
  
  

const TagsSection = () => {
  return (
    <div className="container mx-auto  mt-4 px-4 py-2 bg-white rounded-md shadow-md items-center ">
      <h2 className="text-xl font-medium mb-4 text-blue-400 text-center">
        Explore by Tags 
      </h2>
      <div className="">
        <ul className="container  flex flex-wrap justify-center">
          {allTags.map((tag) => (
            // <li
            //   key={tag.value}
            //   className="bg-blue-500 text-white py-2 px-4 rounded-md text-center"
            // >
            //   {tag.label}
            // </li>
            <div
              key={tag.value}
              className="inline-flex rounded overflow-hidden mr-2 mb-2"
            >
              {/* <span className="px-2 leading-loose mio mao">{tag.label}</span> */}
              <span className="px-2 leading-loose bg-blue-500 text-yellow-300">
                {tag.label}
              </span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TagsSection;
