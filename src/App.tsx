import Alert from "./components/Alert/Alert";
import "./App.css";
import { BellRing, Ban } from "lucide-react";

function App() {
  return (
    <div className="parent">
      <Alert
        type={"alert-default"}
        icon={<BellRing />}
        title={"Something Went Wrong"}
      >
        <p>
          " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          saepe nulla dolor beatae <a href="#">deleniti</a> minima tenetur,
          incidunt rem nostrum numquam. "
        </p>
      </Alert>
      <Alert
        type={"alert-info"}
        icon={<Ban />}
        title={"Something Went Wrong"}
        description="
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        saepe nulla dolor beatae deleniti minima tenetur, incidunt rem nostrum
        numquam.
        "
      />
      <Alert
        type={"alert-warning"}
        icon={<BellRing />}
        title={"Something Went Wrong"}
        description="
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        saepe nulla dolor beatae deleniti minima tenetur, incidunt rem nostrum
        numquam.
        "
      />
      <Alert
        type={"alert-error"}
        icon={<BellRing />}
        title={"Something Went Wrong"}
        description="
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        saepe nulla dolor beatae deleniti minima tenetur, incidunt rem nostrum
        numquam.
        "
      />
      <Alert
        type={"alert-success"}
        icon={<BellRing />}
        title={"Something Went Wrong"}
        description="
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
        saepe nulla dolor beatae deleniti minima tenetur, incidunt rem nostrum
        numquam.
        "
      />
    </div>
  );
}

export default App;
