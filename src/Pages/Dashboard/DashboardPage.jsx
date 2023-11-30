import useAuth from '../../Component/Hooks/useAuth';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="text-white text-center p-4 md:p-8 lg:p-16">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
          Welcome to Your Dashboard, {user?.displayName}!
        </h1>
        <p className="text-base md:text-lg lg:text-xl">
          Explore and enjoy your personalized experience.
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
