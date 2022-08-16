import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ListCategory from '../../adminpages/categories/ListCategory';
import BookList from '../book/BookList';
import HomeCategoryList from '../../components/homeCategoryList/HomeCategoryList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function Home() {
  
  return (
    <div>
    <Grid container spacing={2}>

  <Grid item xs={3}>
    <Item> <HomeCategoryList/> </Item>
  </Grid>
  <Grid item xs={9}>
    <Item><BookList /></Item>
  </Grid>
</Grid>

  
    
    </div>
  )
}
