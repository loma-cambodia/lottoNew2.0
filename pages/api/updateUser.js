
import { withIronSessionApiRoute } from 'iron-session/next'



let ttl = 60 + 32400 // 9 hours

async function handler(req, res) {
  const body = req.body;

  
  const objectWithData = {
    customer_name: req.body.customer_name,
    customer_id: parseInt(req.body.customer_id),
    merchant_id: req.body.merchant_id,
    language: req.body.language,
  }

// const objectWithData = {
//     "customer_name": "Dileep Maurya",
//    "customer_id":  112,
//   "merchant_id":  1,
//   "language":  'en',
// }




///
  
  const userData = await fetch(`${process.env.apiUrl}/member-login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(objectWithData),
  })

  const data = await userData.json()
  if (data.success == true) {
    //req.session.set("user", data);
    req.session.user = data
    await req.session.save()
  //  res.redirect(307, '/')
    res.redirect(301, '/')
    res.send(data);
  } else {
    res.send('Worng Data')
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
