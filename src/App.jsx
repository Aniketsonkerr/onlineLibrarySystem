import "../src/components/style.css"
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import store from "./utils/appStore";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
