import React from 'react';

// @mui
import { Stack,Button, Grid,Typography } from '@mui/material';

// components
import CustomizedDialogs from "components/modal";
import ModalAction from "components/modal/modalAction";
import ModalContent from "components/modal/modalContent";


const CheckupViewModal = ({open,onClose,data}) => {

      const onEntering = () => {
          console.log("data",data)
        // we can use this function to set form values get from api
        // methods.setValue('firstName','test name');
      }

    return (
        <CustomizedDialogs 
        title={'Checkup Details'}
        open={open}
        size="md"
        handleClose={onClose}
        onEntering={onEntering}
        >

         <ModalContent>
          <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <div>
                    <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
                        Name
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" sx={{ display: 'block' }}>
                        {data?.name}
                    </Typography>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                    <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
                        Company
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" sx={{ display: 'block' }}>
                        {data?.company}
                    </Typography>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                    <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
                        Role
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" sx={{ display: 'block' }}>
                        {data?.role}
                    </Typography>
                    </div>
                </Grid>
            </Grid>
          </div>
        </ModalContent>
        <ModalAction>
          <Button autoFocus onClick={onClose}>
            Cancel
          </Button>
        </ModalAction>   
        </CustomizedDialogs>
    );
}


export default CheckupViewModal;