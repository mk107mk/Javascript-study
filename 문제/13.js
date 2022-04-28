// 아래 코드가 동작하는 과정을 Heap, Call Stack, Web Api, 
// Callback Queue를 이용해 설명하기


async function request() {
	await new Promise(resolve => {
		setTimeout(() => {
			console.log('finish');
			resolve();	
		}, 1000)
	})
}

async function main() {
	console.log('start');

	const interval =setInterval(() => {
		console.log('interval');
	}, 100)

	await request()
	await request()

	clearInterval(interval);

	console.log('end');
}

main();

// start -> interval -> finish -> end
// start -> setInterval -> promise 
// -> setInterval -> promise -> end