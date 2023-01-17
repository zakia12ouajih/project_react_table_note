export default function ajoutFruit(id,nom){
   return({
      type:"ADD_FRUIT",
      payload:{
         id:id,
         nom_fruit:nom
      }
   })
}
export function vider(){
   return({
      type:"CLEAR",
   })
}