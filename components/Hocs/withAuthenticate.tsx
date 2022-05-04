import React from "react";

const withAuthenticate = (WrappedComponent: any) => {
  const AuthenticatedRoute: React.FC<any> = (props) => {
    // check authentica here!
    return <WrappedComponent {...props} />;
  };
  return AuthenticatedRoute;
};
export default withAuthenticate;
