import { AnimatePresence, motion } from "framer-motion";
import { useState, createContext } from "react";
import SideNav from "./SideNav";
import WeatherInfo from "./WeatherInfo";
import { parentVariant } from "./utils/framerProps";

export const WeatherContext = createContext();

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = async (e, term) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${term}&days=3&aqi=no&alerts=no`
    );
    const data = await response.json();

    if (data.error) {
      setError(data.error.message);
      setLoading(false);
    } else {
      setWeatherData(data);
      setLoading(false);
      setError("");
    }
  };

  const dataContext = {
    weatherData,
    setWeatherData,
    loading,
    setLoading,
    error,
    setError,
    handleSubmit,
    searchTerm,
    setSearchTerm,
  };

  if (!searchTerm && weatherData) {
    setWeatherData(null);
    setError("");
  }

  return (
    <WeatherContext.Provider value={dataContext}>
      <div className="bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto font-sub flex flex-col xl:flex-row min-h-screen ">
          <SideNav />
          <div className="flex-3 flex flex-col px-6 py-6 md:p-10 lg:py-10 lg:pr-10 xl:pl-0 relative">
            <AnimatePresence>
              {weatherData && !error && (
                <WeatherInfo weatherData={weatherData} />
              )}
            </AnimatePresence>
            <motion.div
              className="xl:flex items-center justify-end xl:absolute xl:bottom-10 xl:right-10 hidden"
              variants={parentVariant}
              initial="hidden"
              animate="visible"
            >
              <span className="text-xs uppercase tracking-wider text-gray-200 ">
                Weather viewer app by Sean Caleb &copy; 2021
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </WeatherContext.Provider>
  );
};

export default App;
