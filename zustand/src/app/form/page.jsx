'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  age: z.number({ invalid_type_error: 'Age is required' }).min(1, 'Enter valid age'),
  address: z.object({
    street: z.string().min(1, 'Street is required'),
    village: z.string().min(1, 'Village is required'),
  }),
  hobbies: z.array(z.string().min(1)).min(1, 'Enter at least one hobby'),
  gender: z.enum(['male', 'female'], { required_error: 'Gender is required' }),
  department: z.string().min(1, 'Select a department'),
});

export default function FormPage() {
  const [hobbyInput, setHobbyInput] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
  name: '',
  email: '',
  password: '',
  age: '',
  address: {
    street: '',
    village: '',
  },
  hobbies: [],
  gender: '',
  department: '',
},
  });

  const handleHobbyChange = (e) => {
    const value = e.target.value;
    setHobbyInput(value);
    const hobbyArray = value
      .split(',')
      .map((h) => h.trim())
      .filter((h) => h !== '');
    setValue('hobbies', hobbyArray, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    console.log('✅ Form Data:', data);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <input
            type="text"
            placeholder="Name"
            {...register('name')}
            className="w-full border p-2"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className="w-full border p-2"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
            className="w-full border p-2"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        <div>
          <input
            type="number"
            placeholder="Age"
            {...register('age', { valueAsNumber: true })}
            className="w-full border p-2"
          />
          {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Street"
            {...register('address.street')}
            className="w-full border p-2"
          />
          {errors.address?.street && (
            <p className="text-red-500">{errors.address.street.message}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Village"
            {...register('address.village')}
            className="w-full border p-2"
          />
          {errors.address?.village && (
            <p className="text-red-500">{errors.address.village.message}</p>
          )}
        </div>

        <div>
          <input
            value={hobbyInput}
            onChange={handleHobbyChange}
            placeholder="Hobbies (e.g., reading, music)"
            className="w-full border p-2"
          />
          {errors.hobbies && <p className="text-red-500">{errors.hobbies.message}</p>}
        </div>

        <div className="flex gap-4">
          <label>
            <input type="radio" value="male" {...register('gender')} /> Male
          </label>
          <label>
            <input type="radio" value="female" {...register('gender')} /> Female
          </label>
        </div>
        {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}

        <div>
          <select {...register('department')} className="w-full border p-2">
            <option value="">Select Department</option>
            <option value="cse">CSE</option>
            <option value="ece">ECE</option>
            <option value="mech">Mechanical</option>
          </select>
          {errors.department && <p className="text-red-500">{errors.department.message}</p>}
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
