import React from "react";
import  { fetchGridData }  from '../api'
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class DefaultGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          field: "athlete",
          width: 150,
		  headerHeight:170,
          filter: "agTextColumnFilter"
        },
        {
          field: "age",
          width: 90
        },
        {
          field: "country",
          width: 120
        },
        {
          field: "year",
          width: 90
        },
        {
          field: "date",
          width: 110
        },
        {
          field: "gold",
          width: 100,
          filter: false
        },
        {
          field: "silver",
          width: 100,
          filter: false
        },
        {
          field: "bronze",
          width: 100,
          filter: false
        },
        {
          field: "total",
          width: 100,
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
            width: "100%"
          }}
          className="ag-theme-balham"
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

export default DefaultGrid;