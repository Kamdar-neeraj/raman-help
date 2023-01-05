import Link from "next/link";
import useSWR from "swr"
import { useEffect, useState } from "react";

const fetcher=(...args)=>fetch(...args).then((res)=>res.json())
export default function About() {
    // const{data,error}=useSWR("api/about",fetcher)

    // const[data,setData]=useState(null)
    // const[isLoading,setIsLoading]=useState(false)
    // useEffect(()=>{
    //     setIsLoading(true)
    //     fetch("api/about")
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setData(data);
    //         setIsLoading(false)
    //     })
    // },[]);

    // if(error){
    //     return<p>error featching data</p>
    // }
    // if(!data){
    //     return<p> no data found </p>
    // }
    // return(
    //     <div>
    //         <h1>My name is {data.name}</h1>
    //     </div>
    // )

  return (
    <div>
      <h1>About Me</h1>

      <div>
        <Link href={{ pathname: "/about" }}>
         Home
        </Link>
        <Link
          href={{
            pathname: "/blog/[slug]",
            query: { slug: "12345" },
          }}
        >
          My Blog Post
        </Link>
      </div>
    </div>
  );
}