"use client"; // 서버 또는 클라이언트 모든 환경에서 발생하는 error 를 대응할 수 있도록
import { startTransition, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  // reset 프롭은 클라이언트 쪽 reset
  const router = useRouter();
  useEffect(() => {
    console.log(error.message);
  }, [error]);
  return (
    <div>
      <h3>오류가 발생했습니다.</h3>
      {/* <button onClick={() => reset()}>다시 시도</button> */}
      {/* <button onClick={() => window.location.reload()}>
        서버 컴포넌트 다시 시도
      </button> */}
      <button
        onClick={() => {
          // 함수 하나를 인수로 받아서, 해당 함수 내부의 코드를 동기적으로 실행
          startTransition(() => {
            router.refresh(); // 현재 페이지에 필요한 서버컴포넌트들을 다시 불러옴
            reset(); // 에러 상태를 초기화, 컴포넌트들을 다시 렌더링
          });
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
