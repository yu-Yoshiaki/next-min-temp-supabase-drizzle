/* eslint-disable react-dom/no-missing-button-type */
import { signout } from '@/app/(auth)/logout/actions'
import { createClient } from '@/lib/supabase/server'

import { redirect } from 'next/navigation'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className="space-y-10 p-10">
      <p>
        Email:
        {' '}
        {data.user.email}
      </p>
      <form className="flex flex-col gap-4">
        <button formAction={signout} className="bg-red-600 text-white">Sign out</button>
      </form>
    </div>
  )
}
