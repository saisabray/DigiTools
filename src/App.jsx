import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import Navbar from "./Component/Navbar";
import Stats from "./Component/Stats";
import Tools from "./Component/Tools/Tools";

const fetchItems = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const itemsPromise = fetchItems();
function App() {
  const [subscribed, setSubscribed] = useState([]);

  return (
    <>
      <Navbar subscribed={subscribed} />
      <Banner />
      <Stats />
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <Tools
          itemsPromise={itemsPromise}
          subscribed={subscribed}
          setSubscribed={setSubscribed}
        />
      </Suspense>
    </>
  );
}

export default App;
