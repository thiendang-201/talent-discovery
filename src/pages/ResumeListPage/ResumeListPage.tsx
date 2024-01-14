import * as Header from '@components/Header'
import { useTheme } from '@emotion/react'

import {
  Container,
  StyledFolders,
  StyledHeader,
  StyledSubHeader,
  UploadButton,
  StyledHeaderRight,
  ContentContainer,
} from './ResumeListPage.styled'
import {
  RiDeleteBin6Line,
  RiFileUploadFill,
  RiFolderUserLine,
  RiShareForward2Fill,
} from 'react-icons/ri'
import { FaCaretDown } from 'react-icons/fa'
import Button, { IconButton } from '@components/Button'
import { ViewMode } from '@components/ViewMode'
import { VIEW_MODE } from '@/constants'
import { useState } from 'react'
import { FileList, ResumeFilter } from '@features/resumeMatcher'

// mock
const files = [
  {
    id: '1',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '2',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '3',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '4',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '5',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '6',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '7',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '8',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
  {
    id: '9',
    candidateName: 'Nguyen Van A',
    jobTitle: 'Fresher ReactJS',
  },
]

export default function ResumeListPage() {
  const { colors } = useTheme()
  const [viewMode, setViewMode] = useState(VIEW_MODE.grid)

  return (
    <Container>
      <StyledFolders />
      <ContentContainer>
        <StyledHeader>
          <Header.Left>
            <RiFolderUserLine color={colors.slate12} size={22} />
          </Header.Left>
          <Header.Heading>Tuyển dụng FE 08/2023</Header.Heading>
          <StyledHeaderRight>
            <IconButton variant='clear' color='gray'>
              <RiDeleteBin6Line size={16} />
            </IconButton>
            <IconButton variant='clear' color='gray'>
              <RiShareForward2Fill size={16} />
            </IconButton>
            <UploadButton>
              <input type='file' multiple max={5} accept='.pdf' />
              Tải lên <RiFileUploadFill size={16} />
            </UploadButton>
          </StyledHeaderRight>
        </StyledHeader>
        <StyledSubHeader>
          <Header.Left>
            <Button variant='soft' color='gray'>
              Bộ lọc <FaCaretDown />
            </Button>
          </Header.Left>
          <div></div>
          <StyledHeaderRight>
            <ViewMode mode={viewMode} onChangeMode={setViewMode} />
          </StyledHeaderRight>
        </StyledSubHeader>
        <FileList files={files} />
      </ContentContainer>
      <ResumeFilter />
    </Container>
  )
}
