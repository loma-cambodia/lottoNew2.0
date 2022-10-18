//import { withIronSession } from "next-iron-session";
import { withIronSessionApiRoute } from "iron-session/next";
function handler(req, res, session) {
  const user = req.session.user;
  console.log('useruseruser:',user);
  res.send({ user });
}



export default withIronSessionApiRoute(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "myapp_cookiename",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
// export default withIronSession(handler, {
//   password: "complex_password_at_least_32_characters_long",
//   cookieName: "myapp_cookiename",
//   cookieOptions: {
//     secure: process.env.NODE_ENV === "production",
//   },
// });