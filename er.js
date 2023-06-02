bcod = document.querySelectorAll('.desi')
e = document.getElementsByClassName('body')
lists =[{name:'hero'},{name:'hero4'},{name:'herrrro'},{name:'iam king'},{name:'eku'}]

bcod[1].addEventListener('clik',()=>{
  bcod[1].innerHTML =`<input type="text" placeholder='search'>`
})

// bcod.forEach(elem => {
  bcod[0].addEventListener('click',()=>{
    return activa()
  })
  
// });


eku =(a,type)=>{
  fetch(a).then(b => b.json()).then(b=>{
    return dom(b,type)
  })
}

activa =()=>{
  eku('https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213','backdrop_path')
}
dom =(data,type)=>{
  for( mov of data.results){
  b=document.createElement('img')
  b.setAttribute('class','nim')
  console.log(data)
  b.src=`https://image.tmdb.org/t/p/original${mov[type]}`
  e[0].appendChild(b)
}}






// i = -1
// j = -1
// eku =()=>{
    


// while(i < bcod.length){
//   ek = (a)=>{
//   j++
//  i++
//  console.log(i)
//   bcod[i].addEventListener('click',()=>{e[0].innerText = lists[a].name})
  
// }
// }
// }
// ee=()=>{
//    if(j<lists.length) {
//     j += 1
//   } 
//    return j
// }

// eu =()=>{
//   for(i of bcod){   
//   i.addEventListener('click',()=>{
//     console.log(lists[ee()].name)
//   })
// }}



// bcod[0].addEventListener('click',()=>{
//  a[0].innerText='HELLO'
//         });
// bcod[1].addEventListener('click',()=>{
//   a[0].innerText='HELLO iam back'
//          });


//  bcd = [{name:'hero'},{name:'super hero'},{name:'super super hero'},{name:'kando ko dulo'}]
// bcod.forEach(bc => {
//   for(i in bcod){
//   bc.addEventListener('click',()=>{
//    a[0].style=`background-color:pink;text-decoration:none;color:black;`
  
  
//      a[0].innerHTML=  'eku'
//    }); }
//   })


//   rem =()=>{
//      bcod[1].innerHTML =`search <input type="text" id="mole" placeholder="search"> `
//   }
          
// bcod[1].addEventListener('click',()=>{
//  return rem()
// })
// // bcod[1].addEventListener('mousedown',()=>{
// //   bcod[1].innerText='search'
// // })
