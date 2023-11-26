import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
// import { TbFidgetSpinner } from "react-icons/tb";
// import { toast } from "react-hot-toast";
// import { imageUpload } from "../../api/utils";
// import useAuth from "../../hooks/useAuth";
// import { getToken, saveUser } from "../../api/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // const { createUser, updateUserProfile, signInWithGoogle, loading } =
  //   useAuth();
  // const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   const image = form.image.files[0];

  const onSubmit = (data) => {
    console.log(data);
  };

  // try {
  //   //1.upload image
  //   const imageData = await imageUpload(image);
  //   //2.user registration
  //   const result = await createUser(email, password);
  //   //3.save user name and profile photo
  //   await updateUserProfile(name, imageData?.data?.display_url);
  //   //4.save user data in database
  //   const dbResponse = await saveUser(result?.user);
  //   // get token
  //   await getToken(result?.user?.email);
  //   navigate("/");
  //   toast.success("SignUp Successful");
  // } catch (err) {
  //   toast.error(err?.message);
  // }
  // };

  const handleGoogleSignIn = async () => {
    // try {
    //   //handle google sign in
    //   const result = await signInWithGoogle();
    //   //save user data in database
    //   const dbResponse = await saveUser(result?.user);
    //   // get token
    //   await getToken(result?.user?.email);
    //   navigate("/");
    //   toast.success("SignUp Successful");
    // } catch (err) {
    //   toast.error(err?.message);
    // }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-gray-800 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold text-rose-500">Sign Up</h1>
          <p className="text-sm text-gray-500">Welcome to Chat Nest</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm text-gray-600"
              >
                Name
              </label>
              <input
                {...register("name")}
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-rose-500 bg-gray-100 text-gray-800"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm text-gray-600"
              >
                Select Image:
              </label>
              <input
                {...register("image")}
                required
                type="file"
                id="image"
                name="image"
                accept="image/*"
                className="w-full"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-gray-600"
              >
                Email address
              </label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-rose-500 bg-gray-100 text-gray-800"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                {...register("password", {
                  pattern:
                    /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}/,
                })}
                type="password"
                name="password"
                autoComplete="new-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-rose-500 bg-gray-100 text-gray-800"
              />
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  password must have one number,one uppercase,one lowercase,
                  special character and than 6 characters
                </p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-rose-500 w-full rounded-md py-3 text-white hover:bg-rose-600 transition duration-300"
            >
              {/* {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Continue"
              )} */}
              Continue
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-500">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 rounded cursor-pointer hover:border-rose-500 transition duration-300"
        >
          <FcGoogle size={32} />
          <p className="text-gray-800">Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link
            to="/sign-in"
            className="hover:underline hover:text-rose-500 text-gray-700"
          >
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;