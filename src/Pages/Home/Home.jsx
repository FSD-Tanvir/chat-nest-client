import AllPosts from "./AllPosts";
import Announcement from "./Announcement";
import Banner from "./Banner";
import TagsSection from "./TagsSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <TagsSection />
      <Announcement />
      <AllPosts/>
    </div>
  );
};

export default Home;
