import React from "react";
import { getAllCategorisations } from "../api";
import Preloader from "../components/Preloader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const [catalog, setCatalog] = React.useState([]);
  const [filteredCatalog, setFilteredCatalog] = React.useState([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    navigate({
      pathname,
      search: `?search=${str}`,
    });
  };

  React.useEffect(() => {
    async function fetchMyAPI() {
      const data = await getAllCategorisations();
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
            )
          : data.categories
      );
    }
    fetchMyAPI();
  }, [search]);

  return (
    <>
      {" "}
      <Search cb={handleSearch} />{" "}
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
};
export default Home;
