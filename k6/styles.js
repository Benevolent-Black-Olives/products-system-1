import { sleep, check } from 'k6';
import http from 'k6/http';

export const options = {
  vus: 1000,
  duration: '30s',
};

/**
 * One product aggregate test. Attempting to display id's between 970,000 and 1,000,000.
 */
export default () => {
  const randomId = Math.floor(Math.random() * 30000 + 970000);
  const res = http.get(http.url`http://localhost:3021/api/products/${randomId}/styles`);

  check(res, { 'status was 200': (r) => r.status === 200 });

  sleep(1);
};
