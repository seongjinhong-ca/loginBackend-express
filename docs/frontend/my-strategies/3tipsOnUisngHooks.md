useCustomHook:
https://www.youtube.com/watch?v=8nivWAgV-AI

https://velog.io/@jse4159/%EC%B2%98%EC%9D%8C-%EB%A7%8C%EB%82%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8React-section-7.-Hooks-3-Hook%EC%9D%98-%EA%B7%9C%EC%B9%99%EA%B3%BC-Custom-Hook-%EB%A7%8C%EB%93%A4%EA%B8%B0

핵심: hooks and closure

3 tips for using hooks

1. 컴포넌트 안에서만 작동
   custom hook에서만 호출 가능
   or
   functional component에서만 호출 가능

2. 컴포넌트 내에서 최상위 scope에서 호출해야한다.

- if, for loop, while loop 등 컴포넌트 내에서 또다른 scope 안에서 hook을 호출하면 안된다.
  error link:
  https://velog.io/@lsx2003/React-Hook-%EA%B7%9C%EC%B9%99
