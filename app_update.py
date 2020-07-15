from firebase import firebase

firebase = firebase.FirebaseApplication('https://gullyboy-f0519.firebaseio.com/', None)

result = firebase.put('/gullyboy-f0519/Customer/-MCFpH__wBisYMp9dvq7', 'Name','Bob')
print('Record updated')
