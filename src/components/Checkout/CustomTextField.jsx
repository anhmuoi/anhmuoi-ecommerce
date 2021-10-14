import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

function CustomTextField({ name, label, required }) {


    const { control } = useForm();
    const isError = false;
    return (
        <Grid item xs={12} sm={6}>
      <Controller
        rules={{
            required: required
        }}
        render={({ field }) => <TextField
            {...field}
            onChange={field.onChange}
            value={field.value || ''}
        name={name}
        label={label}
        fullWidth
        error={isError}
        
        />}
        
         control={control}
      />
    </Grid>
    );
}

export default CustomTextField;