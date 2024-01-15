import GrandChild from '@/components/GrandChild'

export function Child() {
  return (
    <div className="flex flex-col items-center border border-solid border-slate-800 m-5 p-10 rounded-md bg-yellow-200">
      <div className="border-b-orange-600 border-b-4">Child Component</div>
      {/* <div className="text-3xl font-bold mb-4"> Favorite Rock: {user.rock}</div> */}
      <div>
        <GrandChild />
      </div>
    </div>
  )
}
