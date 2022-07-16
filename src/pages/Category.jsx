import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllCategorisations, getFilteredCategories } from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = React.useState([]);
  const navigate = useNavigate();

  const goHome = () => {
    navigate(-1);
  };

  React.useEffect(() => {
    async function fetchMyAPI() {
      const data = await getFilteredCategories(name);
      setMeals(data.meals);
    }
    fetchMyAPI();
  }, [name]);

  return (
    <>
      <button className="btn" onClick={goHome}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};
export default Category;
