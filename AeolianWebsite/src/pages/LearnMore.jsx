import React from "react";
import '../styles/learnMore.css'
import LearnUpper from "../layout/learnMore/UpperContainer";
import HowWorks from "../layout/learnMore/HowWorks";


function LearnMore () {
    return ( <div className="learnMore-container">
       <LearnUpper/>
       <HowWorks/>
    </div> );
}
 
export default LearnMore;