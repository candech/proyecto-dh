import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td>
                    <td>{props.email}</td>
                    {/* <td>
                        <ul>
                            {props.Tipos.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td> */}
                    <td>{props.type.label}</td>
                </tr>
            )
    }
    
        

export default ChartRow;