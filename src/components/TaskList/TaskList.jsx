import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
   console.log(data);
  return (
    <div id="tasklist" className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10'>
      {data.tasks.map((elm, idx)=>{
         // console.log(elm)
         if(elm.active){
            return <AcceptTask  key ={idx} data = {elm}/>
         }
         if(elm.newTask){
            return <NewTask key ={idx} data= {elm}/>
         }
         if(elm.completed){
            return<CompleteTask key ={idx} data= {elm} />
         }
         if(elm.failed){
            return <FailedTask key ={idx} data= {elm}/>
         }

      })}
    
    </div>
   
  )
}

export default TaskList
