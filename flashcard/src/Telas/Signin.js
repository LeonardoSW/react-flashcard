import react from 'react';
import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import auth from '@react-native-firebase/auth';

function Signin() {
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
     return(
        <View>
            <Text>
                Enter your email and Password:
            </Text>
            <TextInput placeholder='teste1' onChangeText={newEml => setEmail(newEml)} />
            <TextInput placeholder='teste2' onChangeText={newPwd => setPwd(newPwd)} />
            <Button title='Cadastrar' onPress={createUser()} />
        </View>
    )

    function createUser(){
        if(email === '' || pwd === '')
            return;
        auth()
            .createUserWithEmailAndPassword(email, pwd)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                }
    
                if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                }
    
                console.error("Other any error here!\n\n"+error);
            })
    }
}




export default Signin;