function isPrime(n){
	if (n <= 3) return true;
	for(var i=2;i<=(n/2);i++)
		if (n % i === 0) return false;
	return true;
}

self.addEventListener("message",function(msgArg){
	var data = msgArg.data;
	if (data.type === "findPrimes"){
		var primeCount = 0;
		var totalWork = data.end - data.start;
		for(var i=data.start;i<=data.end;i++){
			if (isPrime(i)) ++primeCount;
			var workCompleted = i - data.start;
			var percentWorkCompleted = (workCompleted / totalWork) * 100;
			if (percentWorkCompleted % 2 === 0)
				self.postMessage({
					type : "progress",
					percentCompleted : percentWorkCompleted,
					primeCount : primeCount
				});
		}
		self.postMessage({
			type : "result",
			primeCount : primeCount
		});
	}
});