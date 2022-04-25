import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";
const NewTodo: React.FC<{ onSave: (description: string) => void }> = (
  props
) => {
  const todoTextIputRef = useRef<HTMLInputElement>(null);
  const [todoText, setTodoText] = useState<string>(() => "");
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoText(e.target.value);
  }
  function saveTodoHandler(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      if (todoText.trim().length === 0) {
        return;
      }
      setTodoText("");
      props.onSave(todoText);
    }
  }
  return (
    <TextField
      fullWidth
      label="What needs to be done?"
      id="newTodo"
      autoFocus
      inputRef={todoTextIputRef}
      onKeyDown={saveTodoHandler}
      value={todoText}
      onChange={handleChange}
    />
  );
};
export default NewTodo;
