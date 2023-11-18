import styled from "styled-components";
import { Layout, Input, PasswordInput, Button, Spinner } from "../common/index";
import { useEffect, useState } from "react";

let timeout: any;
const Login = () => {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setFormFields((s) => {
      return {
        ...s,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <>
      <h1>Home</h1>
      <Layout>Login</Layout>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <span>Login if you have an account</span>
            <Input
              name="username"
              placeholder="Username"
              type="text"
              onChange={handleInputChange}
              value={formFields.username}
            />
            <PasswordInput
              name="password"
              // placeholder="password"
              // type="password"
              onChange={handleInputChange}
              value={formFields.password}
            />
          </>
        )}
        <Button type="submit" $large $primary disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button type="button">Register</Button>
          </>
        )}
      </Form>
    </>
  );
};

export default Login;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  ${Button} {
    margin-top: 40px;
  }

  ${Button}:first-of-type {
    margin-top: 40px;
  }

  > ${Button} {
    margin-top: 40px;
  }

  > ${Button}:first-of-type {
    margin-top: 40px;
  }
`;
