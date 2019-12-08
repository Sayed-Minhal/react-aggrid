export const columnDefinitions = [
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
      ];
	 
	 export const navBar = [
	 {path:"/", label:"Default Grid"},
	 {path:"/themed", label:"Themed Grid"},
	 {path:"/columnfunctions", label:"Column Functions"}
	 ]