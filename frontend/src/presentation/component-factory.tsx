// import Header from "./components/Header";
// import Footer from "./components/Footer";
import TodoPage from "./pages/TodoPage";
import { AllServices } from "services";

class ComponentFactory {
  static instance: ComponentFactory;

  constructor(private services: AllServices) {
    this.services = services;

    if (ComponentFactory.instance) {
      return ComponentFactory.instance;
    }

    ComponentFactory.instance = this;
  }

  //   createHeader() {
  //     return <Header />;
  //   }

  //   createFooter() {
  //     return <Footer />;
  //   }

  createTodoPage() {
    return <TodoPage todoService={this.services.todo} />;
  }
}

export default ComponentFactory;
