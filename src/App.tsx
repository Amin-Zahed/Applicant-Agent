import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/navbar";
import { useEffect } from "react";
import useLogin from "./stores/useLogin";

function App() {
  let router = useRoutes(routes);
  const { setIsLogin } = useLogin();

  useEffect(() => {
    if (
      sessionStorage.getItem("username") &&
      sessionStorage.getItem("password") &&
      sessionStorage.getItem("email")
    ) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div id="App" className=" w-dvw h-dvh grid grid-cols-12 grid-rows-12">
        <header className="col-start-1 col-end-13 row-start-1 row-end-2 min-h-10">
          <Navbar />
        </header>
        <main className="col-start-1 col-end-13 row-start-2 row-end-13 flex flex-col flex-nowrap items-center">
          {router}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
