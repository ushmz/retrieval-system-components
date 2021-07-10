import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

type PaginationProps = {
  maxPage: number;
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
};

export const SerpPagination: React.FC<PaginationProps> = (props) => {
  return (
    <div style={{ display: "block" }}>
      <table style={styles.paginateTable}>
        <tbody>
          <tr style={styles.parentRow}>
            {[...Array(props.maxPage).keys()].map((v, idx) => {
              return (
                <td key={idx}>
                  <PaginateItem
                    style={
                      v === props.offset
                        ? styles.currentPageText
                        : styles.pageText
                    }
                    onClick={() => props.setOffset(v)}
                  >
                    {/* If you'd like to display image like google search, insert here. */}
                    {/* <span style={styles.paginateItemImage}></span> */}
                    {v + 1}
                  </PaginateItem>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const PaginateItem = styled.button`
  border: none;
  background: transparent;
  :hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const styles: { [key: string]: React.CSSProperties } = {
  paginateTable: {
    margin: "50px auto 50px",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  parentRow: {
    display: "table-row",
    // verticalAlign: "inherit",
    borderColor: "inherit",
  },
  currentPageText: {
    display: "block",
    color: "rgba(0,0,0,0.87)",
    fontWeight: "normal",
    fontSize: "18px",
  },
  pageText: {
    display: "block",
    color: "#4285f4",
    fontWeight: "normal",
    fontSize: "18px",
  },
  paginateItemImage: {
    cursor: "pointer",
    overflow: "hidden",
    height: "40px",
    width: "20px",
    display: "block",
  },
};
