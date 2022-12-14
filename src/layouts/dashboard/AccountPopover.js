import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton } from '@mui/material';
// slices
import { onLogout } from 'services/slices/authSlice';
// components
import ProfileModal from './profileModal';
import MenuPopover from '../../components/MenuPopover';
// mocks_
import account from '../../_mock/account';


// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    id:'home',
    label: 'Home',
    icon: 'eva:home-fill',
    linkTo: '/',
  },
  {
    id:'profile',
    label: 'Profile',
    icon: 'eva:person-fill',
    linkTo: '#',
  },
  {
    id:'settings',
    label: 'Settings',
    icon: 'eva:settings-2-fill',
    linkTo: '#',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [openProfile, setOpenProfile] = useState(false);
  const [open, setOpen] = useState(null);
  const anchorRef = useRef(null);
  const dispatch = useDispatch();


  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleLogout = () => {
    setOpen(null);
    dispatch(onLogout());
  }

  const handleMenuClick = (key) => {
    if(key === 'profile'){
      openProfileModal();  
    }

    handleClose();

  }

  const openProfileModal = () => {
    setOpenProfile(true);
  }

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} to={option.linkTo} component={RouterLink} onClick={() => handleMenuClick(option.id)}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>

      {/* Profile Modal */}
      <ProfileModal 
        open={openProfile}
        onClose={() => setOpenProfile(false)}
      />
    </>
  );
}
