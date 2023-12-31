import { createContext, useContext } from "react";
import Empty from "./Empty";

//context
const TableContext = createContext();

//provider
const Table = ({ children, columns }) => {
  return <TableContext.Provider value={9}>{children}</TableContext.Provider>;
};

function Row({ children }) {
  return <div>{children}</div>;
}
const TableHeaders = ({ children, gaps }) => {
  return (
    <div className=" bg-slate-200 grid grid-flow-col   font-semibold mt-8 px-4 py-3 uppercase">
      {children}
    </div>
  );
};

function Body({ data, render }) {
  if (!data?.length) return <Empty>No data to show at the moment</Empty>;

  return <div>{data?.map(render)}</div>;
}

function Footer({ children }) {
  return <div>{children}</div>;
}

Table.Footer = Footer;
Table.Headers = TableHeaders;
Table.Body = Body;
Table.Row = Row;
export default Table;
