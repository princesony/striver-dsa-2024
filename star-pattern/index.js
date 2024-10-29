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


function pattern_06(n) {
    for (let o = 1; o <= n; o++) {
        const star = "* ".repeat(n-o)
        console.log(star);
    }
}
function pattern_07(n) {
    for (let o = 0; o  < n; o++) {
        let start = Array.from({length:n-o},(_,index)=>{ return index+1});
        console.log(start.join(' '))
    }
}
function pattern_08(n) {
    for (let o = 0; o  < n; o++) {
       let star = "";
       let space = " ".repeat(n-o+1)
       star += space + "* ".repeat(o+1);
       console.log(star)
    }
}
function pattern_09(n) {
    for (let o = 0; o  < n; o++) {
       let star = "";
       let space = " ".repeat(o)
       star += space + "* ".repeat(n-o);
       console.log(star)
    }
}
function pattern_10(n) {
    // Upper part of the pattern
    for (let o = 0; o < n; o++) {
        let star = "";
        let space = " ".repeat(n - o - 1); // Corrected space calculation
        star += space + "* ".repeat(o + 1).trim(); // Trim to remove trailing space
        console.log(star);
    }
    // Lower part of the pattern
    for (let o = 0; o < n; o++) {
        let star = "";
        let space = " ".repeat(o);
        star += space + "* ".repeat(n - o).trim(); // Trim to remove trailing space
        console.log(star);
    }
}

function pattern_11(n) {
    for (let o = 0; o  < n; o++) {
      let star = "*".repeat(o);
      console.log(star)
    }
    for (let o = n;  o>0; o--) {
        let star = "*".repeat(o); // 
      
        console.log(star)
      }
    
}










// Test the function
function print_start() {
    console.time()
    for (let index = 0; index < 4; index++) {
        pattern_11(2 * index + 4);
    }
    console.timeEnd()
} 

print_start();
