function addHousing(list, type, number) {
    if (housingList.has(type)) {
      housingList.set(type, number + housingList.get(type))
    } else {
      housingList.set(type, number)
    }
  }
  
  let housingList = new Map()
  addHousing(housingList, "Flat", 2)
  addHousing(housingList, "Log", 3)
  addHousing(housingList, "Flat", 3)
  addHousing(housingList, "Hutch", 2)
  
  displayResult(housingList)
  