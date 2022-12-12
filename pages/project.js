import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

export default function project() {
  return (
    <Layout>
      <title>PROJECT</title>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  NEXTJS_TEST
                </h1>
                <p className="leading-relaxed mb-3">
                  수업시간에 처음으로 배운 next js 의 기초입니다.
                </p>
                <Link
                  legacyBehavior
                  href="https://github.com/progremer123/next-js"
                >
                  <a className="text-pink-500 inline-flex items-center">
                    GitHub
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
                <Link
                  legacyBehavior
                  href="https://next-js-iota-henna.vercel.app/contect"
                >
                  <a className="text-pink-500 inline-flex items-center">
                    VERCEL
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  NEXTJS_SHOP
                </h1>
                <p className="leading-relaxed mb-3">
                  nextjs을 적용하여 쇼핑몰을 만들었습니다.
                </p>
                <Link
                  legacyBehavior
                  href="https://github.com/progremer123/real-next-mall"
                >
                  <a className="text-pink-500 inline-flex items-center">
                    GitHub
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
                <Link legacyBehavior href="https://real-next-mall.vercel.app/">
                  <a className="text-pink-500 inline-flex items-center">
                    VERCEL
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  MERN
                </h1>
                <p className="leading-relaxed mb-3">
                  mern의 작동 방식과 구조를 배웠습니다.
                </p>
                <Link
                  legacyBehavior
                  href="https://github.com/progremer123/eqmeqwe"
                >
                  <a className="text-pink-500 inline-flex items-center">
                    GitHub
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                  팀프로잭트
                </h1>
                <p className="leading-relaxed mb-3">
                  수업내용을 기반하여 팀원들과 함께
                  동아리홍보사이트를만들었습니다.
                </p>
                <Link legacyBehavior href="https://fi-lime.vercel.app/">
                  <a className="text-pink-500 inline-flex items-center">
                    vercel
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
