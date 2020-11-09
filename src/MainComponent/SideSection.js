
import React from 'react'
import "./sideSection.css"
import {Redirect} from "react-router-dom"
import { useHistory } from "react-router-dom";
function SideSection() {
    let history = useHistory();

    const Search=(selection)=>{
        
     selection=='h'?history.push("/search/cat/History"):
     (
         selection=='s'?history.push("/search/cat/Science"):
         selection=='b'?history.push("/search/cat/Biography"): history.push("/search/cat/Novel")
     
         
     )
    }
    return (
        <div className="sideSection">
            <div className="sideSection__list">
                <div className="sideSection__category" onClick={()=>Search('h')}>
                      History
                </div>

                <div className="sideSection__category" onClick={()=>Search('s')}>
                      Science
                </div>

                <div className="sideSection__category" onClick={()=>Search('r')}>
                      Novel
                </div>

                <div className="sideSection__category" onClick={()=>Search('b')}>
                Biography
                </div>
            </div>
        </div>
    )
}

export default SideSection
