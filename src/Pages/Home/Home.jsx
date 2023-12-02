/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../api/posts";
import AllPosts from "./AllPosts";
import Announcement from "./Announcement";
import Banner from "./Banner";
import TagsSection from "./TagsSection";
import { useEffect, useState } from "react";
const Home = () => {
  const [allPosts, setAllPosts] = useState();

  const { data } = useQuery({
    queryFn: async () => await getAllPosts(),
    queryKey: ["allPosts"],
  });

  const handleSearch = (searchTag) => {
    const result = data.filter((item) => {
      return searchTag.toLowerCase().replace(/\s/g, "") === ""
        ? item
        : item.selectedTags.value.includes(searchTag);
    });
    setAllPosts(result);
  };

  useEffect(() => {
    setAllPosts(data);
  }, [data]);

  return (
    <div>
      <Banner handleSearch={handleSearch} />
      <TagsSection />
      <Announcement />
      {allPosts ? <AllPosts allPosts={allPosts} /> : null}
    </div>
  );
};

export default Home;
