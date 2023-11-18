import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Button } from "./components/common";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import LightTheme from "./theme/light";
import DarkTheme from "./theme/dark";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body{
    background: ${({ theme }) => theme.bodyBackgroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${({ theme }) => theme.bodyFontColor};
  }
`;

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  const [theme, setTheme] = useState(LightTheme);

  const switchTheme = () => {
    if (theme === LightTheme) {
      setTheme(DarkTheme);
    } else {
      setTheme(LightTheme);
    }
  };
  return (
    <>
      <ThemeProvider theme={{ ...theme, switchTheme }}>
        <GlobalStyle />
        <RouterProvider router={router} />
        {/* <h1>App</h1>
      <Button className="selected" $primary>
        Test
      </Button>
      <Button disabled>Test 2</Button>
      <Button $large>Test 3</Button> */}
      </ThemeProvider>
    </>
  );
}

export default App;
