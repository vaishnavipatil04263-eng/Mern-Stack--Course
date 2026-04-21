import React from 'react'

const Login = () => {
    return (
        <div>
            <h1>Login</h1>

            <form>
                <input type="text" placeholder='Enter Email' />
                 <input type="text" placeholder='Enter Password' />

                 <button>
                    <a href="/item">Login</a>
                    </button>

                 <p className='text-danger'>Don't have an account? <a href="/register">Register</a></p>
            </form>

        </div>
    )
}

export default Login 