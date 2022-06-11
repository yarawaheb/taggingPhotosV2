import { useState } from 'react'
import {BsFillTagsFill} from 'react-icons/bs'
import {MdOutlineCancel} from 'react-icons/md'
import { matchingTags } from '../TaggingView';
import './card.css'
import TagBox from './TagBox';
export default function Card(props:{photo: { url: string ,id:number}}) {

  let[matchingTag,setMatching]=useState(false)
  let[currTags,setCurrTags]=useState([{name:"",color:""}])

  function updateTags() {
    let temp=[]
    for (let i = 0; i < matchingTags.length-1; i++) {
      temp[i]=matchingTags[i+1].tagInfo;
    } 
    setCurrTags(temp);
   }
  
  return (
    <div className='cardLayer'>
      <img className='imageCard' src={props.photo.url} alt="" />
      <ul className='cardButtom'>
        <span className='cardId'>{props.photo.id}</span>
        <span className='matchingIcon' onClick={()=>{setMatching(!matchingTag);updateTags()}}><BsFillTagsFill/></span>
      </ul>
      {matchingTag?
        <div className='matchingWindow'>
          <span className='exit' onClick={()=>setMatching(!matchingTag)}><MdOutlineCancel/></span>
          {currTags.map((curr,i)=>{
            return <TagBox key={i} tag={curr} case={'matching'} photo={{imgUrl: props.photo.url, imgId: props.photo.id}}  />
          })}
        </div>
        :null
      }
    </div>
  )
}



