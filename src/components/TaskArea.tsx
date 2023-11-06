"use client";

import TodoForm from "@/components/TodoForm";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { tasks } from "@/lib/signals";
import { cn } from "@/lib/utils";

const TaskArea = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-wide">
            SignalTasks
          </CardTitle>
          <CardDescription>
            You have <span className="font-semibold">{tasks.value.length}</span>{" "}
            tasks pending (according to the signals atleast 🤪)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TodoForm />
        </CardContent>
      </Card>
      <ScrollArea className="rounded-md border p-4 my-4">
        <h2 className="text-2xl font-bold tracking-wide mb-4">Tasks List</h2>
        {tasks.value.map(todo => {
          return (
            <Card key={todo.title} className="mb-4">
              <CardHeader>
                <CardTitle className="text-xl font-bold tracking-wide ml-0.5 space-x-2">
                  <Checkbox checked={todo.completed} />
                  <span className={cn({ "line-through": todo.completed })}>
                    {todo.title}
                  </span>
                </CardTitle>
                <Badge variant="secondary" className="w-max">
                  Added: {todo.createdAt.toLocaleDateString()}
                </Badge>
              </CardHeader>
            </Card>
          );
        })}
      </ScrollArea>
    </>
  );
};

export default TaskArea;
