import PropTypes from 'prop-types';

// @mui
import DialogActions from '@mui/material/DialogActions';

const ModalAction = (props) => {
    const { children, ...other } = props;

    return (
      <DialogActions {...other}>
        {children}
      </DialogActions>
    );
  };
  
  ModalAction.propTypes = {
    children: PropTypes.node,
  };


export default ModalAction;