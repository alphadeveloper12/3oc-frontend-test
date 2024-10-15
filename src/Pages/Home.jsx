import { Icon } from "../Assets";
import { useNavigate } from 'react-router-dom';
import txt from'../Utils/constant.json';

export default function Home() {

  const navigate = useNavigate();
  
  return (
    <div className="text-center flex flex-col justify-center items-center h-screen bg-dark-blue">
      <img src={Icon} alt="3oC Logo" className="mb-6" width={240} />
      <h1 className="text-lg text-white mt-2 mb-4">
        {txt.welcomeMsg}
      </h1>
      <h2 className="text-3xl text-white mb-8">
        {txt.headline}
      </h2>
      <div className="flex flex-row justify-center">
        {/* <a
          className="hover:cursor-pointer my-2"
          href="/join3oc"
          style={{
            backgroundColor: "#1a4850",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            marginRight: "10px",
            textDecoration: "none",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          {txt.join3oc}
        </a>
        <a
          className="hover:cursor-pointer my-2"
          href="/enter3oc"
          style={{
            backgroundColor: "#720072",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          {txt.enter3oc}
        </a> */}

        <button
          className="hover:cursor-pointer my-2"
          onClick={() => navigate('/join3oc')}
          style={{
            backgroundColor: "#1a4850",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            marginRight: "10px",
            textDecoration: "none",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          {txt.join3oc}
        </button>
        <button
          className="hover:cursor-pointer my-2"
          onClick={() => navigate('/enter3oc')}
          style={{
            backgroundColor: "#720072",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
            transition: "background-color 0.3s ease-in-out",
          }}
        >
          {txt.enter3oc}
        </button>

      </div>
      <div className="absolute bottom-4 text-white text-xs">
        {txt.appUpdateMsg}
      </div>
    </div>
  );
}
