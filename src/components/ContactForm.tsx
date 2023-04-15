import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from '../api/server'
import { useDispatch, useStore } from 'react-redux';
import { chooseName, chooseEmail, chooseStreet_Address, choosePhone, chooseCity, chooseState, chooseZip } from "../redux/slices/RootSlice";

// interfaces

interface ContactFormProps {
  id?: string[]
}

const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      // Use dispatch to update our state in our store
      dispatch(chooseName(data.name));
      dispatch(chooseEmail(data.email));
      dispatch(choosePhone(data.phone_number));
      dispatch(chooseStreet_Address(data.street_address));
      dispatch(chooseCity(data.city));
      dispatch(chooseState(data.state));
      dispatch(chooseZip(data.zip));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 500);
    }
    
  }

  return (


    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Contact Name</label>
          <Input {...register('name')} name='name' placeholder="Name"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input {...register('email')} name='email' placeholder="Email"/>
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <Input {...register('phone_number')} name='phone_number' placeholder="Phone Number"/>
        </div>
        <div>
          <label htmlFor="street_address">Street Address</label>
          <Input {...register('street_address')} name='street_address' placeholder="Street Address"/>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <Input {...register('city')} name='city' placeholder="City"/>
        </div>
        <div>
          <label htmlFor="state">State</label>
          <Input {...register('state')} name='state' placeholder="State"/>
        </div>
        <div>
          <label htmlFor="zip">Zip</label>
          <Input {...register('zip')} name='zip' placeholder="Zip"/>
        </div>
        <div className="flex p-1">
          <Button
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm