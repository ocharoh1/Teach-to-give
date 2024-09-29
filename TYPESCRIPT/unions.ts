import { Equal, Expect } from '@type-challenges/utils'; 

function getUsername(username: string | null) {
    if (username !== null) {
      return `User: ${username}`
    } else {
      return 'Guest'
    }const result = getUsername('Alice')

type test = Expect<Equal<typeof result, string>>

const result2 = getUsername(null)
  }

  const result = getUsername('Alice')

type test = Expect<Equal<typeof result, string>>

const result2 = getUsername(null)


// Exercise 2: Restricting Function Parameters

type direction = 'up' | 'down' | 'right' | 'left'

function move(direction: direction, distance: number) {
    // Move the specified distance in the given direction
  }

move('up-right', 20)

move ('up', 13)

