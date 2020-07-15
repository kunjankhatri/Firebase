from firebase import firebase

firebase = firebase.FirebaseApplication('https://gullyboy-f0519.firebaseio.com/', None)

data = {
    'Name': 'suhani',
    'Email': 'sc@gmail.com',
    'Phone': 76736,
    

}

result = firebase.post('/gullyboy-f0519/Customer', data)
print(result)
