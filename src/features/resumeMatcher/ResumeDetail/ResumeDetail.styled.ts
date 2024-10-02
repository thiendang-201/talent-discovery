import { ScrollArea } from '@components/ScrollView'
import styled from '@emotion/styled'
import { Document, Page } from 'react-pdf'

export const Container = styled.div({
  display: 'grid',
  gridTemplateColumns: '3fr 2fr',
})

export const DocumentWrapper = styled(ScrollArea)(({ theme }) => ({
  backgroundColor: theme.colors.gray3,
  display: 'flex',
  height: '100vh',
}))

export const StyledDocument = styled(Document)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  paddingBlock: '80px',
  gap: '16px',
})

export const StyledPage = styled(Page)({
  borderRadius: '10px',
  overflow: 'hidden',
})

export const InfoContainer = styled(ScrollArea)({
  height: '100vh',
})

export const BackButton = styled.p(({ theme }) => ({
  cursor: 'pointer',
  color: theme.colors.blue9,
  fontSize: '12px',
  ':hover': {
    opacity: 0.85,
  },
  marginBottom: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
}))

export const FullName = styled.h1({
  margin: 0,
  fontSize: '20px',
})

export const JobTitle = styled.p(({ theme }) => ({
  fontSize: '16px',
  color: theme.colors.slate10,
  fontWeight: 600,
}))

export const SectionHeading = styled.div({
  fontSize: '14px',
  fontWeight: 600,
  marginBottom: '6px',
})

export const SectionContainer = styled.div({
  marginBlock: '28px',
})

export const ContactItem = styled.p({
  fontSize: '12px',
  marginBlock: '2px',
})

export const BagdeWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  gap: '4px',
  flexWrap: 'wrap',

  span: {
    fontSize: '12px',
    display: 'inline-block',
    padding: '4px 8px',
    backgroundColor: theme.colors.slate4,
    borderRadius: '4px',
  },
}))

export const LinkWrapper = styled.div(({ theme }) => ({
  a: {
    display: 'block',
    marginBlock: '2px',
    textDecoration: 'underline',
    color: theme.colors.blue9,
  },
}))

export const EmptyMsg = styled.p(({ theme }) => ({
  color: theme.colors.slate10,
  fontSize: '12',
}))

export const InnerContainer = styled.div({
  padding: '36px',
})
