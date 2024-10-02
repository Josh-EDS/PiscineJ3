function houseEnergyScore(List) {
    let housingList = new Map(List);
    let housingGrade = [];

    for (var i = 0; i < housingList.size; i++) {
        let [HouseKey, HouseValue] = [...housingList.entries()][i];

        if (HouseValue >= 450) { housingGrade.splice(housingGrade.length, 0, [HouseKey, HouseValue, 'G']); }
        else if (HouseValue >= 330) { housingGrade.splice(housingGrade.length, 0, [HouseKey, HouseValue, 'F']); }
        else if (HouseValue >= 230) { housingGrade.splice(housingGrade.length, 0, [HouseKey, HouseValue, 'E']); }
        else if (HouseValue >= 150) { housingGrade.splice(housingGrade.length, 0, [HouseKey, HouseValue, 'D']); }
        else if (HouseValue >= 90) { housingGrade.splice(housingGrade.length, 0, [HouseKey, HouseValue, 'C']); }
        else if (HouseValue >= 51) { housingGrade.splice(housingGrade.length, 0, [HouseKey, HouseValue, 'B']); }
        else if (HouseValue >= 0) { housingGrade.splice(housingGrade.length, 0, [HouseKey, HouseValue, 'A']); }
    }

    housingGrade.sort((a, b) => a[1] - b[1]);
    return housingGrade;
}

displayResult(houseEnergyScore([['Log', 20], ['Villa', 149], ['Flat', 212], ['Loft', 340], ['Castle', 590], ['Igloo', 0], ['Hutch', 0]]));

// J'ai essayer de faire mieux avec des gradeLevels = [{ min: 450, grade: 'G' },{ min: 330, grade: 'F' }... mais on a pas encore vu ça donc je suis rester des des if-esle.