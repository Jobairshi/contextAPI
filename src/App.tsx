import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { ThemeProvider } from "./Context/ThemeContext";
import UserContextProvider from "./provider/UsercontextProvider";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    console.log(themeMode);
  }, [themeMode]);
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <UserContextProvider>
          <Login />
          <Profile />
        </UserContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
