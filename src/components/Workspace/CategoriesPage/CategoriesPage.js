import React from 'react';
import { useParams } from 'react-router-dom';

const CategoriesPage = () => {
    const { name } = useParams();
     const decodedName = name.replace(/-/g, ' ');
    return <h1>Categories page {decodedName}</h1>
}
export default CategoriesPage;