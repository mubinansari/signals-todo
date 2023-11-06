"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const TodoForm = () => {
  return (
    <div className="grid w-full items-center gap-3">
      <Label htmlFor="title">Add an item to your todo list:</Label>
      <Input type="text" id="title" placeholder="Buy milk" />
      <Button type="submit">Add Todo</Button>
    </div>
  );
};

export default TodoForm;
