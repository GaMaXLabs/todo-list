import { TextField } from "@mui/material";
import React, { useRef, useState } from "react";
const NewTodo: React.FC<{ onSave: (description: string) => void, onFocusOut?: () => void, value: string }> = (
  props
) => {
  const todoTextIputRef = useRef<HTMLInputElement>(null);
  const [todoText, setTodoText] = useState<string>(() => props.value);
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
  function blurHandler(){
    props.onFocusOut?.();
  }
  return (
    <TextField
      fullWidth
      label="¿Qué quieres hacer?"
      id="newTodo"
      autoFocus
      inputRef={todoTextIputRef}
      onKeyDown={saveTodoHandler}
      value={todoText}
      onBlur={blurHandler}
      onChange={handleChange}
    />
  );
};
export default NewTodo;
