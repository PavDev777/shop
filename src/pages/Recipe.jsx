import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import Preloader from "../components/Preloader";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = React.useState({});
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  React.useEffect(() => {
    async function fetchMyAPI() {
      const data = await getMealById(id);
      setRecipe(data.meals[0]);
    }
    fetchMyAPI();
  }, [id]);
  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <h1>{recipe.strMeal}</h1>

          <div className="infos">
            <div className="image">
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            </div>
            <div className="description">
              {" "}
              <h6>{recipe.strCategory}</h6>
              {recipe.strArea ? <h6>{recipe.strArea}</h6> : null}
              <p>{recipe.strInstructions}</p>
            </div>
          </div>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(recipe).map((key) => {
            if (key.includes("Ingredient") && recipe[key]) {
              return (
                <tr key={key}>
                  <td>{recipe[key]}</td>
                  <td> {recipe[`strMeasure${key.slice(13)}`]} </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
    </>
  );
};
export default Recipe;
