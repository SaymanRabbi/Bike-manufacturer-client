import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTittle = ({location}) => {
    return (
        <div>
            <Helmet>

                <title>{location}</title>
            </Helmet>
        </div>
    );
};

export default PageTittle;