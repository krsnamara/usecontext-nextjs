import type { NextPage } from 'next'

const Form: NextPage = () => {
  return (
    <form action="/" method="POST">
      <div>
        <label htmlFor="email">Favorite Rock</label>
        <input type="text" name="rock" required={true} />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form
