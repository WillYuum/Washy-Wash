import "./CustomerMain.scss";

import React from "react";
import MaterialTable from "material-table";
import { resolveSoa } from "dns";

export default function CustomerMain({ UseCustomerData }) {
  const [state, setState] = React.useState({
    columns: [
      { title: "FirstName", field: "first_name" },
      { title: "MiddleName", field: "middle_name" },
      { title: "LastName", field: "last_name" },
      { title: "Email", field: "email" },
      { title: "Roles", field: "roles" }
    ],
    data: UseCustomerData.map(
      ({ first_name, last_name, middle_name, email,roles }) => {
       
          return {
            first_name,
            middle_name,
            last_name,
            email,
            roles,
          };
      
      }
    )
  });

  console.log("I'm WORKING HERE", UseCustomerData);

  return (
    <div className="CustomerMain-Container">
      <MaterialTable
        title="Customers"
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
// lookup: { 34: "İstanbul", 63: "Şanlıurfa" }
