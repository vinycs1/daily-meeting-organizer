export function sortAwnsers(members,anwsers){
    return Object.keys(anwsers)
     .map(membersId => ({ 
       name:members[membersId] , 
       awnser: anwsers[membersId] 
     }))
     .sort(alphabeticallySorter)
   }
 
export function alphabeticallySorter(a,b){
     var textA = a.awnser?.toUpperCase();
     var textB = b.awnser?.toUpperCase();
     return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
}