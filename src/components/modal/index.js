import React from 'react';
import PropTypes from 'prop-types';

// @mui
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

// component
import ModalTitle from './modalTitle';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));


export default function CustomizedDialogs({title,size="md",open,handleClose,onEntering,children}) {
  return (
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={size}
        fullWidth
        TransitionProps={{ onEntering }}
      >
        <ModalTitle id="customized-dialog-title" onClose={handleClose}>
          {title}
        </ModalTitle>
        {children}
      </BootstrapDialog>
  );
}

CustomizedDialogs.propTypes = {
    title:PropTypes.string,
    size:PropTypes.string,
    open:PropTypes.bool.isRequired,
    handleClose:PropTypes.func.isRequired,
    onEntering:PropTypes.func,
    children: PropTypes.node,
  };

CustomizedDialogs.defaultProps = {
    title:'Title',
    size:'md',
    onEntering:() => console.log('onEntering'),
  };
