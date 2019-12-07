import React from "react";
import  { fetchGridData }  from '../api'
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { columnDefinitions} from '../shared';

class ThemedGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		columnDefs: columnDefinitions,
		sideBar: "filters",
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
            minWidth: "100%"
          }}
          className="ag-theme-material"
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

export default ThemedGrid;