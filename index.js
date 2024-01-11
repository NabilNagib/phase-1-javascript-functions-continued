// // code your solution here
// function saturdayFun(fun = "roller-skate", target = "bathe my dog") {
//     return `This Saturday, I want to ${fun}!`;
    
//     saturdayFun(`This Saturday, I want to ${target}`);
// }

// function mondayWork(work = "go to the office", target="work from home") {
//     return `This Monday, I will ${work}.`;
//     mondayWork(`This Monday, I will ${target}.`)
// }

// function wrapAdjective(){
//     let result = wrapAdjective('*')
//     let emphatic = result("a hard worker")
//     return `You are ${wrapAdjective.result}`, `You are ${wrapAdjective.wrapAdjective}`;
// }

function saturdayFun(fun = 'roller-skate') {
    return (`This Saturday, I want to ${fun}!`);
}
saturdayFun();
saturdayFun('bathe my dog');


function mondayWork(office = 'go to the office') {
    return (`This Monday, I will ${office}.`);
}
mondayWork();
mondayWork('work from home');


    // function wrapAdjective() {

    //     let result = wrapAdjective('*');
    //     let emphatic = result("a hard worker");
    //     return `You are ${result}${emphatic}${result}!`;

    // // let result2 = wrapAdjective("||");
    // // let emphatic2 = result2("a dedicated programmer");

    // }
    // wrapAdjective();

    function wrapAdjective(wrap) {
        return function (adjective) {    
            return `You are ${wrap}${adjective}${wrap}!`;
        }    
    }
    
    let result1 = wrapAdjective('*');
    let emphatic1 = result1("a hard worker");
   
    
    let result2 = wrapAdjective('||');
    let emphatic2 = result2("a programmer");
    
