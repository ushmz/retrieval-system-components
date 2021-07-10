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

// import { MDBIcon, MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";
// export const SerpPaginationWithExternal: React.FC<PaginationProps> = ({
//   offset,
//   setOffset,
// }) => {
//   return (
//     <div className="pt-3 pb-5">
//       <MDBPagination color="blue">
//         <MDBPageItem disabled={offset <= 0}>
//           <MDBPageNav onClick={() => setOffset(offset - 1)}>
//             <MDBIcon icon="angle-double-left" />
//           </MDBPageNav>
//         </MDBPageItem>
//         <MDBPageItem active={offset === 0}>
//           <MDBPageNav onClick={() => setOffset(0)}>1</MDBPageNav>
//         </MDBPageItem>
//         <MDBPageItem active={offset === 1}>
//           <MDBPageNav onClick={() => setOffset(1)}>2</MDBPageNav>
//         </MDBPageItem>
//         <MDBPageItem active={offset === 2}>
//           <MDBPageNav onClick={() => setOffset(2)}>3</MDBPageNav>
//         </MDBPageItem>
//         <MDBPageItem active={offset === 3}>
//           <MDBPageNav onClick={() => setOffset(3)}>4</MDBPageNav>
//         </MDBPageItem>
//         <MDBPageItem active={offset === 4}>
//           <MDBPageNav onClick={() => setOffset(4)}>5</MDBPageNav>
//         </MDBPageItem>
//         <MDBPageItem active={offset === 5}>
//           <MDBPageNav onClick={() => setOffset(5)}>6</MDBPageNav>
//         </MDBPageItem>
//         <MDBPageItem active={offset === 6}>
//           <MDBPageNav onClick={() => setOffset(6)}>7</MDBPageNav>
//         </MDBPageItem>
//         <MDBPageItem active={offset === 7}>
//           <MDBPageNav onClick={() => setOffset(7)}>8</MDBPageNav>
//         </MDBPageItem>
//         <MDBPageItem active={offset === 8}>
//           <MDBPageNav onClick={() => setOffset(8)}>9</MDBPageNav>
//         </MDBPageItem>
//         <MDBPageItem
//           disabled={offset >= 8}
//           onClick={() => setOffset(offset + 1)}
//         >
//           <MDBPageNav>
//             <MDBIcon icon="angle-double-right" />
//           </MDBPageNav>
//         </MDBPageItem>
//       </MDBPagination>
//     </div>
//   );
// };
