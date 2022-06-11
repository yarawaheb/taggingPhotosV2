import './taggingView.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import TagBox from './components/TagBox';
import { BiHelpCircle } from 'react-icons/bi';
import UnassignedPhotos from './components/UnassignedPhotos';

export default function TaggingView() {
  let[fetching,setFeching]=useState(true)
  let[addingTag,setAddingTag]=useState(false)
  let[theNewTag,setTag]=useState({name:"",color:""})
  let[tags,setTags]=useState([{name:"",color:""}])
  let[firstTime,setFirstTime]=useState(true)
  let[isAllPhotos,setIsAllPhotos]=useState(true)
  let[allimageArray,setArray]=useState([{id:0,download_url:""}])

  useEffect(()=>{
      axios.get('https://picsum.photos/v2/list')
        .then(response => {
          setArray(response.data)
          setFeching(!fetching)
      });
  },[]);

  function newTag(theNewTag: { name: string; color: string }) {
    if(theNewTag.name===""||!(/^#[0-9A-Fa-f]{6}$/.test(theNewTag.color))){
      alert('unvalid tag');
    }
    else{
      if(firstTime){
        setTags([theNewTag]);
        setFirstTime(false)
      }
      else{
        setTags([...tags,theNewTag]);
      }
      let newObj={tagInfo:theNewTag,imgArr:[{imgId:0,imgUrl:""}]}
      matchingTags.push(newObj)
    }
}
  return fetching?<img src='./loading.gif' alt="" />:(
    <div className='allPage'>

      <div className='left'>
        <button onClick={()=>{setIsAllPhotos(!isAllPhotos)}} className={isAllPhotos?'allClicked':'allNotClicked'}>All photos</button>  
        <button onClick={()=>{setIsAllPhotos(!isAllPhotos)}} className={isAllPhotos?'unssignedNotClicked':'unssignedClicked'}>Unassigned photos</button>
        <div className='topLeft'>
          {isAllPhotos?allimageArray.map((curr,i)=>{
              return <Card key={i} photo={{url:curr.download_url,id: curr.id}} ></Card>
          }):<UnassignedPhotos allimageArray={allimageArray}/>}
        </div>
        
      </div>
      <div className='right'>
        <div className='sideBar'>available tags
          {tags[0].name===""? <span className='noTags'>create your first tag</span>:
              tags.map((curr,i)=>{
                  return <TagBox case={'available'} key={i} tag={curr} photo={{imgUrl: '',imgId: 0 }}  />
              })
          }
        </div>
        <div className='sideBarBottom'>
          {addingTag?<div className='addingNewTag'>
            <input className='labelTagInput' type="text" placeholder='Label' onBlur={(e)=>{setTag({...theNewTag,name:e.target.value})}}/>
            <div className='colorPicker'>
              <input type="text" placeholder='Hex color' onBlur={(e)=>{setTag({...theNewTag,color:e.target.value})}}/>
              <a href="https://www.w3schools.com/colors/colors_picker.asp?colorhex=ff0000" target="_blank"><BiHelpCircle/></a>
            </div>
            <button className='addTagBtn' onClick={()=>{newTag(theNewTag);setAddingTag(!addingTag)}}>add</button>
          </div>:""}

          <button className='newTagBtn' onClick={()=>{setAddingTag(!addingTag);setAddingTag(!addingTag)}}>{!addingTag?"New tag":"cancel"}</button>
        </div> 
      </div>
    </div>
  )
}

//array of tags
export let matchingTags=[{tagInfo:{name:"",color:""},imgArr:[{imgId:0,imgUrl:""}]}]
export let signedPhotos=[-1]



