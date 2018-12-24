import React, { Component } from 'react';

class Footer extends Component{



    

    render(){
        const {length, onItemFilterAll, onItemFilterActive, onItemFilterComplete, onItemCleanComplete} = this.props;
        return(
            <ul>
                <li>
                    Số item : <span>{length}</span>
                </li>
                <li>
                    <button onClick={onItemFilterAll} value="all">All</button>
                </li>
                <li>
                    <button onClick={onItemFilterActive} value="active">Active</button>
                </li>
                <li>
                    <button onClick={onItemFilterComplete} value="completed">Complete</button>
                </li>
                <li>
                    <button onClick={onItemCleanComplete}>Clean Complete</button>
                </li>
            </ul>
        )
    }
}
export default Footer;