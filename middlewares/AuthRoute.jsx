export default function AuthRoute({ children }) {
  const isAuth = true;
  if (isAuth) {
    return children;
  } else {
    return <div>로그인 안됨</div>;
  }
}
