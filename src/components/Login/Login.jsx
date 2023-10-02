import {GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.int';
import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    console.log(app);
    const GoogleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSingIn = () => {
          signInWithPopup(auth, GoogleProvider)
          .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
          })
          .catch(error => {
            console.log('error', error.message)
          })
    }
    const handleGitHubSingIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
          const loggedInUser = result.user;
          console.log(loggedInUser);
          setUser(loggedInUser);
        })
        .catch(error => {
          console.log('error', error.message)
        })
    }

    const handleSingOut = () => {
        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
        {
            user ?
            <button onClick={handleSingOut} className="btn btn-outline ml-[717px]">Sing Out</button> :
            <div className='gap-3'>
                <button onClick={handleGoogleSingIn} className="btn btn-outline mt-3 ml-[650px]">Google Login</button> 
            <button onClick={handleGitHubSingIn} className='btn btn-outline '>GitHub Login</button> 
            </div>
        }    
           {user && <div>
              <h3 className='text-center mt-3'>User : {user.displayName}</h3>
              <p className='text-center mt-3'>Email : {user.email}</p>
              <img className='ml-[720px] mt-3' src={user.photoURL} alt="" />
           </div>}
        </div>
    );
};

export default Login;