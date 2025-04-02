import Navbar from "./components/Navbar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  let router = useRoutes(routes);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div
        id="App"
        className=" w-dvw min-h-dvh max-h-max flex flex-col flex-nowrap items-center"
      >
        <Navbar />
        {router}
      </div>
    </ThemeProvider>
  );
}

export default App;
