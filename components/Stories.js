import { useEffect, useState } from 'react'
import faker from 'faker'
import Story from './Story'
import { useSession } from 'next-auth/react'

const Stories = () => {
  const { data: session } = useSession()
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-scroll rounded-sm border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}

      {suggestions.map((profile) => (
        <Story key={profile.id} id={profile.id} username={profile.username} />
      ))}
    </div>
  )
}

export default Stories
