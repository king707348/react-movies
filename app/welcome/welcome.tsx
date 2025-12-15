

export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">

          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">

        </div>
      </div>
    </main>
  );
}

const fetchData = async () => {
  const url = 'https://api.themoviedb.org/3/authentication';
  const movie_api = import.meta.env.VITE_movies_token_auth
  const options = {
    methods: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${movie_api}`
    }
  }
  const response = await fetch(url, options)
  const data = await response.json()
  console.log(data)

  return 
}
fetchData()