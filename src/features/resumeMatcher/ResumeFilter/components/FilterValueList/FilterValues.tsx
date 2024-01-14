import {
  CATEGORY_LABEL_MAP,
  useResumeFilterStore,
  useResumeFilterValues,
} from '@features/resumeMatcher'
import { FilterValue } from '../FilterValue'
import { useMemo } from 'react'
import { Header, StyledTitle } from './FilterValueList.styled'

type FilterValuesProps = {
  searchCategoryValue: string
}

export function FilterValues({ searchCategoryValue }: FilterValuesProps) {
  const currentFilterCategory = useResumeFilterStore(state => state.currentFilterCategory)
  const selectedValues = useResumeFilterValues('current')

  console.log(searchCategoryValue)

  const filterValueOptions = useMemo(() => {
    return itJobPositions.filter(
      value => !selectedValues.find(selectedValue => selectedValue.value === value)
    )
  }, [selectedValues])

  return (
    <div>
      <Header>
        <StyledTitle>{`Danh sách ${CATEGORY_LABEL_MAP[currentFilterCategory]}`}</StyledTitle>
      </Header>
      <div>
        {filterValueOptions.map(value => (
          <FilterValue value={value} key={value} />
        ))}
      </div>
    </div>
  )
}

const itJobPositions = [
  'Front-end Developer',
  'Back-end Developer',
  'Full Stack Developer',
  'UI/UX Designer',
  'DevOps Engineer',
  'Software Engineer',
  'QA Engineer',
  'Mobile App Developer',
  'Data Scientist',
  'Cloud Solutions Architect',
  'Network Administrator',
  'Security Analyst',
  'Database Administrator',
  'Systems Analyst',
  'IT Project Manager',
  'Blockchain Developer',
  'Machine Learning Engineer',
  'Web Security Specialist',
  'IT Support Specialist',
  'AI Programmer',
  'AI Programmer1',
  'AI Programmer2',
  'AI Programmer3',
  'AI Programmer4',
  'AI Programmer5',
  'AI Programmer6',
  'AI Programmer7',
  'AI Programmer8',
  'AI Programmer9',
  'AI Programmer10',
  'AI Programmer11',
  'AI Programmer12',
]
