"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const menu = [
  { name: "공지사항", path: "/notice" },
  { name: "자주 묻는 질문", path: "/customer_service" },
  { name: "1:1 문의", path: "/personal_question" },
  { name: "제품 매뉴얼", path: "/manual" },
];

export default function InquiryPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("일반 문의");
  const [files, setFiles] = useState<File[]>([]); // 👈 파일 상태

  return (
    <div className="min-h-screen bg-[#05070d] text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-cyan-500/10 blur-[160px] rounded-full" />
      </div>

      {/* HEADER */}
      <header className="border-b border-white/10 bg-[#05070d]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="font-bold tracking-widest text-cyan-300">
            CUSTOMER CENTER
          </div>
        </div>
      </header>

      {/* BODY */}
      <div className="relative max-w-7xl mx-auto flex">

        {/* SIDEBAR */}
        <aside className="w-64 border-r border-white/10 min-h-screen p-6 hidden md:block">
          <ul className="space-y-4 text-sm text-gray-400">
            {menu.map((item, i) => (
              <li
                key={i}
                onClick={() => router.push(item.path)}
                className={`cursor-pointer transition ${
                  item.name === "1:1 문의"
                    ? "text-cyan-300 font-medium"
                    : "hover:text-white"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-10 max-w-4xl">

          {/* TITLE */}
          <div className="mb-10">
            <div className="text-xs text-gray-500">
              Support / Help Center
            </div>

            <h1 className="text-3xl font-semibold mt-2">
              1:1 문의
            </h1>

            <p className="text-gray-400 text-sm mt-3">
              문의 내용을 작성하면 빠르게 답변해드립니다
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-6">

            {/* CATEGORY */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                문의 유형
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#0b0f1a] border border-white/10 px-4 py-3 rounded-lg
                text-white focus:outline-none focus:border-cyan-400"
              >
                <option className="bg-white text-black">일반 문의</option>
                <option className="bg-white text-black">기술 지원</option>
                <option className="bg-white text-black">결제/구매</option>
                <option className="bg-white text-black">버그 신고</option>
              </select>
            </div>

            {/* TITLE */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                제목 <span className="text-red-500">*</span>
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="문의 제목을 입력하세요 "
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg
                text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* CONTENT */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                문의 내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="문의 내용을 자세히 작성해주세요"
                className="w-full h-48 bg-white/5 border border-white/10 px-4 py-3 rounded-lg
                text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* FILE */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                첨부 파일
              </label>

              {/* 실제 파일 input */}
              <input
                type="file"
                id="fileUpload"
                className="hidden"
                multiple
                onChange={(e) => {
                  if (e.target.files) {
                    setFiles(Array.from(e.target.files));
                  }
                }}
              />

              {/* UI */}
              <label
                htmlFor="fileUpload"
                className="block border border-dashed border-white/10 rounded-lg p-6 text-center hover:border-cyan-400 transition cursor-pointer"
              >
                <div className="text-gray-500 mb-2">
                  {files.length > 0
                    ? "선택된 파일"
                    : "파일을 드래그하거나 클릭하여 업로드"}
                </div>

                {files.length > 0 && (
                  <div className="mt-3 space-y-1 text-sm">
                    {files.map((file, i) => (
                      <div key={i} className="text-cyan-300">
                        ✔ {file.name}
                      </div>
                    ))}
                  </div>
                )}
              </label>
            </div>

            {/* SUBMIT */}
            <div className="pt-4">
              <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 transition rounded-lg text-black font-medium">
                문의 제출
              </button>
            </div>

          </div>

        </main>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-20 py-10 text-center text-xs text-gray-500">
        © ARGUS Support Center
      </footer>

    </div>
  );
}