import axios from 'axios';

export const fetchGridData=()=>{
	return axios.get("https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json");
}

export const postGridData=() =>  {}

