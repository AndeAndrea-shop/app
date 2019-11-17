import * as React from 'react';
//import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
	  <h1>idk321</h1>
    </Typography>
  );
}

Title.propTypes = {
	//children: PropTypes.node,
};
