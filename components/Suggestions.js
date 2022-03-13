import { useEffect, useState } from 'react'
import faker from 'faker'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="mt-3 flex items-center justify-between"
        >
          <img
            className="h-10 w-10 rounded-full border p-[2px]"
            src={'https://i.pravatar.cc/150?img=' + profile.id}
            alt=""
          />

          <div className="ml-4 flex-1">
            <h2 className="text-sm font-semibold">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Work at {profile.company.name}
            </h3>
          </div>

          <button className="ml-2 text-xs text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
