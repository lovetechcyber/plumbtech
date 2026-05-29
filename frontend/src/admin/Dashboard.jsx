import AdminLayout from "./AdminLayout";

export default function Dashboard() {
  return (
    <AdminLayout>

      <div>

        <h1 className="text-3xl font-bold">
          Dashboard Overview
        </h1>


        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">
              Announcements
            </h2>

            <p className="text-4xl font-bold mt-2">
              1
            </p>
          </div>

           <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">
              messages
            </h2>

            <p className="text-4xl font-bold mt-2">
              1
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">
              Quote Requests
            </h2>

            <p className="text-4xl font-bold mt-2">
              24
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-gray-500">
              Gallery Uploads
            </h2>

            <p className="text-4xl font-bold mt-2">
              120
            </p>
          </div>

        </div>

      </div>

    </AdminLayout>
  );
}