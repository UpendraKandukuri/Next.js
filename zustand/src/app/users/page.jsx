'use client';
import React from 'react';
import { useUserStore } from '@/store/userStore';

export default function Page() {
  const { user, updateField, resetUser } = useUserStore();

  return (
    <div className="p-4 space-y-4 flex flex-col w-fit">
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(e) => updateField('name', e.target.value)}
        className='border py-1 rounded-md'
      />
      <input
        type="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => updateField('email', e.target.value)}
                className='border py-1 rounded-md'
      />
      <input
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => updateField('password', e.target.value)}
                className='border py-1 rounded-md'
      />
      <button onClick={resetUser}         className='border py-1 rounded-md'>Reset</button>

      <div>
        <h3>User Info:</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Password: {user.password}</p>
      </div>
    </div>
  );
}
