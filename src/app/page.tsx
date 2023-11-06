import TodoForm from "@/components/TodoForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-wide">
            SignalTasks
          </CardTitle>
          <CardDescription>
            You have <span className="font-semibold">10</span> tasks pending
            (according to the signals atleast 🤪)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TodoForm />
        </CardContent>
      </Card>
    </main>
  );
}
