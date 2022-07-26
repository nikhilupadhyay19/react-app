import React, { useState, useEffect } from 'react';

const PersonLocation = () => {
  const [coords, setCoords] = useState({});
  console.log(coords);

  // Promisify Geolocation Api...

  const getCoords = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          return resolve(position);
        },
        (error) => {
          return reject(error);
        }
      );
    });
  };

  useEffect(() => {
    (async () => {
      const location = await getCoords();
      const { latitude: latt, longitude: long } = location.coords;
      setCoords({ latt: latt, long: long });
    })();
  }, []);

  return (
    <div>
      <p>Person Location</p>
      <button>Get Location</button>
    </div>
  );
};
export { PersonLocation };
