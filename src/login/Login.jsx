import React from 'react';
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return <div>
        <h1>Login</h1>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return <div>
        <LoginForm/>
        <LoginReduxForm/>
    </div>
}

export default Login;
