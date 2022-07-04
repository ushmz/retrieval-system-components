import React, { useEffect, useState } from "react";
import { SerpPagination } from "./Components/Pagination";
import { SearchBar } from "./Components/SearchBar";
import { SearchResult } from "./Components/SearchResult";

const sampleResultProps = {
  title: "Sample page title",
  url: "https://example.com/",
  snippet:
    "Smaple snippet Smaple snippet Smaple snippet Smaple snippet Smaple snippet Smaple snippet Smaple snippet Smaple snippet Smaple snippet Smaple snippet Smaple snippet Smaple snippet Smaple snippet Smaple snippet Smaple snippet Smaple snippet Smaple snippet Smaple snippet",
  suggestion: {
    title: "Sample suggestion title",
    child: <p>Sample suggestion element</p>,
  },
};

function App(): React.ReactElement {
  const [offset, setOffset] = useState<number>(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [offset]);

  return (
    <div className="App">
      <div style={styles.searchBarArea}>
        <SearchBar query="sample query" />
      </div>

      <div style={styles.serpArea}>
        {[...Array(1).keys()].map((_, idx) => {
          return (
            <SearchResult
              key={idx}
              title={"Sample search result component with suggestion area"}
              url={sampleResultProps.url}
              snippet={sampleResultProps.snippet}
            >
              <div>
                <p>Suggestion Area</p>
              </div>
            </SearchResult>
          );
        })}

        {/* If nothing passed for `suggestion` prop, nothing appears as a suggestion component. */}
        {[...Array(1).keys()].map((_, idx) => {
          return (
            <SearchResult
              key={idx}
              title={"Sample search result component without suggestion area"}
              url={sampleResultProps.url}
              snippet={sampleResultProps.snippet}
            />
          );
        })}
        <SerpPagination maxPage={10} offset={offset} setOffset={setOffset} />
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  searchBarArea: {
    background: "#ffffff",
    height: "69px",
    left: "0",
    position: "fixed",
    boxShadow: "0 1px 6px 0 rgb(32 33 36 / 28%)",
    top: "0px",
    overflow: "hidden",
    display: "block",
    width: "100%",
    minWidth: "1261px",
    zIndex: 3,
  },
  serpArea: {
    clear: "both",
    position: "relative",
    marginTop: "100px",
    marginLeft: "180px",
    width: "652px",
  },
};

export default App;
