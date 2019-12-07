import React from "react";
import  { fetchGridData }  from '../api'
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { columnDefinitions } from '../shared';
class DefaultGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		columnDefs: columnDefinitions,
		rowData: []
    };
  }
  
  getGridData = async () =>{
	await fetchGridData().then((Response)=>{
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
            onGridReady={this.onGridReady}
            rowData={this.state.rowData}
          />
		  
        </div>
      
    );
  }
}

export default DefaultGrid;