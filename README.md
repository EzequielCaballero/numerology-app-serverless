# DESTINO NUMERICO - _Serverless backend API_

**Serverless API** application hosted by **Netlify** and using **Express** + **Nodemailer** + **Firebase RDB** + **Netlify-lambda** to handle backend requests from main application [**DESTINO NUMERICO**](http://destinonumerico.xyz/).

---

## **ENDPOINT** | available options

**EMAIL** sender using:
- **Nodemailer** 
- **PUG**
- **Sendinblue provider** free plan.

```
POST - /send/email
```

**LOG** tracker using:
- **Firebase Realtime Database**

```
POST - /send/log
```
