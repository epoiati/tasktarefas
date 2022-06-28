import React from "react";
import { useState } from "react";
import Task from './img/Task.png'





export function Htmlcomp(){

  let [lista, setLista] = useState(["TAREFA-1", "TAREFA-2", "TAREFA-3"]);
  let [novoItem, setNovoItem] = useState("");
  

  return (
    <div>
        <div className="img">
        <img src ={Task} />
        </div>
    <div className="container">
        
     <div className="new-item">
     <input className=" text-sm placeholder-zinc-200 text-zinc-50 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:outline-none focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"  placeholder="tarefa" value={novoItem} onChange ={value => setNovoItem(value.target.value)} type="text"/>
       <button
           type="button" className="" onClick={()=>adicionarNovoItem()}>Adicionar</button>
       </div>
       <ul className="todo-list">
     {
       lista.map((item,index) =>
       (<li key={index} className="todo-item">
         {item}
       <button onClick={()=>deletarItem(index)}>
         Deletar</button>
       </li>))}
   
   </ul>
   </div>
   </div>
     
 
   );
 
   
 
   
   function adicionarNovoItem()
   {
     if (novoItem.length<=0)
     {
       alert("Por Favor, digite algo no campo!'Tarefa'")
       return;
     }
 
     let intemIndex = lista.indexOf(novoItem);
     if(intemIndex>=0)
     {
       alert("Você já adcionou esta tarefa!")
       return;
     }
 
     setLista([...lista,novoItem])
     setNovoItem("");
   }
 
   function deletarItem(index)
 {
   let tmpArray=[...lista,];
   tmpArray.splice(index,1);
   setLista(tmpArray);
 }
 
 }
 
 
 export default Htmlcomp;
 
 
 
 