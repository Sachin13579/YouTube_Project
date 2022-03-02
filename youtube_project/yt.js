 let roll= document.getElementById("searchresult");
let API_key='AIzaSyCfnqyK10mzbg2Kyp9fprRVKsMQZ3RBuRk'
// https://www.googleapis.com/youtube/v3/search?key=${API_key}&Q=${userinput}&type=video&maxResults=25


 const searchvideo = async ()  =>{
     try {
         let userinput = document.getElementById("searchterm").value
     let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${userinput}&key=${API_key}&type=video&maxResults=20&part=snippet`);
     let data = await res.json();
     let videolist=data.items;
    
     displayData(videolist);
         
     } catch (err) {
         console.log(err)
         
     }
     
 }

//  let displaydata = (data) =>{

//  }
/* <iframe width="1326" height="480" src="https://www.youtube.com/embed/0o8kENRRQ0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
  
 const displayData = (P) => {

    roll.innerHTML=""

    P.forEach((video) => {
        const
        {id:{videoId},}=video;
        console.log(videoId)

        let div = document.createElement("div")
        let iFrame  = document.createElement("iframe")
        iFrame.src=`https://www.youtube.com/embed/${videoId}`

        iFrame.setAttribute("allowfullscreen", true);
        div.append(iFrame)
        roll.append(div)

        // searchresultsdiv.append(videocard)
        
    });

    
 }
