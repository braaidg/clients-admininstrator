import { Form, redirect, useNavigate } from "react-router-dom";
import { deleteClient } from "../data/Clients";

export async function action({ params }) {
  await deleteClient(params.clientId);
  return redirect("/");
}

const Client = ({ client }) => {
  const navigate = useNavigate();
  const { name, company, id, email, phone } = client;
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{name}</p>
        <p>{company}</p>
      </td>

      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold"> Email : </span>{" "}
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold"> Tel : </span>{" "}
          {phone}
        </p>
      </td>

      <td className="p-6 flex gap-3">
        <button
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          onClick={() => navigate(`/clients/${id}/edit`)}
        >
          Edit
        </button>

        <Form
          method="post"
          action={`/clients/${id}/delete`}
          onSubmit={(e) => {
            if (!confirm("Are you sure?")) {
              e.preventDefault();
            }
          }}
        >
          <button className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">
            Delete
          </button>
        </Form>
      </td>
    </tr>
  );
};

export default Client;
