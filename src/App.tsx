import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/navbar";
import { useEffect } from "react";
import useLogin from "./stores/useLogin";
import useNotifications from "./stores/useNotifications";

function App() {
  let router = useRoutes(routes);
  const { setIsLogin } = useLogin();
  const { setNotifications, setNumberOfNots } = useNotifications();

  useEffect(() => {
    setNotifications([
      { id: 1, title: "Notification 1", content: "Content for notification 1" },
      { id: 2, title: "Notification 2", content: "Content for notification 2" },
      { id: 3, title: "Notification 3", content: "Content for notification 3" },
      { id: 4, title: "Notification 4", content: "Content for notification 4" },
      { id: 5, title: "Notification 5", content: "Content for notification 5" },
      { id: 6, title: "Notification 6", content: "Content for notification 6" },
      { id: 7, title: "Notification 7", content: "Content for notification 7" },
      { id: 8, title: "Notification 8", content: "Content for notification 8" },
      { id: 9, title: "Notification 9", content: "Content for notification 9" },
    ]);
    setNumberOfNots();
  }, []);

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
        <header
          id="header"
          className="col-start-1 col-end-13 row-start-1 row-end-2 min-h-12"
        >
          <Navbar />
        </header>
        <main
          id="main"
          className="col-start-1 col-end-13 row-start-2 row-end-13 flex flex-col flex-nowrap items-center"
        >
          {router}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
