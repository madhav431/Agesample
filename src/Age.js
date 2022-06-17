import { useState } from "react";

const Age = () => {
  const [year, setYear] = useState();
  const [data, setData] = useState();
  const d = new Date();
  var num = d.getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(num - year);
    setYear(undefined);
  };

  return (
    <>
      <h1>Age Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter birth year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
      <h1>{data}</h1>
    </>
  );
};

export default Age;
