import React from 'react';


//  variabel items yg di oper dr App berisi list data item
// kemudian data items diloop menggunakan map
function List(props){
    return(
        <ul>
            {
                props.items.map((item,index) => <li key={index}>{item}</li>)
            }
        </ul>
    )
}

export default List;