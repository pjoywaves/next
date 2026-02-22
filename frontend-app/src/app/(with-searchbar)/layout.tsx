import { ReactNode, Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 클라이언트 라우트 캐시에 의해서 중복되어 사용되는 layout은 페이지에 변화에 따라 새롭게 호출되지 않는다. 새로고침은 예외 */}
      {/* <div>{new Date().toLocaleString()}</div> */}
      {/* suspense 미결 미완성 .. 대체 ui.. 비동기작업이 완료될때까지*/}
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
