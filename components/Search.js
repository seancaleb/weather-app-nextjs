import { useContext, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WeatherContext } from "./App";
import { easing, parentVariant } from "../components/utils/framerProps";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Search = ({ handleSubmit, setWeatherData, loading }) => {
  const data = useContext(WeatherContext);
  const { searchTerm, setSearchTerm, setError } = data;
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <motion.div
      className="px-6 py-5 md:px-12 md:py-10 bg-white rounded-md shadow-lg flex gap-x-4 items-center bg-opacity-5"
      variants={parentVariant}
      initial="hidden"
      animate="visible"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clipRule="evenodd"
        />
      </svg>
      <form
        className="flex-3 flex relative items-center"
        onSubmit={(e) => handleSubmit(e, searchTerm)}
      >
        <input
          type="text"
          placeholder="Search location by city..."
          className="px-2 py-2 outline-none placeholder-gray-200 text-md placeholder-opacity-70 w-full border-b border-gray-200 border-opacity-70  text-white bg-transparent input-custom tracking-wide font-light"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          ref={inputRef}
        />
        <div className="absolute right-2">
          <AnimatePresence>
            {searchTerm && !loading ? (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-200 text-opacity-70 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
                initial={{ opacity: 0, y: 3 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                exit={{ opacity: 0, y: 3 }}
                onClick={() => {
                  setSearchTerm("");
                  setError("");
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </motion.svg>
            ) : null}
            {loading && (
              <Loader
                type="Oval"
                color="#E5E7EB"
                height={22}
                width={22}
                //3 secs
              />
            )}
          </AnimatePresence>
        </div>
      </form>
    </motion.div>
  );
};

export default Search;
