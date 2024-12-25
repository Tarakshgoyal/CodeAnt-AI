import { useState } from "react";
import data from "./data";
import dataa from "./dataa";

export default function Login({setPage}) {
    
    const [selected, setSelected] = useState("saas");

    const enteryElements = data.map((entry) => {
        return (
          <>
            <button onClick={ () => setPage(false) } className="github">
                <img src={entry.img.src} alt={entry.img.alt} />
                <p className="sign">{entry.text}</p>
            </button>
          </>
        )
      })

    const enteryElement = dataa.map((entry) => {
        return (
          <>
            <button onClick={ () => setPage(false) } className="github">
                <img src={entry.img.src} alt={entry.img.alt} />
                <p className="sign">{entry.text}</p>
            </button>
          </>
        )
      })


    return (
        <>
            <article className="firstpage">
                <section className="leftside">
                    <div className="data">
                        <h2 className="support">
                            <img src="Subtract.png" alt="ant" />AI to Detect & Autofix Bad Code
                        </h2>
                        <div className="split"></div>
                        <div className="lang">
                            <p className="supp"><span className="number">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 30+</span><br />Language Support</p>
                            <p className="supp"><span className="number">&nbsp; &nbsp;10K+</span><br />Developers</p>
                            <p className="supp"><span className="number">&nbsp; &nbsp;100K+</span><br />Hours Saved</p>
                        </div>
                    </div>
                    <div className="stats">
                        <div className="upeer">
                            <div className="bar">
                                <img src="Group 4.png" alt="vec" />
                            </div>
                        <div className="useage">
                            <p className="arrow">
                                <span className="rate">↑ 14%</span><br />This week
                            </p>
                        </div>
                        </div>
                        <br />
                        <div className="fixes">
                            <p className="issuefix">Issues Fixed <br /><span className="users">500K+</span></p>
                        </div>
                    </div>
                    <div className="backant">
                        <img className="antface"  src="antface.png" alt="back" />
                    </div>
                </section>
                <section className="rightside">
                    <div className="signin">
                        <h2 className="welcome">
                            <img src="logo (1).png" alt="ant" /> CodeAnt AI <br /><span className="bhalcom">Welcome to CodeAnt AI</span>
                        </h2>
                        <div className="buttons">
                            <button
                                className={`change ${selected === "saas" ? "active" : ""}`}
                                onClick={() => setSelected("saas")}
                            >
                                SAAS
                            </button>
                            <button
                                className={`changee ${selected === "self-hosted" ? "active" : ""}`}
                                onClick={() => setSelected("self-hosted")}
                            >
                                Self Hosted
                            </button>
                        </div>
                        <div className="split"></div>
                        <div className="githubb">
                            {selected === "saas" ? enteryElements : enteryElement}
                        </div>
                    </div>
                    <div className="pvt">
                        <p>By signing up you agree to the <span className="policy">Privacy Policy.</span></p>
                    </div>
                </section>
            </article>
        </>
    )
}