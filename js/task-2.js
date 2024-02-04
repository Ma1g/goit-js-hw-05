function changeEven(numbers, value) {
    let updatedArray = [];
    for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      updatedArray.push(numbers[i] + value)
    } else {
        updatedArray.push(numbers[i])
    }
    }
    return updatedArray;
}
