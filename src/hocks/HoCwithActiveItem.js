import React from 'react';
import { connect } from 'react-redux';

export hocWithActiveItems = (Component) => {
    return (props) => < Component {...props }
    style = {
        Object.assign({}, props.style || {}, {
            backgroundColor: "red"
        })
    }
    />
}
