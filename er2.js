class fetc{
  fet(template,video){
          fetch(template).then(response=>{if(response.ok){
          return response.json();}
            }).then(data=>{
      return this.nim(data,video)
       }).catch(er=>{console.log(er)})
  }
       
  
   nim(a,bc){
         let v= document.querySelectorAll(".original__movies")
          for (let i = 0; i < a.length; i++) {
              let num= i;
             const e= document.createElement("div");
             const b=document.createElement("img");
             b.setAttribute("id",`${a[i]["name"]}`);
              e.appendChild(b);
              e.setAttribute("class","org_ed");
               b.src=a[i]["download_url"];
              v[0].appendChild(e);
              e.addEventListener("click",()=>{
              this.yal(bc,num)
                
                
              });
      }
          };

  // raju=(a,bc)=>{
  //    this.nim(a,bc)
  // }
async yal(all,num){
  try{
                 
                 const ant=  await fetch(all)
                 const data= await  ant.json()
                //  this.mmnn();
                this.mmnn(num,data)
               window.open("/anw.html")
                }catch(err){
                  console.log(err)
                }
}

  mmnn=(d,e)=>{
   this.ral(d,e)
   console.log(d)
  }
  async ral(d,e){
      try{
      const har= e[d]["download_url"]
      console.log(har)
      const dat2=await fetch("https://api.github.com/repos/nimeshlife/webhost/contents/cod",{
                headers:{
                  'Authorization':'Bearer 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'
                }
              
              })

              const pdat2 =await dat2.json()

              const ano= await fetch("https://api.github.com/repos/nimeshlife/webhost/contents/cod",{
                method:"PUT",
                headers:{
                  'Authorization':'Bearer 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',
                  'Content-Type':'application/json'
                },
                body:JSON.stringify({
                  message:'update file',
                  content:btoa(har),
                  sha: pdat2.sha
                })});
                if(ano.ok){
                  console.log("FILE UPDATED");
                   
                }else{
                  console.log("error")
                }


    }catch(error){
      console.log(error
        )
    }
      

            
             
  }
}
a= new fetc();
a.fet("https://api.github.com/repos/nimeshlife/npt/contents","https://api.github.com/repos/nimeshlife/videos/contents");
