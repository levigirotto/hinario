import "./HymnsIndex.css";
import Header from "../../components/Header/Header";
import hymns from "../../data/hymns.json";
import HymnCard from "../../components/HymnCard/HymnCard";

function HymnsIndex() {
  return (
    <div className="hymns-index-background">
      <Header />
      <div className="hymns-cards-box">
        {hymns.map((hymn) => {
          return (
            <HymnCard
              key={hymn.number}
              number={hymn.number}
              title={hymn.title}
              lyrics={hymn.lyrics}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HymnsIndex;
