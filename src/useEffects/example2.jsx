import React, { useState, useEffect } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const Us = () => {
  const [drinksData, setDrinksData] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [iserror, setisError] = useState({ state: false, msg: "" });
  const fetchData = async (url) => {
    setLoading(true);
    setisError({ state: false, msg: "" });
    try {
      const responce = await fetch(url);
      // console.log(data.drinks);
      const { drinks } = await responce.json();
      setDrinksData(drinks);
      setLoading(false);
      setisError({ state: false, msg: "" });
      if (!drinks) {
        throw new Error("data not found");
      }
    } catch (error) {
      // console.log(error.message);
      setLoading(false);
      setisError({ state: true, msg: error.message || "something went wrong" });
    }
  };

  useEffect(() => {
    const correctUrl = `${URL}${input}`;
    fetchData(correctUrl);
  }, [input]);

  return (
    <div className="container" style={{ textAlign: "center" }}>
      {/* <h5>{drinksData.length}</h5> */}
      <form>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Search for more"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <hr />
      {loading && !iserror?.state && <h3>Loading ... </h3>}
      {iserror?.state && <h3 style={{ color: "red" }}>{iserror.msg}</h3>}
      {!loading && !iserror?.state && (
        <ul className="cocktail-data">
          {drinksData.map((eachItem) => {
            const { idDrink, strDrink, strDrinkThumb } = eachItem;
            return (
              <li key={idDrink}>
                <div>
                  <img src={strDrinkThumb} alt={strDrink} />
                </div>
                <div>
                  <h2>{strDrink}</h2>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
