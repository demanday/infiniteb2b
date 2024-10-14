import React from 'react';
import { useParams } from 'react-router-dom';

const VendorSolutionCenterPage = () => {
    const { name } = useParams();
     const decodedName = name.replace(/-/g, ' ');
    return <h1>Vender page {decodedName}</h1>
}
export default VendorSolutionCenterPage;