import css from './index.module.css'

const Login = () => {
    return(
        <div className={css.authParentDiv}> 
            <form className={css.authForm}>
                <h2>Log in</h2>
                <input className={css.authFormInput} required autoComplete="off" placeholder="Email" type="email"/>
                <input className={css.authFormInput} required autoComplete="off" placeholder="Password" type="password"/>
                <button className={css.authFormBtn} type="submit">Login</button>
            </form> 
        </div>
    );
};

export default Login;