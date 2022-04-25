import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutContainer from "./common/layout/layout-container/LayoutContainer";
import CompletedTodosPage from "./features/todos/pages/done-todos-page/CompletedTodosPage";
import TodosPage from "./features/todos/pages/todos-page/TodosPage";

function App() {
  return (
    <BrowserRouter>
      <LayoutContainer>
        <Routes>
          <Route path="/" element={<TodosPage />} />
          <Route path="completed" element={<CompletedTodosPage />} />
        </Routes>
      </LayoutContainer>
    </BrowserRouter>
  );
}

export default App;
