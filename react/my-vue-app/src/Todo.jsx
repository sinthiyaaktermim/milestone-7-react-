//  export default function Todo({task,isDone}){
//   return(
//     <li>task:{task}</li>
//   )
    
  
// }

// export default function Todo({task,isDone}){
// if(isDone===true){
//   return <li>finished:{task}</li>
// }else{
//   return <li>
//     worked one:{task}
//   </li>
// }
    
  
// }
// export default function Todo({task,isDone}){
//   if(isDone){
//     return <li>finished:{task}</li>
//   }
//     return <li>
//       worked one:{task}
//     </li>
//   }
      // conditonal rendering 3

      // export default function Todo({task,isDone}){
        
      //     return(
      //     <li>{isDone ?'finished':'worked on'};{task}</li>
      //     ) 
         
      //   }

      export default function Todo({task,isDone}){
      
          return(
             <li>{task} {isDone || ':do it'}</li>
          )
        }
         
        
          
    
  

