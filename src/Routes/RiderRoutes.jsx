import React from 'react';
import useAuth from '../Hooks/useAuth';
import useRoll from '../Hooks/useRoll';
import Forbidden from '../Component/Fobidden';

const RiderRoutes = ({children}) => {
    const { loading, user } = useAuth();
  const { role, roleLoading } = useRoll();
  

  if (loading || !user || roleLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  if (role !== "rider") {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default RiderRoutes;