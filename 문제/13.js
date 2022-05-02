// 아래 코드가 동작하는 과정을 Heap, Call Stack, Web Api, Callback Queue를 이용해 설명하기



async function request() {
	await new Promise(resolve => {
		setTimeout(() => {
			console.log('finish');
			resolve();	
		}, 1000)
	})
}

// async function main() {
// 	console.log('start');

// 	const interval =setInterval(() => {
// 		console.log('interval');
// 	}, 100)

// 	await request()
// 	await request()

// 	clearInterval(interval);

// 	console.log('end');
// }

// main();

async function func(){
console.log("script start");

setTimeout(function () {
  console.log("setTimeout");
}, 2000);

await request();

Promise.resolve()
  .then(function () {
	  setTimeout(function(){
    console.log("promise1");
  },1000)
})
  .then(function () {
    console.log("promise2");
  });

console.log("script end");
}
func();