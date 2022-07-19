import "./App.css";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import Home from "./Page/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CollectionPage from "./Page/CollectionPage";
import Dashboard from "./Page/Dashboard";

function App() {
  const connectMetaMast = useMetamask();
  const address = useAddress();
  const notify = () =>
    toast.error("Logged Out!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const Auth = () => {
    notify();
    return (
      <div className="App flex justify-center items-center h-screen w-screen">
        <button
          onClick={connectMetaMast}
          className="bg-purple-500 h-16 w-32 rounded-lg animate-bounce hover:bg-purple-400"
        >
          Click To Connect
        </button>
        <ToastContainer
          position="bottom-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  };

  return (
    <>
      {address ? (
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/asset/:contractAddress/:id" element={<CollectionPage/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
          </Router>
        </div>
      ) : (
        Auth()
      )}
    </>
  );
}

export default App;
