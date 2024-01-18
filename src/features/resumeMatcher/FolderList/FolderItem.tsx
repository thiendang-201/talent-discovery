import { RiFolderUserLine } from 'react-icons/ri'
import { format } from 'date-fns'
import { Container, Content, CreatedDate, Icon, Title } from './FolderItem.styled'
import { FolderItemProps } from './FolderItem.type'

export function FolderItem({ title, isActive, createdDate }: FolderItemProps) {
  const formattedCreatedDate = format(createdDate, 'dd/MM/yyyy')

  return (
    <Container isActive={isActive}>
      <Icon>
        <RiFolderUserLine size={18} />
      </Icon>
      <Content>
        <Title>{title}</Title>
        <CreatedDate>{formattedCreatedDate}</CreatedDate>
      </Content>
    </Container>
  )
}
