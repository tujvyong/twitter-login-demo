import TwitterLogin from "react-twitter-login";
const TwitterPage = () => {
  const authHandler = (err, data) => {
    console.log(err, data);
  };
  return (
    <div>
      <TwitterLogin
        authCallback={authHandler}
        consumerKey={"9jG3vtehom329KkWkQZajJ4qM"}
        consumerSecret={"zjU95vgiXcrXfX0jwleLDOkRilLKMCTsESgkXMJDnIR8GuHELh"}
      />
    </div>
  );
};

export default TwitterPage;
