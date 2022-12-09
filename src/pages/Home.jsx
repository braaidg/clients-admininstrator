import { useLoaderData } from "react-router-dom";
import Client from "../components/Client";
import { getClients } from "../data/Clients";

export function loader() {
  const clients = getClients();
  return clients;
}

const Home = () => {
  const clients = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-400">Clients</h1>
      <p className="mt-2">Manage your clients</p>

      {clients.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clients</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {clients.map((client) => (
              <Client client={client} key={client.id} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">There is no clients yet.</p>
      )}
    </>
  );
};

export default Home;
