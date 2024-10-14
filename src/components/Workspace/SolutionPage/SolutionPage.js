import React from 'react';
import { useParams } from 'react-router-dom';

const SolutionPage = () => {
    const { name } = useParams();
     const decodedName = name.replace(/-/g, ' ');
    return <h1>Solution page {decodedName}</h1>
}
export default SolutionPage;