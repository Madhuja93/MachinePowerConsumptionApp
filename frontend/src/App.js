import { useEffect, useState } from "react";
import PowerConsumption from "./components/PowerConsumption";
import { getAllPowerConsumption, displayProcess } from "./utils/HandleAPI";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function App() {
  const [powerConsumption, setPowerConsumption] = useState([]);

  useEffect(() => {
    getAllPowerConsumption(setPowerConsumption);
  }, []);

  const displayProcessEvent = (imageName) => {
    displayProcess(imageName);
  };

  return (
    <div className="App">
      <div className="Container">
        <ReactNotifications />
        <h1> Greenie Web Power Consumption App</h1>

        <div className="list">
          {powerConsumption.map((item) => (
            <PowerConsumption
              key={item.pid}
              text={item.imageName}
              displayProcess={() => displayProcessEvent(item.imageName)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
