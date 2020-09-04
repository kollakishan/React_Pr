import React from 'react';
import './List.css';


const List = props => {

    return <div className = 'list_style'>
        {
            props.sillys.map((silly)=>{
                return <li> 
                    {
                    silly.text
                    },{silly.id}</li>
            })
        }
    </div>
        
        
    
};

export default List;