//import { withIronSession } from git "next-iron-session";
import { withIronSessionApiRoute } from 'iron-session/next'

//let ttl = 60 + 10800 // 3 hours
//let ttl = 60 + 60; //  60 seconds
let isLocalhost = process.env.isLocalhost;

let ttl = 60 + 32400 // 9 hours

async function handler(req, res) {
  const body = req.body;

  ///   const objectWithData = {
  //     "customer_name": "Sushil Gupta",
  //     "email": "loma123@gmail.coma",
  //     "customer_id": 1,
  //     "merchant_id": 11
  //       "language": 'en'
  // }



  

   //console.log('isLocalhost:',isLocalhost);
   let objectWithData = {};
   if(isLocalhost){
    objectWithData.customer_name = "Dileep Maurya";
    objectWithData.customer_id = 112;
    objectWithData.merchant_id = 1;
    objectWithData.language = 'en';
    // objectWithData.customer_name = "Dileep Maurya";
    // objectWithData.customer_id = 9876;
    // objectWithData.merchant_id = 2;
    // objectWithData.language = 'ch';
   }else{

    objectWithData.customer_name = req.body.customer_name;
    objectWithData.customer_id = req.body.customer_id;
    objectWithData.merchant_id = req.body.enterprise_id;
    objectWithData.language = req.body.language;
   }

//return false;
     
  

    // const objectWithData = {
    //            "customer_name": "Atul",
    //          "customer_id":  1403,
    //         "merchant_id":  1,
    //         "language":  'en',
    //     }

  

  // const objectWithData = {
  //   customer_name: req.body.customer_name,
  //   customer_id: req.body.customer_id,
  //   merchant_id: req.body.enterprise_id,
  //   language: req.body.language,
  // }
 
  //   try {
  const userData = await fetch(`${process.env.apiUrl}/member-login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objectWithData),
  })

  const data = await userData.json()

  if (data.success == true) {
    req.session.user = data
    await req.session.save()
    res.redirect(307, '/')
    res.send('You are Logged in, Please Go back')
  } else {
    res.send('Worng Data')
  }

}
export default withIronSessionApiRoute(handler, {
  password: 'complex_password_at_least_32_characters_long',
  cookieName: 'myapp_cookiename',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: ttl === 0 ? 2147483647 : ttl,
    path: '/',
  },
})
