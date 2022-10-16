import React from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack,Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// components
import CustomizedDialogs from "components/modal";
import ModalAction from "components/modal/modalAction";
import ModalContent from "components/modal/modalContent";
import { FormProvider, RHFTextField } from 'components/hook-form';


const ProfileModal = ({open,onClose}) => {

    const ProfileSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
      });
    
      const defaultValues = {
        firstName:'',
        lastName:'',
        email: ''
      };
    
      const methods = useForm({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
      });
    
      const {
        handleSubmit,
        formState: { isSubmitting },
      } = methods;
    
      const onSubmit = async (e) => {
        console.log("onsubmit",e)
      };

      const onEntering = () => {
        // we can use this function to set form values get from api
        // methods.setValue('firstName','test name');
      }

    return (
        <CustomizedDialogs 
        title={'Profile'}
        open={open}
        size="md"
        handleClose={onClose}
        onEntering={onEntering}
        >

         <ModalContent>
          <div>
            <FormProvider methods={methods}>
                <Stack spacing={3}>
                    <RHFTextField name="firstName" label="First Name" />
                    <RHFTextField name="lastName" label="Last Name" />
                    <RHFTextField name="email" label="Email address" />
                </Stack>
            </FormProvider>
          </div>
        </ModalContent>
        <ModalAction>
        <LoadingButton  size="small" type="button" variant="contained" loading={isSubmitting} onClick={handleSubmit(onSubmit)}>
                    Save
                </LoadingButton>
          <Button autoFocus onClick={onClose}>
            Cancel
          </Button>
        </ModalAction>   
        </CustomizedDialogs>
    );
}


export default ProfileModal;