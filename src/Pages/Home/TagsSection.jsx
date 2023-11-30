import { useQuery } from "@tanstack/react-query";
import { getAllTags } from "../../api/tags";
import Loader from "../../Component/Shared/Loader";

const TagsSection = () => {
  const { data: allTags, isLoading } = useQuery({
    queryFn: async () => await getAllTags(),
    queryKey: ["allTags"],
  });

  if (isLoading) return <Loader />;

  return (
    <>
      {allTags ? (
        <>
          <div className="container mx-auto  mt-4 px-4 py-2 bg-white rounded-md shadow-md items-center ">
            <h2 className="text-xl font-medium mb-4 text-blue-400 text-center">
              Explore by Tags
            </h2>
            <div className="">
              <ul className="container  flex flex-wrap justify-center">
                {allTags.map((tag) => (
                  <div
                    key={tag.value}
                    className="inline-flex rounded overflow-hidden mr-2 mb-2"
                  >
                    <span className="px-2 leading-loose bg-blue-500 text-yellow-300">
                      {tag.label}
                    </span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          ;
        </>
      ) : null}
    </>
  );
};

export default TagsSection;
