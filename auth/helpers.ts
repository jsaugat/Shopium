/**
* Server-side authentication actions for Next.js
* 
* Provides secure authentication functions that execute on the server side using NextAuth.js.
* These actions can be imported and called directly from client components to handle
* user authentication flows.
*
* @note These functions are marked with 'use server' and will always execute
* on the server side, making them secure for handling authentication operations.
*/

"use server";

import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from ".";

export async function signIn() {
  await nextAuthSignIn();
}

export async function signOut() {
  await nextAuthSignOut();
}



/**
 * @Usage_example in a client-side component:
* ```tsx
* import { signIn, signOut } from './auth/actions'
* 
* <button onClick={() => signIn()}>Login</button>
* <button onClick={() => signOut()}>Logout</button>
* ```
 */