import { getClient } from "../data/Clients";
import { Form, useNavigate, useLoaderData } from "react-router-dom";
import ClientForm from "../components/ClientForm";

export async function loader({ params }) {
  const client = await getClient(params.clientId);
  if (Object.values(client).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Client doesn't exist on database!",
    });
  }
  return client;
}

const EditClient = () => {
  const navigate = useNavigate();
  const client = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-400">Edit Client</h1>
      <p className="mt-2">Here you can edit the client information</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}
        >
          Return
        </button>
      </div>

      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {/* {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)} */}
        <Form method="post">
          <ClientForm client={client} />
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

export default EditClient;
