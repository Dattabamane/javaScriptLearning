console.log("===========Break=============");

var index=0;
while (index<=100) {
    console.log(index);
    if (index==5) {
        break;
    }
    index++;
}

for (let index = 0; index < 20; index++) {
    console.log(index);
    if (index>=12) {
        break;
    }
}

console.log("===========contine=============");

var index=0;
while (index<=10) {
    console.log(index);
    index++;
    if (index==5) {
        continue;
    }
    index++;
}

for (let index = 0; index < 20; index++) {
    console.log(index);
    if (index>=12) {
        continue;
    }
    console.log(index);
}