import "./CustomerMain.scss";

import React from "react";
import MaterialTable from "material-table";
import { resolveSoa, lookup } from "dns";

export default function CustomerMain({ CustomersData, UseCreateCustomer }) {
  const [state, setState] = React.useState({
    columns: [
      { title: "FirstName", field: "first_name" },
      { title: "MiddleName", field: "middle_name" },
      { title: "LastName", field: "last_name" },
      { title: "Email", field: "email" },
      { title: "Password", field: "password" },
      
    ],
    data: CustomersData.map(
      ({ first_name, last_name, middle_name, email, password}) => {
        console.log("the mapping started")
        console.log("the customers properties" ,first_name,
        last_name,
        middle_name,
        email);
        return {
          first_name,
          last_name,
          middle_name,
          email,
          password
      
        };
      }
    )
  });

  console.log("I'm WORKING HERE", CustomersData);
  console.log("state", state.data)
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
                UseCreateCustomer({newData})
                console.log("check resolve",resolve)
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
