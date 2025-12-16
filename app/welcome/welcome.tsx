import React, {useState, useEffect} from "react"

export function Welcome() {
  const [data, setData] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = 'https://api.themoviedb.org/3/authentication'
        const movie_api = import.meta.env.VITE_movies_token_auth
        const options: RequestInit = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${movie_api}`
          }
        }

        const response = await fetch(url, options)
        const json = await response.json()
        console.log('fetch response', response.status, json)

        setData(json)
      } catch (err) {
        console.error('Failed to fetch movie auth:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  
  useEffect(() => {
    console.log('data changed', data)
  }, [data])

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            {loading ? 
              <p>Loading…</p> : 
              <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>
            }
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4"></div>
      </div>
    </main>
  )
}
