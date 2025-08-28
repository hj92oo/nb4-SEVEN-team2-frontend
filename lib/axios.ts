import * as Axios from 'axios';

// 환경 변수가 없는 경우 명확히 에러
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined');
}

export const axios = Axios.default.create({
  baseURL: BASE_URL, // SSR에서도 절대 URL 사용
});

// 요청 인터셉터로 로그 확인
axios.interceptors.request.use((config) => {
  console.log(
    `[프론트 SSR] ${config.method?.toUpperCase()} ${config.baseURL}${
      config.url
    }`
  );
  return config;
});
