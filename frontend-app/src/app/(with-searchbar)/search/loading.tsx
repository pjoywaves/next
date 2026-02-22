export default function Loading() {
  // 레이아웃처럼 해당 경로, 하위에 있는 모든 페이지에 반영됌
  // 비동기가 필요한 페이지에만 반영
  // page 단위에만 loading.tsx 를 활용한 스트리밍 설정이 가능하다.
  // 컴포넌트, 레이아웃에 스트리밍이 필요하다면 suspense 컴포넌트를 활용해야한다.
  // 페이지의 경로가 변경될때에 loading.tsx 를 활용한 스트리밍이 적용된다.
  return <div>Loading</div>;
}
