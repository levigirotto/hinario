import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { marked } from "marked";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import hymns from "../../data/hymns.json";
import Header from "../../components/Header/Header";
import "./Hymns.css";

export default function Hymns() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [searchNumber, setSearchNumber] = useState("");
  const { number } = useParams();
  const hymnNumber = parseInt(number);
  const hymn = hymns.find((h) => h.number === hymnNumber);
  const navigate = useNavigate();

  if (!hymn) return <p>Hymn not found.</p>;

  useEffect(() => {
    if (showOverlay) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showOverlay]);

  return (
    <>
      <div
        className={`hymns-background ${showOverlay ? "overlay-active" : ""}`}
      >
        <Header />
        <div className="hymn">
          <div key={hymn.number} className="hymn-box">
            <h2 className="hymn-title">
              {hymn.number}. {hymn.title}
            </h2>
            <div
              className="lyrics"
              dangerouslySetInnerHTML={{
                __html: marked.parse(hymn.lyrics),
              }}
            />
          </div>
        </div>
        <div className="hymns pag-bar-div">
          <nav className="hymns pag-bar">
            <button
              name="previous-button"
              onClick={() => navigate(`/hymns/${hymnNumber - 1}`)}
              className={`hymns pag-bar-button ${
                hymnNumber === 1 ? "disabled" : ""
              }`}
            >
              <GrPrevious />
            </button>
            <button
              name="current-button"
              onClick={() => setShowOverlay(true)}
              className="hymns pag-bar-button"
            >
              {showOverlay ? <FaMagnifyingGlass /> : hymn.number}
            </button>
            <button
              name="next-button"
              onClick={() => navigate(`/hymns/${hymnNumber + 1}`)}
              className={`hymns pag-bar-button ${
                hymnNumber === hymns.length ? "disabled" : ""
              }`}
            >
              <GrNext />
            </button>
          </nav>
        </div>
      </div>
      {showOverlay && (
        <div
          className="overlay"
          onClick={() => {
            setShowOverlay(false);
            setSearchNumber("");
          }}
        >
          <div className="overlay-inner" onClick={(e) => e.stopPropagation()}>
            <input
              type="number"
              placeholder="Digite um número..."
              className="overlay-input"
              value={searchNumber}
              onChange={(e) => setSearchNumber(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (
                    !isNaN(searchNumber) &&
                    searchNumber > 0 &&
                    searchNumber <= hymns.length
                  ) {
                    navigate(`/hymns/${searchNumber}`);
                  } else {
                    window.alert("Este hino não existe!");
                  }
                  setShowOverlay(false);
                  setSearchNumber("");
                }
              }}
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  );
}
