import { ResumeDetailData } from '@api/resume'
import { useNavigate } from 'react-router-dom'
import {
  BackButton,
  BagdeWrapper,
  ContactItem,
  EmptyMsg,
  FullName,
  InfoContainer,
  JobTitle,
  LinkWrapper,
  SectionContainer,
  SectionHeading,
} from './ResumeDetail.styled'
import { MdKeyboardBackspace } from 'react-icons/md'
import { PropsWithChildren } from 'react'

export const ResumeInfo = ({
  full_name,
  job_title,
  email,
  phone_number,
  resume_skills,
  resume_languages,
  resume_awards,
  resume_certifications, //   resume_educations,
  resume_references, //   resume_project_experiences,
  //   resume_work_experiences,
}: ResumeDetailData) => {
  const navigate = useNavigate()

  const onBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <InfoContainer>
      <BackButton onClick={onBack}>
        <MdKeyboardBackspace size={16} /> Quay lại
      </BackButton>
      <FullName>{full_name}</FullName>
      <JobTitle>{job_title}</JobTitle>
      <SectionContainer>
        <SectionHeading>Thông tin liên hệ</SectionHeading>
        <ContactItem>Email: {email ?? '-'}</ContactItem>
        <ContactItem>SDT: {phone_number ?? '-'}</ContactItem>
      </SectionContainer>
      <SectionContainer>
        <SectionHeading>Kỹ năng</SectionHeading>
        <EmtpySection isEmtpy={!resume_skills.length}>
          <BagdeWrapper>
            {resume_skills.map(skill => (
              <span key={skill.resume_skill_id}>{skill.skill_name}</span>
            ))}
          </BagdeWrapper>
        </EmtpySection>
      </SectionContainer>
      <SectionContainer>
        <SectionHeading>Ngoại ngữ</SectionHeading>
        <EmtpySection isEmtpy={!resume_languages.length}>
          <BagdeWrapper>
            {resume_languages.map(language => (
              <span key={language.resume_language_id}>{language.language_name}</span>
            ))}
          </BagdeWrapper>
        </EmtpySection>
      </SectionContainer>
      <SectionContainer>
        <SectionHeading>Thành tựu</SectionHeading>
        <EmtpySection isEmtpy={!resume_awards.length}>
          <BagdeWrapper>
            {resume_awards.map(item => (
              <span key={item.resume_award_id}>{item.title}</span>
            ))}
          </BagdeWrapper>
        </EmtpySection>
      </SectionContainer>
      <SectionContainer>
        <SectionHeading>Chứng chỉ</SectionHeading>
        <EmtpySection isEmtpy={!resume_certifications.length}>
          <BagdeWrapper>
            {resume_certifications.map(item => (
              <span key={item.resume_certification_id}>{item.title}</span>
            ))}
          </BagdeWrapper>
        </EmtpySection>
      </SectionContainer>
      <SectionContainer>
        <SectionHeading>Liên kết</SectionHeading>
        <EmtpySection isEmtpy={!resume_references.length}>
          <LinkWrapper>
            {resume_references.map(item => (
              <a key={item.reference_id}>{item.reference_link}</a>
            ))}
          </LinkWrapper>
        </EmtpySection>
      </SectionContainer>
    </InfoContainer>
  )
}

type EmtpySectionProps = {
  isEmtpy: boolean
  emptyMsg?: string
}

export const EmtpySection = ({
  isEmtpy,
  emptyMsg = 'Trống',
  children,
}: PropsWithChildren<EmtpySectionProps>) => {
  return isEmtpy ? <EmptyMsg>{emptyMsg}</EmptyMsg> : children
}
