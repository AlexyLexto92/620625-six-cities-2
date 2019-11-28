import React from 'react';
import { connect } from 'react-redux';

export const hocWithActiveItems = (Component) => {
    return (props) => < Component {...props }

    />
}
