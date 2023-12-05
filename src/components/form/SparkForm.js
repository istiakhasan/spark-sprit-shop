"use client"
import { useForm, FormProvider, useFormContext } from "react-hook-form"
export default function SparkForm({children,submitHandler,defaultValues,resolver}) {
   const formConfig={} 
   if(!!defaultValues) formConfig["defaultValues"]=defaultValues
   if(!!resolver) formConfig["resolver"]=resolver
  const methods = useForm(formConfig)
  const onSubmit = (data) => {
    submitHandler(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}


