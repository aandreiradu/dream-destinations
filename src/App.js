import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { BulletList } from "react-content-loader";
import { fetchDestinationsStartAsync } from "./store/destinations/destionation.actions";
import { fetchCategoriesStartAsync } from "./store/destinations by category/dc.actions";
import Navigation from "./components/Navigation/Navigation";

const Home = lazy(() => import("./pages/Home/Home"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));
const DestinationDetails = lazy(() =>
  import("./pages/DestinationDetails/DestinationDetails")
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDestinationsStartAsync());
    dispatch(fetchCategoriesStartAsync());
  }, []);

  return (
    <>
      <Navigation />
      <Routes>
        {/* <Route path='/' element={<Navigation/>} > */}
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Loading Home...</p>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<p>Loading Favorites...</p>}>
              <Favorites />
            </Suspense>
          }
        />
        <Route
          path="/destination/:destinationId"
          element={
            <Suspense fallback={<p>Loading Destination Details...</p>}>
              <DestinationDetails />
            </Suspense>
          }
        />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
