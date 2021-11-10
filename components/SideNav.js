import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WeatherContext } from "./App";
import Search from "./Search";
import SearchInfo from "./SearchInfo";
import { easing, parentVariant } from "./utils/framerProps";

const SideNav = () => {
  const data = useContext(WeatherContext);
  const { handleSubmit, setWeatherData, loading, weatherData, error } = data;

  return (
    <div className="flex-1.5 p-6 md:p-10 flex flex-col gap-y-8 ">
      <Search
        handleSubmit={handleSubmit}
        setWeatherData={setWeatherData}
        loading={loading}
      />
      <AnimatePresence>
        {weatherData && !error ? (
          <SearchInfo weatherData={weatherData} error={error} />
        ) : null}
        {error && (
          <motion.div
            className="flex-3 flex items-center justify-center"
            variants={parentVariant}
            initial="hidden"
            animate="visible"
            exit={{
              opacity: 0,
              transition: {
                duration: 0.6,
                ease: easing,
              },
            }}
          >
            <h1 className="text-gray-200 text-lg tracking-wide font-light">
              {error}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideNav;
