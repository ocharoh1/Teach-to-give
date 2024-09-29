function getUsername(username: string | null) {
  if (username !== null) {
    return `User: ${username}`;
  } else {
    return "Guest";
  }
}

const result = getUsername("Alice");

const result2 = getUsername(null);

function validateUsername(username: string | null): boolean {
  if (username === null || username.length <= 5) {
    return false;
  }
  return true;
}

describe("validateUsername", () => {
  it("should return true for valid usernames", () => {
    expect(validateUsername("Matt1234")).toBe(true);
    expect(validateUsername("Alice")).toBe(false);
    expect(validateUsername("Bob")).toBe(false);
  });
});

import { Equal, Expect } from "@type-challenges/utils";

const appElement = document.getElementById('app');
type Test = Expect<Equal<typeof appElement, HTMLElement | null>>;




type APIResponse =
  | {
      data: {
        id: string;
      };
    }
  | {
      error: string;
    };

const handleResponse = (response: APIResponse) => {
  if ('data' in response) {
    return response.data.id;
  } else {
    throw new Error(response.error);
  }
};


test('passes the test even with the error', () => {
  expect(() =>
    handleResponse({
      error: 'Invalid argument',
    }),
  ).toEqual('Invalid argument');

  expect(
    handleResponse({
      data: { id: '123' },
    }),
  ).toEqual('123');
});
