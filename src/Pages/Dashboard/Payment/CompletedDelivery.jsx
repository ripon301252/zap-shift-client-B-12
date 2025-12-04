import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const CompletedDelivery = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {} = useQuery({
        queryKey: ['parcels', user.email, "driver_assigned"],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/parcels/rider?`)
        }
    })

    return (
        <div>
            <h2 className='text-5xl'>Completed Delivery :  </h2>
        </div>
    );
};

export default CompletedDelivery;