import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header'

// Browser
const signin = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="-mt-56 flex min-h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img className="w-56" src="https://links.papareact.com/ocw" alt="" />
        <p className="text-md italic">Hello My Friends!</p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

// Server side render
export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default signin
