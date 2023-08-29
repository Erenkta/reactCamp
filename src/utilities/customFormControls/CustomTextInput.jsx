import { useField } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'

export default function CustomTextInput({...props}) {
    const [field,meta] = useField(props)



  return (
    <FormField error = {meta.touched && !!meta.error}> {/* !! ile String ifadeleri true false yapabiliriz*/}
        <input {...field} {...props}/>{/* field ve props'tan gelen değerleri input ile eşleştirdik */}
        {meta.touched && !!meta.error ? (
            <Label pointing basic color = "red" content={!!props.message ? props.message : meta.error}></Label> //Bu tarz bişi de yapılabilir
        ):null}
    </FormField>
  )
}
