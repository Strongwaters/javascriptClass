function animalWithSounds(anim) {
let answer = "";
switch (anim){
  case 'horse':
  answer ="nay";
  break;
    case 'lion':
    answer ="roar";
    break;
       case 'dragon':
       answer ="grumble";
       break;
        case 'cat':
        answer = "meow";
        break;
         case 'dog':
         answer = "woof";
         break; 
           case 'wolf':
           answer = "howl";
           break;
             default:
             answer = "I am Man! Hear me Fart!" 
    }
    
    return answer;
}
    animalWithSounds('horse');
