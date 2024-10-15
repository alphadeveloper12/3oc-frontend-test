import { ConnectionProfile } from "../Components";
import { useLoading, useConnections } from "../Hook";
import txt from'../Utils/constant.json';

export default function CupBuds() {
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");
  const { connectionData } = useConnections();
  const [, , Loading] = useLoading();

  return (
    isAuthenticated && (
      <div className="mx-auto mt-4 max-w-lg">
        {!connectionData ? (
          <div className="flex flex-col items-center justify-center h-screen">
            <Loading />
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-semibold text-center mb-4">{txt.yourCupBuds}</h1>
            <div className="my-4">
              {connectionData.length > 0 ? (
                connectionData.map((connection) => (
                  <div key={connection.id}>
                    <ConnectionProfile connection={connection} />
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-600">
                  {txt.emptyBudMsg}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    )
  );
}
