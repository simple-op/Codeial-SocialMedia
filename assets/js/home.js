{
    
    let createPost=function(){
    
    let postForm=$("#post-form");
    postForm.submit(function(e){
    e.preventDefault();

    $.ajax({
        type:"post",
        url:"/createPost",
       
        data:postForm.serialize(),
        success:function(data){
         if(data.data.posts)
            {   let postList=$("#posts"); 
                
                postList.prepend(appendPost(data.data.posts));
                deletePost(`#${data.data.posts._id}`);
                diasbleDefault(`#comment${data.data.posts._id}`);

                
                

            }
        },
        Error:function(err){
            console.log(err.responseText);
        }
    
    
       });
       });
}
        createPost();
  
      
        let appendPost=function(postData){
        
            
           
            
           return $(`
           
           <li><p>${postData.content}
               
                   <a id="${postData._id}" href="/deletePost/?id=${postData._id}"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
                   </svg></a>
                 
               </p>
               <br>Posted By: <span>${postData.user.name}</span> 
              
               
               <br> Posted On: <span>${ postData.createdAt}</span>
               
                 <div>
                   <ul id="commentsList${postData._id}">
                          
                   </ul>
                   </div>      
                   <form action="/createComment" method="post" id="comment${postData._id}">
                        <input name="comment" id="comment" placeholder="Comment Here...">
                        <input name="post" type="hidden" value="${postData._id}"> 
                        <button id="logout" onclick="createCommentAtPost(this)" class="form-submit" type="submit">Comment</button>
   
                  </form>  

                    
          
           </li>
               
               
    `)}
    
    
             

    
           let deletePost=function(element){
    
            // let elements=$(".postDeleteLink");
            // console.log(element);
            $(element).click(function(e){
            e.preventDefault();
               

             if(typeof element==="object")
             {  
                 for(ele of  element ){
                $.ajax({
                    type:"get",
                    url:$(ele).prop("href"),
                   
                    
                    success:function(data){
                        if(data.data.post_id){
                            console.log(data.data.post_id);
                            
                             $(`#${data.data.post_id}`).parent().parent().remove();
                        }
                    },
                    Error:function(err){
                        console.log(err.responseText);
                    }
                
                
                   });
                }
             }

             else{
                $.ajax({
                    type:"get",
                    url:$(element).prop("href"),
                   
                    
                    success:function(data){
                        if(data.data.post_id){
                            console.log(data.data.post_id);
                            
                             $(`#${data.data.post_id}`).parent().parent().remove();
                        }
                    },
                    Error:function(err){
                        console.log(err.responseText);
                    }
                
                
                   });
                }
                   
             });

        
            
        
              
            


}
deletePost(".postDeleteLink"); 








let diasbleDefault=function(element){

    
$(element).submit(function(e){
  e.preventDefault();
})}


function createCommentAtPost(element){
     
    console.log($(element).parent());
    $.ajax({
       type:"post",
       url:"/createComment",
      
       data:$(element).parent().serialize(),
       success:function(data){
        if(data.data.content)
           {    
               
               let commentList=$(`#commentsList${data.data.post}`); 
               console.log(commentList);
               commentList.prepend(appendComment(data.data));
               // deletePost(`#${data.data.posts._id}`);

           }
       },
       Error:function(err){
           console.log(err.responseText);
       }
   
   
      
   } );
   
   
}
// comment addition with ajax


        // createComment();


  let appendComment=function(data){
       return (`<li> ${data.content}  <span>
    
    
         
         <a href="/deleteComment?id=${data.id}&postId=${data.post}"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
         </svg></a>
       
     </span><br> Commented By: <span>${data.user.name}</span></li>`);
  }








diasbleDefault(".commentList");









}
