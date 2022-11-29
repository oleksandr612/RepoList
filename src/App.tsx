import { Provider } from "react-redux";
import { store } from "./redux";
import RepositoriesList from "./components/RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <h1>Hello!</h1>
      <RepositoriesList />
    </Provider>
  );
};

export default App;
