import axios from "axios";
import { Store } from "react-notifications-component";

const baseUrl = "http://localhost:5000";
const getAllPowerConsumption = (setPowerConsumption) => {
  axios.get(`${baseUrl}/allprocesses`).then(({ data }) => {
    setPowerConsumption(data);
  });
};
const displayProcess = (text) => {
  axios
    .post(`${baseUrl}/specificprocess`, { appName: text })
    .then((data) => {
      console.log(data);
      Store.addNotification({
        title: text,
        message: (
          <div>
            <p>{data.data.memryInfo}</p>
            <p>
              RSS: {data.data.processInfo.rss}
              <br />
              Array Buffers: {data.data.processInfo.arrayBuffers}
              <br />
              External: {data.data.processInfo.external}
              <br />
              Heap Total: {data.data.processInfo.heapTotal}
              <br />
              Heap Used: {data.data.processInfo.heapUsed}
            </p>
          </div>
        ),
        type: "success",
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 6000,
          onScreen: true,
          click: true,
        },
      });
    })
    .catch((err) => console.log(err));
};

export { getAllPowerConsumption, displayProcess };
