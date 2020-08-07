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
               
                   <a href="/deletePost/?id=${postData._id}"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
                   </svg></a>
                 
               </p>
               <br>Posted By: <span>${postData.user.name}</span> 
              
               
               <br> Posted On: <span>${ postData.createdAt}</span>
               
   
            
                         
                   <form action="/createComment" method="post">
                        <input name="comment" id="comment" placeholder="Comment Here...">
                        <input name="post" type="hidden" value="${postData._id}"> 
                        <button id="logout" class="form-submit" type="submit">Comment</button>
   
                  </form>  
                    
          
           </li>
               
               
    `)
    
    
           }  

    
           let createComment=function(){
    
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
        
                    }
                },
                Error:function(err){
                    console.log(err.responseText);
                }
            
            
               });
               });
        }
                createComment();





}