import { /* useDispatch, */ useSelector } from 'react-redux';
/* import { login, logout } from '../stores/auth'; */
import { loginHandle, logoutHandle } from '../utils';

export default function Header() {

    const { user } = useSelector(state => state.auth);
    /* const dispatch = useDispatch(); */

 /*    const loginHandle = user =>{
        dispatch(login(user));
    }

    const logoutHandle = () =>{
        dispatch(logout(false));
    } */

    const login = user =>{
        loginHandle(user);
    }

    const logout = () =>{
        logoutHandle(false);
    }


  return (
    <div>
        <header className='header'>
            <h2>Logo</h2>
                {
                  /*   !user && (
                        <nav style={{display: 'flex', alignItems: 'end', justifyContent: 'end'}}>
                            <button onClick={() => loginHandle({id: 1, username: 'oguzcanayan'})}>Log in as Oğuzcan Ayan</button>
                            <button onClick={() => loginHandle({id: 2, username: 'oguzcanchannel'})}>Log in as oguzcanchannel</button>
                        </nav>
                    ) */
                     !user && (
                        <nav style={{display: 'flex', alignItems: 'end', justifyContent: 'end'}}>
                            <button onClick={() => login({id: 1, username: 'oguzcanayan'})}>Log in as Oğuzcan Ayan</button>
                            <button onClick={() => login({id: 2, username: 'oguzcanchannel'})}>Log in as oguzcanchannel</button>
                        </nav>
                    ) 
                }

                {
                 /*    user && (
                        <nav style={{display: 'flex', alignItems: 'end', justifyContent: 'end'}}>
                            Welcome, {user.username}
                            <button onClick={() => logoutHandle()}>Log out</button>
                        </nav>
                    ) */
                    user && (
                        <nav style={{display: 'flex', alignItems: 'end', justifyContent: 'end'}}>
                            Welcome, {user.username}
                            <button onClick={() => logout()}>Log out</button>
                        </nav>
                    )
                }
        </header>
    </div>
  )
}
