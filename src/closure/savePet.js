function createPetList() {
    const petList = [];
    return function addPet(myPet) {
      if (myPet) {
        petList.push(myPet);
      }
      return petList;
    }
  }

  const lista = createPetList();

  lista("Inti");
  lista("Loki");
  console.log(lista());