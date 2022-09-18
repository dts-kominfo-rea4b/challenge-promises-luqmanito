const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

let promiseOutput = async function (emosi) {
  let xxi = await promiseTheaterIXX()
  let vgc = await promiseTheaterVGC()

  if (emosi == 'marah') {
    let filterMarah = new Promise((resolve, reject) => {
      let hasil = xxi.concat(vgc)
      let filterMarah = hasil.filter(filtered => filtered.hasil == 'marah').length
      resolve(filterMarah)
    })
    return filterMarah

  } else if (emosi == `tidak marah`) {
    let gakMarah = new Promise((resolve, reject) => {
      let hasil = xxi.concat(vgc)
      let gakMarah = hasil.filter(filtered => filtered.hasil == 'tidak marah').length
      resolve(gakMarah)
    })
    return gakMarah
  }
}

promiseOutput('marah')
  .then(result => console.log(result))
promiseOutput('tidak marah')
  .then(result => console.log(result))


module.exports = {
  promiseOutput,
};


