import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import { convert } from 'html-to-text'
import axios from 'axios'
import extractor from '../utils/extract'
import './App.css'
import HeroLayout4 from '../ui-components/HeroLayout4'
import StandardCard from '../ui-components/StandardCard'

import Icons from '../ui-components/Icons'
import "@aws-amplify/ui-react/styles.css"
import { ComponentPropsToStylePropsMap, withAuthenticator } from "@aws-amplify/ui-react"
import NavBar from '../ui-components/NavBar'
import { convertToSpeech, playAudio, saveToS3 } from '../utils/helpers'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import music from './a.mp3'
import ReviewCard from '../ui-components/ReviewCard'
import getDate from '../utils/getDate'
import { createPodcast, updatePodcast, deletePodcast } from './graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';


function App({user, signOut}) {
  const articleUrl  = useRef();
  const [extractedData, setExtract] = useState()
  const [src,setSrc]= useState("");

let url ='https://www.threado.com/resources/writing-their-legacy-how-did-hashnode-give-a-voice-to-the-developer-community'
//  const text =  axios.get(url).then((res)=>{
//   const html = res.data
 

//   const input = 'https://townhall.hashnode.com/introducing-audio-blogs-on-hashnode-now-listen-to-articles-automatically'
//   extract(input,{ descriptionLengthThreshold: 12000000,descriptionTruncateLen:120000000})
//     .then(article => console.log(article.description))
//     .catch(err => console.error(err))
 
//   let data = extractor("C:\Users\abc\Desktop\react\speakAloud\index.html")
//   console.log(data)

// const text = convert(html, {
//   wordwrap: 130,
//   formatters: {
//     // Create a formatter.
//     'fooBlockFormatter':  function formatParagraph (elem, walk, builder, formatOptions) {
//       builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
//       walk(elem.children, builder);
//       builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
//     }

   
//   },
//   selectors: [
//     // Assign it to `foo` tags.
//     {
//       selector: 'p',
//       format: 'fooBlockFormatter',
//       options: { leadingLineBreaks: 1, trailingLineBreaks: 1 }
//     }
//   ]
// });
// setExtract(text)
//  }) 

const SuccessMessage = ()=>{
  return <div style={{display:"flex", alignItems:'center'}}>
    <h3 style={{color:'#43B0ED',paddingRight:10}}>Done  </h3>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#43B0ED" className='svg-icon'>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
  </div>
}

function blobToDataURL(blob, callback) {
  var fileReader = new FileReader();
  fileReader.onload = function(e) {callback(e.target.result);}
  fileReader.readAsDataURL(blob);
}

let podcastProps;
const  [s3Url, setS3Url] = useState();

const saveToLib =async ()=>{
if(!extractedData || !s3Url)
  return null

podcastProps = { title: extractedData.title, user: user.attributes.name, s3Url: s3Url, description:extractedData.text,imageUrl:extractedData.images[0],date: extractedData.date_published || getDate(), blogUrl: extractedData.url};
let mutation = await API.graphql(graphqlOperation(createPodcast, {input: {...podcastProps}}));
// console.log(saveToS3(recordingOriginal),"=====",mutation)

console.log(mutation)

}
async function extract(){ 

    if(!extractedData)
      return null;
  
    let audio = new Audio();
    const recordingOriginal = await convertToSpeech(extractedData.text.slice(0,3000)); 
    if(recordingOriginal && recordingOriginal.speech.url){
      setSrc(recordingOriginal.speech.url);
      console.log(typeof recordingOriginal.speech.url, typeof recordingOriginal.audioStream)

    }
    let blob1 = new Blob([new Uint8Array(recordingOriginal.audioStream)],{type:'audio/mp3'})

    await blobToDataURL(blob1, (res)=>{
      console.log(res)
      setS3Url(res)

    })
  
    console.log("extract renedered ", recordingOriginal, source,mutation)
  
}

const [showMusicPlayer,setShowMusicPlayer] = useState(false); 

const MusicPlayer = ()=>{

 return <>
 <div className="music-player">
 { src && extractedData.images &&
 
   <ReactJkMusicPlayer preload={false} defaultPosition={{top:'80%', left:'80%'}}	 audioLists={[{
    name: extractedData.title,
    cover:
    extractedData.images[0],
    musicSrc:
    src,
    // support async fetch music src. eg.
    // musicSrc: async () => {
    //   return await fetch('/api')
    // },
  },]}
/>
}
</div>
</> 
}
let d = new Date().getDate();
useEffect(()=>{
  extract();
},[extractedData])
  return (
    <div className="App">
      <NavBar user={user} signOut={signOut}></NavBar>
      <HeroLayout4 setExtract={setExtract} ></HeroLayout4>
    {extractedData &&   <ReviewCard saveToLib={saveToLib} setShowMusicPlayer={setShowMusicPlayer} title={extractedData.title} description={extractedData.text} date={extractedData.date_published || getDate()} imageUrl={extractedData.images[0]}></ReviewCard> }
      <StandardCard></StandardCard>
      {showMusicPlayer &&<MusicPlayer></MusicPlayer>}
      <Icons type="Play"></Icons>
    </div>
  )
}

export default withAuthenticator(App)
