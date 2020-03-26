function takeANumber() {
  let number = 0
  number++
  return `Order Number ${number}`

};
console.log(takeANumber());



function nowServing(arr) {

  if (arr.length == 0) {
    return 'There is nobody waiting to be served!'
  }
  let current = arr[0]
  arr.shift()
  return `Currently serving ${current}.`
}

function currentLine(arr) {
  if (arr.length === 0) {
    return 'The line is currently empty.'
  }
  let orderedList = '';
  for (let i = 0; i < arr.length; i++) {
    orderedList += `${i+1}. ${arr[i]}, `
  }

  // return `The line is currently: ` + orderedList.slice(0, -2);
}
