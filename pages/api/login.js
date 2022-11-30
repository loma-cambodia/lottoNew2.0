//import { withIronSession } from git "next-iron-session";
import { withIronSessionApiRoute } from 'iron-session/next'

//let ttl = 60 + 10800 // 3 hours
//let ttl = 60 + 60; //  60 seconds
let isLocalhost = process.env.isLocalhost;

let loginUser = process.env.loginUser;

let ttl = 60 + 32400 // 9 hours

async function handler(req, res) {
  const body = req.body;

   let objectWithData = {};
   if(isLocalhost){
      objectWithData=loginUser;
   }else{
    objectWithData.customer_name = req.body.customer_name;
    objectWithData.customer_id = req.body.customer_id;
    objectWithData.merchant_id = req.body.enterprise_id;
    objectWithData.language = req.body.language;
   }

  // console.log('mamber login url:',`${process.env.apiUrl}/member-login`);

  const userData = await fetch(`${process.env.apiUrl}/member-login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache,no-store',

    },
    body: JSON.stringify(objectWithData),
  })

  const data = await userData.json();

  //console.log('data:',`${data}`);
  //console.log(data);

  if (data.success == true) {
    req.session.user = data
    await req.session.save();
    res.redirect(307, '/')
   // res.redirect(302, '/');
   // location.reload();
    res.send('You are Logged in, Please Go back')
  } else {
    //res.send('Worng Data12')
    res.redirect(302, '/404');
  }

}
export default withIronSessionApiRoute(handler, {
  password: 'complex_password_at_least_32_characters_long',
  cookieName: 'myapp_cookiename',
  cookieOptions: {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: ttl === 0 ? 2147483647 : ttl,
    path: '/',
  },
})
