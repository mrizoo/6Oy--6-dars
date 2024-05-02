import FormInput from "../components/FormInput";
import { Form } from "react-router-dom";
import { useActionData } from "react-router-dom";

function Login() {
  const action = useActionData();
  console.log(action);

  return (
    <div className="min-h-screen grid place-content-center">
      <div className="min-h-screen grid place-content-center w-full">
        <div className="mb-3">
          <Form method="post">
            <FormInput label="Email" type="email" name="email" />
            <FormInput label="Password" type="password" name="password" />
            <button type="button" className="btn btn-secondary w-full mt-3">
              Login
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
