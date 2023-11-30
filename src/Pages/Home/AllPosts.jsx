import { useQuery } from "@tanstack/react-query";
import { getAllPosts, getPostsByPopularity } from "../../api/posts";
import Loader from "../../Component/Shared/Loader";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AllPosts = () => {
  const [posts, setPosts] = useState();

  const { data , isLoading } = useQuery({
    queryFn: async () => await getAllPosts(),
    queryKey: ["allPosts"],
  });

  const { data: allPostsByPopularity } = useQuery({
    queryFn: async () => await getPostsByPopularity(),
    queryKey: ["PostsByPopularity"],
  });

  useEffect(() => {
    setPosts(data);
  }, [data]);

  const handleBtnPopular = () => {
    setPosts(allPostsByPopularity);
  };

  if (isLoading) return <Loader />;
  
  console.log(posts);

  return (
    <>
      {posts ? (
        <>
          {" "}
          <section className="container mx-auto py-10 px-2  sm:px-10">
            <h2 className="text-xl font-bold mb-2">All Posts</h2>
            <span>
              <small className="font-semibold">
                Click to See Posts based on{" "}
              </small>
              <button
                onClick={handleBtnPopular}
                className="btn btn-outline btn-sm"
              >
                Popularity
              </button>
            </span>
            <div className="grid gap-4">
              {posts.map((post) => {
                const {
                  _id,
                  author,
                  postTitle,
                  selectedTags,
                  time,
                  upVote,
                  downVote,
                } = post;
                const votesCount = upVote + downVote;
                return (
                  <Link key={_id} to={`/post/${_id}`}>
                    <div className="flex items-center border-b border-gray-300 py-4">
                      <div className="mr-4">
                        <img
                          src={author.authorImage}
                          alt={author.authorName}
                          className="h-10 w-10 rounded-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h2 className="text-lg font-bold">{postTitle}</h2>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2  sm:space-x-2 text-gray-500">
                          <span className="text-xs bg-gray-200 px-2 py-1 rounded w-fit">
                            {selectedTags.label}
                          </span>
                          <p className="text-xs">
                            Posted on {new Date(time).toLocaleString()}
                          </p>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-500 mt-1">
                          <p className="text-xs">
                            <span className="font-bold">
                              {/* commentCount here */}
                              </span>{" "}
                            Comments
                          </p>
                          <p className="text-xs">
                            <span className="font-bold">{votesCount}</span>{" "}
                            Votes
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </>
      ) : null}
    </>
  );
};

export default AllPosts;
