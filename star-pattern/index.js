function pattern_01(n) {
    for (let o = 0; o < n; o++) {
        let star = "";
        for (let i = 0; i < n; i++) {
            star += "* ";
        }
        console.log(star);
    }
}

function pattern_02(n) {
    for (let o = 1; o <= n; o++) {
        
        let star = "";
        for (let i = 0; i < o; i++) {
            star += "* ";
        }
        console.log(star);
    }
}
function pattern_03(n) {
    for (let o = 1; o <= n; o++) {
        console.log('* '.repeat(o));
    }
}
function pattern_04(n) {
    for (let o = 1; o <= n; o++) {
        
        let star = "";
        for (let i = 0; i < o ; i++) {
            star += `${i+1} `;
        }
        console.log(star);
    }
}

function pattern_05(n) {
    for (let o = 1; o <= n; o++) {
        const star = Array.from({ length: o }).fill(o).join(' ');
        console.log(star);
    }
}









// Test the function
function print_start() {
    console.time()
    for (let index = 0; index < 4; index++) {
        pattern_05(2 * index + 4);
    }
    console.timeEnd()
} 

print_start();
