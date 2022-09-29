//import { withIronSession } from git "next-iron-session";
import { withIronSessionApiRoute } from "iron-session/next";

let ttl = 60 + 10800; // 3 hours 
//let ttl = 60 + 60; //  60 seconds



async function handler(req, res) {
    const body  = req.body

        const objectWithData = {
            "user_name": "Sushil Gupta",
            "email": "loma123@gmail.coma",
            "customer_id": 1,
            "enterprise_id": 11
        }
        
        const userData = await fetch(process.env.siteUrl + '/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(objectWithData)
        }) 
        
        const data = await userData.json()
        if(data.success == true){
            //req.session.set("user", data);
            req.session.user = data;
            await req.session.save();
           // res.redirect(307, '/');
            res.send("You are Logged in, Please Go back");
        }else{
            console.log("Worng Data", data);
            res.send("Worng Data");
        }
    
}
// export default withIronSession(handler, {
//   password: "complex_password_at_least_32_characters_long",
//   cookieName: "myapp_cookiename",
//   cookieOptions: {
//     secure: process.env.NODE_ENV === "production",
//   },
// });


export default withIronSessionApiRoute(handler, {
    password: "complex_password_at_least_32_characters_long",
    cookieName: "myapp_cookiename",
    cookieOptions: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: (ttl === 0 ? 2147483647 : ttl),
      path: "/",
    },
  });
