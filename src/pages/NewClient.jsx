import { useNavigate, Form, useActionData } from "react-router-dom";
import ClientForm from "../components/ClientForm";
import Error from "../components/Error";

export async function action({ request }) {
  const formData = await request.formData();
  console.log([...formData]);
  console.log(Object.fromEntries(formData));
  const data = Object.fromEntries(formData);

  const email = formData.get("email");
  //validations

  const errors = [];
  if (Object.values(data).includes("")) {
    errors.push("All inputs are required");
  }

  const emailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (emailRegex.test(email)) {
    errors.push("Email isn't valid");
  }

  if (Object.keys(errors).length) {
    return errors;
  }

  return errors;
}

const NewClient = ({ client }) => {
  const navigate = useNavigate();
  const errors = useActionData();

  console.log(errors);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-400">New Client</h1>
      <p className="mt-2">Fill all inputs to register a new client</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Return
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form method="post">
          <ClientForm />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
            value="Register client"
          />
        </Form>
      </div>
    </>
  );
};

export default NewClient;
