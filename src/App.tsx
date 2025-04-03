import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useAppDispatch } from "./app/hooks";
import LayoutContainer from "./common/layout/layout-container/LayoutContainer";
import CompletedTodosPage from "./features/todos/pages/done-todos-page/CompletedTodosPage";
import TodosPage from "./features/todos/pages/todos-page/TodosPage";
import { getTodosAsync } from "./features/todos/store/todosSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);
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
