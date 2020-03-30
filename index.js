function wakeDog(dogName, dogBreed) {
  let wake = (`Wake ${dogName} the ${dogBreed}`);
  console.log(wake);
  return wake;
}

function leashDog(dogName, dogBreed) {
  let leash = (`Leash ${dogName} the ${dogBreed}`);
  console.log(leash);
  return leash;
}

function walkToPark(dogName, dogBreed) {
  let walkToPark = (`Walk to the park with ${dogName} the ${dogBreed}`);
  console.log(walkToPark);
  return walkToPark;
}

function throwFrisbee(dogName, dogBreed) {
  let throwFrisbee = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(throwFrisbee);
  return throwFrisbee;
}

function walkHome(dogName, dogBreed) {
  let walkHome = (`Walk home with ${dogName} the ${dogBreed}`);
  console.log(walkHome);
  return walkHome;
}

function unleashDog(dogName, dogBreed) {
  let unleashDog = (`Unleash ${dogName} the ${dogBreed}`);
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
