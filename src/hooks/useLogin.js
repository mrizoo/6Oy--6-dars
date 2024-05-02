import { useActionData } from "react-router-dom";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function useLogin() {
  return <div>useLogin</div>;
}

export default useLogin;
