import { ReactElement } from 'react'
import { StyledList } from './SectionList.styled'
import { ScrollArea } from '@components/ScrollView'

type SectionListProps<T> = {
  data: T[]
  children: (item: T, index: number) => ReactElement
}

export function SectionList<TData>({ data, children: renderChildren }: SectionListProps<TData>) {
  return (
    <ScrollArea>
      <StyledList>{data.map((value, index) => renderChildren(value, index))}</StyledList>
    </ScrollArea>
  )
}
