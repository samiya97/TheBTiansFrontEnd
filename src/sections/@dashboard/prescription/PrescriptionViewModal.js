import React from 'react';

// @mui
import { Stack,Button, Grid,Typography } from '@mui/material';

// components
import CustomizedDialogs from "components/modal";
import ModalAction from "components/modal/modalAction";
import ModalContent from "components/modal/modalContent";


const PrescriptionViewModal = ({open,onClose,data}) => {

      const onEntering = () => {
          console.log("data",data)
        // we can use this function to set form values get from api
        // methods.setValue('firstName','test name');
      }

    return (
        <CustomizedDialogs 
        title={'Prescription Details'}
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
                        Medicine
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" sx={{ display: 'block' }}>
                        {data?.Medicines}
                    </Typography>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                    <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
                    Dosage
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" sx={{ display: 'block' }}>
                        {data?.Dosage}
                    </Typography>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                    <Typography gutterBottom variant="caption" sx={{ color: 'text.disabled', display: 'block' }}>
                    Instruction
                    </Typography>
                    <Typography gutterBottom variant="subtitle2" sx={{ display: 'block' }}>
                        {data?.Instruction}
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


export default PrescriptionViewModal;