import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Routes from "./routes";
import ComponentFactory from "./presentation/component-factory";
// import PagesLayout from "./presentation/PagesLayout";
import ErrorBoundary from "./presentation/ErrorBoundaries";
import { TodoService } from "./services/todo";
import { GraphQLTransport } from "./transport/graphql/transport";

const graphQLTransport = new GraphQLTransport(() =>
  localStorage.getItem("token")
);

const services = {
  todo: new TodoService(graphQLTransport),
};

new ComponentFactory(services);

function App() {
  return (
    <Router>
      <ErrorBoundary>
        {/* <PagesLayout
          header={componentFactory.createHeader()}
          footer={componentFactory.createFooter()}
        > */}
        <Routes />
        {/* </PagesLayout> */}
        <ToastContainer position="top-right" autoClose={5000} />
      </ErrorBoundary>
    </Router>
  );
}

export default App;
