import { useEffect, useState } from "react";
import "./App.css";
import WeatherDetails from "./Components/WeatherDetails";
import { useDisclosure } from "./hooks/useDisclosure";
import useQuery from "./hooks/useQuery";

const App = () => {
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${
    location === "" ? "nigeria" : location
  }&units=imperial&appid=${process.env.REACT_APP_API_KEY}`;

  const { fetchData, data, loading, error } = useQuery({
    url,
    method: "get",
    autoRun: false,
  });
  const searchLocation = (e) => {
    e.preventDefault();
    fetchData();
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData, location]);

  const calcCelcius = (temp) => {
    return (temp - 32) * (5 / 9).toFixed();
  };

  return (
    <>
      <div className="app">
        <form className="search" onSubmit={searchLocation}>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
            type="text"
          />
          <button className="btn" onClick={searchLocation}>
            Search
          </button>
        </form>
        {loading ? (
          <div className="loading_container">
            <div className="spinner" />
          </div>
        ) : (
          <WeatherDetails data={data} calcCelcius={calcCelcius} />
        )}
        {/* {error} */}
        <>
          <button onClick={() => onOpen()}>{isOpen ? "close" : "open"}</button>

          {isOpen && (
            <div>
              <p>I will show now!!</p>
              <button onClick={() => onClose()}>close</button>
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default App;
