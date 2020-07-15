from firebase import firebase

firebase = firebase.FirebaseApplication('https://gullyboy-f0519.firebaseio.com/', None)


 
result = firebase.delete('/gullyboy-f0519/Customer','-MCFpH__wBisYMp9dvq7')
print('Record Deleted')
