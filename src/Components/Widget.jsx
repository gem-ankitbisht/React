import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Widget(props){
    const widgetHeader = props.data;
    const tableHeader = () =>{
        if(widgetHeader.length === 0) return null;

        const columns = Object.keys(widgetHeader[0]);
        return columns.map((column) => <th key={column}>{column}</th>)
    };

    const generateTableRows = () => {
        return widgetHeader.map((item, index) => {
            const rowData = Object.values(item);
            return(
            <tr key={index}>
                {rowData.map((value,subIndex) => (
                    <td key={subIndex}>{value}</td>
                ))}
            </tr>
            );
        });
    }
    return(
        <div className="col-md-6">
            <div className="card widget">
            <h1>{props.Name}</h1>
            <table className="table table-striped table-bordered ">
                <thead>
                    <tr>{
                        tableHeader()
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        generateTableRows()
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Widget;