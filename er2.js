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
                fetch(bc).then(data=>{
                  if(data.ok){
                    return data.json()
                  }
                }).then(data=>{
                   this.mmnn(num,data)
                  
                })
                
              });
      }
          };


  mmnn=(d,e)=>{
  const har= e[d]["download_url"]
      console.log(har)
      fetch("https://api.github.com/repos/nimeshlife/webhost/contents/cod",{
        headers:{
                          'Authorization':'Bearer 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'
                        }
      } 
     ).then(datae=>{
        if(datae.ok){
          return datae.json()
        }
      })
      .then(dato=>{
        console.log(dato)
        fetch("https://api.github.com/repos/nimeshlife/webhost/contents/cod",{
          method:"PUT",
          headers:{
            'Authorization':'Bearer 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',
            'Content-Type':'application/json'
          },
          body:JSON.stringify({
            message:'update file',
            content:btoa(har),
            sha: dato.sha
          })
        })
        .then(data=>{
            if(data.ok){
              console.log("FILE UPDATED");
               window.open("/anw.html")
                   window.close("www.bluesaffron.xyz")
            }
          }).catch(error=>{
            console.log(error)
          })
         
            
             
         
      }).catch(error=>{
        console.log(error)
      })
  }

}
a= new fetc();
a.fet("https://api.github.com/repos/nimeshlife/npt/contents","https://api.github.com/repos/nimeshlife/videos/contents");
