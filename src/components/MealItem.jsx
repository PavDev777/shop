import { Link } from "react-router-dom";

const MealItem = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          Watch Recipe
        </Link>
      </div>
    </div>
  );
};
export default MealItem;
