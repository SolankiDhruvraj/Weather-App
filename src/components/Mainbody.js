import React, { useState, useEffect } from "react";

export default function Mainbody() {
  const [city, setCity] = useState(null);
  const [text, setText] = useState("Mumbai");

  useEffect(() => {
    const fetchapi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&APPID=50fe4910ec96c80a529110c63e131c7d`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      // console.log(resJson.main);
    };
    fetchapi();
  }, [text]);

  return (
    <>
      <div className="main">
        <div>
          <input
            type="text"
            className="textBox"
            placeholder="Enter name of the city"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="datanf">No Data Found!!!</p>
        ) : (
          <div className="main-content">
            <div className="city">
              <p> City: {text}</p>
            </div>
            <div className="temp">
              <p>Current Temperature: {city.temp} &#8451;</p>
              <p className="min-max">Max Temp: {city.temp_max} &#8451; || Min Temp: {city.temp_min} &#8451;</p>
            </div>
          </div>
        )}
      </div>
      {/* <div>
        <button className="btn">Find Weather</button>
      </div> */}
    </>
  );
}
