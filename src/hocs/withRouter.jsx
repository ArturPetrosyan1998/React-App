import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { parse } from 'qs';

export const withRouter = (Component) => {
  const Wrapper = () => {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const searchParams = parse(location.search, { ignoreQueryPrefix: true });

    return (
      <Component
        navigate={navigate}
        params={params}
        location={location}
        searchParams={searchParams}
      />
    );
  };
  return Wrapper;
};
