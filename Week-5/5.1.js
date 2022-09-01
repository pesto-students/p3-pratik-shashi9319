function* moviePartGenerator() {
  yield firstHalf()
    .then((res) => console.log)
    .catch((e) => console.log(e.message));
  yield interval()
    .then((res) => console.log)
    .catch((e) => console.log(e.message));
  yield secondHalf()
    .then((res) => console.log)
    .catch((e) => console.log(e.message));
  return { done: true };
}

const firstHalf = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Enjoy opening sequence..."));
    }, 1000);
  });
};

const interval = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Enjoy your popcorn..."));
    }, 1000);
  });
};

const secondHalf = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("Enjoy climax..."));
    }, 1000);
  });
};

console.log("\n***** Generator *****\n");
const part = moviePartGenerator();
part.next();
part.next();
part.next();

async function moviePartAsynAwait() {
  try {
    await firstHalf();
    await interval();
    await secondHalf();
  } catch (e) {
    console.log(e.message);
  }
}

console.log("\n***** Async/Await *****\n");
moviePartAsynAwait();
