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
import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from './graphql/queries';

const todos = await API.graphql(graphqlOperation(listTodos));

function App({user, signOut}) {
  const articleUrl  = useRef();
  const [extractedText, setExtract] = useState("APIs are the communication pathways through which programs talk to each other. They have become a powerful tool for abstracting the underlying implementations of a software and just expose what is needed for the caller to interact with. APIs come with certain promises, like repeatability of request/response structures (Contracts), predictable speed of receiving the response (SLAs) and logical outcomes (Status codes). Here are the 4 expectations from the API: Predictable & Fast Latency APIs are written for specific purpose and hence, that purpose must be fulfilled in a predictable time period. The faster and more predictable your APIs are, the better the experience of the caller. Runtime exceptions will cause your code to exit and throw 5xx errors to the client, which will have to be overridden using custom middleware.This usually means some logical change has gone inside the system that has broken the API. Some obvious reasons could be: a) For read-only APIs, it could be due to underlying data being corrupted or missing. How to fix: Check what process inserts/updates that data in the storage. Putting logs in both the insertion and the read API can tell which part isn't working right. If you don't have logs, try and make the API call for reading data which exists and should have been returned. The result of this test can help you isolate the problem. b) Some feature flag could have caused misbehaviour in the APIs. Lack of proper testing can leave bugs in the new feature or unintended consequences in existing product flows. How to fix: Should **look to disable the feature or rollback the release entirely to remediate quickly. c) Although unlikely, it could be caused by bad data coming in from your API caller due to an issue at their end but is not causing any exception. How to fix: There should be good validations set up on request data and any anomalies in it must be notified to the caller through 4xx status codes or logged for being noticed. A very useful way to identify root cause for incorrect API behaviour is to compare the current API traces with the past. You should be able to see some differences in the spans and their latency and can tell you what code flow isn't being taken anymore or is being taken now and that can help you find a pattern of the change that is happening underneath. Investigation Strategy As you start investigating, what do you check first and what next? Here's the mental model that I follow to resolve any issue related to an API latency. How do you debug an API? Tell us about your debugging strategies in the comments below!")
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


async function extract(){ 

    let audio = new Audio();

    const recordingOriginal = await convertToSpeech(extractedText);
    if(recordingOriginal && recordingOriginal.speech.url){
      setSrc(recordingOriginal.speech.url);
      console.log(typeof recordingOriginal.speech.url, typeof recordingOriginal.audioStream)
    //  console.log(saveToS3(recordingOriginal),"=====")
    
    audio.src= src;
    }
    let blob1 = new Blob([new Uint8Array(recordingOriginal.audioStream)],{type:'audio/mp3'})

    blobToDataURL(blob1, (res)=>{
      console.log(res)
    })
    console.log("extract renedered ", recordingOriginal, source,todos)
  
}

const MusicPlayer = ()=>{
  
 return <>
 <div>
 { src &&
 <div>
<SuccessMessage></SuccessMessage>

   <ReactJkMusicPlayer preload={false} autoPlay={false}	 audioLists={[{
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc:
    src,
    // support async fetch music src. eg.
    // musicSrc: async () => {
    //   return await fetch('/api')
    // },
  },]}
/>,
</div> }
</div>
</> 
}

useEffect(()=>{
  extract();
},[])
  return (
    <div className="App">
      <MusicPlayer></MusicPlayer>
      <NavBar user={user} signOut={signOut}></NavBar>
      <HeroLayout4 ></HeroLayout4>
      <ReviewCard></ReviewCard>
      <StandardCard></StandardCard>

      <Icons type="Play"></Icons>
    </div>
  )
}

export default withAuthenticator(App)
