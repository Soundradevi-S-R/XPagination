import React from "react";

function PaginateData({currentPgNum,prevVal,nextVal}){

    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    //     return data.slice((page_number - 1) * page_size, page_number * page_size);


         return(<>
         <button className="button" onClick={prevVal}>
            Previous
         </button >
         <span className="button">
            {currentPgNum}
         </span>
         <button className="button" onClick={nextVal}>
            Next
         </button>
         
         </>);
    
}
export default PaginateData;