import { motion } from "framer-motion";
import { easing, weatherInfoVariant } from "../components/utils/framerProps";

const WeatherInfo = ({
  weatherData: {
    forecast: { forecastday },
  },
}) => {
  return (
    <div className="flex-3 flex flex-col gap-y-8">
      <motion.h1
        className="text-gray-100 font-light tracking-wide text-xl"
        variants={weatherInfoVariant}
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
        Weather Forecast
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-3 gap-x-4"
        variants={weatherInfoVariant}
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
        {forecastday.map((forecast, index) => {
          const {
            day: {
              maxtemp_c,
              mintemp_c,
              maxwind_kph,
              avghumidity,
              condition: { text, icon },
            },
          } = forecast;

          return (
            <motion.div
              className="px-6 md:px-8 py-6 rounded-md shadow-lg flex flex-col gap-y-8 bg-opacity-5 bg-white"
              variants={weatherInfoVariant}
              key={index}
            >
              <div className="flex flex-col gap-y-4">
                <div className="flex justify-between">
                  <div>
                    <span className="text-xs text-gray-300">Date</span>
                    <p className="text-white tracking-wide">
                      {index === 0 && "Yesterday"}
                      {index === 1 && "Today"}
                      {index === 2 && "Tomorrow"}
                    </p>
                  </div>
                  <img src={icon} alt="Weather icon" className=":w-12 h-12" />
                </div>

                <div>
                  <span className="text-xs text-gray-300">Min / Max</span>
                  <h1 className="text-2xl text-white">
                    {mintemp_c}°C / {maxtemp_c}°C
                  </h1>
                </div>
              </div>

              <div className="flex flex-col gap-y-4">
                <div>
                  <span className="text-xs text-gray-300">Condition</span>
                  <div className="flex items-center gap-x-2">
                    <p className="text-white tracking-wide">{text}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2-custom gap-4">
                  <div>
                    <span className="text-xs text-gray-300">
                      Max wind speed
                    </span>
                    <p className="text-white tracking-wide">
                      {maxwind_kph} km/h
                    </p>
                  </div>

                  <div>
                    <span className="text-xs text-gray-300">Ave. humidity</span>
                    <p className="text-white tracking-wide">{avghumidity}%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default WeatherInfo;
