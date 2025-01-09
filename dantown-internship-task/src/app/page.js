'use client'
import Image from "next/image";

import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    document.body.style.zoom = "60%";
  },[])




  return (


<div className="task-manager">
  <div className="left-bar">
    <div className="upper-part">
      <div className="actions">
        <div className="circle"></div>
        <div className="circle-2"></div>
      </div>
    </div>
    <div className="left-content">
      <ul className="action-list">
        <li className="item active">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-inbox"
            viewBox="0 0 24 24">
            <path d="M22 12h-6l-2 3h-4l-2-3H2" />
            <path
              d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
          </svg>
          <span style={{padding:'0px 10px'}}>Home</span>
        </li>
        <li className="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-star">
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          <span> Timeline</span>
        </li>
        <li className="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-calendar"
            viewBox="0 0 24 24">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <path d="M16 2v4M8 2v4m-5 4h18" />
          </svg>
          <span>Community</span>
        </li>
        <li className="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-hash">
            <line x1="4" y1="9" x2="20" y2="9" />
            <line x1="4" y1="15" x2="20" y2="15" />
            <line x1="10" y1="3" x2="8" y2="21" />
            <line x1="16" y1="3" x2="14" y2="21" /></svg>
          <span>Discover</span>
        </li>
        <li className="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-users">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
          <span>Friends</span>
        </li>
        <li className="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-trash"
            viewBox="0 0 24 24">
            <path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          <span>Bookmarks</span>
        </li>

        <li className="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-trash"
            viewBox="0 0 24 24">
            <path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          <span>Events</span>
        </li>


        <li className="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-trash"
            viewBox="0 0 24 24">
            <path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          <span>Discussion</span>
        </li>
      </ul>
      <ul className="category-list">

      <h2 style={{marginRight:190,  marginTop:20, fontSize:15, fontWeight:800, color:'gray'}}>Category</h2>
        <li className="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-users">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
        
          <span>Sports</span>
        </li>
        <li className="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="red"
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-sun"
            viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
          <span>Gaming</span>
        </li>
        <li className="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-trending-up">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" /></svg>
          <span>Music</span>
        </li>
        <li className="item">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="feather feather-zap">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
          <span>Tech & Science</span>
        </li>
      </ul>
    </div>
  </div>
  <div className="page-content">
    <div style={{display: 'flex', justifyContent: 'space-between',  alignItems: 'center', textAlign:'center'}}>


    <div className="header">Hey Dustin! <br/>   <p style={{fontSize:'10px',marginLeft:30}}>Welcome Back, nice to see you again</p></div>
   


  



    <div id="search-wrapper">

    <li className="search-icon">

        
    <svg className="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" width="20" height="20"  viewBox="0 0 19.9 19.7"><g className="search-path" fill="none" stroke="black"><path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g></svg>
         
        </li>

<input type="text" id="search" placeholder="Search here.."/>


</div>
      
    </div>
   
   
    <div className="tasks-wrapper">


      <div className="image-card" style={{display: 'flex', justifyContent: 'space-evenly', gap:20}}>

    


    <div className="containers1">
   <div className="container__profile">
  
    <div className="container__profile__text">
     <h2>Real wild cyclist</h2>
     <p>we are the wildest cyclist</p>
    </div>
   </div>


   
  </div>


  <div className="containers2">
   <div className="container__profile">
  
    <div className="container__profile__text">
     <h2>Yoga Forces</h2>
     <p>Welcome to the biggest</p>
    </div>
   </div>


   
  </div>



  <div className="containers3">
   <div className="container__profile">
  
    <div className="container__profile__text">
     <h2>Skater Boys</h2>
     <p>The best skates of Skaters</p>
    </div>
   </div>


   
  </div>


  </div>







  <div className="table-container">
  <ul className="responsive-table">
    <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <h2 style={{fontSize:15}}>Friend's Rank</h2>
    <div className="circle" style={{marginRight:40, background:'gray'}}></div>

    </div>

    
    <li className="table-header">
      <div className="col col-1">Rank</div>
      <div className="col col-2">Name</div>
      <div className="col col-3">Category</div>
      <div className="col col-4">Points</div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="Rank">1</div>
      <div className="col col-2" data-label="Name">   
        
         <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"alt="member"/>Mamang Ironmen
         
          <svg style={{width:25, height:20, marginLeft:30,}} xmlns="http://www.w3.org/2000/svg"  stroke="yellow" viewBox="0 0 576 512">
          <path d="M576 136c0 22.09-17.91 40-40 40c-.248 0-.4551-.1266-.7031-.1305l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 
          0-28.72-11.06-31.48-26.27L40.71 175.9C40.46 175.9 40.25 176 39.1 176c-22.09 0-40-17.91-40-40S17.91 96 39.1 96s40 17.91 40 40c0 8.998-3.521
           16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 
          86.34 247.1 72C247.1 49.91 265.9 32 288 32s39.1 17.91
           39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136C496 113.9 
           513.9 96 536 96S576 113.9 576 136z"/>
          </svg>
         
         </div>
      <div className="col col-3 skaters" > <span style={{fontSize:50, color:'black', marginTop:-30, marginRight:10 }}>.</span>Skaters</div>
      <div className="col col-4" data-label="Points">2.140</div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="Rank">2</div>
      <div className="col col-2" data-label=" Name">   
        
        <img  src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"alt="member"/>Ariana Grande
        
        
        </div>


      <div className="col col-3 arian"> 
        <span  style={{fontSize:50, color:'black', marginTop:-30, marginRight:10}}>.</span>Cyclist</div>
      <div className="col col-4" data-label="Points">1.814</div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="Rank">3</div>
      <div className="col col-2" data-label="Name">   
        
        <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"alt="member"/>Trent Alexander Arnold
        
        
        </div>
      <div className="col col-3 arian"> <span style={{fontSize:50, color:'black', marginTop:-30, marginRight:10}}>.</span>Skaters</div>
      <div className="col col-4" data-label="Points">1.620</div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="Rank" >4</div>
      <div className="col col-2" data-label="Name">   
        
        <img src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"alt="member"/>Shakira Wakawaka
        
        
        </div>
      <div className="col col-3 yoga" > <span style={{fontSize:50, color:'black', marginTop:-30, marginRight:10}}>.</span>Yoga</div>
      <div className="col col-4" data-label="Points">1.280</div>
    </li>
  </ul>
</div>





    
   
    
     
    </div>





    
  </div>





  <div className="right-bar">
    <div className="top-part">

        <div style={{display:'flex',  justifyContent: 'space-between', alignItems: 'center', gap:20}}>


      <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="none" stroke="currentColor"
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-inbox"
            viewBox="0 0 24 24">
            <path d="M22 12h-6l-2 3h-4l-2-3H2" />
            <path
              d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
          </svg>

         
<div>

   <img  style={{width:25, height:25}} src='data:image/png;base64,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' alt=""/>
     <h4 className="notification-red" style={{backgroundColor:'red',  position:'absolute', top:38, right:214, borderRadius:'180px', padding:"0px 2px",}}>.</h4>
</div>
         

<div style={{display:'flex', gap:7, alignItems:'center'}}>
        <div className="count"></div>
        <h3>Janet Roy</h3>
        <img style={{width:14, height:14}}  src="data:image/png;base64,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" alt=""/>

        </div>


</div>


    </div>
    <div className="header">Chats <span style={{backgroundColor:'#daffe5', padding:"3px 7px", borderRadius:10, fontSize:12}}>14</span></div>
    <div className="right-content">



      <div className="task-box yellow">
        <div className="description-task">
        </div>
        <div className="more-button"></div>
        <div style={{display: 'flex', justifyContent:'space-between' }}>


        <div className="members">
          <img
            src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt="member"/>

            <div style={{marginLeft:10, fontSize:15}}>IronMen <br/>  <p style={{color:'gray', fontSize:10}}>When will the event be held?</p></div><br/>
           
         
        </div>


        <h4 style={{backgroundColor:'red', color:'white', borderRadius:'30px', alignItems:'center', padding:"5px 7px",  fontSize:15}}>1</h4>

        </div>
      
      </div>
    
      <div className="task-box yellow">
        <div className="description-task">
        </div>
        <div className="more-button"></div>
    


        <div className="members">
          <img
            src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt="member"/>

            <div style={{marginLeft:10, fontSize:15}}>Arian Grande <br/>  <p style={{color:'gray', fontSize:10}}>Alright Then, see you there</p></div><br/>
           
         
        </div>


      
      </div>


      <div className="task-box yellow">
        <div className="description-task">
        </div>
        <div className="more-button"></div>
     


        <div className="members">
          <img
            src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt="member"/>

            <div style={{marginLeft:10, fontSize:15}}>Arian Grande <br/>  <p style={{color:'gray', fontSize:10}}>Come on, Join to my party?</p></div><br/>
           
         
        </div>


      
      
      </div>
      <div className="task-box yellow">
        <div className="description-task">
        </div>
        <div className="more-button"></div>
      


        <div className="members">
          <img
            src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
            alt="member"/>

            <div style={{marginLeft:10, fontSize:15}}>Arian Grande <br/>  <p style={{color:'gray', fontSize:10}}>After That, you can see me?</p></div><br/>
           
         
        </div>

      </div>


      <div className="chat-container">

      <section className="chat">
        <div className="header-chat">

          <p className="name">IronMen</p>

          <img style={{width:15, height:15, cursor:'pointer'}} src='data:image/png;base64,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' alt=""/>         
        </div>
        <div className="messages-chat">
        <div  style={{backgroundColor:'#623ce8', color:'white', borderRadius:'30px', textAlign:'center', padding:'10px 10px', width:70, margin:'0px auto'}}> Today</div><br/>




        <div className="messages-chat">
          <div className="message">
          <div className="photo" style={{backgroundImage: "url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"}}> 
              <div className="online"></div>
            </div>
            <p className="text">When will the event hold ? </p>
          </div>
       
          <p className="time">10:22am</p>
          <div className="message text-only">
            <div className="response">
              <p className="text-response"> the event will hold Tomorrow at 4pm </p>
            </div>
          </div>
          <div className="message text-only">
         
          </div>
          <p className="response-time time">10:24am</p>
         
     
        </div>
       
   </div> 
        <div className="footer-chat" style={{marginTop:'30px', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <input type="text" className="write-message" placeholder="Type your message here"></input>
          <div style={{marginTop:-18,}}>
               <img style={{width:40, cursor:'pointer', height:40, marginLeft:30, marginTop:20}} className="icon send" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAD8/Pz09PTw8PDr6+va2trn5+e/v7/39/e7u7uBgYGRkZFsbGybm5vPz89DQ0NNTU2ysrI+Pj7JyckzMzOLi4sbGxsnJyegoKDe3t46Ojp5eXmmpqZGRkYiIiJpaWkPDw9ZWVlhYWE0NDRaWloSEhI6T1lkAAAGoUlEQVR4nO2dCWLiMAxFCUkIOwXCFqBAaef+RxzSTgdalkiyZDnG7wA1v/Gi1W40AoFAIBAIBAKBQCAQCARQdOIkSYtWkSZJ3NH+MawU+bZ/XM8W0SWL2frY3+aF9o8zJMmHg1n0mPfBME+0fyiJdLJZVog7s9xMUu0fjGM0r/p018zmI+2fDWW0Qav7ZpBr//hqWj2yvE8O85a2hEfEW/zkvGa2jbWF3KGgz87fbDJtMTcYjdn0lby5tu0w6yt5cWnXGb2y6/vU6Mp3zN5E9JW8ubAeO4bHQwU9dRt9IqqvZKKqL+PfYK4ZK07VoQV9JUMlfenUksAomqp4HvIr8BKF1Xi0KjCK9pb1ZTvLAqNoZ3XDaVvXV9K2J7CvIjCK+rYEDpQERtHAir6mjJkN47UpLzC2v8dcshP3/5M/qgKjaCEcXE2V9ZWI2jcuCBSVmGhr+4fYRI0X1YNbYSG03TTheQhpljKHhg1vF8pYQqCeJXMLAetGyxa9B7uNquNNPILZ08i09dyA11/UNUZvs+QUuNdWc5M9n0C7QSc4bOEpV4y1a7jMtxdtIXd55RFoK7JNgSUa7uJBcYbDk3LJHL2GwUB1dR/9xng/7WgrqMQ0hSqb4eWgZybQ7W3mCzP7VK4IgY83E4Ej7V8PwqQoZa3940Gs6QJz7d8OhF495a5B+hOyeYpdhUO1eCp1JWLttUajrZR5I26nBXacMkzLWGSKgXYmon/rVyA6XklIqGBDEYi3SP+H2hUmK8U63aJHuUgmFLYj5FuCQnxR+o90SWw3NDDDC2zhR/mdELI6WfFNDAS36Trl1bI3WfFOFGGQW0m9zvDAreUOWIEUr+JO2rJtp0oTa9dQDu67iVkrkxV7JFLGeJB6TizsrDiBJNf3cXK9Kz1ZcdOUlPGtKh8Qnqy4rDDp/11dIJFI5sqnGIExaQhQCYjgZMVU2XRJIwCLXFpS+dYuQiEtDgwu44llJivGrKG1gmIKlSYCYTyE9U1bhiiFpwOJf2eFL0RiIBhbbMa+s8JPRGIcglBOxztZV+BxifOHVDDIubPCi93eLSpsNFK2yfoOHpM4AL3ok2uyQsdDB0qNFZ42N5bJCr0MhpqQMSvc5dhZoSkafByRQ+GJiemlE9CY4lxLodG9KCVQB4raPGkusGEYDTgCB6FubN2Cp9ejS85bQrPBJl0Hs8F8kmem85UaDQAW1TYPBgq/hxpvVt3CoDiSNlkPsD9O9Cxu8vlJU1rZEmWywrwLgYLZ5bi3arfQvTz4yQqbNYINauhPis1gwbY6+Uqv0ycdgj9pF7O1w7LdVLMUz3Tfh3xSxGSFGaaEzKEZu89P+kgo2GaFZRHVitn2wwef4AP0J2AK/f+G/q/DOu+lsNOizuch7MT336aps10KG6nGvsUf4F+vr38Izc3U18eHpoH9j9P4H2vzP17qf8zb/7yFQu6JqQQFPCBxORAV8iW74flD/3PAFvP4rBVS8Dy+/7UYVuppBCoVEe6ZfE0UynMHgulIEK9rO/Bq+wJT1yZbmyhVSIupTZSsL5Vr20RFSYRqhEVbhVA1wjJ13sLtXrg6b4Fa/bZ0VzGypYQyxAOFNjrZcAJJpmm9emYoXrBu3xO6KZ8wxu3eNVvX8mIF8vQfWuzsxvcf+t9DSoh8a/YBU64YNOvltn3xAKWX2/9+fPxe832nwkFAQQW0y6LQ2W7FezGIKSFYgccZvbtNPmgCn+B+GscvFDxDv1qwHld9GV32VY+LokxuMa3HRzR6RND7O/ee4N5E/+++fIL7S/2/g9b1Y5/joQu3NxuWKizv7/N22bJ54RHoyCtPt2B7FsnV/ZTx6U7v37dw842SHadAJ48M5ndJvX8r6Anee3qCN7vcMlBF3l17grfz/H//0J1nkQTfk3XDQvX+qVVRgaeJqr0W5dbgN7HujroUF3g6NDTPxbGFd7kb/r+t3tCzUQVs0XvoeBrs3sQjMvsu8Y7ZH6zEdmBjb1lfw3Z4ijHoBCe1U1VZMhW2Y+5iKxrOFNmmkNmon3m1vcX8RH41qqzASzqyZV494wQoA5lcOcOb7gQ9M5LZVV+NykiYyfkdDqf0leS82+qHa/pKGEtLN66sv9/EW9NrH0qWWwt+PJ2WYYnRoefi9PyFwf0kA6suoAmjPv78mPZr8PUuibs9+KKc9bpOr727xPlwXxV8XO6HeT3VnWm1V/Pjenn4IeywXB/nqzahW8ldmnGSZkXRKoosTWI7cc9AIBAIBAKBQCAQCAQC/vAXQJSRBufR4XQAAAAASUVORK5CYII=" alt="" />
            </div>
        
            
        </div>
      </section>
 
  </div>

    </div>
  </div>
</div>


    
 
  );
}
