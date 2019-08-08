import "./ClothTypeMain.scss";

import React from "react";
import MaterialTable from "material-table";

export default function Cloth({clotheDataUse}) {
  const [state, setState] = React.useState({
    columns: [
      { title: "Title", field: "title" },
      { title: "Price", field: "price" }


    ],
    data: clotheDataUse.map(
      ({ title, price }) => {
        return {
          title,
          price,
        };




      }
    )
  });
  console.log("i' am working Headers", clotheDataUse);








  return (
    <div className="ClothTypeMain-Container">
      <MaterialTable
        title="Cloth Type"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.push(newData);
                setState({ ...state, data });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data[data.indexOf(oldData)] = newData;
                setState({ ...state, data });
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                const data = [...state.data];
                data.splice(data.indexOf(oldData), 1);
                setState({ ...state, data });
              }, 600);
            })
        }}
      />
    </div>
  );
}
