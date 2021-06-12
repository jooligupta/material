import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import MaterialTable from "material-table";



const useStyles = makeStyles((theme) => ({
   
    
}));
function MultipleActions() {
    return (
      <MaterialTable
        title="Presents"
        columns={[
          { title: 'S.No', field: 'sno'},
          { title: 'ModuleName', field: 'modulename' },
          { title: 'Description', field: 'description' },
          {
              title:'Time',field:'time',},
              
        
        ]}
        data={[
          { sno: 1, modulename: 'Survey List',description:'add filter in the survey overview and working in the survey',time:'09:40:00 AM -07:00 PM'  },
          { sno: 2, modulename: 'Survey List',description:'add filter in the survey overview and working in the survey',time:'09:40:00 AM -07:00 PM'  },
        ]}        
        actions={[
            {
              icon: 'save',
              tooltip: 'Save User',
              onClick: (event, rowData) => alert("You saved " + rowData.name)
            },
            rowData => ({
              icon: 'delete',
              tooltip: 'Delete User',
              onClick: (event, rowData) =>alert("You want to delete " + rowData.name),
              disabled: rowData.birthYear < 2000
            })
          ]}
          options={{
            actionsColumnIndex: -1
          }}
      />
    )
  }

export default function Listdata(){
    const classes = useStyles();
    return(
      
       <div style={{textAlign:'center'}}>
           <h2>Reports</h2>
     
       
    {MultipleActions()}
           
    </div>
    
    )
}