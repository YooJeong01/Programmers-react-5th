import type { TiltOptions } from "vanilla-tilt";

export const TILT_CONFIG:TiltOptions = {
  reverse:true, // 기울어지는 방향 변경
  max: 35, // 최대 기울기 각도 (degree)
  startX: 0, // x축의 시작 기울기 (degree)
  startY: 0, // y축의 시작 기울기 (degree)
  perspective: 1000, // 값이 작을수록 물체와의 거리가 더 가까워짐 (기울기가 심해짐)
  scale: 1.2, // enter. exit 됐을때 값이 커지거나 작아지게
  speed: 600, // enter, exit  전환 속도
  axis: null, // x, y 축 활성화 여부(null: 양쪽 모두)
  // easing: "cubic-bezier(.03, .98, .52, .99)",
  glare : true,
}