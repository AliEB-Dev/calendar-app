interface AuthErrorProps {
    error : string 
}

function AuthError({error}:AuthErrorProps) {
    if(!error) return null;

    return (
        <p className="text-rose-500 text-sm text-center bg-rose-50 rounded-xl py-2.5 px-3">
            {error}
        </p>
    )
}

export default AuthError;