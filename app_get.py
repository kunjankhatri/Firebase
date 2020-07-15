from firebase import firebase

firebase = firebase.FirebaseApplication('https://gullyboy-f0519.firebaseio.com/', None)




result = firebase.get('/gullyboy-f0519/Customer','')
print(result)
