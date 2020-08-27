const list = (page) => {
  let arr = []
  if (page < 3) {
    for (let i = 0; i < 10; i++) {
      arr.push(`list_${i+1}`)
    }
  }
  return arr
}

module.exports = {
  list: list
}