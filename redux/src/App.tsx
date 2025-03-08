import RepositoriesList from "./components/RepositoriesList";
import { Provider } from "react-redux";
import { store } from "./state";

function App() {
  return (
    <Provider store={store}>
      <h1>Search For NPM Package</h1>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
