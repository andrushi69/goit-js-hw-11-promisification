const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction2 = transaction => {
  const delay = randomIntegerFromInterval(200, 500);
  return new Promise((resolve, reject) => {
    let id = transaction.id;
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        const result = {id, delay};
        resolve(result);
      } else {
        reject(Error(transaction.id));
      }
    }, delay);
  });
};
const logSuccess2 = (result) => {
  console.log(`Transaction ${result.id} processed in ${result.delay}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};
makeTransaction2({id: 70, amount: 150})
  .then(logSuccess2)
  .catch(logError);

makeTransaction2({id: 71, amount: 230})
  .then(logSuccess2)
  .catch(logError);

makeTransaction2({id: 72, amount: 75})
  .then(logSuccess2)
  .catch(logError);

makeTransaction2({id: 73, amount: 100})
  .then(logSuccess2)
  .catch(logError);