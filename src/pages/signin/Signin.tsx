import { login } from "api/auth";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "utils/imgImport";

const Signin = () => {
  const navigate = useNavigate();

  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    if (!inputRef.current?.value) return false;
    const res = login({ pwd: inputRef.current?.value });
    if (res) navigate("/home");
  };
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-[200px] mr-2" src={Logo} alt="logo" />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    ref={inputRef}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={true}
                  />
                </div>
                <button
                  type="button"
                  onClick={onSubmit}
                  className="w-full text-white bg-[#DB0021] hover:bg-[#DB0021] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
