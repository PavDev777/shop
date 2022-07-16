import MealItem from "./MealItem";

const MealList = ({ meals }) => {
  return (
    <div className="list">
      {meals.map((el) => (
        <MealItem key={el.idMeal} {...el} />
      ))}
    </div>
  );
};
export default MealList;
