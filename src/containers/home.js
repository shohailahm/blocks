import React,{useState,useEffect} from 'react';
import './home.css';
import axios  from 'axios';
import MyTable from '../components/table';
import MyModal from '../components/Modal';
import { Spin } from 'antd';

function Home() {
const [loading,setLoading]=useState(true);
const [blocks,setBlocks]=useState([]);
const [modalState,setModal]=useState(false);
const [hashed,setHash]=useState(0);

useEffect(() => {
    axios.get('http://localhost:8080/api/blocks')
    .then((res)=>{
       setBlocks(res.data.data);
       console.log(res.data);
       setLoading(false);
    })
    .catch(err=>{
       console.log(err);
    })
 },[]);


 function modalShow(hash){
     setHash(hash);
     setModal(true);
 }




  return (
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',marginTop:16}}>
          <h3 style={{alignSelf:'flex-start',paddingLeft:'5%',paddingBottom:10}}>Latest Blocks</h3>
        {!loading?
        <div className="Home">
            {modalState && <MyModal show={modalState} hash={hashed} setModal={setModal}/>}
          <MyTable data={blocks} showModal={modalShow} />
        </div>
        :
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'100%',marginTop:16}}>
          <Spin />
        </div>
        }
      </div>
  );
}

export default Home;
