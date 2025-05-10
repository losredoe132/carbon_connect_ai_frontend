
# Auth:

# Info
- Oauth in mit "third party" 

## Annahme
- keine self registration 

## Fragen: 

- wie anmelden? mail/pw? 

## Umsetzung Möglichkeiten
(https://stackoverflow.com/questions/58339005/what-is-the-most-common-way-to-authenticate-a-modern-web-app)
- basic auth (user/pw)
- JSON Web Token (JWT)/ bearer token
- Oauth2
- 

## Implementierungs Möglichkeiten:
### Firebase
- https://firebase.google.com/docs/auth/web/firebaseui?hl=de
 (Googles Haus lösung )
#### Optionen
- email pw 
-- frage: wo wird das gespeichert? 
--- An: In cloud firestore
- auth per mail 
- oauth anbieter 
- telefonnummer

### basic Auth
- complete credential(including password) will be sent in each request
- is it safe? https://security.stackexchange.com/questions/988/is-basic-auth-secure-if-done-over-https 


## Entscheidung
- app deployen mit google firebase? wenn es einach aufzusetzen ist sind wir sehr secure. (ist wohl auch auch oauth aber out of the box von google, werde ich mal in nem poc versuchen)
- alternative 1: basic auth 
- alternative 2: oauth 2 (kompliziert)

# Deployment: 
## Idee: 
- normal deploy (mit settings sodass keine public url bereit gestellt wird). Nur das Frontend hat eine public url. 

## Möglichkeiten:
- ...