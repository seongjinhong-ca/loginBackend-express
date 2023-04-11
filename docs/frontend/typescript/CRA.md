# CRA (create-react-app) = webpack + Babel(loader) + JS

1. 프로젝트 생성
2. npm run start : 개발용 서버 실행 (development mode)
3. npm run build : production 빌드 (production mode)
4. npm run test : 테스트
5. npm run eject : 프로젝트 cra에서 꺼내기
   - 프로젝트 구조가 "이렇게" 있다가 "짠" 바뀐다.

additional : pwa 적용 (progressive web app)

결론: 설정은 이제 그만, 컴포넌트만 잘짜면 된다.
어휘분석
https://chanto11.tistory.com/43

## dto vs vo vs dao vs entity && layer pattern or layer architecture

dto : data transfer object
vo : value object == model??
dao : data access object == model??
entity
view <-> dto <-> Controller <-> dto <-> Service <-> vo <-> Service <-> dao <-> entity <-> DB

프레젠테이션 계층 (Presentation layer) - UI 계층 (UI layer)
애플리케이션 계층 (Application layer) - 서비스 계층 (Service layer)
비즈니스 논리 계층 (Business logic layer) - 도메인 계층 (Domain layer)
데이터 접근 계층 (Data access layer) - 영속 계층 (Persistence layer)

data
link:https://chanto11.tistory.com/53?category=848808

typescript tree
link: https://www.youtube.com/watch?v=bpyoN6zAePc&list=PLEOnZ6GeucBWaUzqrMvrl-_ernhNwLHOr&index=73

unknown

undefined <- void <- any -> null

HTML && DOM hierarchy (tree)
link : https://www.youtube.com/watch?v=R4lSqMa0bUk

https://dom.spec.whatwg.org/#interface-eventtarget

17:30

Function && Object hierarchy (tree)

typescript
https://www.zhenghao.io/posts/type-hierarchy-tree

js interview prep
https://velog.io/@hustle-dev/JS-%EB%A9%B4%EC%A0%91%EB%8C%80%EB%B9%84-%EA%B0%9C%EB%85%90%EC%A0%95%EB%A6%AC

useEffect:
https://www.youtube.com/watch?v=sZDvByH2mNU
if [] is empty, call run the instruction inside the useEffect only when the component is mounted
