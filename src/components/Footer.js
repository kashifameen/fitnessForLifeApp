import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Logo from '../assets/images/Logo-2.png';

const Footer = () => {
  return (
    <Box mt="80px" >
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" width="40px" height="110px" bgcolor="black" />
        <Typography variant="h5" pb="40px" mt="30px">
          Made by Kashif Ameen
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer