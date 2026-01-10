import { SearchBar } from "@/components/myComponents/SearchBar";
import { TodoList } from "@/components/myComponents/TodoList";

export default function Home() {
  return (
    <div>
      Hello World
      <TodoList />
      <SearchBar />
    </div>
  );
}
