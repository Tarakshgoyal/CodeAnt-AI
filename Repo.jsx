import { useState } from "react";
import dataaa from "./dataaa";

export default function Repo({setPage}) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const entryrepository = dataaa.map((entry) => {
            return (
              <>
                <button className="repofiles">
                    <div className="projfiles">
                        <h2 className="projname">{entry.name} <span className="pubpvt">{entry.sec}</span></h2>
                        <br />
                        <p className="langsize">{entry.lang}&nbsp; <img src="Ellipse 1.png" alt="ellipse" />&nbsp; &nbsp; &nbsp; &nbsp;  <img src="database.png" alt="data" />&nbsp; {entry.size}&nbsp; &nbsp; &nbsp; &nbsp;  {entry.time}</p>
                    </div>
                </button>
              </>
            )
          })

    return (
        <>
            <article className="mainpage">
                <section className="navbar">
                    <div className="navv">
                        <h2 className="topicant">
                            <img src="navant.png" alt="ant" /> CodeAnt AI
                        </h2>
                        <div className="dropdown">
                            <select className="navdrop" name="Taraksh" id="Taraksh">
                                <optgroup label="&nbsp; &nbsp; &nbsp; &nbsp;Tarakshs">
                                    <option className="taraksh" value="Taraksh 1">&nbsp; &nbsp; Taraksh 1</option>
                                    <option className="taraksh" value="Taraksh 2">&nbsp; &nbsp; Taraksh 2</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="repoopt">
                            <button className="repobut1"><img src="home.png" alt="home" />Repositories</button>
                            <button className="repobut"><img src="Frame 10.png" alt="ai" />AI Code Review</button>
                            <button className="repobut"><img src="cloud.png" alt="cloud" />Cloud Security</button>
                            <button className="repobut"><img src="book.png" alt="book" />How to Use</button>
                            <button className="repobut"><img src="setting.png" alt="setting" />Settings</button>
                        </div>
                        <div className="navbotom">
                            <button className="repobut"><img src="phone.png" alt="phone" />Support</button>
                            <button onClick={ () => setPage(true) } className="repobut"><img src="exit.png" alt="exit" />Logout</button>
                        </div>
                    </div>
                </section>
                <div className="mobile-navbar">
                    <button className="mobile-menu-toggle" onClick={toggleNavbar}>
                        <h2 className="topicant">
                         &nbsp; &nbsp; <img src="navant.png" alt="ant" /> CodeAnt AI 
                        </h2>
                        <span className="dop">{isOpen ? "✖" : "☰" } &nbsp; &nbsp; </span>
                    </button>
                    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
                        <select className="navdrop" name="Taraksh" id="Taraksh">
                                <optgroup label="&nbsp; &nbsp; &nbsp; &nbsp;Tarakshs">
                                    <option className="taraksh" value="Taraksh 1">&nbsp; &nbsp; Taraksh 1</option>
                                    <option className="taraksh" value="Taraksh 2">&nbsp; &nbsp; Taraksh 2</option>
                                </optgroup>
                        </select>
                        <button className="repobut"><img src="House.png" alt="home" />Repositories</button>
                        <button className="repobut"><img src="Frame 10.png" alt="ai" />AI Code Review</button>
                        <button className="repobut"><img src="cloud.png" alt="cloud" />Cloud Security</button>
                        <button className="repobut"><img src="book.png" alt="book" />How to Use</button>
                        <button className="repobut"><img src="setting.png" alt="setting" />Settings</button>
                        <button className="repobut"><img src="phone.png" alt="phone" />Support</button>
                        <button onClick={ () => setPage(true) } className="repobut"><img src="exit.png" alt="exit" />Logout</button>
                    </div>
                </div>
                <section className="reposatrys">
                    <div className="repois">
                        <h2 className="gitrepos">Repositories <br /><span className="totalrepo">33 total repositories</span></h2>
                        <div className="refresh">
                            <button className="repobut refall"><img src="refresh.png" alt="refresh" />Refresh All</button>
                            <button className="repobut1 refall1"><img src="plus.png" alt="add" />Add Repository</button>
                        </div>
                    </div>
                    <div className="search-bar">
                        <span className="icon"><img src="search.png" alt="search" /></span>
                        <input type="text" placeholder="Search Repositories" />
                    </div>
                    <div className="repolist">
                        {entryrepository}
                    </div>
                </section>
            </article>
        </>
    );
}
