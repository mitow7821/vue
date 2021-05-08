<template>
   <div>
      <div>
         <Form
            @submit="onSubmit"
            :validation-schema="schema"
            v-slot="{ errors }"
         >
            <div>
               <div>
                  <label>Title</label>
                  <Field
                     name="title"
                     as="select"
                     :class="{ 'is-invalid': errors.title }"
                  >
                     <option value=""></option>
                     <option value="Mr">Mr</option>
                     <option value="Mrs">Mrs</option>
                  </Field>
                  <div class="invalid-feedback">{{ errors.title }}</div>
               </div>
               <div>
                  <label>First Name</label>
                  <Field
                     name="firstName"
                     type="text"
                     :class="{ 'is-invalid': errors.firstName }"
                  />
                  <div class="invalid-feedback">{{ errors.firstName }}</div>
               </div>
            </div>
            <div>
               <div>
                  <label>Date of Birth</label>
                  <Field
                     name="dob"
                     type="date"
                     :class="{ 'is-invalid': errors.dob }"
                  />
                  <div class="invalid-feedback">{{ errors.dob }}</div>
               </div>
               <div>
                  <label>Email</label>
                  <Field
                     name="email"
                     type="text"
                     :class="{ 'is-invalid': errors.email }"
                  />
                  <div class="invalid-feedback">{{ errors.email }}</div>
               </div>
            </div>
            <div>
               <div>
                  <label>Password</label>
                  <Field
                     name="password"
                     type="password"
                     :class="{ 'is-invalid': errors.password }"
                  />
                  <div class="invalid-feedback">{{ errors.password }}</div>
               </div>
               <div>
                  <label>Confirm Password</label>
                  <Field
                     name="confirmPassword"
                     type="password"
                     :class="{ 'is-invalid': errors.confirmPassword }"
                  />
                  <div class="invalid-feedback">
                     {{ errors.confirmPassword }}
                  </div>
               </div>
            </div>
            <div>
               <Field
                  name="acceptTerms"
                  type="checkbox"
                  id="acceptTerms"
                  value="true"
                  :class="{ 'is-invalid': errors.acceptTerms }"
               />
               <label for="acceptTerms">Accept Terms & Conditions</label>
               <div class="invalid-feedback">{{ errors.acceptTerms }}</div>
            </div>
            <div>
               <button type="submit">Register</button>
            </div>
         </Form>
      </div>
   </div>
</template>

<script>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

export default {
   components: {
      Form,
      Field,
   },
   setup() {
      const schema = Yup.object().shape({
         title: Yup.string().required('Title is required'),
         firstName: Yup.string().required('First Name is required'),
         lastName: Yup.string().required('Last name is required'),
         dob: Yup.string()
            .required('Date of Birth is required')
            .matches(
               /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
               'Date of Birth must be a valid date in the format YYYY-MM-DD'
            ),
         email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
         password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
         confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
         acceptTerms: Yup.string().required('Accept Ts & Cs is required'),
      });

      const onSubmit = values => {
         // display form values on success
         alert('SUCCESS\n\n' + JSON.stringify(values, null, 4));
      };

      return {
         schema,
         onSubmit,
      };
   },
};
</script>
<style scoped>
.invalid-feedback {
   color: red;
}
</style>
