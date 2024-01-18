import Button, { IconButton } from '@components/Button'
import { ViewMode } from '@components/ViewMode'
import * as Header from '@components/Header'
// import { FaCaretDown } from 'react-icons/fa'
import {
  RiFolderUserLine,
  RiDeleteBin6Line,
  RiShareForward2Fill,
  RiFileUploadFill,
} from 'react-icons/ri'
import { StyledHeader, StyledHeaderRight, StyledSubHeader } from '../ResumeListPage.styled'
import { useTheme } from '@emotion/react'
import { useState } from 'react'
import { VIEW_MODE } from '@/constants'
import { useUploadResumes } from '@features/resumeMatcher'

export function ResumeListPageHeader() {
  const { colors } = useTheme()
  const [viewMode, setViewMode] = useState(VIEW_MODE.grid)
  const openUploadResumeDialog = useUploadResumes(state => state.openUploadResumeDialog)

  return (
    <>
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
          <Button onClick={openUploadResumeDialog}>
            Tải lên <RiFileUploadFill size={16} />
          </Button>
        </StyledHeaderRight>
      </StyledHeader>
      <StyledSubHeader>
        <Header.Left>
          {/* <Button variant='soft' color='gray'>
            Bộ lọc <FaCaretDown />
          </Button> */}
        </Header.Left>
        <div></div>
        <StyledHeaderRight>
          <ViewMode mode={viewMode} onChangeMode={setViewMode} />
        </StyledHeaderRight>
      </StyledSubHeader>
    </>
  )
}
