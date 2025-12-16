import PopularMovie from "../frontpage/popularMovie"

export function Frontpage() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <PopularMovie />
        </header>
      </div>
    </main>
  )
}
