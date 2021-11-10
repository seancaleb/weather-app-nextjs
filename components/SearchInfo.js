import { motion, AnimatePresence } from "framer-motion";
import { easing, parentVariant } from "../components/utils/framerProps";

const SearchInfo = ({ weatherData, error }) => {
  const { location, current } = weatherData;

  return (
    <motion.div
      className="px-6 py-8 md:px-12 md:py-10 bg-white rounded-md shadow-lg flex flex-col flex-3 gap-y-12 md:gap-y-16 bg-opacity-5 "
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
      <div className="flex flex-col gap-y-6">
        <h1 className="text-gray-100 font-light tracking-wide text-xl">
          Detailed information{" "}
        </h1>
        <div className="grid grid-cols-2-custom gap-4">
          <div>
            <span className="text-xs text-gray-300">Location</span>
            <p className="text-white tracking-wide">
              {location.name}, {location.region}
            </p>
          </div>

          <div>
            <span className="text-xs text-gray-300">Country</span>
            <p className="text-white tracking-wide">{location.country}</p>
          </div>

          <div>
            <span className="text-xs text-gray-300">Latitude</span>
            <p className="text-white tracking-wide">{location.lat}</p>
          </div>

          <div>
            <span className="text-xs text-gray-300">Longitude</span>
            <p className="text-white tracking-wide">{location.lon}</p>
          </div>
        </div>
      </div>

      {/* SECOND DIV  */}
      <div className="flex flex-col gap-y-6">
        <h1 className="text-gray-100 font-light tracking-wide text-xl">
          Current Status
        </h1>

        <div className="grid grid-cols-2-custom gap-4">
          <div>
            <span className="text-xs text-gray-300">Last updated</span>
            <p className="text-white tracking-wide">
              Today at{" "}
              {new Date(current.last_updated_epoch * 1000).toLocaleString(
                "en-US",
                {
                  hour: "numeric",
                  minute: "numeric",
                }
              )}
            </p>
          </div>

          <div>
            <span className="text-xs text-gray-300">Temperature</span>
            <p className="text-white tracking-wide">{current.temp_c}°C</p>
          </div>

          <div>
            <span className="text-xs text-gray-300">Condition</span>
            <div className="flex items-center gap-x-2">
              <p className="text-white tracking-wide">
                {current.condition.text}
              </p>
              <img
                src={current.condition.icon}
                alt="Weather icon"
                className="w-6 h-6"
              />
            </div>
          </div>

          <div>
            <span className="text-xs text-gray-300">Wind speed</span>
            <p className="text-white tracking-wide">{current.wind_kph} km/h</p>
          </div>

          <div>
            <span className="text-xs text-gray-300">Pressure</span>
            <p className="text-white tracking-wide">
              {current.pressure_mb} mbar
            </p>
          </div>

          <div>
            <span className="text-xs text-gray-300">Humidity</span>
            <p className="text-white tracking-wide">{current.humidity}%</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchInfo;
