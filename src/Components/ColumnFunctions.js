import React from "react";
import  { fetchGridData }  from '../api'
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { columnDefinitions} from '../shared';
import  SimplePopover from '../components/common/PopOver';


class ColumnFunctions extends React.Component {
  constructor(props) {
    super(props);
	columnDefinitions.map(col=>{
		col.filter=true;
		col.resizable=true;
		col.sortable=true;
	});
    this.state = {
		columnDefs: columnDefinitions,
		rowData: [],
		columns:null
    };
  }
  
  toggleColumn = (item)=>{
	  const col = this.gridColumnApi.getColumn(item.colId);
	  console.log(col);
	  const cVisible = col.visible;
	  this.gridColumnApi.setColumnVisible(col, !cVisible);
	  this.setState({columns :this.gridColumnApi.getColumnState()});
  }
  
  getGridData = async () =>{
	await fetchGridData().then((Response)=>{
		this.gridApi.setRowData(Response.data);
	});
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
	this.setState({columns :this.gridColumnApi.getColumnState()});
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
		<h1>Filters, sorting, resize and toggle columns functionality for all columns</h1>
		<SimplePopover toggleColumn={this.toggleColumn} columns={this.state.columns} />
          <AgGridReact
            columnDefs={this.state.columnDefs}
            onGridReady={this.onGridReady}
            rowData={this.state.rowData}
          />
        </div>
      
    );
  }
}

export default ColumnFunctions;