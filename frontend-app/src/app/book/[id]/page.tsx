import { BookData } from "@/types";
import style from "./page.module.css";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;

  // [데이터 캐시]
  // cache :
  // - "force-cache"
  // - "no-store" : 데이터 페칭의 결과를 저장하지 않는 옵션, 캐싱을 아예 하지 않도록 설정하는 옵션

  // next :
  // - {revalidate: 10}
  // - {tags: ['a']}
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`,
    { cache: "force-cache" },
  );
  if (!response.ok) return <div>오류가 발생했습니다 ...</div>;
  const book: BookData = await response.json();

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
