import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./main.css";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user} alt="" />
      </div>
      <div className="main-container">
        {!showResults ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Tarun.</span>
              </p>
              <p>How Can I Help You Today?</p>
            </div>
            <div className="cards">
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Suggest the best locations in Japan?")
                }
              >
                <p>Suggest the best locations in Japan?</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Brainstorm ideas for my college project")
                }
              >
                <p>Brainstorm ideas for my college project</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick("Briefly summarise the topic Quantum Computing")
                }
              >
                <p>Briefly summarise the topic Quantum Computing</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                className="card"
                onClick={() =>
                  handleCardClick(
                    "Fix the errors of the following code"
                  )
                }
              >
                <p>Fix the errors of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Enter the Prompt Here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img
                src={assets.send_icon}
                alt=""
                onClick={() => {
                  onSent();
                }}
              />
            </div>
          </div>
          <div className="bottom-info">
            <p>
              Gemini may display inaccurate info, including about people, so double-check its responses. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
