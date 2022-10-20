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

 export const twoDecimalPlaceWithAmount = (theInput, getCase) => {
   //Do something with the input
   let getInput = theInput;
   if(getCase == 1){
    if(getInput)
      return parseFloat(theInput.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]).toFixed(2)
    else 
      return '0.00';
   }else{
      return parseFloat(lottery.slave_net_amount).toFixed(2)
   }
};

export const setUserDataFormat = (data, fromWindow = 1) => {
   //Do something with the input

   //console.log('setUserDataFormat:data:', data);
   let newData = {};
   let getData = {};
   if(fromWindow == 2)
   getData = data;
   else 
   getData = data.user.data;

   //console.log('setUserDataFormat:dataAgain:', getData);

   newData.id = getData.id;
   newData.customer_name = getData.customer_name;
   newData.customer_id = getData.customer_id;
   newData.name = getData.name;
   newData.merchant_id = getData.merchant_id; 
   newData.language = {locale:getData.language.locale, name:getData.language.name};
   newData.wallet = {amount:getData.wallet.amount, name:getData.language.name};
   return newData;
};