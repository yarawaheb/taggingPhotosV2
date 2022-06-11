import { useEffect, useState } from 'react'
import { signedPhotos } from '../TaggingView'
import Card from './Card'

export default function UnassignedPhotos(props:{allimageArray:{id:number,download_url:string}[]}) {

  let[unssignedImageArray,setUnssignedArray]=useState([{id:0,download_url:""}])

  useEffect(()=>{
      let tempArr=[]
      for (let i = 0; i < props.allimageArray.length; i++) {
        if(!signedPhotos.includes(props.allimageArray[i].id)){
          tempArr.push(props.allimageArray[i])
        }
      }
      setUnssignedArray(tempArr)
  },[])

  return (
    <div className='topLeft'>
      {unssignedImageArray.map((curr,i)=>{
          return <Card  key={i} photo={{url:curr.download_url,id: curr.id}}  ></Card>
      })}
    </div>
  )
}

