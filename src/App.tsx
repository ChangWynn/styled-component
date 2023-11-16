import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Button } from "./components/common";
import { createGlobalStyle } from "styled-components";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
  }
`;

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
      {/* <h1>App</h1>
      <Button className="selected" $primary>
        Test
      </Button>
      <Button disabled>Test 2</Button>
      <Button $large>Test 3</Button> */}
    </>
  );
}

export default App;
