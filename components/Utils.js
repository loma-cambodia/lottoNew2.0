export const twoDecimalPlaceWithoutRound = (theInput, getCase) => {
    //Do something with the input
    let getInput = theInput;
    if(getCase == 1){
     if(getInput)
       return theInput.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
     else 
       return '';
    }else{
       return parseFloat(lottery.slave_net_amount).toFixed(2)
    }
 };