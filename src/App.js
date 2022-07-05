import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import RoutesPages from "./routes";
import Global from "./style/global";

function App() {
  return (
    <>
      <Global />
      <Toaster position="bottom-center" reverseOrder={false} />
      <RoutesPages />
    </>
  );
}

export default App;
