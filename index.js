function wakeDog(dogName, dogBreed) {
  const wake = (`Wake ${dogName} the ${dogBreed}`);
  console.log(wake);
  return wake;
}

function leashDog(dogName, dogBreed) {
  const leash = (`Leash ${dogName} the ${dogBreed}`);
  console.log(leash);
  return leash;
}

function walkToPark(dogName, dogBreed) {
  const walkToPark = (`Walk to the park with ${dogName} the ${dogBreed}`);
  console.log(walkToPark);
  return walkToPark;
}

function throwFrisbee(dogName, dogBreed) {
  const throwFrisbee = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(throwFrisbee);
  return throwFrisbee;
}

function walkHome(dogName, dogBreed) {
  const walkHome = (`Walk home with ${dogName} the ${dogBreed}`);
  console.log(walkHome);
  return walkHome;
}

function unleashDog(dogName, dogBreed) {
  const unleashDog = (`Unleash ${dogName} the ${dogBreed}`);
  console.log(unleashDog);
  return unleashDog;
}


const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  const arrayOfDogs = [];
   for (let i = 0; i < routine.length; i++) {
     let exerciseDog = routine[i](dogName, dogBreed);
     arrayOfDogs << exerciseDog;
   }
  return arrayOfDogs;
}

function exerciseDog(dogName, dogBreed) {
    return routine.map(func => func(dogName, dogBreed))
}
