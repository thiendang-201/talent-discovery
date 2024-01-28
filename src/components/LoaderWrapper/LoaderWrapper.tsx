import { useTheme } from '@emotion/react'
import { PropsWithChildren, ReactNode } from 'react'
import { TailSpin, TailSpinProps } from 'react-loader-spinner'
import { EmptyMsg, LoadingWrapper } from './LoaderWrapper.styled'

type LoaderWrapperProps = {
  isLoading: boolean
  isEmpty: boolean
  loadingFallback?: ReactNode
  emptyFallback?: ReactNode
}

function LoaderWrapper({
  isEmpty,
  isLoading,
  children,
  loadingFallback,
  emptyFallback,
}: PropsWithChildren<LoaderWrapperProps>) {
  if (isLoading) {
    return loadingFallback ?? <Loading />
  }

  if (isEmpty) {
    return emptyFallback ?? <EmptyMsg>Trống</EmptyMsg>
  }

  return children
}

const Loading = (props: TailSpinProps) => {
  const { colors } = useTheme()
  return (
    <LoadingWrapper>
      <TailSpin
        visible={true}
        height={28}
        width={28}
        color={colors.blue9}
        radius='1'
        strokeWidth={4}
        {...props}
      />
    </LoadingWrapper>
  )
}

export { LoaderWrapper, Loading, EmptyMsg }
