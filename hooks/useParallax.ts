import { useTransform } from "framer-motion"

export function useParallax(progress: any, distance: number) {
  return useTransform(progress, [0, 1], [0, distance])
}

