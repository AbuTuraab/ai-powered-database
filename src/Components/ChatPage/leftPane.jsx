import { useState } from "react";
import SmileAvatar from "../../assets/SmileAvatar.png";
import ArrowRight from "../../assets/arrowright.png";

import axios from "axios";

const LeftPane = () => {
  const [prompt, setPrompt] = useState("");

  const [requests, setRequests] = useState([]);
  const [responses, setResponses] = useState([]);

  const handleSubmit = (e, prompt) => {
    e.preventDefault();
    const data = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      url: "https://eve1-1-c9398496.deta.app/db_chat/invoke",
      data: {
        input: { query: prompt },
        config: {},
        kwargs: {},
      },

      timeout: 30000,
    };

    axios(data)
      .then((result) => {
        const res = JSON.stringify(result.data.output);
        setResponses([...responses, res]);
      })
      .catch((error) => {
        console.log(error);
      });

    newRequest({ prompt });
    clearInput();
  };

  const newRequest = ({ prompt }) => {
    requests.push(prompt);
  };

  const clearInput = () => {
    setPrompt("");
  };

  return (
    <div className="font-[Poppin] text-md">
      <div className="fixed left-[300px] sm:w-[400px] ">
        <div className="w-[1058px] h-[57px] border-[1px] bg-slate-800 left-[222px]">
          <div className="relative flex  left-[20px] top-[20px]">
            <div className="text-white"> EcomBot</div>
            <div className="w-[40.38px] relative left-[30px] h-[28px] ">
              <img src={SmileAvatar} alt="smile" />
            </div>
            <div>
              <form>
                <label>
                  <input
                    className="relative w-[500px] left-[300px] rounded-md text-black"
                    type="text"
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="w-[1100px] h-[540px] bg-white overflow-y-scroll ">
          <section>
            <div className="relative  p-6 overflow-y-auto ">
              <div>
                {requests.map((reqs) => {
                  console.log(reqs);
                  return (
                    <div
                      className="p-3  bg-[#F7F9FA] w-[555px]  left-[470px] top-[20px] relative overflow-y-auto border-b"
                      key={reqs.index}
                    >
                      {reqs}
                    </div>
                  );
                })}
              </div>

              <div>
                <div className="w-[30px] top-[50px] left-[10px] relative h-[20px]">
                  <img src={SmileAvatar} alt="smile" />
                </div>

                {responses.map((resps) => {
                  console.log(resps);
                  return (
                    <div
                      className="relative w-[555px] bg-[#F7F9FA] mt-5 top-[5px] left-[45px] p-6 overflow-y-auto "
                      key={resps.index}
                    >
                      {resps}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <div className="border-2 h-[50px] flex w-[1065px] border-solid border-cyan-700 top-[600px] fixed ">
            <form className="flex" onSubmit={(e) => handleSubmit(e, prompt)}>
              <label>
                <input
                  className="text-black w-[400px]  border rounded-[5px] left-[100px] relative top-[9px] border-cyan-700"
                  type="text"
                  placeholder="Write a query"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </label>

              <div className="w-[29px] relative left-[68px] h-[29px] rounded-[7.25px] top-[10px]  ">
                <button type="submit">
                  <img src={ArrowRight} alt="smile" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-[300px] relative h-[650px] text-white bg-slate-800 border-[1px] ">
        <div className="relative top-[60px] p-3 text-[#F7F9FA] h-[500px]  ">
          <div>
            <div>History</div>
            <div className="p-2">
              {" "}
              <ul>
                {requests.map((reqs) => (
                  <li key={reqs.index}>{reqs}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex p-2 relative left-[30px] top-[90px] ">
          <div className="w-[30px] h-[30px] m-2">
            <img src={SmileAvatar} alt="smile" />
          </div>
          <div className="m-2">Adewale Shola</div>
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
