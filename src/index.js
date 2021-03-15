module.exports = function check(str, bracketsConfig) {
    if(typeof str !== 'string'){
        return false;
    }

    var open = [];
    var close = [];
    var bufer = [];
    var check = true;
    bracketsConfig.map(el => open.push(el[0]));
    bracketsConfig.map(el => close.push(el[1]));

    str.split('').forEach(el => {
        if (open.includes(el) && close.includes(el)) {
            if(!bufer.includes(el)){
                bufer.push(el);
                return
            }
            if(bufer.includes(el) && bufer[bufer.length-1] === el){
                bufer.pop()
                return;
            }
            if(bufer.includes(el) && bufer[bufer.length-1] === el){
                check = false;
                return;
            }
        }
        if(close.includes(el)){
          close.indexOf(el) === open.indexOf(bufer[bufer.length-1]) ? bufer.pop() : check = false;
          return;
        }
        bufer.push(el);
    })

    return bufer.length === 0 && check ? true : false;
}
