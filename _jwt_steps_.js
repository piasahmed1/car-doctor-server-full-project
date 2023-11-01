/* 
1. install jsonwebtoken
2. jwt.sign (payload, secret, {expiresIn:})
3. token client



*/


/* 
1. how to store token in the client side
2. momory -----> ok type
3. local storage ----> ok type (XSS)
4. cookies: http only

*/

/* 
1. set cookie http only for development secure false,
2. cors
app.use(cors({
  origin: [

    'http://localhost:5173',
    'http://localhost:5174'
  
  ],
3. client side axios setting
in axios set withCredentials: true


*/