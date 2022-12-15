import axios from "axios";
import { GET_PRODUCT,Loading,Filter } from "./ProdactionTypes";

export const getdata=(page=1,sort="discounted_price",order="",cat="Mens")=>async(dispatch)=>{

    dispatch({type:Loading})

    try{
         let res=await axios.get(`http://localhost:8080/${cat}?_page=${page}&_limit=10&_sort=${sort}&_order=${order}`);

         dispatch({type:GET_PRODUCT,payload:res.data});
    }
    catch(e){
        console.log(e);
    }

}


export const filterdata=(val,page,sort="discounted_price",order="")=>async(dispatch)=>{

    dispatch({type:Loading})

    let res=await axios.get(`http://localhost:8080/Mens?_page=${page}&_limit=30&_sort=${sort}&_order=${order}`);

    let filtered=res.data.filter((el)=>{
       
       if( el.subtitle!==null && el.subtitle.includes(val)){
           return el;
       }
    
    }

    )

    dispatch({type:Filter,payload:filtered})

    
}