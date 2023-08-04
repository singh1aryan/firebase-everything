export default function Login(params) {

    const handleLogin = () => {
        clearErrs();

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setPassword('');
                router.push('/');
            })
            .catch((err) => {
                const { code, message } = err;

                if (
                    code === 'auth/invalid-email' ||
                    code === 'auth/user-disabled' ||
                    code === 'auth/user-not-found'
                ) {
                    setEmailErr(message);
                }

                if (code === 'auth/wrong-password') {
                    setPasswordErr(message);
                }
            });
    };

    const authListener = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setPassword('');
                setUser(user);
            } else {
                setUser('');
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);


    return (<> <main className={css.container}>
        <Input
            htmlFor="email"
            label="Email"
            type="text"
            autoFocus={true}
            value={email}
            onChange={setEmail}
            err={emailErr}
        />
        <Input
            htmlFor="password"
            label="Password"
            type="password"
            autoFocus={false}
            value={password}
            onChange={setPassword}
            err={passwordErr}
        />
        <Button label="Login" onClick={handleLogin} />
    </main>
    </>);

}
