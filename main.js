function getSleepHours(day){
  switch(day){
      case 'monday': 
      	return 8;
      	break;
      default: 
        return 0;
        break;
  };       
};
  
const getActualSleepHours = () => {
  let sum = 0
  sum += getSleepHours('sunday');
  sum += getSleepHours('monday');
  sum += getSleepHours('tuesday');
  sum += getSleepHours('wednesday');
  sum += getSleepHours('thursday');
  sum += getSleepHours('friday');
  sum += getSleepHours('saturday');
  return sum
  
  
}

function getIdealSleepHours(){
  idealHours = 6
  return idealHours * 7
}

function calculateSleepDebt(){
  actualSleepHours = getActualSleepHours()
  idealSleepHours = getIdealSleepHours()
  
  if(actualSleepHours === idealSleepHours){
    console.log('Perfect!!!', idealSleepHours - actualSleepHours);     
     } else if (actualSleepHours > idealSleepHours){
     	console.log('User got more sleep.', idealSleepHours - actualSleepHours)  
     } else  if (actualSleepHours < idealSleepHours){
     	console.log('User should get more sleep.', idealSleepHours - actualSleepHours)
     }
}

calculateSleepDebt()














