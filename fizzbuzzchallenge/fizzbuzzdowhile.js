let x = 1
do {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log('fizzbuzz')
    }

    else if (x % 3 === 0) {
        console.log('fizz')
    } else if (x % 5 === 0) {
        console.log('buzz')
    }
    else { console.log(x) }
    x++;
} while (x <= 100 && x >= 0)