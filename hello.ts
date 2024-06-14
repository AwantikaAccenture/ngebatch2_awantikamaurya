const fetchData = (result: number = 0): Promise<number> =>
 new Promise((resolve) => {
 setTimeout(() => resolve(result + 1), 1000)
 })
fetchData().then(fetchData).then(fetchData)
 .then(console.log) // 3
