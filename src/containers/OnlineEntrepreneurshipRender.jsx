import React, { useState, Fragment } from 'react';
import { OnlineEntrepreneurship } from '../components';
import PropTypes from 'prop-types';

const OnlineEntrepreneurshipRender = ({ alone }) => {
    const [loading, setLoading] = useState(true);

    const OnlineEntrepreneurshipImage = new Image();
    OnlineEntrepreneurshipImage.src = require('../assets/static/woman-drinking-coffee.jpg').default;

    OnlineEntrepreneurshipImage.onload = () => {
        setLoading(false);
    }

    return (
        <Fragment>
            {loading ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> :
                <Fragment>
                    <OnlineEntrepreneurship src={OnlineEntrepreneurshipImage.src} alone={alone} />
                </Fragment>
            }
        </Fragment>
    )
};

OnlineEntrepreneurshipRender.propTypes = {
    alone: PropTypes.bool,
};

export default OnlineEntrepreneurshipRender;
