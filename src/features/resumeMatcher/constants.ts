import { FILTER_CATEGORIES } from '@/constants'

export const CATEGORY_LABEL_MAP = {
  [FILTER_CATEGORIES.JOB_TITLE]: 'vị trí tuyển dụng',
  [FILTER_CATEGORIES.SKILL]: 'kỹ năng',
  [FILTER_CATEGORIES.EDUCATION]: 'học vấn',
  [FILTER_CATEGORIES.LANGUAGE]: 'ngoại ngữ',
  [FILTER_CATEGORIES.AWARD]: 'thành tựu',
  [FILTER_CATEGORIES.CERTIFICATION]: 'chứng chỉ',
}

export const CATEGORY_OPTIONS = [
  {
    label: 'Vị trí tuyển dụng',
    value: FILTER_CATEGORIES.JOB_TITLE,
  },
  {
    label: 'Kỹ năng',
    value: FILTER_CATEGORIES.SKILL,
  },
  {
    label: 'Học vấn',
    value: FILTER_CATEGORIES.EDUCATION,
  },
  {
    label: 'Ngoại ngữ',
    value: FILTER_CATEGORIES.LANGUAGE,
  },
  {
    label: 'Thành tựu',
    value: FILTER_CATEGORIES.AWARD,
  },
  {
    label: 'Chứng chỉ',
    value: FILTER_CATEGORIES.CERTIFICATION,
  },
]
