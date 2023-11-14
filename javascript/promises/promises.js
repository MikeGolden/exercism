//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const promisify = (f) => {
  return (v) => { 
    return new Promise((resolve, reject) => {
      f(v, (error, data) => {
        if (error) {
          reject(error)
        } else {
          resolve(data)
        }
      })
    })
  }
};
export const all = async (promises) => {
  if (promises == undefined) {
    return undefined
  }
  let values = []
  for await (let promise of promises) {
    values.push(promise)
  }
  return values
};
export const allSettled = async(promises) => {
  if (promises == undefined) {
    return undefined
  }
  let values = []
  for (let i = 0; i < promises.length; ++i) {
    try {
      values[i] = await promises[i]
    } catch (err) {
      values[i] = err
    }
  }
  return values
};
export const race = (promises) => {
  return new Promise((resolve, reject) => {
    if (promises == undefined) {
      resolve(undefined)
    }
    for (let promise of promises) {
      promise
        .then((v) => resolve(v))
        .catch((err) => reject(err))
    }
    if (promises.length == 0) {
      resolve([]) 
    }
  }) 
};
export const any = (promises) => {
  return new Promise((resolve, reject) => {
    if (promises == undefined) {
      resolve(undefined)
    }
    let countErrors = 0
    let errorsList = []
    for (let i = 0; i < promises.length; ++i) {
      promises[i]
        .then((v) => resolve(v))
        .catch((err) => {
          errorsList[i] = err
          ++countErrors
          if (countErrors == promises.length) {
            reject(errorsList)
          }
        })
    }
    if (promises.length == 0) {
      resolve([]) 
    }
  }) 
};
