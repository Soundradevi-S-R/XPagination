
import './App.css';
import React,{useEffect,useState} from "react";
import EmployeeTable from "./Components/EmployeeTable.jsx";
import PaginateData from "./Components/PaginateData.jsx";


function App() {

  const [empData,setEmpData] = useState([]);
  const [loading,setOnLoading]=useState(false);
  const [currentPgNum, setCurrentPgNum] = useState(1);
  const page_size=10;
  const totalEmployees = empData.length;


  useEffect(()=>{
      setOnLoading(true);
      apiCall();

  },[]);


  async function apiCall(){
      const apiURL ="https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
      
      try{
          await fetch(apiURL)
          .then((response) => {
              return response.json();
          })
          .then((data)=>{
              console.log(data);
              setEmpData(data);
              setOnLoading(false);
          })        
       }catch(error){
          setOnLoading(true);
          console.error(error.message);
          alert("failed to fetch data");
      }  
   }
 
     //  page numbers usually start with 1, so we reduce 1 in the first argument to start from 0 count 
    //     return data.slice((page_number - 1) * page_size, page_number * page_size);

   let dataSliced = empData.slice((currentPgNum-1) * page_size, currentPgNum * page_size );
   const lastPageNo = Math.ceil(totalEmployees/page_size);
   console.log("lastpage >>>>" ,lastPageNo);
  
   let prevPage = () =>{    
    if(currentPgNum > 1){
        setCurrentPgNum((prevState) => prevState -1 );
    }   
   }
   
   let nextpage = () =>{
    if(currentPgNum < lastPageNo){
        setCurrentPgNum((prevState) => prevState +1 );
    }   
   }

  return (
    <div className="App">
        <EmployeeTable data={dataSliced} loading={loading} />
        <PaginateData currentPgNum={currentPgNum} prevVal={prevPage} nextVal={nextpage} />
    </div>
  );
}

export default App;
