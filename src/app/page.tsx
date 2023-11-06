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
import { cn } from "@/lib/utils";

const TODOS = [
  {
    title: "Buy milk",
    completed: true,
    timeAdded: new Date(),
  },
  {
    title: "Walk the dog",
    completed: false,
    timeAdded: new Date(),
  },
  {
    title: "Do laundry",
    completed: false,
    timeAdded: new Date(),
  },
  {
    title: "Clean the house",
    completed: false,
    timeAdded: new Date(),
  },
  {
    title: "Finish project",
    completed: false,
    timeAdded: new Date(),
  },
  {
    title: "Read a book",
    completed: false,
    timeAdded: new Date(),
  },
];

export default function Home() {
  return (
    <main className="flex h-screen flex-col px-4 py-3 md:px-24 md:py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-wide">
            SignalTasks
          </CardTitle>
          <CardDescription>
            You have <span className="font-semibold">{TODOS.length}</span> tasks
            pending (according to the signals atleast 🤪)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TodoForm />
        </CardContent>
      </Card>
      <ScrollArea className="rounded-md border p-4 my-4">
        <h2 className="text-2xl font-bold tracking-wide mb-4">Tasks List</h2>
        {TODOS.map(todo => {
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
                  Added: {todo.timeAdded.toLocaleDateString()}
                </Badge>
              </CardHeader>
            </Card>
          );
        })}
      </ScrollArea>
    </main>
  );
}
