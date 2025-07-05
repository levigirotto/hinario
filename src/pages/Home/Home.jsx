import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import hymns from "../../data/hymns.json";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [searchNumber, setSearchNumber] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = parseInt(searchNumber);
    if (!isNaN(number) && number > 0 && number <= hymns.length) {
      navigate(`/hinos/${number}`);
    } else {
      window.alert("Este hino não existe!");
    }
  };

  const openHymnal = () => {
    navigate("/indice");
  };

  return (
    <div className="home-background">
      <div className="home box">
        <h1 className="home-title">Hinário</h1>

        {!inputFocused && (
          <button className="home hymns-button" onClick={openHymnal}>
            Abrir
          </button>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={searchNumber}
            onChange={(e) => setSearchNumber(e.target.value)}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            className="home number-input"
            placeholder="Buscar por número..."
          />
          {inputFocused && (
            <button
              type="submit"
              className="home submit-number"
              onMouseDown={(e) => e.preventDefault()}
            >
              <FaMagnifyingGlass />
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
