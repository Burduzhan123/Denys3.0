const condition = 20

if (condition % 3 === 0 && condition % 5 === 0){
    console.log('FizzBazz');
}else if (condition % 3 === 0){
    console.log('Fizz');
}else if (condition % 5 === 0){
    console.log('Bazz')
}
