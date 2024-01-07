import { RiFolderUserLine } from 'react-icons/ri'
import { Container, Content, Icon, Title } from './FolderItem.styled'
import { FolderItemProps } from './FolderItem.type'

export function FolderItem({ title, isActive }: FolderItemProps) {
  return (
    <Container isActive={isActive}>
      <Icon>
        <RiFolderUserLine size={18} />
      </Icon>
      <Content>
        <Title>{title}</Title>
      </Content>
    </Container>
  )
}
