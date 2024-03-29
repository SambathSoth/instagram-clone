import { useSession, signOut } from 'next-auth/react'

const MiniProfile = () => {
  const { data: session } = useSession()
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src={session?.user?.image}
        alt="mini profile"
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button onClick={signOut} className="text-sm text-blue-400">
        Sign Out
      </button>
    </div>
  )
}

export default MiniProfile
