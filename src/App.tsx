// import SigninedNavbar from "./components/signined-navbar";
import NotSigninedNavbar from "./components/not-signined-navbar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  let router = useRoutes(routes);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div id="App" className=" w-dvw h-dvh grid grid-cols-12 grid-rows-12">
        <header className="col-start-1 col-end-13 row-start-1 row-end-2">
          {/* <SigninedNavbar /> */}
          <NotSigninedNavbar />
        </header>
        <main className="col-start-1 col-end-13 row-start-2 row-end-13 flex flex-col flex-nowrap items-center">
          {router}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
