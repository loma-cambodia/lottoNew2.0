//import { withIronSession } from git "next-iron-session";
import { withIronSessionApiRoute } from 'iron-session/next'

//let ttl = 60 + 10800 // 3 hours
//let ttl = 60 + 60; //  60 seconds
let isLocalhost = process.env.isLocalhost;

let ttl = 60 + 32400 // 9 hours

async function handler(req, res) {
  const body = req.body;

   let objectWithData = {};
   if(isLocalhost){
    // objectWithData.customer_name = "Sushil";
    // objectWithData.customer_id = 222;
    // objectWithData.merchant_id = 2;
    // objectWithData.language = 'en';
    // objectWithData.customer_name = "Dileep Maurya Loma Technology";
    // objectWithData.customer_id = 113;
    // objectWithData.merchant_id = 1;
    // objectWithData.language = 'en';
    objectWithData.customer_name = "Benjamin Yambot";
    objectWithData.customer_id = 114;
    objectWithData.merchant_id = 1;
    objectWithData.language = 'en';
   }else{

    objectWithData.customer_name = req.body.customer_name;
    objectWithData.customer_id = req.body.customer_id;
    objectWithData.merchant_id = req.body.enterprise_id;
    objectWithData.language = req.body.language;
   }

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
