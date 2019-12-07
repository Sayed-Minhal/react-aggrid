import React from "react";
import  { fetchGridData }  from '../api'
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

class ThemedGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          field: "athlete",
          minWidth: 150,
		  headerHeight:170,
          filter: "agTextColumnFilter"
        },
        {
          field: "age",
          minWidth: 90
        },
        {
          field: "country",
          minWidth: 120
        },
        {
          field: "year",
          minWidth: 90
        },
        {
          field: "date",
          minWidth: 110
        },
        {
          field: "gold",
          minWidth: 100,
          filter: false
        },
        {
          field: "silver",
          minWidth: 100,
          filter: false
        },
        {
          field: "bronze",
          minWidth: 100,
          filter: false
        },
        {
          field: "total",
          minWidth: 100,
          filter: false
        }
      ],
      sideBar: "filters",
      rowData: []
    };
  }
  
  getGridData = async () =>{
	const data = await fetchGridData().then((Response)=>{
		this.gridApi.setRowData(Response.data);
	});
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
	this.getGridData();
  };  

  render() {
    return (
        <div
          id="myGrid"
          style={{
            height: "500px",
            minWidth: "100%"
          }}
          className="ag-theme-material"
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={{...this.state.defaultColDef}}
            sideBar={this.state.sideBar}
            onGridReady={this.onGridReady}
            rowData={this.state.rowData}
          />
        </div>
      
    );
  }
}

export default ThemedGrid;