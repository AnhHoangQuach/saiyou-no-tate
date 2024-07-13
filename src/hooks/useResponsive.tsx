import { useWindowSize } from "react-use"

const useResponsive = () => {
  const { width } = useWindowSize()
  return {
    isDesktop: width >= 1280,
    isMobile: width < 600,
    isTablet: width >= 600 && width < 1280,
  }
}

export default useResponsive
