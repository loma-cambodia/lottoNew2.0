//import { withIronSession } from "next-iron-session";
import { withIronSessionApiRoute } from "iron-session/next";




async function handler(req, res, session) {


  let member_id = req.query.member_id;
  req.session.destroy();
if(member_id){
  console.log(`${process.env.apiUrl}/member-logout?member_id=${member_id}`);
 const userData = await fetch(`${process.env.apiUrl}/member-logout?member_id=${member_id}`);
 const data = await userData.json();
 console.log('data:',data);
}
  
  res.redirect(307, '/');
  res.send("You are Logged out, Please Go back");
}


export default withIronSessionApiRoute(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "myapp_cookiename",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});