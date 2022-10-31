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
  
  let newData = {};
  let getData = {};

  if(Object.keys(data).length === 0)
   return newData;

  if(fromWindow == 2)
   getData = data;
  else if(fromWindow == 3)
  getData = data;
  else 
  getData = data && data.user && data.user.data ? data.user.data : {};

  newData.id = getData && getData.id ? getData.id : 0;
  newData.customer_name = getData && getData.customer_name ? getData.customer_name : "";
  newData.customer_id = getData && getData.customer_id ? getData.customer_id : 0;
  newData.name = getData && getData.name  ? getData.name : "";
  newData.merchant_id = getData && getData.merchant_id ? getData.merchant_id : 0; 
  newData.merchantActive = getData && getData.merchant && getData.merchant.status ? getData.merchant.status : 0; 
  newData.language = getData && getData.language  && getData.language.locale ? {locale:getData.language.locale, name:getData.language.name} : {locale:'', name:''};
  newData.wallet = getData && getData.wallet && getData.wallet.amount ? {amount:getData.wallet.amount, name:getData.language.name} : {amount:'', name:''} ;
  newData.merchant = getData && getData.merchant && getData.merchant.currency && getData.merchant.currency.code ? {currency:{code:getData.merchant.currency.code}} : {} ;
  if(fromWindow == 1 || fromWindow == 3)
   newData.token = getData && getData.token ? getData.token : "" ;


// console.log('getDatagetData',newData.token)
  return newData;
};